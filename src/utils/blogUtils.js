import matter from 'gray-matter';

const blogPosts = import.meta.glob('../content/blog/*.md', { 
  eager: true,
  as: 'raw'
})

export function getAllPosts() {
  return Object.entries(blogPosts).map(([filepath, content]) => {
    
    const id = filepath.replace(/(\.\.\/content\/blog\/|\.md)/g, '')
    
    // Parse frontmatter and content using gray-matter
    const { data, content: mainContent } = matter(content);
    console.log(data);
    return {
      id,
      ...data,
      content: mainContent
    }
  }).sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPostById(id) {
  const content = blogPosts[`../content/blog/${id}.md`]
  if (!content) return null
  
  // Parse frontmatter and content using gray-matter
  const { data, content: mainContent } = matter(content);

  return {
    id,
    ...data,
    content: mainContent
  }
}
