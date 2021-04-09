import postComment from "../utils/functions";

const CommentAdder = () => {
    return (
        <div>
        <form onSubmit={e => e.preventDefault()}>
            <label>
            Add a comment: <input type= "text"/>
            </label> 
        </form>
        <button className= "Submit-Comment" onClick= {() => {}}>Submit</button>
        </div>
    )
}

export default CommentAdder;