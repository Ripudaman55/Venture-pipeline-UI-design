export default function Header() {
  return (
    <div className="flex justify-between items-center bg-[#006699] text-white p-4">
      <div></div>
      <div className="space-x-4">
        <button className="bg-white text-black px-4 py-1 rounded">Sign in</button>
        <button className="bg-gray-900 text-white px-4 py-1 rounded">Register</button>
      </div>
    </div>
  );
}
