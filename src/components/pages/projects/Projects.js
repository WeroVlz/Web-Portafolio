import './Projects.css'
import PhotoCard from './photo-card/PhotoCard'
import Edgar from "../../../assets/edgar.jpg"
import Carlos from "../../../assets/carlos.jpg"
import ProjectCard from './project-card/ProjectCard'
import RayTracer from '../../../assets/ray-edgar.png'
import ChatRoom from '../../../assets/lobby.jpeg'
import CarDashboard from '../../../assets/dashboard.png'
import TravelAgency from '../../../assets/agency.png'

const edgar = {
    image: Edgar,
    name: "Edgar",
    projects: [
        {
            icon: RayTracer,
            name: "Ray Tracer",
            program: "Java",
            description: "A Java Ray Tracer made from scratch that simulates the behavior of light rays as they interact with 3D objects to produce realistic images. It involves coding the entire rendering process, from scene setup to ray casting, intersection testing, shading, and rendering, resulting in custom-made visual rendering software."
        },
        {
            icon: ChatRoom,
            name: "Chat Room App",
            program: "C++/Python",
            description: "This project is a distributed chat application that enables users to communicate with each other through chatrooms. The server is implemented in C, while the clients are implemented in Python. The communication between the server and clients is established through sockets." 
        },
        {
            icon: CarDashboard,
            name: "Car Dashboard",
            program: "Unity",
            description: "A car dashboard created in Unity, designed to provide an immersive and user-friendly interface for vehicle information and control."
        },
        {
            icon: TravelAgency,
            name: "Web Travel Agency",
            program: "JavaScript",
            description: "A web-based travel agency platform designed to help users plan, book, and manage their travel experiences, offering a user-friendly interface for browsing destinations, hotels, flights, and creating itineraries."
        }
    ]
}

const carlos = {
    image: Carlos,
    name: "Carlos"
}

export default function Projects() {

    const projectsEdgar = edgar.projects;

    return (
        <div className="project-container">
            <div className='side-bar'>
                <PhotoCard data={edgar} />
                <PhotoCard data={carlos} />
            </div>
            <ul className='project-carousel'>
                {projectsEdgar.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        data={project}
                    />
                ))}
            </ul>
        </div>
    )
}
