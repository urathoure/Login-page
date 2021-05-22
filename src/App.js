import Navbar from "./components/Navbar";
import Background from "./images/b.jpg";
import { useState } from "react";
import Login from "./components/Login";

function App() {
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(false);

  const handleLogin = () => setLogin(true);
  const handleLogout = () => setLogin(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleToggle() {
    handleLogin();
    handleClose();
  }

  return (
    <div className="back-ground">
      <Navbar isLogin={login} logout={handleLogout} login={handleShow} />
      <Login toggle={handleToggle} show={show} close={handleClose} />
    </div>
  );
}

export default App;
