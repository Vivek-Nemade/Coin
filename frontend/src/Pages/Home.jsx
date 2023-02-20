import React, { useState } from "react";
import axios from "axios";
import { Link} from "react-router-dom";
const Home = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const getUsers = async () => {
    if (isFetching) {
      alert(
        "Data is already being fetched. Please wait for the current fetch to complete."
      );
      return;
    }
    setIsFetching(true);
    try {
      const data = await axios.get("https://cointab-backend-zsfo.onrender.com/api/fetchusers");
      console.log(data.data.results);
    } catch (e) {
      alert(e.message);
    } finally {
      setIsFetching(false);
    }
  };

  const deletUsers=async() => {
    if (deleting) {
        alert(
          "Data is already being deleted. Please wait ."
        );
        return;
      }

      setDeleting(true);
    try {
      const data = await axios.delete("https://cointab-backend-zsfo.onrender.com/api/deleteusers");
    } catch (e) {
      alert(e.message);
    } finally {
      setIsFetching(false);
    }
  }
  return (
    <div style={{justifyContent:"space-between",marginTop:"50px", alignItems:"center", display:"flex", width:"30%", margin:"auto"}}>
      <button onClick={() => getUsers()}>Fetch Users</button>
      <button onClick={()=> deletUsers()}>Delete Users</button>
      <button > <Link to="/userdetail">View Users</Link> </button>
    </div>
  );
};

export default Home;
