import { useState, useEffect } from 'react';

export function NavBarSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Debounce search term to avoid excessive API calls
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [searchTerm]);
  
  // Fetch data when debounced term changes
  useEffect(() => {
    const fetchData = async () => {
      if (!debouncedTerm || debouncedTerm.trim() === '') {
        setResults([]);
        return;
      }
      
      setIsLoading(true);
      setIsError(false);
      
      try {
        const response = await fetch(`https://edhrec.com/api/typeahead?q=${encodeURIComponent(debouncedTerm)}`, {
          headers: {
            'Origin': null,
            'Referer': null,
            'Content-Type':'application/json',

          }
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        setResults(data);
      } catch (error) {
        setIsError(true);
        setErrorMessage(error.message);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [debouncedTerm]);
  
  return (
    <div className="p-4 max-w-md mx-auto">      
      <div className="mb-4">
        <input 
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for Magic cards..."
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      
      <div className="mt-4">
        {isLoading && <p className="text-gray-500">Loading...</p>}
        
        {isError && (
          <p className="text-red-500">Error: {errorMessage}</p>
        )}
        
        {results && results.length > 0 ? (
          <ul className="border rounded divide-y">
            {results.map((item, index) => (
              <li key={index} className="p-2 hover:bg-gray-100">
                <img src={"https://cards.scryfall.io/art_crop/front/4/3/" + item.image}></img>
                {typeof item === 'string' ? item : item.label}
              </li>
            ))}
          </ul>
        ) : debouncedTerm && !isLoading ? (
          <p className="text-gray-500">No results found</p>
        ) : null}
      </div>
    </div>
  );
}