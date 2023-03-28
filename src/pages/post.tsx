import styles from '../styles/Post.module.css'
import Head from 'next/head'

import ItemPost from '../components/ItemPost'
import { NextPage } from 'next'
import PostModel from '../models/post'

export async function getServerSideProps(context: any) {
  const data = await fetch('http://jsonplaceholder.typicode.com/posts')
  const post = await data.json()
  console.log(post)
  return {
    props: {
      post
    },
  }
}

interface PostProps {
  post: PostModel[]
}

const Post: NextPage<PostProps> = (props) => {

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

      <div className={styles.post}>
        {
          props.post.map(a => {
            return <div className={styles.postItem} key={a.id}><ItemPost post={a} /></div>
          })
        }
      </div>

    </>

  )
}

export default Post;
