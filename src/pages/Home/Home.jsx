import { Sidebar, VideoCard } from "../../components"
import axios from "axios";
import { useToast, useDocumentTitle } from "../../customHooks";
import { useState, useEffect } from "react";
import "../style.css";

export const Home = () => {
    useDocumentTitle("Home");
    const { showToast } = useToast();
    const [videoList, setVideoList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currentCateogry, setCurrentCategory] = useState('All');

    const getCategoryVideo = async (categoryName) => {
        try {
            const data = await axios.get(`/api/video/category/${categoryName}`)
            setVideoList(data.data.video)
            if(categoryName ==='All'){
                setCurrentCategory("All")
            }else{
                setCurrentCategory(data.data.video[0].category)
            }
                
        } catch (error) {
            showToast("error", "Error occured on fetching videos"); 
        }
    }
    const getAllVideos = async () => {
        try {
            const data = await axios.get("/api/videos")
            setVideoList(data.data.videos)
        } catch (error) {
            showToast("error", "Error occured on fetching videos");
        }
    }
    const getAllCategories = async ()=>{
        try {
            const data = await axios.get("/api/categories")
            setCategories(data.data.categories)
        } catch (error) {
            showToast("error", "Error occured on fetching videos");
        }
    }

    useEffect(() => {
        getAllVideos();
        getAllCategories()
    }, [])

    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="flex flex-col">
                    <div className="chip cursor-pointer">
                        {
                            categories.length > 0 && categories.map(({_id,categoryName}) => (
                                <span className={`chip-item ${categoryName === currentCateogry ? "is-active" : ''}` } key={_id}
                                    onClick={(e)=>getCategoryVideo(categoryName)}>{categoryName}
                                </span>
                            ))
                        }
                    </div>

                    <main className="video-card-container video-list-main pd-btm">
                        {videoList && videoList.map(({ _id, title, video, creator, thumbnail, alt, playlistIds }) => (
                            <VideoCard
                                key={_id}
                                id={_id}
                                title={title}
                                videoIframe={video}
                                thumbnail={thumbnail}
                                creator={creator}
                                alt={alt}
                                playlistIds={playlistIds}
                            />
                        ))}

                    </main>
                </div>
            </div>
        </>
    )
}