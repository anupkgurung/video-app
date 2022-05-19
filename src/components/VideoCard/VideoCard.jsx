
import "./VideoCard.css"
export const VideoCard = ({ id, title, video, thumnail, creator, alt }) => {
    return (
        <>
            <div className='w-20 pd-2 card-border' id={id}>
                <div className="">
                    <img className="w-100 cursor-pointer" src={thumnail} alt={alt} />
                </div>

                <div className="flex justify-content-spc-btwn align-item-center">
                    <span className="text-initial">{title}</span>
                    <span className="material-icons">more_vert</span>
                </div>
                <div></div>
                <div className="flex justify-content-spc-btwn">
                    <div className="flex justify-content-center align-item-center">
                        <span className="material-icons">visibility</span>
                        <span>1.5m</span>
                    </div>
                    <span>{creator}</span>
                </div>
            </div>
        </>
    )
}