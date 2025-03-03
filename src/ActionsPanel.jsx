import { FaHeart, FaComment, FaBookmark } from 'react-icons/fa'
import HeartActionButton from './HeartActionButton'
import CommentActionButton from './CommentActionButton'
import BookmarkActionButton from './BookmarkActionButton'
import './App.css'

const ActionsPanel = () => {

    // TODO #1: Implement state for hearts
    // TODO #2: Implement state for bookmark
    // TODO #3: Outline state for comment

    return (
        <div className="actions-panel">
            <div className="action-item">
                <FaHeart/>
                {139}
            </div>
            <div className="action-item">
                <FaComment/>
                {22}
            </div>
            <div className="action-item">
                <FaBookmark/>
                {239}
            </div>
            ...
        </div>
    )
}

export default ActionsPanel








    /*
    Make ActionsPanel a presentational component
    return (
        <div className="actions-panel">
            <HeartActionButton/>
            <CommentActionButton/>
            <BookmarkActionButton/>
            ...
        </div>
    )
    */