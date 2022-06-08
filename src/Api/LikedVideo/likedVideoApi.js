import axios from "axios";

export const getAllLikedVideos = async (setLikedVideos,showToast) => {
    const encodedToken = localStorage.getItem("token");
    try {
        const data = await axios.get("/api/user/likes",
            { headers: { authorization: encodedToken } })
        setLikedVideos(data.data.likes)
    } catch (error) {
        showToast("error","Error occured on getting videos")
    }
}
export const addToLikedVideo =  async(video,setLikedVideos,showToast) => {
    const encodedToken = localStorage.getItem("token");
    try {
        const data = await axios.post("/api/user/likes",{video},
        { headers: { authorization: encodedToken } })
        setLikedVideos(data.data.likes)
        showToast("success","Video added successfully")
    } catch (error) {
        showToast("error","Error occured on ading video")
    }
}

export const removeFromLikedVideo = async(videoId,setLikedVideos,showToast) =>{
    const encodedToken = localStorage.getItem("token");
    try {
        const data = await axios.delete(`/api/user/likes/${videoId}`,
        { headers: { authorization: encodedToken } })
        setLikedVideos(data.data.likes)
        showToast("success","Video removed")
    } catch (error) {
        showToast("error","Error occured on removing video")
    }
}