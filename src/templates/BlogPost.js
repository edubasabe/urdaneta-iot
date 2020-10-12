import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Heading, Link } from '@chakra-ui/core'
import { Link as GatsbyLink, graphql } from 'gatsby'

const BlogPostTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.wordpressPost.title}
      description={data.wordpressPost.description}
    />
    <section className="container mx-auto pt-5">
      <Link as={GatsbyLink} to="/blog">
        Volver
      </Link>
      <Heading as="h2" my="5">
        {data.wordpressPost.title}
      </Heading>
      <div
        style={{ marginTop: 20 }}
        dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
      />
    </section>
  </Layout>
)

export default BlogPostTemplate
export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
      author {
        name
      }
    }
  }
`
