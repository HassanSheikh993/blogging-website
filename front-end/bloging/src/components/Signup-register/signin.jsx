import { useState } from "react";
import { userVerify } from "../../api/verifyUser";
import { useNavigate } from "react-router-dom";
import "../../styles/signin.css"; // Import the CSS file

export function SignIn() {
    const navigator = useNavigate();
    const [user, setUser] = useState({
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
            const result = await userVerify(user);
            setMessage(result.message);
            navigator("/");
        } catch (error) {
            if (error || error.status === 401) {
                setMessage(error.response.data.message);
            } else {
                setMessage("Something went wrong");
            }
        }
    }


    function handleOnClick(){
        navigator("/signUp")
    }

    return (
        <div className="signin_container">
            <h1 className="signin_title">Sign In</h1>
            <form className="signin_form" onSubmit={handleOnSubmit}>
                <label className="signin_label">Email</label>
                <input
                    className="signin_input"
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleOnChange}
                    required
                />

                <label className="signin_label">Password</label>
                <input
                    className="signin_input"
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleOnChange}
                    required
                />

                <button className="signin_button" type="submit">Sign In</button>
                <p className="signin_p" onClick={handleOnClick}>Create a new account?</p>
            </form>
            {message && <p className="signin_message">{message}</p>}
        </div>
    );
}