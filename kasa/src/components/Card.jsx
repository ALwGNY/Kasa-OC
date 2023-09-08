import './Card.scss'
import { Link, Navigate } from 'react-router-dom'


function Card (props) {

    const urlWithId = `/appartement?id:${props.id}`

    

    return <Link to={urlWithId} className='card' id={props.id}
     state={{
        FlatId: props.id}}>
                
        <img src={props.imageUrl} alt="appartement" />
        <div className='title'>
        <h1 key={props.index}>{props.title}</h1>
        </div>
    </Link>
}
export default Card