import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react";
import {About} from './components/About';
import {Contact} from './components/Contact';
import {Home} from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    
      <Navbar bg="dark" variants="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link}to="/">Home</Nav.Link>
          <Nav.Link as={Link}to="/">About</Nav.Link>
          <Nav.Link as={Link}to="/">Contact</Nav.Link>
        </Nav>
      </Container>

      </Navbar>
     
      <div>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/" element={<Home/>}/>

        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
