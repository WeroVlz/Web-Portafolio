import './About.css'
import InfoCard from './info-card/InfoCard'
import Edgar from "../../../assets/edgar.jpg"
import Carlos from "../../../assets/carlos.jpg"

const edgar = {
    icon: Edgar,
    name: "Edgar Velázquez Mercado",
    age: 23,
    country: "Mexico",
    major: "Computer System and Graphics Engineering",
    description: "I am a student at Universidad Panamericana. I love coding and building projects from scratch. I am really passionate about software and my hobbies.",
    github: "https://github.com/WeroVlz",
    instagram: "https://www.instagram.com/edgarvlz26/",
    linkedin: "https://www.linkedin.com/in/edgarvelazquezm/",
    twitter: "https://twitter.com/edgarvlz26"
}

const carlos = {
    icon: Carlos,
    name: "Carlos Villaseñor Rábago",
    age: 22,
    country: "Mexico",
    major: "Digital Animation Engineering",
    description: "I study Digital Animation Engineer at Universidad Panamericana because of the love of art. My hobbies are videogames, series, drawing, and hanging out with friends.",
    github: "",
    instagram: "https://www.instagram.com/carlos0223996/",
    linkedin: "",
    twitter: ""
}

export default function About(){
    return(
        <div className='about-container'>
            <InfoCard data={edgar}/>
            <InfoCard data={carlos}/>
        </div>
    )
}