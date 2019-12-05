import React from 'react'
import { string } from 'prop-types'
import Link from 'next/link'
import { withApollo } from 'utils/apollo-graphcms-hoc'
import { useQuery } from '@apollo/react-hooks'

import { LIST_POSTS } from 'data/list-posts.gql'

const PostListItem = ({ id, title }) => (
  <Link href={`/blog/[postId]`} as={`/blog/${id}`}>
    <a>
      <p>{title}</p>
    </a>
  </Link>
)

PostListItem.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
}

PostListItem.displayName = 'PostListItem'

function Blog() {
  const { error, loading, data } = useQuery(LIST_POSTS)

  if (loading) return <p>Loading...</p>

  if (error) return <p>Error! {JSON.stringify(error)}</p>

  return (
    <div>
      <h1>Blog Posts</h1>
      {data.fakePosts.map(p => (
        <PostListItem key={p.id} {...p} />
      ))}
    </div>
  )
}

Blog.displayName = 'Blog'

export default withApollo(Blog)
