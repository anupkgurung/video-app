import axios from "axios"

const getAllVideoFromHistory = async (setHistoryVideos,encodedToken,showToast) => {
    try {
        const data = await axios.get("/api/user/history", {
            headers: { authorization: encodedToken }
        })
        setHistoryVideos(data.data.history)
    } catch (error) {
        showToast("error","Error occured on getting getting history")
    }
}

const addVideoToHistory = async (video,encodedToken,showToast) => {
    try {
        await axios.post("/api/user/history", { video },
            { headers: { authorization: encodedToken } })
    } catch (error) {
        showToast("error","Error occured on adding video to history")
    }
}

const removeFromHistory = async (setHistoryVideos,encodedToken,videoId,showToast) => {
    try {
        const data = await axios.delete(`/api/user/history/${videoId}`, {
            headers: { authorization: encodedToken }
        })
        setHistoryVideos(data.data.history)
        showToast("success","Removed video from history")
    } catch (error) {
        showToast("error","Error occured on removing video")
    }
}

const clearHistory = async (setHistoryVideos,encodedToken,showToast) => {
    try {
        const data = await axios.delete('/api/user/history/all'
        , {
            headers: { authorization: encodedToken }
        })
        setHistoryVideos(data.data.history)   
        showToast("success","History cleared") 
    } catch (error) {
        showToast("error","Error occured on clearing history")
    }
}
export {getAllVideoFromHistory, addVideoToHistory, removeFromHistory , clearHistory}