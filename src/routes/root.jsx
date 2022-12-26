import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import LoginPage from "../pages/LoginPage";
import { Outlet } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { setUser } from "../slice/authSlice";
import { useEffect } from "react";
import { useState } from "react";



const Root = () => {
  const dispatch = useDispatch()
  const [localUser] =useState(JSON.parse(localStorage.getItem('user')));
  const user = useSelector(state => state.auth.user)
  
  console.log('LOCAL USER',localUser);
  useEffect(() => {
    if (localUser) dispatch(setUser(localUser))
  },[dispatch, localUser])
  
  console.log(user);  
  let page;
  if (user) {
    page = 
    <div>
      <Header/>
      <div className="container-fluid pb-3 flex-grow-1 d-flex flex-column flex-md-row overflow-auto">
      <div className="container-fluid row flex-grow-sm-1 flex-grow-0">
        <NavBar/>
        <main className="col-md-9 overflow-auto h-100">
          <div className="bg-light border rounded-3 p-3">
            <Outlet/>
          </div>
        </main>
      </div>
      </div> 
    </div>
  }else{
    page =
      <LoginPage/>
  }
  return(
      page
  )
}

export default Root