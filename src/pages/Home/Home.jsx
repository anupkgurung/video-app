import { Sidebar } from "../../components"
import axios from "axios";
import {useToast} from "../../customHooks";
import { useState, useEffect } from "react";
import "../style.css";

export const Home = ()=>{
    const { showToast } = useToast();
    const [videoList, setVideoList] = useState([])
    const getAllVideos = async () => {
        try{
            const data = await axios.get("/api/videos")
            console.log(data)
        }catch(error){
            showToast("error", "Error occured on fetching videos");
        }
    }
    useEffect(()=>{
        getAllVideos();
    })
    

    return (
        <>  
        <div className="flex padding-5">
            <Sidebar />
            <div className="flex flex-col pl-2">
                <div className="chip">
                    <span className="chip-item">All</span>
                    <span className="chip-item">Tourism</span>
                    <span className="chip-item">Camping</span>
                    <span className="chip-item">Motorcycling</span>
                    <span className="chip-item">Riding</span>
                </div>
                <main>
                    <div>

                    </div>
                </main>
            </div>
        </div>
        </>
    )   
}