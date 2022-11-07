import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';

const Login = ({userId, userPw}) => {
  const [error, setErorr] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate ('/record')
      })
      .catch((error) => {
        setErorr(true);
      });

  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="email" onChange={e=>setEmail(e.target.value)}/>
        <input type="password" onChange={e=>setPassword(e.target.value)}/>
        <button type="submit">log in</button>
        {error && <span>Wrong email or password!</span>}
      </form>

      <p>ID: { userId }</p>
      <p>PW: { userPw }</p>
    </div>
  )
}

export default Login;
