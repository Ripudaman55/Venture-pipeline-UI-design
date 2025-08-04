import { FaHome, FaSearch, FaBroadcastTower, FaList, FaMusic, FaSmile } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <aside className="w-60 h-screen bg-white p-4 border-r shadow-sm">
      <div className="text-xl font-bold mb-8">
        <img src="/logo.png" alt="MiV" className="h-10" />
      </div>
      <nav className="space-y-6">
        <div>
          <h3 className="text-gray-600 mb-2 font-semibold">Discover</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-blue-700 font-semibold">
              <FaHome /> Home
            </li>
            <li className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer">
              <FaSearch /> Browse
            </li>
            <li className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer">
              <FaBroadcastTower /> Radio
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-600 mb-2 font-semibold">Library</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer">
              <FaList /> Playlists
            </li>
            <li className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer">
              <FaMusic /> Songs
            </li>
            <li className="flex items-center gap-2 text-gray-700 hover:text-blue-500 cursor-pointer">
              <FaSmile /> Personalized Picks
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
