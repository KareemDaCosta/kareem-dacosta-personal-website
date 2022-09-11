import "./ImageGallery.css"

import gallery1 from "../../images/gallery/gallery1.jpg"
import gallery2 from "../../images/gallery/gallery2.jpg"
import gallery3 from "../../images/gallery/gallery3.jpg"
import gallery4 from "../../images/gallery/gallery4.jpg"
import gallery5 from "../../images/gallery/gallery5.jpg"
import gallery6 from "../../images/gallery/gallery6.jpg"

import GalleryImageCard from "./GalleryImageCard/GalleryImageCard"

export default function ImageGallery() {

    const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]

    return (
        <div className="image-gallery">
            {gallery.map( (item, i) => {
                return (
                   <GalleryImageCard key={i} i={i} item={item} />
                )
            }
            )}
        </div>
    )
}