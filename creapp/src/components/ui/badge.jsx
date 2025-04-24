const Badge = ({ children, color = "bg-blue-100 text-blue-800" }) => {
    return (
      <span
        className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${color}`}
      >
        {children}
      </span>
    );
  };
  
  export default Badge;