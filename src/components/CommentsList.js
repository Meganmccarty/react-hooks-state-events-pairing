import { useState } from 'react';
import Comment from './Comment';

function CommentsList({ comments }) {
    const [search, setSearch] = useState("");
    const [commentsArray, setCommentsArray] = useState(comments);
    const [sort, setSort] = useState(false);
    const commentCount = commentsArray.length;

    const commentsToDisplay = commentsArray.filter(comment =>
        comment.user.toLowerCase().includes(search.toLowerCase())
    )

    const commentsList = commentsToDisplay
        .map(comment =>
            <Comment
                key={comment.id}
                id={comment.id}
                user={comment.user}
                comment={comment.comment}
                onDelete={handleDelete}
            />
        )

    function handleSearch(event) {
        setSearch(event.target.value)
    }

    function handleDelete(id) {
        const newCommentsArray = commentsArray.filter(comment => comment.id !== id);
        setCommentsArray(newCommentsArray);
    }

    function compareAsc(a, b) {
        const user1 = a.user.toLowerCase();
        const user2 = b.user.toLowerCase();

        if (user1 > user2) {
            return 1
        } else if (user1 < user2) {
            return -1
        }
        return 0;
    }

    function compareDesc(a, b) {
        const user1 = a.user.toLowerCase();
        const user2 = b.user.toLowerCase();

        if (user1 > user2) {
            return -1
        } else if (user1 < user2) {
            return 1
        }
        return 0;
    }

    function handleSort(event) {
        console.log("First sort: asc")
        const newCommentsArray = [...commentsArray];
        if (!sort) {
            event.target.innerText = "Sort Comments by User Name (desc)"
            newCommentsArray.sort(compareAsc)
            setSort(true)
            setCommentsArray(newCommentsArray)
        } else if (sort) {
            event.target.innerText = "Sort Comments by User Name (asc)"
            newCommentsArray.sort(compareDesc)
            setSort(false)
            setCommentsArray(newCommentsArray)
        }
    }

    return (
        <div>
            <h2>{commentCount} Comments</h2>
            <input
                type="text"
                name="search"
                placeholder="User Search..."
                value={search}
                onChange={handleSearch}
            >
            </input>
            <button onClick={handleSort}>Sort Comments by User Name (asc)</button>
            {commentsList}
        </div>
    )
}

export default CommentsList;