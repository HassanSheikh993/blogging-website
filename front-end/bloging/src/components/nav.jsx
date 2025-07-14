import { NavLink } from "react-router-dom"
import "../styles/nav.css"
import { useEffect, useState } from "react";
import { fetchUserName } from "../api/fetchingUserName";

import { useNavigate } from "react-router-dom";
export function Nav() {
  const navigator = useNavigate();
  const [userName,setUserName] = useState("");

  const fetchingUserName = async()=>{
    const result = await fetchUserName();
    setUserName(result.userName);
  }

  useEffect(()=>{
    fetchingUserName();
    //  window.location.reload();

  },[])


  function handleGoToLogin(){
    navigator("/signIn")
  }


  return (

     <header>
    <h1>Blogify</h1>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/trending">Trending</NavLink>
      <NavLink to="/create">Create Blog</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/explore">Explore</NavLink>
    </nav>
    {userName ? <h2 className="nav_pointer" onClick={handleGoToLogin}>{userName}</h2> : <h2 className="nav_pointer" onClick={handleGoToLogin}>Login/Register</h2>}
  
    </header>
  );
}