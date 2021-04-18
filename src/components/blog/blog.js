import { Flex, Heading, Text } from '@chakra-ui/core'
import React from 'react'
import Post from './post'

const blog = ({ posts }) => {
  return (
    <section className="blog-section py-8 lg:py-12 border border-l-0 border-r-0">
      <Heading className="px-4" textAlign="center">
        Blog
      </Heading>
      <Text className="px-4 mb-12" textAlign="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
      </Text>

      <Flex
        direction={["column", "row"]}
        justify="space-between"
        className="container mx-auto max-w-6xl"
      >
        {posts.map((post, index) => {
          return index < 3 ? <Post post={post} key={post.wordpress_id} /> : null
        })}
      </Flex>
    </section>
  )
}

export default blog
