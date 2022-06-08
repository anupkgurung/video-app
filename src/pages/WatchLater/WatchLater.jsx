import { useToast, useDocumentTitle } from "../../customHooks";
import { useEffect } from "react";
import { Sidebar, VideoCard } from "../../components"
import { getWatchLaterList } from "../../Api"
import { useWatchLaterContext } from "../../context";


export const WatchLater = () => {
    useDocumentTitle("Watch Later");
    const { showToast } = useToast();
    const {watchLater, setWatchLater} = useWatchLaterContext()

    useEffect(() => {
        getWatchLaterList(setWatchLater,showToast);
    }, [])

    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className={`flex pd-5 ${watchLater.length === 0 ? 'w-100':'' }`}>
                    {watchLater.length > 0 ?
                        <main className="video-card-container video-list-main pd-btm">
                            {watchLater.map(({ _id, title, videoIframe, creator, thumbnail, alt, playlistIds}) => (
                                <VideoCard
                                    key={_id}
                                    _id={_id}
                                    title={title}
                                    videoIframe={videoIframe}
                                    thumbnail={thumbnail}
                                    creator={creator}
                                    alt={alt}
                                    playlistIds={playlistIds}
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