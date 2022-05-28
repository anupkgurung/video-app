import axios from "axios"
import { useToast, useDocumentTitle } from "../../customHooks";
import { useState, useEffect } from "react";
import { Sidebar, VideoCard } from "../../components"


export const WatchLater = () => {
    useDocumentTitle("Watch Later");
    const { showToast } = useToast();
    const [watchLater, setWatchLater] = useState([])

    const getWatchLaterList = async () => {
        const encodedToken = localStorage.getItem("token");
        try {
            const data = await axios.get("/api/user/watchlater",
                { headers: { authorization: encodedToken } });
            setWatchLater(data.data.watchlater)
        } catch ({ error }) {
            showToast("error", "Error occured on fetching watch later");
        }
    }

    useEffect(() => {
        getWatchLaterList();
    }, [])

    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className={`flex pd-5 ${watchLater.length === 0 ? 'w-100':'' }`}>
                    {watchLater.length > 0 ?
                        <main className="video-card-container video-list-main pd-btm">
                            {watchLater.map(({ _id, title, video, creator, thumbnail, alt }) => (
                                <VideoCard
                                    key={_id}
                                    id={_id}
                                    title={title}
                                    videoIframe={video}
                                    thumbnail={thumbnail}
                                    creator={creator}
                                    alt={alt}
                                />
                            ))}
                        </main>
                        :
                        <>
                            <div className="w-100">
                                No Videos to Watch Later
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}