import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { toast } from 'react-toastify'

const Edit = ({songList, setSongList}) => {
    const parmas = useParams()
    const initialState = {
       id: parmas.id,
       name: "",
       banner: "",
       link: "",
       artist: ""
     }
     const navigate = useNavigate()

 const [editFormData, setEditFormData] = useState(initialState)

 useEffect(()=>{
    const song = songList.find(song => song.id === parmas.id)
    setEditFormData(song)
 },[])

 const editSubmitHandler = (e) => {
    e.preventDefault()
    setSongList(songList.map((song) => song.id === parmas.id ? {...song, ...editFormData} : song))
    setEditFormData(initialState)
    toast("Song edited successfully", {theme:"dark"});
    navigate("/show")
 }

 localStorage.setItem("songList", JSON.stringify(songList));


  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-indigo-500 to-purple-600 p-6 dark:from-gray-800 dark:to-gray-900">
    <p 
      className="cursor-pointer text-white text-lg font-semibold mb-4 hover:underline"
      onClick={() => navigate("/show")} 
    >
      ⬅ Back
    </p>
    <form 
        className="flex flex-col bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 w-96 space-y-4"
        onSubmit={editSubmitHandler}
      >
        <h2 className="text-xl font-semibold text-gray-700 dark:text-white text-center">Edit the song</h2>
        <input 
          type="text" 
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
          placeholder="Song Name"  
          value={editFormData.name} 
          onChange={(e) => setEditFormData({...editFormData, name: e.target.value})}
        />
        <input 
          type="text" 
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
          placeholder="Banner"  
          value={editFormData.banner} 
          onChange={(e) => setEditFormData({...editFormData, banner: e.target.value})}
        />
        <input 
          type="text" 
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
          placeholder="Link"  
          value={editFormData.link} 
          onChange={(e) => setEditFormData({...editFormData, link: e.target.value})}
        />
        <input 
          type="text" 
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
          placeholder="Artist"  
          value={editFormData.artist} 
          onChange={(e) => setEditFormData({...editFormData, artist: e.target.value})}
        />
        <button 
          className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Edit