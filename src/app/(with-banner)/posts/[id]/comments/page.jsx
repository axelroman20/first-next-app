const fetchCommentsPost = async (id) => {
  // await new Promise(resolve => setTimeout(resolve, 1000))
  // throw new Error('Error al cargar los comentarios')
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: { revalidate: 60 }
  }).then(res => res.json())
}

export default async function Comments ({ params }) {
  const { id } = params
  const comments = await fetchCommentsPost(id)

  return (
    <ul style={{ background: '#222', fontSize: '10px' }}>
      {comments.map(comment => (
        <li key={comment.id}>
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
          <small>{comment.email}</small>
        </li>
      ))}
    </ul>
  )
}
