import { useQuery } from "@tanstack/react-query";
import type { EdhrecSearchResponseObject } from "../types/EdhrecSearchResponseObject";
import type { ScryfallMTGCard } from "../types/ScryfallObject";
import useScryfallMTGCardStore from "../store/scryfallSeletedCardStore";

export const fetchIndividualCardDataFromScryfall = async (cardUUID: EdhrecSearchResponseObject) => {
  if (!cardUUID.id || cardUUID.id.trim() === '') {
    return {} as ScryfallMTGCard;
  }
  console.warn(cardUUID);
  console.warn(cardUUID.image.substring(0,36));
  const response = await fetch(`https://api.scryfall.com/cards/${encodeURIComponent(cardUUID.image.substring(0,36))}`, {
    headers: {
      'Origin': '',
      'Referer': '',  
      'Content-Type': 'application/json',
    }   
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const jsonResponse: ScryfallMTGCard = await response.json(); 
  console.warn(jsonResponse)
  return jsonResponse;
};

export const useFetchIndividualCardDataFromScryfall  = (cardUUID: EdhrecSearchResponseObject) => {
  const setScryfallMTGCard = useScryfallMTGCardStore(
    (state) => state.setData
  ); 

  return useQuery({
    queryKey: ['IndividualCardDataFromScryfall', cardUUID],
    queryFn: async () => {
      const response = await fetchIndividualCardDataFromScryfall(cardUUID);
      setScryfallMTGCard(response); 
      return response;
    },
    enabled: cardUUID != null,
    staleTime: 0,
    refetchOnWindowFocus: false
  });
};