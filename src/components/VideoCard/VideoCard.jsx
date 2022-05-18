
import "./VideoCard.css"
export const VideoCard = ({id,title,video,thumnail,creator,alt}) => {
    return (
        <>
            <div className='w-20' id={id}>
                    <div className="">
                        <img className="w-100" src={thumnail} alt={alt} />
                    </div>
                  
                    <div className="">
                       {title}
                    </div>
                    
                        <div className="footer-icons">
                            <span className="material-icons">visibility</span>{creator}
                        </div>             
            </div>
        </>
    )
}