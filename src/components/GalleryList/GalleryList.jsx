function GalleryList({galleryListProp}){
    return(
    <>
    <p>All Images</p>
    <ul>
        {galleryListProp.map(image =>
            (<li key={image.id}><img src={image.path} style={{width: 200 + "px", height: 200 + "px"}}></img></li>)
            )}
    </ul>
    </>
    )
}

export default GalleryList;