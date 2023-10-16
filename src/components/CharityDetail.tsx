import axios from 'axios';
import { useEffect, useState } from 'react';
import { ImLocation } from "react-icons/im";
import { useNavigate, useParams } from 'react-router-dom';
import { Charity } from './CharityList';

export interface DetailedCharityResponse {
  nonprofits: Charity[];
}

const CharityDetail = () => {
  const [charityInfo, setCharityInfo] = useState<Charity>(
    {
      ein: "",
      name: "",
      logoUrl: "",
      profileUrl: "",
      location: "",
      coverImageUrl: "",
      tags: [""],
      description: "",
    }
  );
  const [savedCharities, setSavedCharities] = useState<Charity[]>([]);
  const [charitySaved, setCharitySaved] = useState(false);
  const { ein } = useParams();
  const navigate = useNavigate();

  const fetchCharity = async () => {
      const response = await axios.get<DetailedCharityResponse> (`https://partners.every.org/v0.2/search/${ein}?apiKey=pk_live_731b1c4465b48be8bb82261aa296059e`);
      setCharityInfo(response.data.nonprofits[0]);
    };
    
    useEffect(() => {
      fetchCharity().catch((err) => console.error(err));
    },[]);

    useEffect(() => {
      // @ts-ignore
      const items = JSON.parse(localStorage.getItem('charities'));
      if (items) {
        setSavedCharities(items);
        // @ts-ignore
        const temp = items.find(item => item.ein.includes(ein));
        if (temp) setCharitySaved(true);
      }
    }, []);
    
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      gap: 40,
      justifyContent: "center",
      paddingTop: 30,
      paddingBottom: 30,
      minHeight: "90vh",
    }}>
      <div className='h-fit'
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          width: "58vw",
          boxShadow: "10px 10px 5px lightblue",
          backgroundColor: "#F5F5F5",
          padding: 20,
      }}>
        <img src={charityInfo?.coverImageUrl} />
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginLeft: 20,
        }}>
          <img src={charityInfo?.logoUrl}/>
          <span className='text-2xl text-bold'>{charityInfo?.name}</span>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginLeft: 20,
        }}>
          <ImLocation />
          <span style={{
            fontSize: 18,
            fontWeight: 500,
          }}>{charityInfo?.location}</span>
        </div>
        <span style={{
          fontSize: 18,
          fontWeight: 500,
          marginLeft: 20,
          marginRight: 20,
        }}>{charityInfo?.description}</span>
      </div>
      <div className="p-6 h-fit bg-white flex-col flex-wrap max-w-md" style={{boxShadow: "10px 10px 5px lightblue", backgroundColor: "#F5F5F5"}}>
        {
          charitySaved ?
          <button
            className='w-full bg-silver text-white text-xl p-5 mb-5 shadow-2xl focus:outline-none'
            onClick={() => {
              const tempArray = savedCharities.filter((item) => item.ein !== ein);
              console.log("ein", ein);
              console.log("tempArray", tempArray);
              localStorage.setItem('charities', JSON.stringify(tempArray));
              setSavedCharities(tempArray);
              setCharitySaved(false);
            }}>
              Remove from Favorite
          </button>
          :
          <button
            className='w-full bg-red text-white text-xl p-5 mb-5 shadow-2xl focus:outline-none'
            onClick={() => {
              const tempArray = savedCharities;
              tempArray.push(charityInfo);
              localStorage.setItem('charities', JSON.stringify(tempArray));
              setSavedCharities(tempArray);
              setCharitySaved(true);
            }}>
              Add to Favorite
          </button>
        }
        <a
          href={charityInfo?.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className='w-full bg-green text-white text-xl p-5 mb-5 shadow-2xl'>Check it in Every.org</button>
        </a>
        <span className='text-lg text-semibold mb-3 flex'>Tag:</span>
        <div className='flex gap-5 flex-wrap'>
          {
            charityInfo?.tags.map(item => {
              return (
                <span
                  className='bg-tagColor p-2 rounded-full font-bold text-white cursor-pointer'
                  onClick={() => {
                    navigate(`/search/${item}`);
                  }}>
                  {item}
                </span>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}


export default CharityDetail;