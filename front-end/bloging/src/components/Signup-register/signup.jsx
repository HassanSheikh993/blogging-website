import { useState } from "react";
import { insertUser } from "../../api/insertUserData";
import { useNavigate } from "react-router-dom";
import "../../styles/signup.css"; // Import the CSS file


export function Signup() {
    const navigator = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");

    function handleOnChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await insertUser(user);
            setMessage(result.message);
        } catch (error) {
            if (error || error.status === 409) {
                setMessage(error.response.data.message);
            } else {
                setMessage("Something went wrong");
            }
        }
    }

    function handleOnClick(){
         navigator("/signIn")
    }

    return (
        <div className="signup_container">
            <h1 className="signup_title">Sign Up</h1>
            <form className="signup_form" onSubmit={handleOnSubmit}>
                <label className="signup_label">Name</label>
                <input 
                    className="signup_input" 
                    type="text" 
                    name="name" 
                    value={user.name} 
                    onChange={handleOnChange} 
                    required 
                />

                <label className="signup_label">Email</label>
                <input 
                    className="signup_input" 
                    type="email" 
                    name="email" 
                    value={user.email} 
                    onChange={handleOnChange} 
                    required 
                />

                <label className="signup_label">Password</label>
                <input 
                    className="signup_input" 
                    type="password" 
                    name="password" 
                    value={user.password} 
                    onChange={handleOnChange} 
                    required 
                />

                <button className="signup_button" type="submit">Submit</button>
                <p className="signup_newAccount" onClick={handleOnClick}>Create a new account</p>
            </form>

            {message && <p className="signup_message">{message}</p>}
        </div>
    )
}