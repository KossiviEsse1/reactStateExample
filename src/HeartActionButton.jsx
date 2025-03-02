import { useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import './App.css'

const HeartActionButton = () => {
    const [count, setCount] = useState(139)
    const handleClick = () => {
        setCount(count => count + 1)
    }

    return (
        <div className="action-item">
            <FaHeart onClick={handleClick}/>
            {count}
        </div>
    )
}

export default HeartActionButton