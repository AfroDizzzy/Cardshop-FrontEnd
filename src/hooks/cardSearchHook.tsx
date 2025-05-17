import { useQuery } from "@tanstack/react-query";

const fetchEDHRECData = async (term: string) => {
  if (!term || term.trim() === '') {
    return [];
  }

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
  const jsonResponse = await response.json(); 
  console.log(jsonResponse)
  return jsonResponse;
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