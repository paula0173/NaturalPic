
import { useContext } from "react";
import { PicturesContext } from "../context/PicturesContext";

const Favorites = () => {
  const { listPictures } = useContext(PicturesContext);

   return (
    <div>
      <h1 className="App">Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
       
        {(listPictures && listPictures.length > 0) ? listPictures.filter(item => item.liked ===true).map((item) => (
          <div className="photo" key={item.id} style={{ background: `url(${item.src.tiny}) no-repeat center` }}>
  
          </div> 
        )) : <p>No hay fotos que desplegar</p>}
      </div>
    </div>
  );
};
export default Favorites;
