import './GalleryItem.css'
import React, {useState} from 'react';
function GalleryItem({image, addLikesFunc}){

    const [showImage, setShowImage] = useState(true);
const toggleImage = () => {
    console.log("clicked!")
    setShowImage(!showImage)
}

const likeFunc= () => {
    // setImageLikes(image.id)
    addLikesFunc(image.id)
    console.log("I like it!")
}
    return(
        <>
        <div className='item'>
            {showImage ?
           <div > <img className='tile' onClick={toggleImage} src={image.path}></img></div>:
           <div > <p className='tile' onClick={toggleImage}>  {image.description}</p></div>}
            <p>Likes: {image.likes}</p>
            <button onClick={likeFunc}>Like</button>
        
        </div>
        </>


    )
}
export default GalleryItem;