import { createContext, useContext } from "react";
import { useReducer } from "react";
import { playlistReducer } from "../../reducer";

const PlaylistContext = createContext();

const initialPlalistState = {
    playlistTitle: "",
    playlist: [],
    isPlaylistModalVisible: false,
    playlistVideo: [],
    videoList: []
}

const PlaylistProvider = ({ children }) => {

    const [initialState, playlistDispatch] = useReducer(playlistReducer, initialPlalistState);
    return (
        <PlaylistContext.Provider value={{ initialState, playlistDispatch }}>
            {children}
        </PlaylistContext.Provider>
    )
}

const usePlaylistContext = () => useContext(PlaylistContext);

export { usePlaylistContext, PlaylistProvider };