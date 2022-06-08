import { useDocumentTitle, useToast } from "../../customHooks";
import { Sidebar, VideoCard } from "../../components"
import { useState, useEffect } from "react";
import { getAllVideoFromHistory, removeFromHistory, clearHistory } from "../../Api"
import "./history.css"

export const History = () => {
    useDocumentTitle("History");
    const showToast = useToast()
    const [historyVideos, setHistoryVideos] = useState([])
    const encodedToken = localStorage.getItem("token")

    useEffect(() => {
        getAllVideoFromHistory(setHistoryVideos, encodedToken,showToast)
    }, [])

    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className={`flex flex-col pd-5 ${historyVideos.length === 0 ? 'w-100' : ''}`}>
                    {historyVideos.length > 0 ?
                        <>
                            <div className="ml-auto pd-btm">
                                <button className="btn btn-primary" onClick={()=>clearHistory(setHistoryVideos, encodedToken,showToast)}>
                                    <span className="material-icons-outlined btn-icon">clear_all</span>Clear All
                                </button>
                            </div>
                            <main className="video-card-container video-list-main pd-btm">
                                {historyVideos.map(({ _id, title, video, creator, thumbnail, alt, playlistIds }) => (
                                    <div key={_id}>
                                        <button className="no-border absolute ml-9 mt-06" onClick={() => removeFromHistory(setHistoryVideos, encodedToken, _id,showToast)}>
                                            <span className="material-icons history-close">close</span>
                                        </button>
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
                                    </div>
                                ))}
                            </main>
                        </>
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