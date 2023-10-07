
import { useContext } from "react";
import { PicturesContext } from "../context/PicturesContext";
import IconHeart from "./IconHeart";

const Gallery = () => {

  const { listPictures, setlistPictures } = useContext(PicturesContext);
  
  const changeLiked = (id) => {

    const indexPicture = listPictures.findIndex(item => item.id === id)
    listPictures[indexPicture].liked = !listPictures[indexPicture].liked

    setlistPictures(listPictures.slice())
  }

return (
  <div className="gallery grid-columns-5 p-3">
    {(listPictures && listPictures.length > 0) ? listPictures.map((item) => (
      <div className="photo" key={item.id} style={{ background: `url(${item.src.tiny}) no-repeat center` }} onClick={() => changeLiked(item.id)}>
        <IconHeart filled={item.liked} /> 
      </div>
    )) : <p>No hay fotos que desplegar</p>}

  </div >
)
};

export default Gallery;
