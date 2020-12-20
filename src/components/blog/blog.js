import { Box, Heading, Image, Text } from '@chakra-ui/core'
import React from 'react'
import { Link } from 'gatsby'

const blog = ({ posts }) => {
  console.log('blog posts', posts)
  return (
    <section className="blog-section py-8 border border-l-0 border-r-0">
      <Heading className="px-4" textAlign="center">
        Blog
      </Heading>
      <Text className="px-4 mb-12" textAlign="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
      </Text>
      <Box
        display="flex"
        justifyContent="space-between"
        className="container mx-auto max-w-6xl"
      >
        {posts.map((post, index) => {
          return index < 3 ? (
            <Link key={post.wordpress_id} to={`post/${post.slug}`}>
              <Box maxW="280px">
                <Image
                  src={post.featured_media.source_url}
                  borderRadius="10px"
                />
                <Heading as="h4" fontSize="20px" className="mb-5">
                  {post.title}
                </Heading>
                <div
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  className="mb-5"
                ></div>
                <Box d="flex" alignItems="center">
                  <Image
                    src={post.avatar}
                    alt={post.author.name}
                    className="rounded-full w-12 mb-0 mr-4"
                  />
                  <Box>
                    <Text>
                      <cite className="text-sm font-bold not-italic">
                        {post.author.name}
                      </cite>
                    </Text>
                    <Text className="text-xs">{post.date}</Text>
                  </Box>
                </Box>
              </Box>
            </Link>
          ) : null
        })}
      </Box>
    </section>
  )
}

export default blog
