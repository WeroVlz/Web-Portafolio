import './Projects.css'
import PhotoCard from './photo-card/PhotoCard'


export default function Projects(){
    return(
        <div className="project-container">
            <div className='side-bar'>
                <PhotoCard/>
                <PhotoCard/>
            </div>
        </div>
    )
}
