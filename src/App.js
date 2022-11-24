import Signup from "../src/components/signup";
import Login from "../src/components/login";
import Dashboard from "../src/components/dashboard";

import {Container} from "react-bootstrap";
import AuthProvider from "./contexts/authcontext";
import {Route, Routes} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import PrivateRoute from "./components/privateroute";


function App() {
  return (
    <div className="App">
      <Container className="d-flex align-items-center 
        justify-content-center" style={{minHeight:"100vh"}}>
          <div className="w-100" style={{maxWidth:"400px"}}>
            <Router>
              <AuthProvider> 
                <Routes>
                  <Route path="/signup" element={<Signup/>}></Route>
                  <Route path="/login" element={<Login/>}></Route>
                  <Route path="/" element={<PrivateRoute/>}></Route>
                  <Route path="*" element={<Login/>}></Route>
                </Routes>
                
              </AuthProvider>
            </Router>
          </div>
          
      </Container>
    </div>
  );
}

export default App;
