import Link from 'next/link'

const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 }
  }).then(res => res.json())
}

export default async function Posts ({ children, params }) {
  const { id } = params
  const post = await fetchSinglePost(id)

  return (
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link style={{ color: '#09f' }} href={`/posts/${post.id}/comments`}>Ver Comentarios</Link>
      {children}
    </article>
  )
}
