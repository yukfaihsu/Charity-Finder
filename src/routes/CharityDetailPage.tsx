import CharityDetail from '../components/CharityDetail';
import { Route, Routes } from 'react-router-dom';

const CharityDetailPage = () => {

  return (
    <Routes>
      {/* <Route index element={<CategoriesPreview />} /> */}
      <Route path=":ein" element={<CharityDetail />} />
    </Routes>
  )
}

export default CharityDetailPage;