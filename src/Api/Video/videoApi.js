import axios from "axios"

const getCategoryVideo = async (categoryName,setCurrentCategory,setVideoList,showToast) => {
    try {
        const data = await axios.get(`/api/video/category/${categoryName}`)
        setVideoList(data.data.video)
        if(categoryName ==='All'){
            setCurrentCategory("All")
        }else{
            setCurrentCategory(data.data.video[0].category)
        }
            
    } catch (error) {
        showToast("error", "Error occured on getting category videos"); 
    }
}
const getAllVideos = async (setVideoList,showToast) => {
    try {
        const data = await axios.get("/api/videos")
        setVideoList(data.data.videos)
    } catch (error) {
        showToast("error", "Error occured on getting all video");
    }
}
const getAllCategories = async (setCategories,showToast)=>{
    try {
        const data = await axios.get("/api/categories")
        setCategories(data.data.categories)
    } catch (error) {
        showToast("error", "Error occured on getting all categories");
    }
}
const getVideo = async (videoId,setVideo,showToast) => {
    try {
        const data = await axios.get(`/api/video/${videoId}`)            
        setVideo(data.data.video)
    } catch (error) {
        showToast("error", "Error on getting video");
    }
}

export {getCategoryVideo, getAllVideos, getAllCategories , getVideo}