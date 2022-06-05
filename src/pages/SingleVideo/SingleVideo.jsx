import axios from "axios";
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { Sidebar } from "../../components"
import { usePlaylistContext } from "../../context";
import { watchLater } from "../../Api";

export const SingleVideo = () => {
    const { id: videoId } = useParams();
    const [video, setVideo] = useState({})
    const encodedToken = localStorage.getItem('token');
    const { initialState, playlistDispatch } = usePlaylistContext() || {};
    const { isPlaylistModalVisible } = initialState;
    const [isLiked, setIsLiked] = useState(false);

    const getVideo = async () => {
        try {
            const data = await axios.get(`/api/video/${videoId}`)
            console.log(data)
            setVideo(data.data.video)
        } catch (error) {
            console.log(error)
        }
    }
    
    const addVideoToHistory = async () => {
        try {
            await axios.post("/api/user/history", { video },
                { headers: { authorization: encodedToken } })
        } catch (error) {
            //error.response.data.errors add this to toast
            console.log(error)
        }
    }

    
    const addToLikedVideo =  async() => {
        try {
            await axios.post("/api/user/likes",{video},
            { headers: { authorization: encodedToken } })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(Object.keys(video).length === 0){
            getVideo()
        }else{
            addVideoToHistory()
        }
    }, [video])


    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="pd-5 w-100 relative">
                    <main className="video-list-main pd-btm flex flex-col">
                        <div className="w-100 h-60">
                            <iframe width="100%" height="100%" className="block-size"
                                src={video.url}
                                frameBorder="0"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write;encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            >
                            </iframe>
                        </div>
                        <div className="text-left pd-top text-bold"><h6>{video.title}</h6> </div>
                        <div className="flex justify-spc-btwn pd-top">
                            <div className="text-bold">{video.creator}</div>
                            <div className="flex">
                                <button className="no-border cursor-pointer flex align-center mr-2" onClick={()=>addToLikedVideo(video._id)}>
                                    <span className={isLiked ? "material-icons" : "material-icons-outlined"}>thumb_up</span>LIKE
                                </button>
                                <button className="no-border cursor-pointer flex align-center mr-2">
                                    <span className="material-icons-outlined">thumb_down</span>DISLIKE
                                </button>
                                <button className="no-border cursor-pointer flex align-center mr-2"
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
                                        }>
                                    <span className="material-icons">{true ? 'playlist_add' : 'playlist_add_check'}</span>ADD TO PLAYLIST
                                </button>
                                <button className="no-border cursor-pointer flex align-center mr-2" onClick={() => watchLater(video)}>
                                    <span className="material-icons-outlined">{true ? 'watch_later' : 'task_alt'}</span>WATCH LATER
                                </button>
                            </div>
                        </div>
                        <div className="pd-top text-initial">In the summer of 2021 we set off on a 8500 km bike adventure though eastern Europe.
                            With only minimal luggage we would see the most remote
                            parts of countries that for decades were hidden behind the iron wall.
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}