import styles from "../styles/ItemComment.module.css"
import CommentModel from '../models/comment'
import { NextPage } from "next"

interface ItemCommentProps{
   comment: CommentModel
}
const ItemComment:NextPage<ItemCommentProps> =(props) => {
    const comment = props.comment

    return (
        <div className={styles.comment}>
            <div className={styles.title}>{comment.name}</div>
            <div className={styles.body}>
                {comment.body}
            </div>
        </div>
    )
}
export default ItemComment;