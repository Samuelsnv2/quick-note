import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    function login() {
        if (email === "samuelsnv2@gmail.com" && password === "1234") {
            alert("Bem vindo!\n" + email);
            navigate("/home");
        } else alert("Dados Incorretos")
    }

    return (
        <div className="base">
            <div className="container-login">
                <div>
                    <img className="image" src="/images/Quick-note.png" alt="Quick Note"></img>
                    <Form className="inputs">
                        <Form.Group controlId="email">
                            <Form.Control 
                                type="email" 
                                placeholder="Email" 
                                onChange={(e) => {setEmail(e.target.value)}} 
                            />
                        </Form.Group>
                        <p></p>
                        <Form.Group controlId="senha">
                            <Form.Control 
                                type="password" 
                                placeholder="Senha" 
                                onChange={(e) => {setPassword(e.target.value)}} 
                            />
                        </Form.Group>
                        <p></p>
                        <Button variant="primary" onClick={login}>Login</Button>{' '}
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;