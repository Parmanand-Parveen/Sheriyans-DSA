import { nanoid } from "nanoid";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

function Add({ songList, setSongList }) {
  const initialState = {
    id: nanoid(),
    name: "",
    banner: "",
    link: "",
    artist: ""
  };

  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    e.preventDefault();
    setSongList([...songList, formData]);
    setFormData(initialState);
    toast("Song added successfully",{theme: "dark"});
    navigate("/show");
  };
  localStorage.setItem("songList", JSON.stringify(songList));

  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-gray-800 dark:to-gray-900 w-screen">
    <Link to={"/show"} className="text-white text-lg font-semibold mb-4 p-4 hover:underline">Show Songs 🎶</Link>
    <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-gray-800 dark:to-gray-900">
    {/* <div class="size-20 bg-center bg-cover rounded-full bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXyKzTl8cLNOZqWHsC6BqQYu9l7CYW36vO9g&s)] absolute right-96 top-24 bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% animate-[spin_5s_linear_infinite]"></div> */}
      <form 
        className="flex flex-col bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 w-96 space-y-4"
        onSubmit={handleChange}
      >
        <h2 className="text-xl font-semibold text-gray-700 dark:text-white text-center">Add a New Song</h2>
        <input 
          type="text" 
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
          placeholder="Song Name"  
          value={formData.name} 
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <input 
          type="text" 
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
          placeholder="Banner"  
          value={formData.banner} 
          onChange={(e) => setFormData({...formData, banner: e.target.value})}
        />
        <input 
          type="text" 
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
          placeholder="Link"  
          value={formData.link} 
          onChange={(e) => setFormData({...formData, link: e.target.value})}
        />
        <input 
          type="text" 
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
          placeholder="Artist"  
          value={formData.artist} 
          onChange={(e) => setFormData({...formData, artist: e.target.value})}
        />
        <button 
          className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </div>
    </div>);
}

export default Add;