import { Sidebar, VideoCard } from "../../components"
import "../style.css";

export const Home = ()=>{
    return (
        <>  
        <div className="flex-row">
            <Sidebar />
            <div className="flex-column-center">
                <div className="chip">
                    <span className="chip-item">All</span>
                    <span clclassNameass="chip-item">Tourism</span>
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