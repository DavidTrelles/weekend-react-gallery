function GalleryItem({image}){
    return(
        <>
        <li ><img src={image.path} style={{width: 100 + "px", height: 100 + "px"}}></img></li>
        </>


    )
}
export default GalleryItem;