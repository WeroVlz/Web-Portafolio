import './PhotoCard.css'

export default function PhotoCard({data}){

    const{image, name} = data;

    return(
        <div className="photo-card">
            <img src={image}></img>
            <h1 className='name'>{name}</h1>
        </div>
    )
}