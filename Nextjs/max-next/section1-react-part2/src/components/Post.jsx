
import classes from "./Post.module.css"

const names = ["max", "manuel"];


// {name, body} or props.name etc.
const Post = (props) => {

    const chosenName = Math.random() > 0.5 ? names[0] : names[1];


    return (
        <li className={classes.post}>
            <p className={classes.author}>{props.author}</p>
            <p className={classes.text}>{props.body}</p>
        </li>
    );
}


export default Post;