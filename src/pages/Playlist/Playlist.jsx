import { Sidebar, VideoCard, PlaylistCard } from "../../components"
import { useDocumentTitle } from "../../customHooks";
import { usePlaylistContext } from "../../context";
import { useEffect } from "react";

export const Playlist = () => {
    useDocumentTitle("Playlist");
    const { initialState, playlistDispatch } = usePlaylistContext() || {};
    const { isPlaylistModalVisible, playlist, videoList } = initialState;

    useEffect(()=>{
        (async()=>{
            playlistDispatch({
                type: "CLEAR_VIDEO_LIST"
            })
        })()        
    },[videoList])

    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="flex flex-col pd-5 w-100 relative">
                    <div className="flex justify-spc-btwn text-bold">
                        <span></span>
                        <h4>All Playlist <span>({playlist.length})</span></h4>
                        <span title="Create Playlist"
                            onClick={() => playlistDispatch({
                                type: "SET_PLAYLIST_MODAL_VISIBLE",
                                payload: isPlaylistModalVisible
                            })}
                            className="material-icons btn-primary btn-floating">add</span>
                       
                    </div>
                    {playlist.length > 0 ?
                        <main className="video-card-container video-list-main pd-btm">
                            {playlist.map(({_id,title,videos}) => (
                                <PlaylistCard 
                                    key={_id}
                                    id={_id}
                                    title={title}
                                    src={videos[0]?.thumbnail}
                                    alt={videos[0]?.alt}
                                    videoCount={videos.length}
                                />
                            ))}
                        </main>
                        :
                        <div>
                            <span>No Playlist created</span>
                        </div>
                    }
                    {videoList.length > 0 ? 
                        <main className="video-card-container video-list-main pd-btm">
                            {videoList.map(({_id,title,videoIframe,creator,thumbnail,alt,playlistIds}) => (
                                <VideoCard
                                    key ={_id}
                                    _id={_id}
                                    title={title}
                                    videoIframe={videoIframe}
                                    thumbnail={thumbnail}
                                    creator={creator}
                                    alt={alt}
                                    playlistIds={playlistIds}
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