import './Card.scss'
import { Link } from 'react-router-dom'


function Card (props) {
    return <Link to='/appartement' className='card'>
        <img src={props.imageUrl} alt="image de l'appartement" />
        <div className='title'>
        <h1 key={props.id}>{props.title}</h1>
        </div>
    </Link>
}
export default Card