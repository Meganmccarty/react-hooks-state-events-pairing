import Buttons from './Buttons';

function Comment({ id, user, comment, onDelete }) {
    console.log(id);
    
    return (
        <div>
            <p><b>{user}</b></p>
            <p>{comment}</p>
            <Buttons upvoteDefault={0} downvoteDefault={0}/>
            <br></br>
            <button onClick={() => onDelete(id)}>Remove Comment</button>
        </div>
    )
}

export default Comment;