import { useParams } from "react-router-dom";
import CharityList from "../components/CharityList";


const SearchResultPage = () => {
  const { cause } = useParams();
  return (
    <div className="p-5 h-screen flex flex-col">
      <span className="text-5xl mb-1">Search Results For: "{cause}"</span>
      <CharityList initialPage={false} cause={cause}/>
    </div>
  )
}

export default SearchResultPage;