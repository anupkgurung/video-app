import { usePlaylistContext } from "../../context";
import { createNewPlaylist, addVideoToPlaylist } from "../../Api";
import { Input } from "../../components"
import { useToast } from "../../customHooks";
import { useState } from "react";

export const Modal = () => {
    const { initialState, playlistDispatch } = usePlaylistContext() || {};
    const { playlistTitle, playlist, isPlaylistModalVisible, playlistVideo } = initialState;
    const { showToast } = useToast();

    const setPlaylistTitle = (e) => {
        playlistDispatch({
            type: "SET_PLAYLIST_TITLE",
            payload: e.target.value
        })
    }

    return (
        <>
            {isPlaylistModalVisible && (
                <div className="flex justify-center align-center modal-bg z-idx w-100vw h-100vh position">
                    <div className="playlist-modal">
                        <div className="flex flex-col pd-3">
                            <span className="pd-2 text-left">Save to</span>
                            <hr className="boder-light" />
                        </div>
                        <div className="flex flex-col pd-3">
                            <ul className="flex-col pl-2">
                                {playlist && playlist.map(({ title, _id }) => (
                                    <li className="flex align-center" key={_id}>
                                        <Input id={_id} type={"custom-checbox"}
                                            title={title}
                                            onChangeHandler={(e) => addVideoToPlaylist(showToast, playlistVideo, e.target.id, playlistDispatch)}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col pd-3">
                            <hr className="boder-light" />
                            <div className="flex">
                                <input className="input-no-bdr"
                                    onChange={setPlaylistTitle}
                                    type="text" value={playlistTitle} />
                                <button className="btn btn-primary pd-0-4"
                                    onClick={() => createNewPlaylist(showToast, playlistDispatch, playlistTitle)}>Create</button>
                                <button className="btn btn-secondary pd-0-4"
                                    onClick={() => playlistDispatch({
                                        type: "SET_PLAYLIST_MODAL_VISIBLE",
                                        payload: isPlaylistModalVisible
                                    })}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}