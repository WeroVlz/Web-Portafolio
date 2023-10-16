import './Home.css'
import { Link } from "react-router-dom"

export default function Home(){
    return(
        <div className="home-container">
            <p>
                <span className='plain-text'>Hi, our names are <br/></span>
                <span className='name-text'>Edgar Velázquez<br/></span>
                <span className='plain-text'>and <br/></span>
                <span className='name-text'>Carlos Villaseñor<br/></span>
            </p>
            <p className='description-text'> 
                We are two students from Universidad Panamericana with majors in Computer Systems <br/>
                and Graphics Engineering and Digital Animation Engineering respectively. This website<br/>
                shows our projects throughout our time at college.
            </p>
            <Link to="/about" className='home-btn'>Learn more about us</Link>
        </div>
    )
}
