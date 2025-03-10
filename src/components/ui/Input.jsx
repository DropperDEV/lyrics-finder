export function Input({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange && onChange(e)} // Verifica se onChange foi passado
      className=" bg-white text-gray-900 px-2 py-1 border border-gray-950 rounded-md"
    />
  );
}
