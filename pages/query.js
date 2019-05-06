// import { Query } from 'react-apollo'
// import gql from 'graphql-tag'
// import Layout from '../components/MyLayout.js'
// import Link from 'next/link'
// import fetch from 'isomorphic-unfetch'

// export const allPostsQuery = gql`
//   query allPosts($id:String!) {
// 	  article(id: $id) {
// 	    data {
// 	      id
// 	      title
// 	      subtitle
// 	      body
// 	      url
// 	      summary
// 	      hero_image {
// 	        url_1200_630
// 	      }
// 	    }
// 	  }
// 	}
// `

// // export const allPostsQueryVars = {
// //   limit: 5
// // }

// export default function PostList () {
//   return (
//     <Query query={allPostsQuery}>
//       {({ loading, error, data: { allPosts, _allPostsMeta }, fetchMore }) => {
//         if (error) return <ErrorMessage message='Error loading posts.' />
//         if (loading) return <div>Loading</div>

//         return (
//           <section>
//             <ul>
//               {allPosts.map((post, index) => (
//                 <li key={post.id}>
//                   <div>
//                     <a href={post.url}>{post.title}</a>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </section>
//         )
//       }}
//     </Query>
//   )
// }

// function loadMorePosts (allPosts, fetchMore) {
//   fetchMore({
//     variables: {
//       skip: allPosts.length
//     },
//     updateQuery: (previousResult, { fetchMoreResult }) => {
//       if (!fetchMoreResult) {
//         return previousResult
//       }
//       return Object.assign({}, previousResult, {
//         // Append the new posts results to the old one
//         allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
//       })
//     }
//   })
// }
