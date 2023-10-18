import './NavBar.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NavBar(){
    return(
        <nav className='nav'>
            <Link to='/ ' className='site-title'>Portfolio</Link>
            <ul>
                <CustomLink to="/about" className='nav-btn'>About us</CustomLink>
                <CustomLink to="/projects" className='nav-btn'>Projects</CustomLink>
                <li>
                    <Link to='/resume' className='resume-btn'>Resume</Link>
                </li>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path : resolvedPath.pathname, end:true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}