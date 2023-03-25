import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import LandingPage from "scenes/landingpage/index.jsx";
import UserDashboard from "scenes/userdashboard/index.jsx";
import ContractDashboard from "scenes/contractowner";
import LandInspectorDashboard from "scenes/landinspector";
import RegisterPage from "scenes/registration/user";
import LIRegisterPage from "scenes/registration/land_inspector";
import LoginPage from "scenes/loginpage/index";


function App() {

  const theme = createTheme(themeSettings());
  
  return (
    <div className="App">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/user" element={<UserDashboard />} />
            <Route path="/contract_owner" element={<ContractDashboard />} />
            <Route path="/land_inspector" element={<LandInspectorDashboard />} />
            <Route path="/user/registration" element={<RegisterPage />} />
            <Route path="/land_inspector/registration" element={<LIRegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
 
          </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
