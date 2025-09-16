import { useQuery } from "@tanstack/react-query";
import type { EdhrecSearchResponseObject } from "../types/EdhrecSearchResponseObject";

const fetchEDHRECData = async (term: string) => {
  if (!term || term.trim() === "") {
    return [];
  }

  const response = await fetch(
    `https://edhrec.com/api/typeahead?q=${encodeURIComponent(term)}`,
    {
      headers: {
        Origin: "",
        Referer: "",
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const jsonResponse = await response.json();

  const filteredResponse: [] = jsonResponse
    .map((element) => {
      console.log(element);
      if (!element.url.includes("/cards/")) {
        return;
      }
      return element;
    })
    .filter((notUndefined) => notUndefined !== undefined);
  return filteredResponse;
};

export const useEDHRECData = (searchTerm: string) => {
  return useQuery({
    queryKey: ["edhrec", searchTerm],
    queryFn: () => fetchEDHRECData(searchTerm),
    enabled: !!searchTerm && searchTerm.trim() !== "",
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
};
