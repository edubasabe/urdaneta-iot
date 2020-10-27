import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { List, ListItem, Box, Image, Heading, Text } from '@chakra-ui/core'
import { Link, graphql } from 'gatsby'

const Blog = ({ data }) => (
  <Layout>
    <SEO title="Blog" keywords={[`blog`, `iot`]} />
    <div className="container mx-auto">
      <List>
        {data.allWordpressPost.edges.map(post => (
          <ListItem key={post.node.wordpress_id}>
            <Link to={`/post/${post.node.slug}`}>
              <Box borderWith="1px" rounded="lg" p="6" display={{ md: 'flex' }}>
                {post.node.featured_media ? (
                  <Box flexShrink="0">
                    <Image
                      src={post.node.featured_media.source_url}
                      alt={post.title}
                      rounded="lg"
                      width={{ md: 40 }}
                    />
                  </Box>
                ) : null}
                <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                  <Heading size="xl" className="mb-4">
                    {post.node.title}
                  </Heading>
                  <Text
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
