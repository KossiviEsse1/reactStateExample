import { useState } from 'react'
import { FaBookmark } from 'react-icons/fa'
import './App.css'

const BookmarkActionButton = () => {
    const [count, setCount] = useState(239)
    const handleClick = () => {
        setCount(count => count + 1)
    }

    return (
        <div className="action-item">
            <FaBookmark onClick={handleClick}/>
            {count}
        </div>
    )
}

export default BookmarkActionButton