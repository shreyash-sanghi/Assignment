import React from "react";
import { Route,Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Data from "./Data";
const Router = ()=>{
    return(
        <>
        <Routes>
      <Route exact path="/" Component={Dashboard}></Route>
      <Route exact path="/data/:id" Component={Data}></Route>
      </Routes>
        </>
    )
}

export default Router;