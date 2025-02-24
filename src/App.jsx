import { Routes, Route, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Blog from './pages/Blog'
import BlogPost from './components/BlogPost'
import NotFound from './pages/NotFound'
import { getPostById } from './utils/blogUtils'

function PostWrapper() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPostById(id).then(post => {
      setPost(post)
      setLoading(false)
    })
  }, [id])
  
  if (loading) return <div>Loading...</div>
  if (!post) return <NotFound />
  
  return <BlogPost post={post} />
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<PostWrapper />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App