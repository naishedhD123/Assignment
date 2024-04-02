import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [unm, setUnm] = useState("")
  const [psd, setPsd] = useState("")
  const [userdata, setUserData] = useState("")

  useEffect(()=>{
    fetch('http://localhost:5000/employees')
    .then((res)=>{return res.json()})
    .then((data)=>{
      setUserData(data)
    })
    .catch((err)=>{console.log(err.message)})
  },[])

  const handleClick = (e)=>{

    e.preventDefault();

    if(unm == "" || psd == "")
    {
      alert("Fields are required");
    }
    else
    {
      console.log(userdata)
      userdata.map((user)=>{
        if(user.unm != unm)
        {
          alert("Wrong Username")
        }
        else if(user.psd != psd)
        {
          alert("Wrong Password")
        }
        else{
          alert("Login successful")
        }
      })
    }
  }

  return (
    <div>
      <div className="container1">
        <h2>Login Form</h2>
        <form onSubmit={handleClick}>
          <div className="form-group mt-3">
            <label>User Name</label>
            <input type="text" className="form-control" id="exampleInputfirstname" name="firstname"
            value={unm} onChange={(e) => { setUnm(e.target.value) }} />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input type="password" className="form-control" id="exampleInputPassword" name="password"
            value={psd} onChange={(e) => { setPsd(e.target.value) }} />
          </div>
          <Link type="submit" className="btn btn-primary mt-3" name="create" to={'/'}>Sign up</Link>
          <button type="submit" className="btn btn-primary mt-3 mx-2" name="create" to={'/login'}>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login
