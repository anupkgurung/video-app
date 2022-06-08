import { useDocumentTitle } from "../../customHooks";
import { Sidebar, VideoCard } from "../../components"
import { useState, useEffect } from "react";
import  { getAllVideoFromHistory, removeFromHistory } from "../../Api"
import "./history.css"

export const History = () => {
    useDocumentTitle("History");
    const [historyVideos, setHistoryVideos] = useState([])
    const encodedToken = localStorage.getItem("token")

    useEffect(() => {
        getAllVideoFromHistory(setHistoryVideos,encodedToken)
    }, [])

    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className={`flex pd-5 ${historyVideos.length === 0 ? 'w-100':'' }`}>
                    {historyVideos.length > 0 ?
                        <main className="video-card-container video-list-main pd-btm">
                            {historyVideos.map(({ _id, title, video, creator, thumbnail, alt }) => (
                                <div key={_id}>
                                    <button className="no-border absolute ml-9 mt-06" onClick={()=>removeFromHistory(setHistoryVideos,encodedToken,_id)}>
                                        <span className="material-icons history-close">close</span>
                                    </button>
                                <VideoCard
                                    key={_id}
                                    id={_id}
                                    title={title}
                                    videoIframe={video}
                                    thumbnail={thumbnail}
                                    creator={creator}
                                    alt={alt}
                                />
                                </div>
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