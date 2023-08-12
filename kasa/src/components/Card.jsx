import './Card.scss'
import { Link } from 'react-router-dom'


function Card (props) {

    return <Link to='/appartement' className='card' id={props.id}
     state={{
        FlatId: props.id}}>
            
        <img src={props.imageUrl} alt="appartement" />
        <div className='title'>
        <h1 key={props.index}>{props.title}</h1>
        </div>
    </Link>
}
export default Card