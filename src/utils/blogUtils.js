import matter from 'gray-matter';

// const blogPosts = import.meta.glob('../content/blog/*.md', { 
//   eager: true,
//   as: 'raw'
// })
const blogPosts = import.meta.glob('../content/blog/*.md', { 
  query: '?raw',
  import: 'default'
})

export async function getAllPosts() {
  const posts = await Promise.all(
    Object.entries(blogPosts).map(async ([filepath, importFn]) => {
      const id = filepath.replace(/(\.\.\/content\/blog\/|\.md)/g, '')
      const content = await importFn()
      
      // Parse frontmatter and content using gray-matter
      const { data, content: mainContent } = matter(content);
      return {
        id,
        ...data,
        content: mainContent
      }
    })
  )
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

export async function getPostById(id) {
  const importFn = blogPosts[`../content/blog/${id}.md`]
  if (!importFn) return null
  
  const content = await importFn()
  // Parse frontmatter and content using gray-matter
  const { data, content: mainContent } = matter(content);

  return {
    id,
    ...data,
    content: mainContent
  }
}
