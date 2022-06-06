import { useEffect, useState } from "react";
import { Sidebar, VideoCard } from "../../components"
import { getAllLikedVideos } from "../../Api"
export const LikedVideo = () => {

    const [likedVideos, setLikedVideos] = useState([]);
    
    useEffect(() => {
        getAllLikedVideos(setLikedVideos)
    }, [setLikedVideos])

    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className={`flex pd-5 ${likedVideos.length === 0 ? 'w-100':'' }`}>
                {likedVideos.length > 0 ?
                    <main className="video-card-container video-list-main pd-btm">
                         {likedVideos.map(({ _id, title, video, creator, thumbnail, alt }) => (
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
                            No Liked Videos Added
                        </div>
                    </>
                }
                </div>
            </div>
        </>
    )
}