
// const BlogCard = ({ blog }) => {
//     return (
//         <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
//             <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-md mb-4" />
//             <h2 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
//             <p className="text-gray-600 mb-4">{blog.content}</p>
//             <div className="flex items-center justify-between text-sm text-gray-500">
//                 <span>Author: <strong>{blog.author}</strong></span>
//                 <span>{new Date(blog.date).toLocaleDateString()}</span>
//             </div>
//         </div>
//     )
// }

// export default BlogCard



const BlogCard = ({children}) => {
    console.log(children);
    
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
           {children}
        </div>
    )
}

export default BlogCard
