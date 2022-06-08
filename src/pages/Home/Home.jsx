import { Sidebar, VideoCard } from "../../components"
import { useToast, useDocumentTitle } from "../../customHooks";
import { useState, useEffect } from "react";
import {getCategoryVideo, getAllVideos, getAllCategories } from "../../Api"
import "../style.css";

export const Home = () => {
    useDocumentTitle("Home");
    const { showToast } = useToast();
    const [videoList, setVideoList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currentCateogry, setCurrentCategory] = useState('All');

    useEffect(() => {
        getAllVideos(setVideoList,showToast);
        getAllCategories(setCategories,showToast)
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
                                    onClick={(e)=>getCategoryVideo(categoryName,setCurrentCategory,showToast)}>{categoryName}
                                </span>
                            ))
                        }
                    </div>

                    <main className="video-card-container video-list-main pd-btm">
                        {videoList && videoList.map(({ _id, title, video, creator, thumbnail, alt, playlistIds }) => (
                            <VideoCard
                                key={_id}
                                _id={_id}
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