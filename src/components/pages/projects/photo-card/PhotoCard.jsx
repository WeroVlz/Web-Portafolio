import './PhotoCard.css'

export default function PhotoCard({data, onClick}){

    const{image, name} = data;

    return(
        <div className="photo-card">
            <img src={image} onClick={onClick}></img>
            <h1 className='name'>{name}</h1>
        </div>
    )
}