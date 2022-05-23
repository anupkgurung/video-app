
import axios from "axios";
import { useState } from "react";
import { usePlaylistContext } from "../../context";
import "./VideoCard.css";

export const VideoCard = ({ id, title, videoIframe, thumbnail, creator, alt }) => {

    //MODAL -> This needs to be moved(refactored)
    const [modalVisible, setModalVisible] = useState(false);
    const { initialState, playlistDispatch } = usePlaylistContext() || {};
    const { isPlaylistModalVisible } = initialState;
    const video = {id, title, videoIframe, thumbnail, creator, alt};
    const openModal = () => {
        setModalVisible(true)
    }

    const closeModal = () => {
        setModalVisible(false)
    }

    const watchLater = async (id) => {
        const encodedToken = localStorage.getItem("token");
        try {
            const data = await axios.post("/api/user/watchlater", { video }
                , { headers: { authorization: encodedToken } }
            )
        } catch (error) {
            console.log({ error })
        }
    }
    return (
        <>
            <div className='w-20 pd-2 card-border' key={id} id={id}>
                <div>
                    <img className="w-100 cursor-pointer" src={thumbnail} alt={alt} />
                </div>
                <div className="flex justify-spc-btwn align-center relative">
                    <span className="text-initial">{title}</span>
                    <span onClick={openModal} className="material-icons">more_vert</span>
                    {modalVisible && (
                        <div className="w-100 absolute margin-left-13 pd-top relative">
                            <div className="modal w-50" >
                                <div className="modal-body flex flex-col pd-3">
                                    <button className="no-border cursor-pointer flex align-center" onClick={() => watchLater(id)}>
                                        <span className="material-icons">{false ? "task_alt" : "watch_later"}</span>
                                        Watch Later
                                    </button>
                                    <button className="no-border absolute ml-7" onClick={closeModal}>
                                        <span className="material-icons">close</span>
                                    </button>
                                    <button className="no-border cursor-pointer flex align-center"
                                        onClick={
                                            () => {
                                                playlistDispatch({
                                                    type: "SET_PLAYLIST_MODAL_VISIBLE",
                                                    payload: isPlaylistModalVisible
                                                })
                                                playlistDispatch({
                                                    type: "SET_PLAYLIST_VIDEO",
                                                    payload: video
                                                })
                                            }
                                        }
                                    >
                                        <span className="material-icons">playlist_add</span>
                                        Add to Playlist
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