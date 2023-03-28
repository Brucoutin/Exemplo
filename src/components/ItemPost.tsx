import styles from "../styles/ItemPost.module.css"
import PostModel from '../models/post'
import { NextPage } from "next"
import Router from "next/router"

interface ItemPostProps{
   post: PostModel
}
const ItemPost:NextPage<ItemPostProps> =(props) => {
    const post = props.post
    const paraComentario = () =>{
        Router.push(`/${post.id}/comment`)
    }
    return (
        <div className={styles.post} onClick={paraComentario}>
            <div className={styles.title}>{post.title}</div>
            <div className={styles.body}>
                {post.body}
            </div>
        </div>
    )
}
export default ItemPost;