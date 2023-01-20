import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css'
function GalleryList({galleryListProp}){
    return(
    <>
    <p>All Images</p>
    <ul>
        {galleryListProp.map(image =>
            (<GalleryItem key={image.id} image={image}/>)
            )}
    </ul>
    </>
    )
}

export default GalleryList;