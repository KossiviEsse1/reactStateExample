import { FaBookmark } from 'react-icons/fa'
import './App.css'

const BookmarkActionButton = () => {

    return (
        <div className="action-item">
            <FaBookmark onClick={handleClick}/>
            {count}
        </div>
    )
}

export default BookmarkActionButton