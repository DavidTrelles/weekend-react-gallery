import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css'
function GalleryList({galleryListProp}){
    return(
    <>
    <p>All Images</p>
    <div>
        {galleryListProp.map(image =>
            (<GalleryItem key={image.id} image={image}/>)
            )}
    </div>
    </>
    )
}

export default GalleryList;