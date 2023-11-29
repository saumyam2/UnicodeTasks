import React,{useState} from 'react';
// import AppRouter from './AppRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Context/AuthProvider';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';

function App() {
  const theme = createTheme({
    palette: {
      background: {
        default: "#c8e1cc"
      }
    }
  });
  const[currForm, setCurrForm] = useState('login');
  // const toggleForm = (fname) => {
  //   setCurrForm(fname);
  // }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <BrowserRouter>  
    <AuthProvider>
      <div className='mainClass'>
        <SignupPage />
        {/* <LoginPage /> */}
        {/* {console.log(currForm)}  */}
          {/* {currForm === 'login' ? <LoginPage onFormSwitch={toggleForm('signup')} /> : <SignupPage onFormSwitch={toggleForm('login')} />} */}
          {currForm === 'login' ? <LoginPage setCurrForm={setCurrForm} /> : <SignupPage setCurrForm={setCurrForm} />}
      </div>
      </AuthProvider>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
