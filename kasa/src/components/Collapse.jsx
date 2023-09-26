import { useState } from "react"
import "../components/Collapse.scss"

function Collapse(props) {
    const [isContentVisible, setIsContentVisible] = useState(false);

    const showContent = () => {
        setIsContentVisible(!isContentVisible);
    };

    return (
        <div className="dropdown">
            <div className="name">
                <h1>{props.title}</h1>
                <i className={`fas fa-chevron-down ${isContentVisible ? 'rotate' : 'rotatereverse'}`}
                    onClick={showContent}
                ></i>
            </div>
            {isContentVisible && <p className="content">{props.content}</p>}
        </div>
    );
}


export default Collapse