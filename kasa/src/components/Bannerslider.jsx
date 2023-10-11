import { useState } from 'react'
import './Bannerslider.scss'



const BannerSlider = (props) => {
    const picture = props.picture
    const [currentPicture, setCurrentPicture] = useState(0)

    const getClassName = (i) => {
        if (i === currentPicture) return "show"
        return ""
    }

    const nextSlide = () => {
        setCurrentPicture((currentPicture + 1) % picture.length)
    }

    const nextPrevious = () => {
        const newCurrentPicture = currentPicture - 1
        if (newCurrentPicture < 0) {
            setCurrentPicture(picture.length - 1)
            return
        }
        setCurrentPicture(currentPicture - 1)
    }

    return (
        <div className="carrousel">
            {picture.map((pic, i) => (
                <img src={pic} alt="slider" key={pic} className={getClassName(i)} />
            ))}
            {picture.length > 1 && (
                <div>
                    <button onClick={nextSlide}><i className="fa-solid fa-chevron-up rightarrow"></i></button>
                    <button onClick={nextPrevious}><i className="fa-solid fa-chevron-up leftarrow"></i></button>
                    <p className='counter'> {currentPicture + 1} / {picture.length}</p>
                </div>
            )}
        </div>
    )
}

export default BannerSlider