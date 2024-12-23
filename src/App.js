import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Card from './component/Card';
import Carousel from './component/Carousel';
import Pagination from './component/Pagination';
import Trending from './component/Trending';
import Popular from './component/Popular';
import People from './component/People';

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Trending/>
      <Popular/>
      <People/>
      <Pagination/>

    </>
  );
}

export default App;
