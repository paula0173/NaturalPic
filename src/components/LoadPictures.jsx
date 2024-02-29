import axios from "axios";
import { useEffect, useContext } from "react";
import { PicturesContext } from "../context/PicturesContext";

const LoadPictures = () => {

    const namePicture = "kitty"
    const url = `https://api.pexels.com/v1/search?query=${namePicture}`
    const access_token = 'Tto58kakY36TZ3xizHSTEtykE2QL404l8JtzrpNo8uGGNPYWge9xqZVv';

    const { setlistPictures } = useContext(PicturesContext);

    const searchPictures = () => {
      axios
        .get(url, {
          headers: { 'Authorization': `${access_token}` }
        })
        .then((response) => {
          response.data.photos ? setlistPictures(response.data.photos) : setlistPictures(null)
        })
        .catch((err) => {
          console.log("Error al obtener datos de la API:", err);
        });
    };
  
    useEffect(() => {
      searchPictures();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [namePicture]);
  
    return (
        <>
        </>
    );
};
export default LoadPictures;