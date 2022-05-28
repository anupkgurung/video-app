import { useDocumentTitle } from "../../customHooks";
import { Sidebar, VideoCard } from "../../components"
import axios from "axios";
import { useState, useEffect } from "react";

export const History = () => {
    useDocumentTitle("History");
    const [historyVideos, setHistoryVideos] = useState([])
    const encodedToken = localStorage.getItem("token")

    const getAllVideoFromHistory = async () => {
        try {
            const data = await axios.get("/api/user/history", {
                headers: { authorization: encodedToken }
            })
            setHistoryVideos(data.data.history)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllVideoFromHistory()
    }, [])

    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className={`flex pd-5 ${historyVideos.length === 0 ? 'w-100':'' }`}>
                    {historyVideos.length > 0 ?
                        <main className="video-card-container video-list-main pd-btm">
                            {historyVideos.map(({ _id, title, video, creator, thumbnail, alt }) => (
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
                                No Videos in History
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}