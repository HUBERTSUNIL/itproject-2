import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import logini_img from '../images/login_img.png'
import login_bg from '../images/login_bg.jpg'


const Login = () => {

  let navigate = useNavigate(); 
  const routeChange = async() =>{ 
   
    let user = document.getElementById("username").value
    let pss = document.getElementById("password").value
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username:user, password:pss }),
      });
      
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if(data.status==true){
        let path = `\home`; 
        navigate(path);
      }
      else{
        alert("try again")
      }
        }

    }
    catch(err){
      console.log(err);
    }
    
  }
  const routeChangeGuest = () =>{ 
    let path = `\guest`; 
    navigate(path);
  }
  return (
    
    <div class="d-flex justify-content-between align-items-center flex-column mb-3 p-3 my-3" style={{ 
      backgroundImage: `url(${login_bg})`,backgroundSize:`100%`
    }}>
      <div className='my-3 p-3'>
        <img src={logini_img}/>
      </div>
      <div class="card mb-3 my-3" style={{ 
      height: `20rem` 
    }}>
        <div class="row g-0 rounded h-100">
          <div class="col-md-4 bg-primary text-white w-50 p-3 py-3">
            <h4 style={{ 
                marginTop: `1.5rem` 
            }}>Indian Institute of Information Technology Kottayam</h4>
            <hr class="mt-1 mb-1" />
            <p><i class="fa-solid fa-check fa-xs"></i>Cookies must be enabled in your browser</p>
            <p><i class="fa-solid fa-check fa-xs"></i>Statistics can also be accessed using guest account</p>
            <button class="btn btn-light" type="button" onClick={routeChangeGuest}>Log in as guest</button>
          </div>
          <div class="col-md-8 w-50">
            <div class="card-body">
              <h5 class="card-title">Already Have an account?</h5>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-user"></i></span>
                <input type="text" class="form-control" id="username" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
                <input type="password" class="form-control" id="password" placeholder="password" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
              <div class="d-grid gap-2">
                <button class="btn btn-primary" type="button" onClick={routeChange}>Log in</button>
              </div>
              <p className='text-primary'>Forgotten your username or password?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
