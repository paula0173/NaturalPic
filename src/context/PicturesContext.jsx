import { createContext, useState } from "react";

export const PicturesContext = createContext();

const PicturesProvider = ({ children }) => {
    const [listPictures, setlistPictures] = useState([]);

    return (
        <PicturesContext.Provider value={{ listPictures, setlistPictures }}>
            {children}
        </PicturesContext.Provider>
    );
};
export default PicturesProvider;