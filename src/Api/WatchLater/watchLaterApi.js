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

export const addToWatchLater = async (video,setWatchLater) => {
    const encodedToken = localStorage.getItem("token");
    try {
        const data = await axios.post("/api/user/watchlater", { video }
            , { headers: { authorization: encodedToken } }
        )
        setWatchLater(data.data.watchlater)
    } catch (error) {
        console.log({ error })
    }
}

export const removeFromWatchLater = async (videoId,setWatchLater) => {
    const encodedToken = localStorage.getItem("token");
    try {
        const data = await axios.delete(`/api/user/watchlater/${videoId}`
            , { headers: { authorization: encodedToken } }
        )
         setWatchLater(data.data.watchlater)
    } catch (error) {
        console.log({ error })
    }
}