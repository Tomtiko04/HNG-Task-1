import React from 'react'
import { ProfileImg } from '../assets'

const Profile = () => {
  return (
    <>
    <div id="profile">
        <img src={ProfileImg} alt="dp" id='profile__img' />
        <h3 id='twitter'>Ogunneye Oyinkansola</h3>
        <p id='slack'>Oyinkansola</p>
    </div>
    </>
  )
}

export default Profile