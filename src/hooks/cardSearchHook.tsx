import { useQuery } from "@tanstack/react-query";

const fetchEDHRECData = async (term: string) => {
  if (!term || term.trim() === '') {
    return [];
  }

  const searchGetHeaders: Headers = new Headers();
  searchGetHeaders.append('Content-Type', 'application/json')
  searchGetHeaders.append('origin', '')
  searchGetHeaders.append('Referer', '')

  const response = await fetch(`https://edhrec.com/api/typeahead?q=${encodeURIComponent(term)}`, {
    headers: {
      'Origin': '',
      'Referer': '',  
      'Content-Type': 'application/json',
    }   
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};
export const useEDHRECData  = (searchTerm: string) => {
  return useQuery({
    queryKey: ['edhrec', searchTerm],
    queryFn: () => fetchEDHRECData(searchTerm),
    enabled: !!searchTerm && searchTerm.trim() !== '',
    staleTime: 0,
    refetchOnWindowFocus: false
  });
};