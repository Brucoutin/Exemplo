import styles from "../styles/ItemUser.module.css"
import UserModel from '../models/user'
import { NextPage } from "next"
import Router from "next/router"

interface ItemUserProps{
   user: UserModel
}
const ItemUser:NextPage<ItemUserProps> =(props) => {
    const user = props.user
    const paraDetalhe = () =>{
        Router.push(`/${user.id}/detalhe-user`)
    }
    return (
        <div className={styles.post} onClick={paraDetalhe}>
            <div>
                {user.name}
            </div>
            <div>
                {user.email}
            </div>
        </div>
    )
}
export default ItemUser;