// TODO #1: Import useState hook
import { FaHeart, FaComment, FaBookmark } from 'react-icons/fa'
import HeartActionButton from './HeartActionButton'
import CommentActionButton from './CommentActionButton'
import BookmarkActionButton from './BookmarkActionButton'
import './App.css'

const ActionsPanel = () => {

    // TODO #2: Initialize state for hearts
    
    return (
        <div className="actions-panel">
            <div className="action-item">
                {/* TODO #3: Add a click handler to update the hearts state */}
                <FaHeart/>
                {/* TODO #4: Display the hearts state */}
                {139}
            </div>
            <div className="action-item">
                <FaComment/>
                {22}
            </div>
            <div className="action-item">
                {/* TODO #5: Let's add state for bookmark */}
                <FaBookmark/>
                {239}
            </div>
            ...
        </div>
    )

    /*
    Transitioning to a presentational component
    return (
        <div className="actions-panel">
            <HeartActionButton/>
            <CommentActionButton/>
            <BookmarkActionButton/>
            ...
        </div>
    )
    */
}
export default ActionsPanel