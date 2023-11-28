import React,{useState} from 'react';
// import AppRouter from './AppRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignupPage from './Components/SignupPage';
import LoginPage from './Components/LoginPage';

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
    <div className='mainClass'>
      <LoginPage />
      {/* <SignupPage /> */}
      {/* {console.log(currForm)}  */}
        {/* {currForm === 'login' ? <LoginPage onFormSwitch={toggleForm('signup')} /> : <SignupPage onFormSwitch={toggleForm('login')} />} */}
        {/* {currForm === 'login' ? <LoginPage setCurrForm={setCurrForm} /> : <SignupPage setCurrForm={setCurrForm} />} */}
    </div>
    </ThemeProvider>
  );
}

export default App;
