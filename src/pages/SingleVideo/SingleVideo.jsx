import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { Sidebar } from "../../components"
import { useLikedVideoContext, usePlaylistContext, useWatchLaterContext } from "../../context";
import { addToWatchLater, addToLikedVideo, addVideoToHistory,getVideo, removeFromLikedVideo, removeFromWatchLater } from "../../Api";
import { useToast } from "../../customHooks";

export const SingleVideo = () => {
    const { id: videoId } = useParams();
    const [video, setVideo] = useState({})
    const encodedToken = localStorage.getItem('token');
    const { initialState, playlistDispatch } = usePlaylistContext() || {};
    const { isPlaylistModalVisible,playlist } = initialState;
    const {showToast} = useToast();
    const {watchLater, setWatchLater} = useWatchLaterContext()||{};
    const {likedVideos, setLikedVideos} = useLikedVideoContext()||{};
    const hasWatchLater = watchLater.some((watchLaterVideoObj)=> watchLaterVideoObj._id === videoId)
    const isLikedVideo = likedVideos.some(likedVideoObj=> likedVideoObj._id === videoId)
    //const video = { id, title, videoIframe, thumbnail, creator, alt, playlistIds };
    const playlistVideo = playlist.map(({ videos }) => videos.filter((vObj) => vObj._id === videoId)).filter(obj => obj.length > 0)
    const inPlaylist = playlistVideo.length > 0;

    useEffect(() => {
        if(Object.keys(video).length === 0){
            getVideo(videoId,setVideo,showToast)
        }else{
            addVideoToHistory(video,encodedToken)
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
                                <button className="no-border cursor-pointer flex align-center mr-2" 
                                    onClick={()=>isLikedVideo ? removeFromLikedVideo(videoId,setLikedVideos,showToast) : addToLikedVideo(video,setLikedVideos,showToast) }>
                                    <span className={isLikedVideo ? "material-icons" : "material-icons-outlined"}>thumb_up</span>LIKE
                                </button>
                                {/* <button className="no-border cursor-pointer flex align-center mr-2">
                                    <span className="material-icons-outlined">thumb_down</span>DISLIKE
                                </button> */}
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
                                    <span className="material-icons">{inPlaylist ? 'playlist_add_check' : 'playlist_add'}</span>ADD TO PLAYLIST
                                </button>
                                <button className="no-border cursor-pointer flex align-center mr-2" 
                                    onClick={() => hasWatchLater ? removeFromWatchLater(videoId,setWatchLater,showToast) : addToWatchLater(video,setWatchLater,showToast)}>
                                    <span className="material-icons-outlined">{hasWatchLater ? 'task_alt' : 'watch_later'}</span>WATCH LATER
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