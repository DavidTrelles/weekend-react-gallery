import React from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
import {useEffect, useState} from 'react'
import './App.css';

function App() {

  const [galleryList, setGalleryList] = useState([]);

  const fetchGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then( (response) => {
      console.log('entire response:', response);
      console.log('just the data:', response.data);
      setGalleryList(response.data)
    })
    .catch(function (error) {
      console.log('error on get:', error);
    });
  }
  useEffect( () => {
    fetchGallery();
  }, [])

  const addlikeFunc = (id) => {
    console.log(id)
    axios({
      method: "PUT",
      url: `/gallery/like/${id}`
    }).then(function () {
      fetchGallery();
    })
    .catch(function (error) {
      console.log("error with putting,", error);
    });


  }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList galleryListProp={galleryList} addLikesFunc= {addlikeFunc} />
      </div>
    );
}

export default App;
