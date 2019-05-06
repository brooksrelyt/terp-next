import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.articles.map(article => (
        <li key={article.id}>
          <Link as={`/p/${article.id}`} href={`/post?id=${article.id}`}>
            <a>{article.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://umd-hub.herokuapp.com/graphql')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data}`)

  return {
    articles: data.articles.map(entry => entry.data)
  }
}

export default Index