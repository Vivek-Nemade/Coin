import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
const UserDetails = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  let [searchparams, setsearchparams] = useSearchParams();
  let [gender, setGender] = useState(searchparams.getAll("gender")[0] || "");
  const pages = new Array(total).fill(0).map((v, i) => i);


  

  const Previous = () => {
    setCurrentPage(Math.max(0, currentPage - 1));
  };
  const Next = () => {
    setCurrentPage(Math.min(total - 1, currentPage + 1));
  };

  useEffect(() => {
    setsearchparams({ gender: gender });
    let params = {
      params: {
        gender: gender,
      },
    };
    
    const getData = async () => {
      try {
        const res = await axios.get(`https://cointab-backend-zsfo.onrender.com/api/userdetails?page=${currentPage}`,params);
        console.log(res.data);
        setData(res.data.users);
        setTotal(res.data.totalPages)
      } catch (e) {
        console.log(e.message);
      }
    };
    getData();
  }, [currentPage,gender,searchparams]);

  const filtergender=(e) => {
    setGender(e.target.value);
    setCurrentPage(1);
  }
  
  return (
    <>
    <div style={{justifyContent:"center", display:"flex",marginTop:"40px"}}>
      <div>
      <label>
        Gender Filter:
        <br />
        <select onChange={filtergender}>
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      </div>
      <table style={{border:"1px solid gray", textAlign:"center", marginLeft:"20px"}}>
        <thead>
          <tr style={{border:"1px solid gray",textAlign:"center"}}>
            <th>User Picture</th>
            <th> Full Name</th>
            <th> Gender</th>
            <th> Email</th>
            <th> Location</th>
            <th> Nationality</th>
          </tr>
        </thead>
        {/* Fetch Users details in tbody tag */}
        <tbody>
        {data.map((el) =>(
          
            <tr key={el.id}>
              <td>
                <img src={el.picture} alt="" />
              </td>
              <td> `{el.fname} {el.lname}`</td>
              <td> {el.gender}</td>
              <td> {el.email}</td>
              <td> {el.location}</td>
              <td> {el.nationality}</td>
            </tr>
          
        ))
      }
      </tbody>
      </table>

      

        
    </div>
    <div  style={{justifyContent:"center", display:"flex"}}>
    <button disabled={currentPage===0} onClick={Previous}>≪</button>
    {pages.map((el, i) => (
      <button  key={i} onClick={() => setCurrentPage(el)}>
        {el + 1}
      </button>
    ))}
    <button onClick={Next}>≫</button>
  </div>
  </>
    
  );
};

export default UserDetails;
