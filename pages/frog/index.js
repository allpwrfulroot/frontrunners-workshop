import React from 'react'
import Link from 'next/link'

const MY_POSTS = [
  { id: 1, title: 'NextJS is the best', slug: 'nextjs-is-the-best-8173SJ68' },
  { id: 2, title: 'Gatsby static sites', slug: 'gatsby-static-17287SHQ22' },
  { id: 3, title: 'Why React Native', slug: 'why-react-native-2H529382' },
]

function Frog() {
  return (
    <>
      <h1>Frog Posts</h1>
      {MY_POSTS.map(p => (
        <Link
          key={p.id}
          href={`/frog/[id]/[slug]`}
          as={`/frog/${p.id}/${p.slug}`}
        >
          <a>
            <p>{p.title}</p>
          </a>
        </Link>
      ))}
    </>
  )
}

Frog.displayName = 'Frog'

export default Frog
