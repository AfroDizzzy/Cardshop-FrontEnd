import { useState, useEffect, useRef } from 'react';
import type { EdhrecSearchResponseObject } from '../../../types/EdhrecSearchResponseObject';
import { useEDHRECData } from '../../../hooks/cardSearchHook';
import { useFetchIndividualCardDataFromScryfall } from '../../../hooks/cardDetailsHooks';

export function SearchInputArea() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [selectedItem, setSelectedItem] = useState<EdhrecSearchResponseObject>({} as EdhrecSearchResponseObject);

  const { data: dataEDHRec, isLoading: isLoadingEDHRec, isError: isErrorEDHRec, isSuccess: isSuccessEDHRec, error:  errorEDHRec } = useEDHRECData(debouncedTerm);
  
  //if selected item changes, then this custom hook will fire
  useFetchIndividualCardDataFromScryfall(selectedItem);

  // Debounce search term to avoid excessive API calls
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const resultsRef = useRef(null);

  const handleClick = (event: React.MouseEvent<HTMLLIElement>, item: EdhrecSearchResponseObject) => {
    event.stopPropagation(); // Stop event from bubbling up
    setSelectedItem(item);
    setSearchTerm(item.label);
    setIsFocused(false); // Close dropdown after selection
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
        className="border border-gray-300 rounded h-full"
      />
      <div className="mt-4 z-50">
        {isFocused && (
          <div className="absolute w-[20vw] bg-white z-10 shadow-lg" ref={resultsRef}>
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
              ) : (debouncedTerm && isErrorEDHRec) || (Array.isArray(dataEDHRec) && dataEDHRec.length === 0) ? (
                <p className="text-gray-500">No results found</p>
              ) : null}
            </>
          </div>
        )}
      </div>
    </div>
  );
}