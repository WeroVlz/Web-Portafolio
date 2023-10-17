import './InfoCard.css'
import Edgar from "../../../../assets/edgar.jpg"
import Carlos from "../../../../assets/carlos.jpg"
import { IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function InfoCard({ data }) {

    const { icon, name, age, country, major, description, github, instagram, linkedin, twitter } = data;

    return (
        <div className='info-card'>
            <img src={icon} className='info-photo'></img>
            <h1 className='info-name'>{name}</h1>
            <div className='info-container'>
                <div className='info-data'>
                    <div className='info-age'>
                        <p className='title'>Age</p>
                        <p className='info-content'>{age}</p>
                    </div>
                    <div className='info-country'>
                        <p className='title'>Country</p>
                        <p className='info-content'>{country}</p>
                    </div>
                </div>
                <div className='info-major'>
                    <p className='title'>Major</p>
                    <p className='info-content'>{major}</p>
                </div>
                <div className='info-description'>
                    <p className='title'>About me</p>
                    <p className='info-content'>{description}</p>
                </div>
                <div className='info-contact'>
                    <IconButton onClick={() => window.open(github)}>
                        <GitHubIcon className='icon-style' />
                    </IconButton>
                    <IconButton onClick={() => window.open(instagram)}>
                        <InstagramIcon className='icon-style' />
                    </IconButton>
                    <IconButton onClick={() => window.open(linkedin)}>
                        <LinkedInIcon className='icon-style' />
                    </IconButton>
                    <IconButton onClick={() => window.open(twitter)}>
                        <TwitterIcon className='icon-style' />
                    </IconButton>

                </div>
            </div>


        </div>
    )
}