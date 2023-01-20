import './GalleryItem.css'
import React, {useState} from 'react';
function GalleryItem({image}){
const [showImage, setShowImage] = useState(true);

const toggleImage = () => {
    console.log("clicked!")
    setShowImage(!showImage)
}
const likeFunc= () => {
    console.log("I like it!")
}
    return(
        <>
        <div>
            {showImage ?
            <img onClick={toggleImage} src={image.path}></img>:
            <p onClick={toggleImage}>{image.description}</p>}
            <p>Likes: {image.likes}</p>
            <button onClick={likeFunc}>Like</button>
        
        </div>
        </>


    )
}
export default GalleryItem;