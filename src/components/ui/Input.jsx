export function Input({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange && onChange(e)} // Verifica se onChange foi passado
      className=" bg-[#ff8906] text-gray-900 px-2 py-1 border-2 border-[#e53170] rounded-md  focus:border-[#e531b8] "
    />
  );
}
