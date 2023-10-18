import './Projects.css'
import PhotoCard from './photo-card/PhotoCard'
import Edgar from "../../../assets/edgar.jpg"
import Carlos from "../../../assets/carlos.jpg"
import ProjectCard from './project-card/ProjectCard'
import RayTracer from '../../../assets/ray-edgar.png'
import ChatRoom from '../../../assets/lobby.jpeg'
import CarDashboard from '../../../assets/dashboard.png'
import TravelAgency from '../../../assets/agency.png'
import BipedModel from '../../../assets/biped.png'
import GameAssets from '../../../assets/gameassets.jpg'
import SnowShader from '../../../assets/snow.png'
import { useState } from 'react'

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
    name: "Carlos",
    projects: [
        {
            icon: SnowShader,
            name: "Snow shader",
            program: "Unity",
            description: "A shader made with Unity’s shader graph that adds snow to any object and lets you choose the color of the object, the color of the snow and the deph of the snow."
        },
        {
            icon: GameAssets,
            name: "Video game assets",
            program: "Blender",
            description: "29 objects + fully-rigged player model modeled and texture painted from scratch in Blender. All of this was made for a social service project, and it was made while learning Blender at the same time." 
        },
        {
            icon: BipedModel,
            name: "Biped 3D Model",
            program: "Maya",
            description: "A 2 months work in progress rig of a model of a male human being with IK and FK arms and legs that allows you to switch between the two. It also has eye tracker for both eyes and for each individually."
        }
    ]
}

export default function Projects() {

    const [selectedPerson, setSelectedPerson] = useState(1);
    const persons = [edgar, carlos]

    return (
        <div className="project-container">
            <div className='side-bar'>
                <PhotoCard data={edgar} onClick={() => setSelectedPerson(0)}/>
                <PhotoCard data={carlos} onClick={() => setSelectedPerson(1)}/>
            </div>
            <ul className='project-carousel'>
                {persons[selectedPerson].projects.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        data={project}
                    />
                ))}
            </ul>
        </div>
    )
}
