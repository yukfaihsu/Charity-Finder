import { ChangeEventHandler, useState } from 'react';
import { BsSearch } from "react-icons/bs";
import Causes from "../apis/causes-data.json";
import { useNavigate } from 'react-router-dom';


type SearchProps = {
  searchText: string;
  onChangeText: ChangeEventHandler<HTMLInputElement>;
}

const causesList:string[] = Causes.causes;

const Search = ({searchText, onChangeText}: SearchProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  
  return (
    <div className='flex flex-col w-1/3 rounded' style={{ backgroundColor: "white"}}>
      <div className="bg-white p-1 rounded shadow-lg flex flex-row items-center justify-between">
        <input
          className="p-1 rounded z-0 focus:outline-none w-full"
          value={searchText}
          onChange={onChangeText}
          onMouseDown={() => setShowMenu(true)}
          placeholder='Find a charity'
        />
        <span
          className="bg-white focus:outline-none mr-2">
          <BsSearch/>
        </span>
      </div>
      {
        showMenu && 
        <div className='w-90 h-fit flex flex-col gap-5 border rounded-lg p-5 float-right absolute top-14' style={{backgroundColor: "white"}} onMouseLeave={() => setShowMenu(false)}>
          {causesList
          .filter(item => item.toLocaleLowerCase().includes(searchText))
          .map((item, index) => {
            if (index > 7) return;
            return (
              <span
                className='cursor-pointer'
                onClick={() => {
                  navigate(`search/${item}`);
                  setShowMenu(false);
                }}>
                  {item}
              </span>
            )
          })}
        </div>
      }
    </div>
  )
}

export default Search;


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