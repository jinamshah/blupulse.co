import React from 'react'
import { Typography, Box } from '@mui/material'
import ReactMarkdown from 'react-markdown';

function BlogPost({ post }) {
  return (
    <Box sx={{ mx: 'auto', px: 3, py: 4 }}>
      <Typography variant="h2" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        {new Date(post.date).toLocaleDateString()}
      </Typography>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </Box>
  )
}

export default BlogPost
