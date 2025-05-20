import React from 'react'
import BlogCard from '../BlogCard'

const BlogsComponent = ({ blogs }) => {
    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {blogs.map((blog) => (
                // <BlogCard blog={blog} key={blog.id} />
                <BlogCard key={blog.id}>
                    <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-md mb-4" />
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
                    <p className="text-gray-600 mb-4">{blog.content}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>Author: <strong>{blog.author}</strong></span>
                        <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </div>
                </BlogCard>
            ))}
        </div>
    )
}

export default BlogsComponent
