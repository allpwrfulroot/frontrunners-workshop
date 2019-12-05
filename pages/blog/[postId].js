import React from 'react'
import { string } from 'prop-types'
import { useQuery } from '@apollo/react-hooks'
import Markdown from 'react-markdown'

import { withApollo } from 'utils/apollo-graphcms-hoc'
import { GET_POST } from 'data/get-post.gql'

const MyMarkdownImage = props => <img {...props} style={{ maxWidth: '100%' }} />

function Post({ id }) {
  const { error, loading, data } = useQuery(GET_POST, {
    variables: { id },
  })

  if (loading || !data || !data.fakePost) return <p>Loading...</p>

  if (error) return <p>Error! {JSON.stringify(error)}</p>

  return (
    <div>
      <h2>{data.fakePost.title}</h2>
      <p>
        By {data.fakePost.fakeAuthor.name}, {data.fakePost.fakeAuthor.title}
      </p>
      <hr />
      <Markdown
        source={data.fakePost.content}
        renderers={{
          image: MyMarkdownImage,
        }}
      />
    </div>
  )
}

Post.getInitialProps = ctx => {
  const { query } = ctx
  return { id: query.postId }
}

Post.propTypes = {
  id: string.isRequired,
}

Post.displayName = 'Post'

export default withApollo(Post)
