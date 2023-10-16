import { useEffect, useState } from 'react';
import FavoriteCharities from '../components/FavoriteCharities';
import { Charity } from '../components/CharityList';

const FavoritesPage = () => {
  const [savedCharities, setSavedCharities] = useState<Charity[]>([]);
  useEffect(() => {
    // @ts-ignore
    const items = JSON.parse(localStorage.getItem('charities'));
    if (items) {
      setSavedCharities(items);
      console.log(items);
    }
  }, []);
  return (
    <div className="p-5 h-screen flex flex-col">
      <span className="text-5xl">Favorite Charities</span>
      <FavoriteCharities savedCharities={savedCharities}/>
    </div>
  )
}

export default FavoritesPage;