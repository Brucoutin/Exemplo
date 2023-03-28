import styles from '../../styles/DetalheUser.module.css'
import Head from 'next/head'

import { NextPage } from 'next'
import PostModel from '../../models/post'
import UserModel from '../../models/user'

export async function getServerSideProps(context: any) {
  const { params } = context
  const { id } = params
  const respUser = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const user = await respUser.json()
  return {
    props: {
      user
    },
  }
}

interface DetalheUserProps {
  user: UserModel
}

const DetalheUser: NextPage<DetalheUserProps> = (props) => {

  const user = props.user

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

      <div className={styles.detalhe}>
        <h1>Detalhe usuário</h1>
        <div>
          {user.name}
        </div>
        <div>
          {user.email}
        </div>
        <div>
          {user.website}
        </div>
      </div>
    </>

  )
}

export default DetalheUser;
