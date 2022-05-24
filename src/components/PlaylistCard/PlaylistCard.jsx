import axios from "axios";
import { useToast } from "../../customHooks";
import { useState } from "react";
import { usePlaylistContext } from "../../context";
import { Link } from "react-router-dom";

export const PlaylistCard = ({ id, title, src, alt, videoCount }) => {
    //MODAL -> This needs to be moved(refactored)
    const [modalVisible, setModalVisible] = useState(false);
    const { showToast } = useToast();

    const openModal = () => {
        setModalVisible(true)
    }

    const closeModal = () => {
        setModalVisible(false)
    }

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
                    <span onClick={openModal} className="material-icons">more_vert</span>
                </div>
                <div className="flex justify-spc-btwn">
                    <span>{videoCount} videos</span>
                </div>
            </div>
        </>
    )
}