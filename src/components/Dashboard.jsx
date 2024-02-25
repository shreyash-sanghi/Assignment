import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

import {
  faMenorah,
  faComment,
  faDatabase,
  faChartBar,
  faCog,
  faSignOutAlt,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons"; // Make sure you have Font Awesome icons configured
const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from an API or use the provided user data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = () => {
    const results = users.filter(user => user.id.toString() === searchTerm);
    setSearchResults(results);
  };

  const handleDelete = (id) => {
    // Filter out the user with the specified id and update the state
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };
  useEffect(() => {
    const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle"),
      sidebar = body.querySelector("nav"),
      sidebarToggle = body.querySelector(".sidebar-toggle");

    let getMode = localStorage.getItem("mode");
    if (getMode && getMode === "dark") {
      body.classList.toggle("dark");
    }

    let getStatus = localStorage.getItem("status");
    if (getStatus && getStatus === "close") {
      sidebar.classList.toggle("close");
    }

    modeToggle.addEventListener("click", () => {
      body.classList.toggle("dark");
      if (body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
      } else {
        localStorage.setItem("mode", "light");
      }
    });

    sidebarToggle.addEventListener("click", () => {
      sidebar.classList.toggle("close");
      if (sidebar.classList.contains("close")) {
        localStorage.setItem("status", "close");
      } else {
        localStorage.setItem("status", "open");
      }
    });

    // Cleanup function
    return () => {
      modeToggle.removeEventListener("click", () => {});
      sidebarToggle.removeEventListener("click", () => {});
    };
  }, []); // Empty dependency array ensures that this effect runs only once after the initial render

  return (
    <>
      <div>
        <nav>
          <div className="logo-name">
            <div className="logo-image">
              <img src="images/logo.png" alt="" />
            </div>
            <span className="logo_name">Rablo</span>
          </div>

          <div className="menu-items">
            <ul className="nav-links">
              <li>
                <a href="#">
                  
                  <span className="link-name">Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#">
                  
                  <span className="link-name">Employee Salary</span>
                </a>
              </li>
              <li>
                <a href="#">
                  
                  <span className="link-name">Mailbox</span>
                </a>
              </li>
              <li>
                <a href="#">
                 
                  <span className="link-name">Pending Requests</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="link-name">Task Sheet</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="link-name">Work Days</span>
                </a>
              </li>
            </ul>

            <ul className="logout-mode">
              <li>
                <a href="#">
                  <span className="link-name">Logout</span>
                </a>
              </li>
              <li className="mode">
                <a href="#">
                  <span className="link-name">Dark Mode</span>
                </a>
                <div className="mode-toggle">
                  <span className="switch"></span>
                </div>
              </li>
            </ul>
          </div>
        </nav>
       
        

        <section className="dashboard">
          <div className="top">
            <i className="uil uil-bars sidebar-toggle"></i>

            <div className="search-box">
              <i className="uil uil-search"></i>
              <input
               type="text"
               placeholder="Search by ID"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="search-btn" onClick={handleSearch}>            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/1200px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png" height={34} alt="" />
</button>

          </div>
          <table className="user-table pop-table">       
          <tbody className="">
          {searchResults.length > 0 && (
  <table className="user-table pop-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody className="">
      {searchResults.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>
            <button className="edit-btn" ><Link to={`/data/${user.id}`}>Edit</Link></button>
          </td>
          <td>
            <button className="delete-btn" onClick={() => handleDelete(user.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
)}

 

          </tbody>
        </table>

          <div className="dash-content">
          <div className="activity">
              <div className="title">
                <img className="user-logo" src="https://w1.pngwing.com/pngs/945/265/png-transparent-icon-user-symbol-icon-design-button-toolbar-yellow-text-circle-line.png" alt="" />
                <span className="text">Employee Dashboard</span>
              </div>

              <div>
                <div></div>
                <div className="table-container">
                  <table className="user-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>
        <Link className="edit-btn" to={`/data/${user.id}`}>Edit</Link>
      </td>
      <td>
        <button className="delete-btn" onClick={() => handleDelete(user.id)}>Delete</button>
      </td>
    </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="overview">
              <div className="title">
                <i className="uil uil-tachometer-fast-alt"></i>
                <span className="text">Dashboard Analytics</span>
              </div>

              <div className="boxes">
                <div className="box box1">
                  <i className="uil uil-thumbs-up"></i>
                  <span className="text">Total Employee's</span>
                  <span className="number">10</span>
                </div>
                <div className="box box2">
                  <i className="uil uil-comments"></i>
                  <span className="text">Salary Issued</span>
                  <span className="number">20,000k +</span>
                </div>
                <div className="box box3">
                  <i className="uil uil-share"></i>
                  <span className="text">Total Holidays</span>
                  <span className="number">10,120</span>
                </div>
              </div>
            </div>

            
          </div>
        </section>
      </div>
      
    </>
  );
};

export default Dashboard;
