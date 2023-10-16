import { useEffect } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

export type ApiResponse = {
  ein: string;
  name: string;
  location: string;
  description: string;
  logoUrl: string;
  coverImageUrl: string;
};

const getCharity = async (cause: string): Promise<ApiResponse> => {
  const url = `https://partners.every.org/v0.2/search/${cause}?apiKey=pk_live_731b1c4465b48be8bb82261aa296059e`;

  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`API returned status code ${res.status}`);
      }

      return res.json();
    })
    .catch((err) => {
      console.warn(err);

      return {
        id: "string",
        name: "string",
        location: "string",
        description: "string",
      };
    });
};

export default getCharity;

// interface CharityResponse {
//   nonprofits: Charity[];
// }

// const fetchInitialCharity = async () => {
//   const response = await axios.get<CharityResponse> (``);
//   setCharities(response.data.nonprofits);
// }

// useEffect(() => {
//   fetchInitialCharity().catch((err) => console.error(err));
// },[])