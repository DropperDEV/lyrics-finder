export function Input({ type, placeholder, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      className=" bg-white text-gray-900 px-2 py-1 border border-gray-950 rounded-md"
    />
  );
}
