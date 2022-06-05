export const playlistReducer = (playlistState, { type, payload }) => {
    switch (type) {
        case "SET_PLAYLIST_TITLE":
            return { ...playlistState, playlistTitle: payload }

        case "UPDATE_PLAYLIST":
            return {
                ...playlistState,
                playlist: payload
            }
        case "SET_PLAYLIST_MODAL_VISIBLE":
            return { ...playlistState, isPlaylistModalVisible: !payload }

        case "SET_PLAYLIST_VIDEO":
            return {
                ...playlistState,
                playlistVideo: payload

            }
        case "ADD_VIDEO_TO_PLAYLIST":
            return {
                ...playlistState, playlist: playlistState.playlist
                    .map(playlist => playlist._id === payload._id ?
                        payload : playlist)
            }
        case "VIDEO_LIST":
            return {
                ...playlistState, videoList: payload
            }
        case "CLEAR_VIDEO_LIST":
            return { ...playlistState, videoList: [] }
        case "CLEAR_PLAYLIST_TITLE":
            return { ...playlistState, playlistTitle: '' }
        
        case "DELETE_PLAYLIST":
            return {...playlistState,playlist : playlistState.playlist
                .filter(playlist => playlist.id === payload.id)}
        
        default :
            return "no action type defined"
    }
}