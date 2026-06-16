

import React from 'react'

const Logout = () => {
    const handleLogout = () => {
        // Clear user data from localStorage or context
        localStorage.removeItem("token");
        // Redirect to login page or home page
        window.location.href = "/login"; // Change this to your desired redirect path
      }


  return (
    <div>Logout</div>
  )
}

export default Logout