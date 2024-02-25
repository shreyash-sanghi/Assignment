import {React,useState,useEffect} from "react"
// import "../index.css"
import "./data.css"
import { Link, useParams } from "react-router-dom";

const Data = ()=>{
  const {id} = useParams();
    const [users, setUsers] = useState([]);


    useEffect(() => {
      // Fetch user data from an API or use the provided user data
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, [])
    
    const data = users.filter((info)=>{
    return info.id == id

    })

    return(
        <>
        {/* <div className="data_container">
         <div className="data_arange">
            <h1>Name </h1>
            <h3>{data[0].name}</h3>
         </div>
         <div className="data_arange">
         <h1>Username</h1>
            <h3>{data[0].username}</h3>
         </div>
         <div className="data_arange">
         <h1>Email</h1>
            <h3>{data[0].email}</h3>
         </div>
         <div className="data_arange">
         <h1>Phone</h1>
            <h3>{data[0].phone}</h3>
         </div>

        </div> */}
  { (data[0]!=undefined)?(<>
  <div className="mancontainer">
        <div class="container">
      <div class="text">
         Update Form
      </div>
      <form className="body" >
         <div class="form-row">
            <div class="input-data">
               <input type="text" value={data[0].name} required/>
               <div class="underline"></div>
               <label for="">Name</label>
            </div>
            <div class="input-data">
               <input type="text" value={data[0].username}  required/>
               <div class="underline"></div>
               <label for="">UserName</label>
            </div>
         </div>
         <div class="form-row">
            <div class="input-data">
               <input type="text" value={data[0].email} required/>
               <div class="underline"></div>
               <label for="">Email Address</label>
            </div>
            <div class="input-data">
               <input type="text" value={data[0].phone} required/>
               <div class="underline"></div>
               <label for="">Phone</label>
            </div>
         </div>
         <div class="form-row">
         <div class="input-data textarea">
         
            <div class="form-row submit-btn">
               <div class="input-data">
                  <div class="inner"></div>
                  <Link className="homebutton" to={"/"} >Home</Link>
               </div>
                <div class="input-data">
                    <div class="inner"></div>
                    <input type="submit" value="Update"></input>
                </div>
            </div>
            </div>
            </div>
      </form>
      </div>
      </div>
      </>):(<></>)}
        </>
    )
}

export default Data;