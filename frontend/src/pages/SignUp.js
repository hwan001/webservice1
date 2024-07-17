import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import Header from "../components/Header.js";
import Navbar from "../components/Navbar.js";

import { BASE_URL } from '../constants';
import "../styles/Common.css";


export function useSignup() {
    const [Signup, setSignup] = useState(null); 

    const updateSignup = async (username, email, password) => {
        const url = BASE_URL + "/signup";
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        };

        try {
            const res = await fetch(url, options);
            if (res.ok) {
                const userData = await res.json();
                console.log('Signup(hook) result:', userData); // 응답 데이터 로그 출력
                setSignup(userData);
                return userData;
            } else {
                const error = await res.json();
                return { success: false, message: error.detail || 'Failed to signup' };
            }
        } catch(err) {
            console.error("Failed to signup", err);
            return { success: false, message: 'An error occurred. Please try again later.' };
        };
    };

    return [Signup, updateSignup];
}


function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState('');
  const [signupData, updateSignup] = useSignup();
  const navigate = useNavigate();
  
  const handleSignup = async () => {
      try {
          const result = await updateSignup(username, email, password);
          console.log('Signup result:', result); // 응답 데이터 로그 출력

          if (result.success) {
              navigate('/');
          } else {
              setError(result.message || 'Signup failed.');
          }
      } catch (err) {
          console.error("Signup error:", err);
          setError('An error occurred. Please try again later.');
      }
  };
  
  const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
          handleSignup();
      }
  };

  return (
      <div className="signup-body">
          <div className="signup-container">
              <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  className="signup-input"
              />
              <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-Mail Address"
                  className="signup-input"
              />
              <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDwon={handleKeyPress}
                  placeholder="Password"
                  className="signup-input"
              />
              <button onClick={handleSignup} className="signup-button">Sign up</button>
              {signupData && <div>Welcome {signupData.username}!</div>}
              {error && <div className="alert">{error}</div>}
          </div>
      </div>
  );
}

function SignUp() {
  return (
    <>
      <div>
        <Header title="H001 SYSTEM" style={{}} />
        <SignupPage />
      </div>
    </>
  );
}

export default SignUp;
