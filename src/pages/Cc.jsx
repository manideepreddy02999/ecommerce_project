import React from "react";
import {useContext} from "react";
import { AuthContext } from "../authContext/Auth";
const Cc = () => {
  const  auth  = useContext(AuthContext);
  console.log(auth);
  return <div>Cc
    <div>{auth.token}</div>
    <div>{auth.user}</div>

  </div>;
};

export default Cc;
