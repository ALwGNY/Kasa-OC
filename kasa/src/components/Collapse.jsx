import { useState } from "react"
import "../components/Collapse.scss"

function Collapse(props) {
    const [isContentVisible, setIsContentVisible] = useState(false)

    const showContent = () => {
        setIsContentVisible(!isContentVisible)
    }

    return <div className="dropdown">
        <span className="name">{props.tittle}
        <i className="fas fa-chevron-down" onClick={showContent}></i>
        </span>
        {isContentVisible && <p className="content">{props.content}</p>}
    </div>
}

export default Collapse