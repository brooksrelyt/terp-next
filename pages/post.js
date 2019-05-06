import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Post = data => (
  <Layout>
    <h1>{data.title}</h1>
  </Layout>
)

Post.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post