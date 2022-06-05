import axios from "axios";

export const getAllLikedVideos = async (setLikedVideos) => {
    const encodedToken = localStorage.getItem("token");
    try {
        const data = await axios.get("/api/user/likes",
            { headers: { authorization: encodedToken } })
        setLikedVideos(data.data.likes)
    } catch (error) {
        //TO be removed
        console.log(error)
    }
}