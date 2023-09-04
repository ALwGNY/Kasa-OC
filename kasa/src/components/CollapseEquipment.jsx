import { useState } from "react"
import "../components/Collapse.scss"

function CollapseEquiment(props) {
    const [isContentVisible, setIsContentVisible] = useState(false)

    const showContent = () => {
        setIsContentVisible(!isContentVisible)
    }

    return <div className="dropdown">
        <div className="name">
        <h1>{props.title}</h1>
        <i className="fas fa-chevron-down" onClick={showContent}></i>
        </div>
        {isContentVisible && (
                <ul className="content">
                    {props.content.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
    </div>
}

export default CollapseEquiment