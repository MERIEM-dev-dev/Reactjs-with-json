import { Link, useHistory } from "react-router-dom"; // Ligne : 74, Ligne : 8,
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState } from "react";


function Logout() {
    const history = useHistory();
  localStorage.removeItem("email")

      history.replace("/")
  return (
    <div class="container mt-5">
    
    </div>
  );
}

export default Logout;
