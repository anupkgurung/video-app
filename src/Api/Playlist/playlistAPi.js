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
        playlistDispatch({
            type: "CLEAR_PLAYLIST_TITLE",
        })
    } catch ({ error }) {
        showToast("error", "error creating playlist");
    }
}

const addVideoToPlaylist = async (showToast, video, playlistId, playlistDispatch) => {
    const encodedToken = localStorage.getItem("token");
    try {
        video.playlistIds.push(playlistId)
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

const removePlaylist = async (showToast,playlist,playlistDispatch) => {
    const encodedToken = localStorage.getItem("token");
    try{
        const playlistId = playlist.id
        const data = await axios.delete(`/api/user/playlists/${playlistId}`,
            {headers: { authorization: encodedToken }} )

        playlistDispatch({
            type : "DELETE_PLAYLIST",
            payload : playlist
        })
        showToast("success", "Playlist successfully removed");
    }catch(error){
        showToast("error", "error on removing playlist");
    }
}

const getAllPlaylist = () => {
    const encodedToken = localStorage.getItem("token");
    try {
        const data = axios.get("/api/user/playlist",
            {headers : {authorization : encodedToken}})
        
    } catch (error) {
        
    }
}

const removePlaylistVideo = async (showToast, video, playlistId, playlistDispatch) => {
    const encodedToken = localStorage.getItem("token");
    try {
        const data = await axios.delete(`/api/user/playlists/${playlistId}/${video.id}`,
            {headers : {authorization : encodedToken}})
        
            video.playlistIds = typeof video.playlistIds  === 'object' ? video.playlistIds.filter(id => id !== playlistId) : video.playlistIds
            video['removeFromPlaylistId']=playlistId
            playlistDispatch({
                type : "REMOVE_VIDEO_FROM_PLAYLIST",
                payload : video
            })
            playlistDispatch({
                type : "REMOVE_FROM_VIDEO_LIST",
                payload : video
            })
        showToast("success", "Video removed from playlist");
    } catch (error) {
        showToast("error", "error on removing videos from playlist");
    }
}
export { createNewPlaylist, addVideoToPlaylist, getVideosFromPlaylist, removePlaylist,removePlaylistVideo }