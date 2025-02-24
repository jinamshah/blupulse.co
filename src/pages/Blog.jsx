import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Typography, Box, Card, CardContent } from '@mui/material'
import { getAllPosts } from '../utils/blogUtils'

function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getAllPosts().then(setPosts)
  }, [])

  return (
    <Box sx={{ mx: 'auto', px: 3, py: 4 }}>
      <Typography variant="h2" gutterBottom>
        Blog Posts
      </Typography>
      {posts.map(post => (
        <Card key={post.id} sx={{ mb: 2 }}>
          <CardContent>
            <Link to={`/blog/${post.id}`}>
              <Typography variant="h5" gutterBottom>
                {post.title}
              </Typography>
            </Link>
            <Typography variant="subtitle2" color="text.secondary">
              {new Date(post.date).toLocaleDateString()}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              {post.excerpt}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}

export default Blog