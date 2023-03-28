import styles from '../styles/User.module.css'
import Head from 'next/head'

import { NextPage } from 'next'
import UserModel from '../models/user'
import ItemUser from '../components/ItemUser'

export async function getServerSideProps(context: any) {
  const data = await fetch('http://jsonplaceholder.typicode.com/posts')
  const users = await data.json()
  return {
    props: {
      users
    },
  }
}

interface UserProps {
    users: UserModel[]
}

const User: NextPage<UserProps> = (props) => {

  return (
    <>
      <Head>
        <title>
          Página Principal
        </title>
        <meta name='keyworkds' content='tendências, tecnologias, pacote de viagens,'>
        </meta>
        <meta name='description' content='tudo sobre moda, viagens e tecnologia'>
        </meta>
      </Head>

      <div>
        <h1>User</h1>
      </div>

      <div className={styles.users}>
        {props.users.map(u =>{
            return <div className={styles.itemUser} key={u.id}><ItemUser user={u} /></div>
        })}
      </div>
    </>

  )
}

export default User;
