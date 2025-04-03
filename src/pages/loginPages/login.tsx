import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import InputField from "../../components/loginComponents/InputField";
import Button from "../../components/loginComponents/Button";
import "../loginPages/login.css";
import "bootstrap/dist/css/bootstrap.min.css";



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    const success = await login(username, password);
    if (success) navigate("/home");
    else setError("Credenciales incorrectas");
  };

  return (
    <div className="container-fluid vh-100 d-flex">
      <div className="row w-100">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center bg-white p-4">
          <h2 className="text-primary mb-4">Login</h2>
          <div className="w-75">
            <div className="mb-3">
              <label>usuario</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ejm: PepitoKiller69"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <button className="btn btn-danger w-100" onClick={handleLogin}>
              Ingresar
            </button>
            <p className="mt-2 text-center text-secondary">Forgot password?</p>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src="/images/flowers.jpg"
            alt="Login"
            className="img-fluid vh-100 w-100"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;