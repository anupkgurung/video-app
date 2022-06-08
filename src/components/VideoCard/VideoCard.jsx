
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLikedVideoContext, usePlaylistContext, useWatchLaterContext } from "../../context";
import { addToWatchLater, addToLikedVideo, removeFromWatchLater, removeFromLikedVideo } from "../../Api";
import "./VideoCard.css";
import { useToast } from "../../customHooks";

export const VideoCard = ({ _id, title, videoIframe, thumbnail, creator, alt, playlistIds }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const {showToast} = useToast()
    const { initialState, playlistDispatch } = usePlaylistContext() || {};
    const { isPlaylistModalVisible, playlist } = initialState;
    const video = { _id, title, videoIframe, thumbnail, creator, alt, playlistIds };
    const playlistVideo = playlist.map(({ videos }) => videos.filter((vObj) => vObj._id === _id)).filter(obj => obj.length > 0)
    const inPlaylist = playlistVideo.length > 0;
    const {watchLater, setWatchLater} = useWatchLaterContext()||{};
    const {likedVideos, setLikedVideos} = useLikedVideoContext()||{};
    const hasWatchLater = watchLater.some((watchLaterVideoObj)=> watchLaterVideoObj._id === _id)
    const isLikedVideo = likedVideos.some(likedVideoObj=> likedVideoObj._id === _id)

    const openModal = () => {
        setModalVisible(true)
    }

    const closeModal = () => {
        setModalVisible(false)
    }

    const playlistDispatcher = (id) => {
        playlistDispatch({
            type: "SET_PLAYLIST_MODAL_VISIBLE",
            payload: isPlaylistModalVisible
        })
        playlistDispatch({
            type: "SET_PLAYLIST_VIDEO",
            payload: video
        })
        closeModal()
    }

    const watchLaterHandler = (hasWatchLater,video)=>{
        hasWatchLater ? removeFromWatchLater(video._id,setWatchLater,showToast) : addToWatchLater(video,setWatchLater,showToast)
        closeModal()
    }
    const likedVideoHandler = (isLikedVideo,video) => {
        isLikedVideo ? removeFromLikedVideo(video._id,setLikedVideos,showToast) : addToLikedVideo(video,setLikedVideos,showToast)
        closeModal()
    }

    return (
        <>
            <div className='w-20 pd-2 card-border' key={_id} id={_id}>
                <div>
                    <Link to={`/video/${_id}`}>
                        <img className="w-100 cursor-pointer" src={thumbnail} alt={alt} />
                    </Link>
                </div>
                <div className="flex justify-spc-btwn align-center relative">
                    <span className="text-initial">{title}</span>
                    <span onClick={openModal} className="material-icons">more_vert</span>
                    {modalVisible && (
                        <div className="w-100 absolute margin-left-13 pd-top relative">
                            <div className="modal w-50" >
                                <div className="modal-body flex flex-col pd-3">
                                    <button className="no-border cursor-pointer flex align-center" 
                                        onClick={() => watchLaterHandler(hasWatchLater,video)}
                                    >
                                        <span className="material-icons-outlined">{hasWatchLater ? "task_alt" : "watch_later"}</span>
                                        Watch Later
                                    </button>
                                    <button className="no-border absolute ml-7" onClick={closeModal}>
                                        <span className="material-icons">close</span>
                                    </button>
                                    <button className="no-border cursor-pointer flex align-center"
                                        onClick={() => playlistDispatcher(_id)}
                                    >
                                        <span className="material-icons-outlined">{!inPlaylist ? 'playlist_add' : 'playlist_remove'}</span>
                                        Add to Playlist
                                    </button>
                                    <button className="no-border cursor-pointer flex align-center mr-2" onClick={() => likedVideoHandler(isLikedVideo,video)}>
                                        <span className={isLikedVideo ? "material-icons" : "material-icons-outlined"}>thumb_up</span>Like
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex justify-spc-btwn">
                    <div className="flex justify-center align-center">
                        <span className="material-icons">visibility</span>
                        <span>1.5m</span>
                    </div>
                    <span>{creator}</span>
                </div>
            </div>
        </>
    )
}