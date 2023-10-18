import './Resume.css'
import CVCarlos from '../../../assets/cvcarlos.PNG'
import CVEdgar from '../../../assets/cvedgar.jpg'

export default function Resume(){
    return(
        <div className='cv-container'>
            <img src={CVEdgar} className='cv-photo'/>
            <img src={CVCarlos} className='cv-photo'/>
        </div>
    )
}
