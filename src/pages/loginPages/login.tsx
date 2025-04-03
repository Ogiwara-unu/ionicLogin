import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import InputField from "../../components/loginComponents/InputField";
import Button from "../../components/loginComponents/Button";
import "../loginPages/login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    const success = await login(username, password);
    if (success) {
      navigate("/home");
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <InputField type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
      <InputField type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <p className="error">{error}</p>}
      <Button text="Ingresar" onClick={handleLogin} />
    </div>
  );
};

export default Login;
