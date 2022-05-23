import { Sidebar, VideoCard, Input, Modal } from "../../components"
import axios from "axios";
import {useToast, useDocumentTitle} from "../../customHooks";
import { useState, useEffect } from "react";
import { usePlaylistContext } from "../../context";
import { createNewPlaylist } from "../../Api";
import "../style.css";

export const Home = ()=>{
    useDocumentTitle("Home");
    const { showToast } = useToast();
    const [videoList, setVideoList] = useState([]);
    const {initialState, playlistDispatch} = usePlaylistContext() || {};
    const { playlistTitle, isPlaylistModalVisible } = initialState;
    const [playlist, setPlaylist] = useState();
    

    const getAllVideos = async () => {
        try{
            const data = await axios.get("/api/videos")
            console.log(data.data.videos)
            setVideoList(data.data.videos)
        }catch(error){
            showToast("error", "Error occured on fetching videos");
        }
    }
    useEffect(()=>{
        getAllVideos();
    },[])

    const setPlaylistTitle = (e) => {
        playlistDispatch({
            type :"SET_PLAYLIST_TITLE",
            payload : e.target.value
        })
    }

    return (
        <>  
        <div className="flex">
            <Sidebar />
            <div className="flex flex-col">
                <div className="chip cursor-pointer">
                    <span className="chip-item">All</span>
                    <span className="chip-item">Tour</span>
                    <span className="chip-item">Camping</span>
                    <span className="chip-item">Motorcycling</span>
                    <span className="chip-item">Riding</span>
                </div>
              
                <main className="video-card-container video-list-main pd-btm">
                        {videoList && videoList.map(({_id,title,video,creator,thumbnail,alt})=>(
                            <VideoCard
                                key ={_id}
                                id={_id}
                                title={title}
                                videoIframe={video}
                                thumbnail={thumbnail}
                                creator={creator}
                                alt={alt}
                            />
                        ))}
                    
                </main>
            </div>
        </div>
        </>
    )   
}