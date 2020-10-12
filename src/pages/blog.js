import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { List, ListItem, Box, Image, Heading } from '@chakra-ui/core'
import { Link, graphql } from 'gatsby'

const Blog = ({ data }) => (
  <Layout>
    <SEO title="Blog" keywords={[`blog`, `iot`]} />
    <div className="container mx-auto">
      <List>
        {data.allWordpressPost.edges.map(post => (
          <ListItem key={post.node.wordpress_id}>
            <Link to={`/post/${post.node.slug}`}>
              <Box borderWith="1px" rounded="lg" p="6" display="flex">
                {post.node.featured_media ? (
                  <Box size="sm" mr="5">
                    <Image
                      src={post.node.featured_media.source_url}
                      alt={post.title}
                    />
                  </Box>
                ) : null}
                <Box flex="1">
                  <Heading as="h2" size="xl">
                    {post.node.title}
                  </Heading>
                  <div
                    dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
                  />
                </Box>
              </Box>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  </Layout>
)

export default Blog

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
  }
`
