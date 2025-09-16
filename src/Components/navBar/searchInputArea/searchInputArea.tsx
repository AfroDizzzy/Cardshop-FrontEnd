import { useState, useEffect, useRef } from "react";
import type { EdhrecSearchResponseObject } from "../../../types/EdhrecSearchResponseObject";
import { useEDHRECData } from "../../../hooks/cardSearchHook";
import { useFetchIndividualCardDataFromScryfall } from "../../../hooks/cardDetailsHooks";
import { Search } from "lucide-react";

import "./searchInputAreaStyles.css";

export function SearchInputArea() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [selectedItem, setSelectedItem] = useState<EdhrecSearchResponseObject>(
    {} as EdhrecSearchResponseObject
  );

  const {
    data: dataEDHRec,
    isLoading: isLoadingEDHRec,
    isError: isErrorEDHRec,
  } = useEDHRECData(debouncedTerm);

  // If selected item changes, then this custom hook will fire
  useFetchIndividualCardDataFromScryfall(selectedItem);

  // Debounce search term to avoid excessive API calls
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLLIElement>,
    item: EdhrecSearchResponseObject
  ) => {
    event.stopPropagation();
    setSelectedItem(item);
    setSearchTerm(item.label);
    setIsFocused(false);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLLIElement>,
    item: EdhrecSearchResponseObject
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setSelectedItem(item);
      setSearchTerm(item.label);
      setIsFocused(false);
    }
  };

  console.log(dataEDHRec);

  return (
    <div className="search-container" ref={containerRef}>
      <div className="search-input-wrapper">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 150)}
          placeholder="Search for Magic cards..."
          className="search-input"
        />
        <div className="search-icon-container">
          <Search className="search-icon" />
        </div>
      </div>

      {isFocused && searchTerm && (
        <div className="results-dropdown">
          {isLoadingEDHRec && <p className="loading-message">Loading...</p>}

          {isErrorEDHRec && (
            <p className="error-message">Error loading results</p>
          )}

          {dataEDHRec && Array.isArray(dataEDHRec) && (
            <>
              {dataEDHRec
                .filter((item: EdhrecSearchResponseObject) =>
                  item.url?.includes("/cards/")
                )
                .map((item: EdhrecSearchResponseObject, index: number) => (
                  <div
                    key={item.url || index}
                    className="result-item"
                    onClick={(event) => handleClick(event, item)}
                    onKeyDown={(event) => handleKeyDown(event, item)}
                    tabIndex={0}
                    role="option"
                  >
                    <span className="result-text">{item.label}</span>
                  </div>
                ))}
            </>
          )}

          {dataEDHRec &&
            Array.isArray(dataEDHRec) &&
            dataEDHRec.length === 0 && (
              <p className="no-results-message">No results found</p>
            )}
        </div>
      )}
    </div>
  );
}
