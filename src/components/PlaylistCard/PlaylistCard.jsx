import axios from "axios";
import { useToast } from "../../customHooks";
import { usePlaylistContext } from "../../context";
import { Link } from "react-router-dom";
import { removePlaylist } from "../../Api";

export const PlaylistCard = ({ id, title, src, alt, videoCount }) => {

    const playlist = { id, title, src, alt, videoCount }
    const  { playlistDispatch } = usePlaylistContext();
    const {showToast} = useToast();

    return (
        <>
            <div className='w-20 pd-2 card-border' >
                <div>
                    <Link to={`/playlist/${id}`}>
                        {src ? <img className="w-100 cursor-pointer" src={src} alt={alt} />
                            : <img className="w-100 cursor-pointer" src={"https://raw.githubusercontent.com/anupkgurung/images/main/emptyplay.png"} alt="no video" />
                        }
                    </Link>
                </div>
                <div className="flex justify-spc-btwn align-center relative">
                    <span className="text-initial">{title}</span>
                    <span className="material-icons-outlined cursor-pointer" onClick={()=>removePlaylist(showToast,playlist,playlistDispatch)}>delete_outline</span>
                </div>
                <div className="flex justify-spc-btwn">
                    <span>{videoCount} videos</span>
                </div>
            </div>
        </>
    )
}