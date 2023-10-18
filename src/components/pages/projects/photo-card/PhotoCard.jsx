import './PhotoCard.css'
import Edgar from "../../../../assets/edgar.jpg"

export default function PhotoCard(){
    return(
        <div className="photo-card">
            <img src={Edgar}></img>
        </div>
    )
}