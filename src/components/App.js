import { useState } from 'react';
import video from "../data/video.js";
import Video from './Video';
import CommentsList from './CommentsList';

// Component breakdown
/*
|--App
    |--Video
    |--CommentsList
        |--Comment
*/

// Video will need both props and state
// CommentsList will need both props and state
// Comment will also need both props and state
// Because Video and CommentsList are siblings and will need to share some state,
// state should be defined in the parent component App


function App() {
    // Add toggle comment state to parent app
    const [commentsHidden, setCommentsHidden] = useState(false);

    // Create event listener on comment button
    function handleToggle(event) {
        if (!commentsHidden) {
            // need to hide the div in CommentsList
            event.target.innerText = "Show Comments"
            event.target.parentElement.nextSibling.style.display = "none"
            setCommentsHidden(true)
        } else {
            // need to show the div in CommentsList
            event.target.innerText = "Hide Comments"
            event.target.parentElement.nextSibling.style.display = "block"
            setCommentsHidden(false)
        }
    }

    console.log(commentsHidden);

    return (
        <div className="App">
            <Video videoData={video} commentsHidden={commentsHidden} handleToggle={handleToggle}/>
            <CommentsList comments={video.comments}/>
        </div>
    );
}

export default App;
