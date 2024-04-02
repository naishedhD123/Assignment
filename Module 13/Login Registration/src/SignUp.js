import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {

  const [unm, setUnm] = useState("")
  const [eml, setEml] = useState("")
  const [psd, setPsd] = useState("")
  const [pn, setpn] = useState("")
  const [userdata, setUserData] = useState("")
  const navigate = useNavigate()

  useEffect(()=>{
    fetch('http://localhost:5000/employees')
    .then((res)=>{return res.json()})
    .then((data)=>{
      setUserData(data)
    })
    .catch((err)=>{console.log(err.message)})
  },[])



  const handleClick = (e) => {
    e.preventDefault();

    const data = { unm, eml, pn, psd }
    if(unm == "" || eml == "" || psd == "")
    {
      alert("Fields are required");
    }
    else
    {
      userdata.map((user)=>
      {
        console.log(eml);
        if(user.unm == unm)
        {
          alert("username already exist")
          return false;
        }
        else if(user.pn == pn)
        {
          alert("Mobile number already exist")
          return false;
        }
        else if(user.eml == eml)
        {
          alert("Email already in use! Please try another email.")
          return false;
        }
        else
        {
          fetch('http://localhost:5000/employees',{
            method:'POST',
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
          })
          .then((res)=>{
            if(res)
            {
              alert("Registration Done...!")
              navigate("/login")
            }
          })
          .catch((err)=>{console.log(err.message)})
        }
      })
    }


  }

  return (
    <div>
      <div className="container1">
        <h2>Registration Form</h2>
        <form onSubmit={handleClick}>
          <div className="form-group mt-3">
            <label>User Name</label>
            <input type="text" className="form-control" id="exampleInputfirstname" name="firstname"
            value={unm} onChange={(e) => { setUnm(e.target.value) }} />
          </div>
          <div className="form-group mt-3">
            <label>Phone Number</label>
            <input type="text" className="form-control" id="exampleInputphoneno" name="phoneno" pattern="[0-9]{10}" title="Enter 10 digit number"
            value={pn} onChange={(e) => { setpn(e.target.value) }} />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"
            value={eml} onChange={(e) => { setEml(e.target.value) }} />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input type="password" className="form-control" id="exampleInputPassword" name="password" pattern="{6}"
            value={psd} onChange={(e) => { setPsd(e.target.value) }} />
          </div>
          <button type="submit" className="btn btn-primary mt-3" name="create" to={'/'}>Sign up</button>
          <Link type="submit" className="btn btn-primary mt-3 mx-2" name="create" to={'/login'}>Log In</Link>
        </form>
      </div>
    </div>
  )
}

export default SignUp
