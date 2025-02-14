import React from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

function Show({ songList, setSongList }) {
  const navigate = useNavigate();

  const removeSong = (id) => {
    const filteredData = songList.filter((song) => song.id !== id)
    setSongList(filteredData);
    toast("Song removed successfully", {theme:"dark"});
  };
  localStorage.setItem("songList", JSON.stringify(songList));
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-indigo-500 to-purple-600 p-6 dark:from-gray-800 dark:to-gray-900">
      <p 
        className="cursor-pointer text-white text-lg font-semibold mb-4 hover:underline"
        onClick={() => navigate("/")} 
      >
        ⬅ Back
      </p>
      {songList && songList.length > 0 ? <div className="w-full max-w-3xl space-y-4">
        {songList.map((song) => (
          <div 
            key={song.id} 
            className="flex flex-col sm:flex-row items-center bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg border border-gray-300 dark:border-gray-700 space-y-4 sm:space-y-0 sm:space-x-6 "
          >
            <img 
              src={song.banner} 
              alt={song.name} 
              className="w-24 h-24 object-cover rounded-lg border border-gray-300 dark:border-gray-700"
            />
            <div className="flex flex-col flex-grow text-center sm:text-left">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-white">{song.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{song.artist}</p>
              <Link 
                to={song.link} 
                target="_blank" 
                 
                className="text-blue-500 dark:text-blue-300 text-sm hover:underline mt-2"
              >
                Listen Now
              </Link>
            </div>
            <button 
              onClick={() => removeSong(song.id)} 
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-300"
            >
              Remove
            </button>
            <button 
              onClick={() => navigate(`/edit/${song.id}`)} 
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300"
            >
              Edit
            </button>
          </div>
        ))}
      </div> : (
        <p className="text-white text-lg font-semibold mb-4">No songs added yet.</p>
      )}
    </div>
  );
}

export default Show;
