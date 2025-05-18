import { useState, useEffect, useRef, type MouseEventHandler } from 'react';
import type { ScryfallMTGCard } from '../../../types/ScryfallObject';
import type { EdhrecSearchResponseObject } from '../../../types/EdhrecSearchResponseObject';
import { useEDHRECData } from '../../../hooks/cardSearchHook';
import { useFetchIndividualCardDataFromScryfall } from '../../../hooks/cardDetailsHooks';

export function SearchInputArea() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');
  const [scryfallResults, setScryfallResults] = useState<ScryfallMTGCard[]>([]);
  const [isScryfallLoading, setIsScryfallLoading] = useState(false);
  const [isScryfallError, setIsScryfallError] = useState(false);
  const [ScryfallerrorMessage, setScryfallErrorMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [selectedItem, setSelectedItem] = useState<EdhrecSearchResponseObject>(null);

  //TanStackQuery hooks
  const { data: dataEDHRec, isLoading: isLoadingEDHRec, isError: isErrorEDHRec, isSuccess: isSuccessEDHRec, error:  errorEDHRec } = useEDHRECData(debouncedTerm);
  const { data: dataScryfall, isLoading: isLoadingScryfall,isError: isErrorScryfall, isSucess: isSuccessScryfall, error: errorScryfall } = useFetchIndividualCardDataFromScryfall(selectedItem);

  // Debounce search term to avoid excessive API calls
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Fetch data when debounced term changes
  // useEffect(() => {
  //   //useEDHRECData(debouncedTerm)
  //   // fetchEDHRECData().then(() => {
  //   //   fetchScryfallData()
  //   // 
  //   }, [debouncedTerm]);

  const fetchScryfallData = async () => {
    if (!debouncedTerm || debouncedTerm.trim() === '') {
      setScryfallResults([]);
      return;
    }

    setIsScryfallLoading(true);
    setIsScryfallError(false);

    try {
      const response = await fetch(`https://api.scryfall.com/cards/${encodeURIComponent(selectedItem.image.substring(0,36))}`, {
        headers: {
          'Origin': '',
          'Referer': '',
          'Content-Type': 'application/json',
        }
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

  const handleClick = (event: React.MouseEvent<HTMLLIElement>, item: EdhrecSearchResponseObject) => {
    event.stopPropagation(); // Stop event from bubbling up
    console.log('Event:', event);
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
      <div className="mt-4 z-50">
        {isFocused && (
          <div className="absolute w-full bg-white z-10 shadow-lg" ref={resultsRef}>
            <>
              {isLoadingEDHRec && <p className="text-gray-500">Loading...</p>}

              {isErrorEDHRec && (
                <p className="text-red-500">Error: {isErrorEDHRec}</p>
              )}

              {dataEDHRec && dataEDHRec.length > 0 ? (
                <ul className="border rounded divide-y bg-gray-300 z-50">
                  {dataEDHRec.map((item: EdhrecSearchResponseObject, index: number) => {
                    if(!item.url.includes('/cards/')){
                      return;
                    }

                    return (
                    <li
                      key={index}
                      className="p-2 hover:bg-gray-100 cursor-pointer flex flex-col items-center"
                      onClick={(event) => handleClick(event, item)}
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
              ) : debouncedTerm && !dataEDHRec  ? (
                <p className="text-gray-500">No results found</p>
              ) : null}
            </>
          </div>
        )}
      </div>
    </div>
  );
}