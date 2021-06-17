import Buttons from './Buttons';

function Video({ videoData, toggleComments, handleToggle }) {

    return (
        <div>
            <iframe
                width="919"
                height="525"
                src={videoData.embedUrl}
                frameBorder="0"
                allowFullScreen
                title="Thinking in React"
            />
            <h1>{videoData.title}</h1>
            <h3>{videoData.views} Views | Uploaded on {videoData.createdAt}</h3>
            <div>
                <Buttons upvoteDefault={videoData.upvotes} downvoteDefault={videoData.downvotes}/>
            </div>
            <br></br>
            <button value={toggleComments} onClick={handleToggle}>Hide Comments</button>
            <hr></hr>
        </div>
    )
}

export default Video;