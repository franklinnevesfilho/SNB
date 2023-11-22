import React, {useState} from 'react';
import LoginForm from "../components/LoginForm.jsx";

function LoginPage({apiCall}) {

    const [path, setPath] = useState('');
    const [hasAccount, setHasAccount] = useState(true)
    const [loginInputs, setLoginInputs] = useState({
        email:'',
        password:''
    })
    const [registerInputs, setRegisterInputs] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:''
    })

    const loginRequest = () =>{
        setPath('/auth/login')
        apiCall(
            path,
            'POST',
            {'Content-Type': 'application/json'},
            loginInputs,
            (r) => console.log(r)
        );
    }
    const registrationRequest = () =>{
        apiCall(
            '/auth/register',
            'POST',
            {'Content-Type': 'application/json'},
            registerInputs,
            (r) => console.log(r)
        )

    }

    return (
        <>
            <h1>LoginPage</h1>
            <div className="form-container">
                <div className="login-btn-container">
                    <button className={'btn'} onClick={()=> setHasAccount(true)}>Log in</button>
                    <button className={'btn'} onClick={()=> setHasAccount(false)}>Register</button>
                </div>

                { hasAccount ?
                    <LoginForm
                        inputs={loginInputs}
                        handleChange={(e) =>
                            setLoginInputs((prevState) => ({
                                ...prevState,
                                [e.target.name]: e.target.value.trim(),
                            }))
                        }
                        onSubmit={loginRequest}
                        submitType='Login'
                    />

                    :

                    <LoginForm
                        inputs={registerInputs}
                        handleChange={(e) =>
                            setRegisterInputs((prevState) => ({
                                ...prevState,
                                [e.target.name]: e.target.value.trim(),
                            }))
                        }
                        onSubmit={registrationRequest}
                        submitType='Registration'
                    />
                }
            </div>
        </>
    );
}

export default LoginPage;