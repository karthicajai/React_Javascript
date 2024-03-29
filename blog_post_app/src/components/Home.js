import React from 'react'
import Feed from './Feed'

export default function Home({posts}) {
  return (
    <main className="Home">
        {posts.length ? (
          <Feed posts={posts}></Feed>
        ) : (
          <p style={{ marginTop: "2rem" }}>
              No posts to display.
          </p>
        )}
    </main>
  )
}
