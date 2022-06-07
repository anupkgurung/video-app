
import { useState } from "react";
import { Link } from "react-router-dom";
import { usePlaylistContext } from "../../context";
import { watchLater } from "../../Api";
import "./VideoCard.css";
import { useEffect } from "react";

export const VideoCard = ({ id, title, videoIframe, thumbnail, creator, alt, playlistIds }) => {

    //MODAL -> This needs to be moved(refactored)
    const [modalVisible, setModalVisible] = useState(false);
    const { initialState, playlistDispatch } = usePlaylistContext() || {};
    const { isPlaylistModalVisible, playlist } = initialState;
    const video = { id, title, videoIframe, thumbnail, creator, alt, playlistIds };
    const playlistVideo =  playlist.map(({videos})=> videos.filter((vObj)=> vObj.id=== video.id)).filter(obj => obj.length > 0)
    const inPlaylist = playlistVideo.length > 0

    const openModal = () => {
        setModalVisible(true)
    }

    const closeModal = () => {
        setModalVisible(false)
    }

    const playlistDispatcher = (id)=>{
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

    return (
        <>
            <div className='w-20 pd-2 card-border' key={id} id={id}>
                <div>
                    <Link to={`/video/${id}`}>
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
                                    <button className="no-border cursor-pointer flex align-center" onClick={() => {watchLater(video);closeModal()}}>
                                        <span className="material-icons">{false ? "task_alt" : "watch_later"}</span>
                                        Watch Later
                                    </button>
                                    <button className="no-border absolute ml-7" onClick={closeModal}>
                                        <span className="material-icons">close</span>
                                    </button>
                                    <button className="no-border cursor-pointer flex align-center"
                                        onClick={() => playlistDispatcher(id)}
                                    >                                    
                                       <span className="material-icons-outlined">{!inPlaylist ? 'playlist_add' : 'playlist_remove'}</span>
                                       {!inPlaylist ? 'Add to Playlist' : 'Remove'}
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