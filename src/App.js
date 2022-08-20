import './App.css';
import { useState, useEffect } from 'react';
import { LoadImages, SearchImages } from './Components/api'
import Images from './Components/image';
import Header from './Components/header';
export function App() {
  const [searchquery, setsearchquery] = useState("");
  const [search, setSearch] = useState("");
  const [pagecount, setpagecount] = useState(1);
  const [loader,setloder] = useState(false);

  const handleSearch = () => {
    setSearch(searchquery);
  }

  const handlepagecount = () => {
    setpagecount(prev => {
      return prev + 1;
    })
  }

  const handleInputchnage = (value) => {
    setsearchquery(value);
    setSearch('');
  }

  window.onscroll = function () {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      handlepagecount();
    }
  }

  const data = LoadImages(pagecount);
  const SearchData = SearchImages(search, pagecount);

  console.log("SearchData", search);
  return (
    <div>
      <div>
        <Header handleInputchnage={handleInputchnage} handleSearch={handleSearch} />
      </div>
      <div className='imageContainer'>
        {search ?
          SearchData.map((images, index) => {
            return (
              <Images key={`${images?.id} ${index}`} src={images?.urls?.thumb} />
            )
          })
          :
          data && data.map(images => {
            return (
              <Images key={images?.id} src={images?.urls?.thumb} />
            )
          })}
      </div>
    </div>
  );
}

export default App;
