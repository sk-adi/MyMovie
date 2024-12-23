import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Card from './component/Card';
import Carousel from './component/Carousel';
import Pagination from './component/Pagination';
import Trending from './component/Trending';

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Trending/>
      <Pagination/>

    </>
  );
}

export default App;
