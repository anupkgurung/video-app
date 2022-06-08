import axios from "axios";

export const getWatchLaterList = async (setWatchLater,showToast) => {
    const encodedToken = localStorage.getItem("token");
    try {
        const data = await axios.get("/api/user/watchlater",
            { headers: { authorization: encodedToken } });
        setWatchLater(data.data.watchlater)
    } catch ({ error }) {
        showToast("error", "Error occured on fetching watch later");
    }
}

export const addToWatchLater = async (video,setWatchLater,showToast) => {
    const encodedToken = localStorage.getItem("token");
    try {
        const data = await axios.post("/api/user/watchlater", { video }
            , { headers: { authorization: encodedToken } }
        )
        setWatchLater(data.data.watchlater)
        showToast("success","Added to watch later")
    } catch (error) {
        showToast("error", "Error occured on adding to watch later");
    }
}

export const removeFromWatchLater = async (videoId,setWatchLater,showToast) => {
    const encodedToken = localStorage.getItem("token");
    try {
        const data = await axios.delete(`/api/user/watchlater/${videoId}`
            , { headers: { authorization: encodedToken } }
        )
         setWatchLater(data.data.watchlater)
         showToast("success", "Video removed successfully");
    } catch (error) {
        showToast("error", "Error occured on removing video");
    }
}