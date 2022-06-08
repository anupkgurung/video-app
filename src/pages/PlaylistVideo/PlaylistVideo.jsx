import { useParams } from "react-router-dom";
import { Sidebar, VideoCard } from "../../components"
import { usePlaylistContext } from "../../context";
import { getVideosFromPlaylist } from "../../Api";
import { useToast } from "../../customHooks";
import { useEffect } from "react";

export const PlaylistVideo = () => {

    const { id: playlistId } = useParams();
    const { initialState, playlistDispatch } = usePlaylistContext() || {};
    const { videoList } = initialState;
    const { showToast } = useToast();
    
    useEffect(()=>{
        getVideosFromPlaylist(showToast, playlistId, playlistDispatch)
    },[])

    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="flex flex-col pd-5 w-100 relative">
                    <div className="flex justify-center text-bold">
                        <h4>No Videos</h4>
                    </div>
                    {videoList.length > 0 ?
                        <main className="video-card-container video-list-main pd-btm">
                            {videoList.map(({ id, title, videoIframe, creator, thumbnail, alt }) => (
                                <VideoCard
                                    key={id}
                                    id={id}
                                    title={title}
                                    videoIframe={videoIframe}
                                    thumbnail={thumbnail}
                                    creator={creator}
                                    alt={alt}
                                    playlistIds={playlistId}
                                />
                            ))}
                        </main> :
                        <></>
                    }
                </div>
            </div>
        </>
    )
}