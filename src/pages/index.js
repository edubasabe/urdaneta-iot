import React from 'react'
import IndexHeroBackground from '../images/bg-header@2x.jpg'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Features from '../components/features/features'
import Hero from '../components/hero/hero'
import Blog from '../components/blog/blog'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  let {
    allWordpressPost: { edges: posts },
  } = data

  const {
    allWordpressAcfPosts: { edges: avatars },
  } = data

  posts = posts.map((item, index) => {
    return {
      ...item.node,
      avatar: avatars[index].node.acf.avatar
        ? avatars[index].node.acf.avatar.source_url
        : null,
    }
  })
  console.log(posts)
  console.log(avatars)
  return (
    <Layout>
      <SEO title="Home" />
      <Hero background={IndexHeroBackground} />
      <Features />
      <Blog posts={posts} />
    </Layout>
  )
}

export default IndexPage
export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          wordpress_id
          title
          excerpt
          slug
          author {
            name
          }
          date(formatString: "MMMM DD, YYYY")
          featured_media {
            source_url
          }
        }
      }
    }
    allWordpressAcfPosts {
      edges {
        node {
          acf {
            avatar {
              source_url
            }
          }
        }
      }
    }
  }
`
