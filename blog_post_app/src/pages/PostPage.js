import { useParams, Link } from "react-router-dom";

export default function PostPage({posts, handleDelete }) {

  const {id} = useParams();
  const post = posts.find(post => (post.id).toString() === id );

  return (
    <main className="PostPage">
        <article className="post">
          {posts &&
            <>
              <h2>{post.id}</h2>
              <p className="postDate">{post.datetime}</p>
              <p className="postBody">{post.body}</p>
              <button onClick={() => handleDelete(post.id)}>Delete Post</button>
            </>
          }
          {!post &&
            <>
              <h2>Post Not Found</h2>
              <p>Well, that's disappointing.</p>
              <p>
                <Link to='/'>Visit Our Homepage</Link>
              </p>
            </>
          }
        </article>
    </main>
  )
}
