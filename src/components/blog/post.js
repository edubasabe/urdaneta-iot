import React from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/core'
import { Link } from 'gatsby'

const post = ({ post }) => (
  <Link d="flex" to={`post/${post.slug}`} className="px-8">
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
  </Link>
)

export default post