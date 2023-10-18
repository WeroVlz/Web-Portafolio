import './ProjectCard.css'
import RayTracer from '../../../../assets/ray-edgar.png'

export default function ProjectCard({ data }) {
    const { icon, name, program, description } = data;
    return (
        <div className='project-card'>
            <img src={icon} />
            <div className='project-info'>
                <div className='project-name'>
                    <h1 className='name'>{name}</h1>
                    <h1 className='program'>{program}</h1>
                </div>
                <div className='div-description'>
                    <p className='description-title'>Description</p>
                    <p className='project-description'>{description}</p>
                </div>
            </div>
        </div>

    )
}