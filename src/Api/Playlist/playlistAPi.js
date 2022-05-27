import axios from "axios";

const createNewPlaylist = async (showToast, playlistDispatch, playlistTitle) => {
    const encodedToken = localStorage.getItem("token");
    const playlist = { title: playlistTitle }
    try {
        const data = await axios.post("/api/user/playlists", { playlist },
            { headers: { authorization: encodedToken } })
        playlistDispatch({
            type: "UPDATE_PLAYLIST",
            payload: data.data.playlists
        });
    } catch ({ error }) {
        showToast("error", "error creating playlist");
    }
}

const addVideoToPlaylist = async (showToast, video, playlistId, playlistDispatch) => {
    const encodedToken = localStorage.getItem("token");
    try {
        const data = await axios.post(`/api/user/playlists/${playlistId}`,
            { video },
            { headers: { authorization: encodedToken } }
        )
        playlistDispatch({
            type: "ADD_VIDEO_TO_PLAYLIST",
            payload: data.data.playlist
        });
    } catch (error) {
        showToast("error", "error on adding video to playlist");
    }
}

const getVideosFromPlaylist = async (showToast, playlistId, playlistDispatch) => {
    const encodedToken = localStorage.getItem("token");
    try {
        const data = await axios.get(`/api/user/playlists/${playlistId}`,
            { headers: { authorization: encodedToken } }
        )
        playlistDispatch({
            type: "VIDEO_LIST",
            payload: data.data.playlist.videos
        });
    } catch (error) {
        showToast("error", "error on getting videos from playlist");
    }
}
export { createNewPlaylist, addVideoToPlaylist, getVideosFromPlaylist }