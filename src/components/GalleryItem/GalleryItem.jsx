import './GalleryItem.css'

function GalleryItem({image}){
    return(
        <>
        <li ><img src={image.path}></img></li>
        </>


    )
}
export default GalleryItem;