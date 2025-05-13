import { useState, useEffect, useRef } from 'react';
import type { ScryfallMTGCard } from '../../../types/ScryfallObject';
import type { EdhrecSearchResponseObject } from '../../../types/EdhrecSearchResponseObject';

export function SearchInputArea() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');
  const [edhrecResults, setEdhrecResults] = useState<EdhrecSearchResponseObject[]>([]);
  const [scryfallResults, setScryfallResults] = useState<ScryfallMTGCard[]>([]);
  const [isEDHRECLoading, setIsEDHRECLoading] = useState(false);
  const [isEDHRECError, setIsEDHRECError] = useState(false);
  const [isScryfallLoading, setIsScryfallLoading] = useState(false);
  const [isScryfallError, setIsScryfallError] = useState(false);
  const [EDHRECerrorMessage, setEDHRECErrorMessage] = useState('');
  const [ScryfallerrorMessage, setScryfallErrorMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [selectedItem, setSelectedItem] = useState<EdhrecSearchResponseObject>(null);

  // Debounce search term to avoid excessive API calls
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Fetch data when debounced term changes
  useEffect(() => {
    fetchEDHRECData().then(() => {
      fetchScryfallData()
    }
    )
  }, [debouncedTerm]);

  const fetchEDHRECData = async () => {
    if (!debouncedTerm || debouncedTerm.trim() === '') {
      setEdhrecResults([]);
      return;
    }

    setIsEDHRECLoading(true);
    setIsEDHRECError(false);

    try {
      const response = await fetch(`https://edhrec.com/api/typeahead?q=${encodeURIComponent(debouncedTerm)}`, {
        headers: {
          'Origin': null,
          'Referer': null,
          'Content-Type': 'application/json',

        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setEdhrecResults(data);
    } catch (error) {
      setIsEDHRECError(true);
      setEDHRECErrorMessage(error.message);
      setEdhrecResults([]);
    } finally {
      setIsEDHRECLoading(false);
    }
  };

  const fetchScryfallData = async () => {
    if (!debouncedTerm || debouncedTerm.trim() === '') {
      setScryfallResults([]);
      return;
    }

    setIsScryfallLoading(true);
    setIsScryfallError(false);

    try {
      const response = await fetch(`https://api.scryfall.com/cards/${encodeURIComponent(selectedItem.image.substring(0,36))}`, {
        // headers: {
        //   'Origin': null,
        //   'Referer': null,
        //   'Content-Type': 'application/json',

        // }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setScryfallResults(data);
    } catch (error) {
      setIsScryfallError(true);
      setScryfallErrorMessage(error.message);
      setScryfallResults([]);
    } finally {
      setIsScryfallLoading(false);
    }
  };

  const resultsRef = useRef(null);
  const handleClick = (e, item) => {
    e.stopPropagation(); // Stop event from bubbling up
    console.log('Event:', e);
    console.log('Clicked item:', item);
    setSelectedItem(item);
    setSearchTerm(item.label);
    setIsFocused(false); // Close dropdown after selection
    console.log('Selected item:', selectedItem);
    console.log('Scryfall card:', scryfallResults);
    console.log(item.image.substring(0,31))

  };

  return (
    <div className="max-w-md mx-auto content-center">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          // Prevent onBlur from firing when clicking on the results list
          // Only hide results when clicking outside both input and results
          if (!e.relatedTarget || !e.currentTarget.parentNode.contains(e.relatedTarget)) {
            setTimeout(() => setIsFocused(false), 150);
          }
        }}
        placeholder="Search for Magic cards..."
        className="w-full border border-gray-300 rounded h-full"
      />
      {/* {selectedItem && (
        <div className="mt-2 p-2 bg-blue-50 rounded">
          <p className="font-medium">Selected: {selectedItem.label}</p>
        </div>
      )} */}
      <div className="mt-4 z-50">
        {isFocused && (
          <div className="absolute w-full bg-white z-10 shadow-lg" ref={resultsRef}>
            <>
              {isEDHRECLoading && <p className="text-gray-500">Loading...</p>}

              {isEDHRECError && (
                <p className="text-red-500">Error: {EDHRECerrorMessage}</p>
              )}

              {edhrecResults && edhrecResults.length > 0 ? (
                <ul className="border rounded divide-y bg-gray-300 z-50">
                  {edhrecResults.map((item: EdhrecSearchResponseObject, index) => {
                    if(!item.url.includes('/cards/')){
                      return;
                    }

                    return (
                    <li
                      key={index}
                      className="p-2 hover:bg-gray-100 cursor-pointer flex flex-col items-center"
                      onClick={(e) => handleClick(e, item)}
                      tabIndex={0}
                    >
                      <img
                        src={`https://cards.scryfall.io/art_crop/front/4/3/${item.image}`}
                        alt={item.label}
                        className="w-full h-auto"
                      />
                      {item.label}
                    </li>
                  )})}
                </ul>
              ) : debouncedTerm && !isEDHRECLoading ? (
                <p className="text-gray-500">No results found</p>
              ) : null}
            </>
          </div>
        )}
      </div>
    </div>
  );
}