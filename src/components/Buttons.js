import { useState } from 'react';

function Buttons({ upvoteDefault, downvoteDefault }) {
    const [upvotes, setUpvotes] = useState(upvoteDefault);
    const [downvotes, setDownvotes] = useState(downvoteDefault);

    function handleUpvotes() {
        const newUpvoteCount = upvotes + 1;
        setUpvotes(newUpvoteCount);
    }

    function handleDownvotes() {
        const newDownvoteCount = downvotes + 1
        setDownvotes(newDownvoteCount);
    }
    
    return (
        <>
            <button value={upvotes} onClick={handleUpvotes}>{upvotes} 👍</button>
            <button value={downvotes} onClick={handleDownvotes}>{downvotes} 👎</button>
        </>
    )
}

export default Buttons;