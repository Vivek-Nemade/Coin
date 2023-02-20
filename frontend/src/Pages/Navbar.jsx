import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{height:"40px", backgroundColor:'lightgray', justifyContent:"center", display:"flex"}}>
        <p style={{color:"black", background:"white"}}>
            <Link to="/" >Home</Link>
        </p>
    </div>
  )
}

export default Navbar