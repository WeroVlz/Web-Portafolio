import { IconButton } from '@mui/material'
import './NavBar.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { Component } from 'react'

export default class NavBar extends Component {

    constructor(props){
        super(props);
        this.state ={openMenu: false};
    }

    render() {
        return (
            <nav className='nav'>
                <Link to='/ ' className='site-title'>Portfolio</Link>
                <ul className={'nav-bar-btns' + (this.state.openMenu ? ' opened' : '')}>
                    <IconButton className='menu-icon' onClick={() => this.setState({openMenu: !this.state.openMenu})}>
                        <CloseIcon className='close-icon'/>
                    </IconButton>
                    <CustomLink to="/about" className='nav-btn'>About us</CustomLink>
                    <CustomLink to="/projects" className='nav-btn'>Projects</CustomLink>
                    <li>
                        <Link to='/resume' className='resume-btn'>Resume</Link>
                    </li>
                </ul>
                <IconButton className='menu-icon' onClick={() => this.setState({openMenu: !this.state.openMenu})}>
                    <MenuIcon />
                </IconButton>
            </nav>
        )
    }
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}