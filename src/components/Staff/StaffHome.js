import React from 'react'


const StaffHome = ({ user }) => {
  return <p>Hi, {user.name ? user.name : "friend"}</p>
}

export default StaffHome;