import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Box, Heading, Link } from '@chakra-ui/core'
import { Link as GatsbyLink } from 'gatsby'

const BlogPostTemplate = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.wordpressPost.title}
        description={data.wordpressPost.description}
      />
      <section
        style={{
          backgroundImage: `url(${data.wordpressPost.featured_media.source_url})`,
        }}
      >
        <Box
          className="container mx-auto text-white flex flex-wrap items-start"
          height="32"
        >
          <Link
            as={GatsbyLink}
            to="/blog"
            className="block w-full mt-3 mb-auto"
          >
            Volver
          </Link>
          <Heading as="h2" my="5" className="mt-4 shadow-sm">
            {data.wordpressPost.title}
          </Heading>
        </Box>
      </section>
      <section className="container mx-auto pt-5">
        <div
          style={{ marginTop: 20 }}
          dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
        />
      </section>
    </Layout>
  )
}

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
      featured_media {
        source_url
      }
    }
  }
`
