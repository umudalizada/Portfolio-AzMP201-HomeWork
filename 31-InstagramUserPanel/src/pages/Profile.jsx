import React from 'react'

const Profile = () => {
    let profil=JSON.parse(localStorage.getItem("userget")) || []

  return (
<>
  {/* component */}
  <div className="rounded-3xl overflow-hidden shadow-xl mx-auto max-w-xs my-3 bg-blue-500">
    <img src="https://i.imgur.com/dYcYQ7E.png" className="w-full" />
    <div className="flex justify-center -mt-8">
      <img
        src={profil.image}
        className="rounded-full border-solid border-white border-2 -mt-3"
      />
    </div>
    <div className="text-center px-3 pb-6 pt-2">
      <h3 className="text-white text-sm bold font-sans">{profil.name} {profil.surname}</h3>
      <p className="mt-2 font-sans font-light text-white">
        Hello, i'm from another the other side!
      </p>
    </div>
    <div className="flex justify-center pb-3 text-white">
      <div className="text-center mr-3 border-r pr-3">
        <h2>{profil.posts.length}</h2>
        <span>Posts</span>
      </div>
      <div className="text-center">
        <h2>{profil.friends.length}</h2>
        <span>Friends</span>
      </div>
    </div>
  </div>
</>

  )
}

export default Profile
