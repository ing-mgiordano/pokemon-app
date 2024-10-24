

export default function Button({ children, className, ...props }) {
  return (
    <button 
        className={`px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300 ${className}`}
        {...props}
    >
        {children}
    </button>
  )
}
