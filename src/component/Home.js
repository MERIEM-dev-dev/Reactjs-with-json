import React from "react";
import { useHistory } from "react-router-dom"; //ligne: 86 Ligne:24

function Home() {
  const history = useHistory();
let email=localStorage.getItem("email")

  if(email===null){   //username===null
  history.replace("/")

}


  return (
    <main>
      <nav class="navbar navbar-expand-lg navbar-light topnav">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Home page
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item ">
                <a href="/Logout" className="nav-link bg-white rounded">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <p>Welcome {localStorage.getItem("email")}
               </p>
      
    </main>
  );
}

export default Home;
