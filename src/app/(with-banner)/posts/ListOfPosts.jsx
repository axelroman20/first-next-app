import Link from 'next/link'
import { LikeButton } from './LikeButton'

const fetchPost = () => {
  /*
  * getStaticProps
  * -> return fetch('https://jsonplaceholder.typicode.com/posts')
  *      .then(res => res.json())
  */

  /*
  * getServerSideProps
  * -> return fetch('https://jsonplaceholder.typicode.com/posts', {
  *     cache: 'no-store' }).then(res => res.json())
  */

  //* Incremental Static Regeneration
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60 }
  }).then(res => res.json())
}

export default async function ListOfPosts () {
  const posts = await fetchPost()

  return posts.slice(0, 5).map(post => (
    <article key={post.id}>
      <Link href={`/posts/${post.id}`}>
        <h2 style={{ color: '#09f' }}>{post.title}</h2>
      </Link>
      <p>{post.body}</p>
      <LikeButton id={post.id} />
    </article>
  ))
}
