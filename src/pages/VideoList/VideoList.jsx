import { Sidebar } from "../../components"
import "../style.css";

export const Home = ()=>{
    return (
        <>  
        <div className="flex-row">
            <Sidebar />
            <div className="flex-column-center">
                <div class="chip">
                    <span class="chip-item">All</span>
                    <span class="chip-item">Tourism</span>
                    <span class="chip-item">Camping</span>
                    <span class="chip-item">Motorcycling</span>
                    <span class="chip-item">Riding</span>
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