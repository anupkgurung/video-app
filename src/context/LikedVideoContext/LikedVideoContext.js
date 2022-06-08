import { createContext, useState, useContext } from "react";

const LikedVideoContext = createContext()

const LikedVideoContextProvider = ({ children }) => {
    const [likedVideos, setLikedVideos] = useState([])

    return (
        <LikedVideoContext.Provider value={{ likedVideos, setLikedVideos }}>
            { children }
        </LikedVideoContext.Provider>
    )
}

const useLikedVideoContext = () => useContext(LikedVideoContext)

export {LikedVideoContextProvider,useLikedVideoContext}