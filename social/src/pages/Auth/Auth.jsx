import React, {useEffect, useState} from 'react'
import "./Auth.css"
//import Logo from "../../img/logo.png;"
import { Link, useNavigate } from 'react-router-dom'

const Auth = () => {
    return (
        <div className='Auth'>
            <LogIn />
        </div>
    )
}

function LogIn(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("userId")){
            localStorage.removeItem("userId")
        }
    },[])

    const handleLogin = async(e) => {
        e.preventDefault();

        const formData = {
            username: username,
            password: password
        };
        console.log("Form Data: ", formData);

        try{
            const response = await fetch('http://localhost:8080/api/users/login',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(formData),
            });

            if(response.ok){
                const resp = await response.json();

                localStorage.setItem("userId", resp.data._id);
                localStorage.setItem("image", resp.data.img);
                localStorage.setItem("followersList", resp.data.followersList);
                localStorage.setItem("name", resp.data.firstName +' ' +resp.data.lastName);

                navigate("/home")
                console.log("User Logged-In Successfully", resp.data);
            }
            else{
                const errorData = await response.json();
                console.error("Error: ", errorData.error);
            }
        }catch(error){
            console.error("Error: ", error);
        }
    }

    return (
        <div className='a-right'>
            <form className='infoForm authForm' onSubmit={handleLogin}>
                <h3>Log In</h3>

                <div>
                    <input type='text' placeholder='Username' className='infoInput' name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <input type='password' placeholder='Username' className='infoInput' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <span style={{fontSize:"12px"}}>
                        Don't Have An Account ? <Link to={"/signUp"}>Sign Up</Link>
                    </span>
                    <button className='button infoButton'>Login</button>
                </div>
            </form>
        </div>
    );
}

const SignUp = () => {
    return(
        <div>

        </div>
    )
}

export {Auth,SignUp}