import { useEffect } from "react";
import { Sidebar, VideoCard } from "../../components"
import { getAllLikedVideos } from "../../Api"
import { useLikedVideoContext } from "../../context";
import {useToast} from "../../customHooks"

export const LikedVideo = () => {

    const {likedVideos, setLikedVideos} = useLikedVideoContext();
   const {showToast} = useToast()
    useEffect(() => {
        getAllLikedVideos(setLikedVideos,showToast)
    }, [setLikedVideos])

    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className={`flex pd-5 ${likedVideos.length === 0 ? 'w-100':'' }`}>
                {likedVideos.length > 0 ?
                    <main className="video-card-container video-list-main pd-btm">
                         {likedVideos.map(({ _id, title, videoIframe, creator, thumbnail, alt,playlistIds }) => (
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
                            No Liked Videos Added
                        </div>
                    </>
                }
                </div>
            </div>
        </>
    )
}