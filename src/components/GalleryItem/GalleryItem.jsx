function GalleryItem({image}){
    return(
        <>
        <li ><img src={image.path} style={{width: 200 + "px", height: 200 + "px"}}></img></li>
        </>


    )
}
export default GalleryItem;