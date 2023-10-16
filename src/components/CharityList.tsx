import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Causes from "../apis/causes-data.json";
import { ImLocation } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import defaultLogo from "../assets/defaultLogo.jpg";

export type Charity = {
  ein: string,
  name: string,
  logoUrl: string,
  profileUrl: string,
  location: string,
  coverImageUrl: string,
  tags: string[],
  description: string,
};

interface CharityResponse {
  nonprofits: Charity[];
};

type CharityProps = {
  initialPage: boolean;
  cause?: string;
};

const causesList:string[] = Causes.causes;

const CharityList = ({initialPage, cause}: CharityProps) => {
  const [charities, setCharities] = useState<Charity[]>();
  const navigate = useNavigate();

  const fetchInitialCharity = async () => {
      const randomCause = causesList[Math.floor((Math.random() * causesList.length - 1))];
      const response = await axios.get<CharityResponse> (`https://partners.every.org/v0.2/search/${randomCause}?apiKey=pk_live_731b1c4465b48be8bb82261aa296059e`);
      setCharities(response.data.nonprofits);
      console.log("randomCause",  randomCause);
      console.log(response.data.nonprofits);
    }

    const fetchSearchedCharity = async () => {
      const response = await axios.get<CharityResponse> (`https://partners.every.org/v0.2/search/${cause}?apiKey=pk_live_731b1c4465b48be8bb82261aa296059e`);
      setCharities(response.data.nonprofits);
      console.log("Searched Cause", cause);
      console.log(response.data.nonprofits);
    }
    
    useEffect(() => {
      if (initialPage) {
        fetchInitialCharity().catch((err) => console.error(err));
        console.log("Initial Page");
        return;
      }
      fetchSearchedCharity().catch((err) => console.error(err));
      console.log("Search Page");
    },[cause]);

  return (
    <div className='grid grid-cols-3 p-20 justify-items-center gap-10 bg-white'>
      {
        charities?.map(item => {
          const { name, location, logoUrl, ein } = item;
          return (
            <div
              key={ein}
              className='shadow-lg w-full flex flex-col p-5 rounded-lg text-lg font-bold cursor-pointer'
              onClick={() => {
                if (initialPage) {
                  navigate(`charity/${ein}`);
                  return;
                }
                navigate(`/charity/${ein}`);
              }}>
              <div className='flex flex-row items-center gap-5 pb-5 border-b-2 border-gray-300 mb-5'>
                <img src={logoUrl ?? defaultLogo} width={50} height={50}/>
                {name}
              </div>
              <div className='flex flex-row items-center gap-5 mb-5 font-medium'>
                <ImLocation />
                {location}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default CharityList;
