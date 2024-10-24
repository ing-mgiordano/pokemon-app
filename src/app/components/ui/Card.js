

export default function Card({ children, className }) {
  return (
    <div
      className={`transform text-white hover:scale-105 transition-transform duration-300 ${className}`}
    >
      {children}
    </div>
  )
}
