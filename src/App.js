import { Box } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import Home from "./pages/Home";

function App() {
  return (
    <Box width="400px" sx={{width:{
      width:{
        xl:'1488px'
      }
    }}} m='auto' > 
      <Navbar /> 

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer/>
    </Box>
  );
}

export default App;
