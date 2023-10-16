import { useState } from "react";
import { Charity } from "./CharityList";
import { useNavigate } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import defaultLogo from "../assets/defaultLogo.jpg";

type FavoriteCharitiesProps = {
  savedCharities: Charity[];
};

const FavoriteCharities = ({savedCharities}: FavoriteCharitiesProps) => {
  const navigate = useNavigate();
  return (
    <div className='grid grid-cols-3 p-20 justify-items-center gap-10 bg-white'>
      {
        savedCharities.map(item => {
          const { name, location, logoUrl, ein } = item;
          return (
            <div
              key={ein}
              className='shadow-lg w-full flex flex-col p-5 rounded-lg text-lg font-bold cursor-pointer'
              onClick={() => {
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

export default FavoriteCharities;