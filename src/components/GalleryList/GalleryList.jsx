import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css'
function GalleryList({galleryListProp, addLikesFunc}){
    return(
    <>
    <div>
        {galleryListProp.map(image =>
            (<GalleryItem key={image.id} image={image} addLikesFunc={addLikesFunc}/>)
            )}
    </div>
    </>
    )
}

export default GalleryList;