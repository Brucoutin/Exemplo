import styles from '../../styles/Comment.module.css'
import Head from 'next/head'

import { NextPage } from 'next'
import CommentModel from '../../models/comment'
import ItemComment from '../../components/ItemComment'
import PostModel from '../../models/post'
import ItemPost from '../../components/ItemPost'

export async function getServerSideProps(context: any) {
  const { params } = context
  const { id } = params
  const respComment = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  const comment = await respComment.json()
  const respPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = await respPost.json()
  return {
    props: {
      comment,
      post
    },
  }
}

interface CommentProps {
  comment: CommentModel[]
  post: PostModel
}

const Comment: NextPage<CommentProps> = (props) => {


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
        Comentário do POST
      </div>
      <br />
      <br />

      <div className={styles.comment}>
        <div className={styles.post}>
          <div>
            Post Selecionado
          </div>
          <ItemPost post={props.post} />
        </div>

        <div className={styles.commentList}>
          {
            props.comment.map(a => {
              return <div className={styles.itemComment} key={a.id}><ItemComment comment={a} /></div>
            })
          }
        </div>

      </div>
    </>

  )
}

export default Comment;
