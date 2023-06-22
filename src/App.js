// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import { useAuthContext } from './hooks/useAuthContext'
// import { useState } from 'react'

// // pages & components
// // import Home from './pages/Home'
// import BasicExample from './components/BasicExample'
// import Login from './pages/Login'
// import Signup from './pages/Signup'
// import Stumain from './pages/Stumain'
// import Stuviewmore from "./pages/Stuviewmore"
// import Stuknowmore from "./pages/Stuknowmore"
// import Stuideas from "./pages/Stuideas"
// import Stuviewidea from "./pages/Stuviewidea"
// import Entresp from "./pages/Entresp"
// import Entmain from './pages/Entmain'
// import Entupload from './pages/Entupload'
// import Entprop from './pages/Entprop'
// import Notfound from './pages/Notfound'
// import Home from './pages/Home'
// import ThemeProvider from './pages/ThemeProvider';
// import { ColorModeProvider } from "./pages/ColorModeContext";
// import './style.css'
// import Angelmain from './pages/Angelmain'
// import Angelinvreq from './pages/Angel_inv_req'
// import Metrics from './pages/Metrics'
// import Mentor from './pages/Mentor'
// import Pitchevent from './pages/Pitch_event'
// import Entaccinv from './pages/Ent_accinv'
// // import { AnimatePresence } from 'framer-motion'
// import { useLocation } from 'react-router-dom'

// function App() {

//   const [darkMode, setdarkMode] = useState(false);
//   const { user } = useAuthContext()
//   // const location = useLocation();
//   // console.log(location);

//   return (
//     <BrowserRouter >
//       {/* <AnimatePresence onExitComplete> */}
//       <ThemeProvider>
//       <ColorModeProvider>
//       {/* <Navbar colorMode={colorMode} /> */}

//       <BasicExample ></BasicExample>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             user ? (user.role === 'Student' ? <Stumain /> : <Entmain />) :
//               <Home />
//             // <Navigate to="/login" />
//           }
//         />
//         <Route path="/ang" element={<Angelmain/>} />
//         <Route path="/inv_req" element={<Angelinvreq/>} />
//         <Route path="/inv_met" element={<Metrics/>} />
//         <Route path="/inv_men" element={<Mentor/>} />
//         <Route path="/inv_sch" element={<Pitchevent/>} />
//         <Route
//           path="/stu"
//           element={!user ? <Login /> : (user.role === 'Student' ? <Stumain /> : <Entmain />)}
//         />
//         <Route
//           path="/stu_vm/:title"
//           element={!user ? <Login /> : (user.role === 'Student' ? <Stuviewmore /> : <Notfound />)}
//         />
//         <Route
//           path="stu_km/:header"
//           element={!user ? <Login /> : (user.role === 'Student' ? <Stuknowmore /> : <Notfound />)}
//         />
//         <Route
//           path="/stu_ideas"
//           element={!user ? <Login /> : (user.role === 'Student' ? <Stuideas /> : <Notfound />)}
//         />
//         <Route
//           path="/stu_view_idea/:title"
//           element={!user ? <Login /> : (user.role === 'Student' ? <Stuviewidea /> : <Notfound />)}
//         />
//         <Route
//           path="/ent"
//           element={!user ? <Login /> : (user.role === 'Entreprenuer' ? <Entmain /> : <Notfound />)}
//         />
//         <Route
//           path="/entresp/:header"
//           element={!user ? <Login /> : (user.role === 'Entreprenuer' ? <Entresp /> : <Notfound />)}
//         />
//         <Route
//           path="/upload"
//           element={!user ? <Login /> : (user.role === 'Student' ? <Notfound /> : <Entupload />)}
//         />
//         <Route
//           path="/ent_prop"
//           element={!user ? <Login /> : (user.role === 'Student' ? <Notfound /> : <Entprop />)}
//         />
//         <Route
//           path="/ent_accinv"
//           element={!user ? <Login /> : (user.role === 'Student' ? <Notfound /> : <Entaccinv />)}
//         />
//         <Route
//           path="/login"
//           element={!user ? <Login /> :
//             <Navigate to="/" />}
//         />
//         <Route
//           path="/signup"
//           element={!user ? <Signup /> : <Navigate to="/" />}
//         />
//         <Route
//           path="*"
//           element={<Notfound />}
//         />
//       </Routes>
//       </ColorModeProvider>
//       </ThemeProvider>
//       {/* </AnimatePresence> */}

//     </BrowserRouter>
//   );
// }


// export default App;

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import { useState } from 'react';

// pages & components
import BasicExample from './components/BasicExample';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Stumain from './pages/Stumain';
import Stuviewmore from './pages/Stuviewmore';
import Stuknowmore from './pages/Stuknowmore';
import Stuideas from './pages/Stuideas';
import Stuviewidea from './pages/Stuviewidea';
import Entresp from './pages/Entresp';
import Entmain from './pages/Entmain';
import Entupload from './pages/Entupload';
import Entprop from './pages/Entprop';
import Notfound from './pages/Notfound';
import Home from './pages/Home';
// import ThemeProvider from './pages/ThemeProvider';
// import { ColorModeProvider } from './pages/ColorModeContext';
import './style.css';
import Angelmain from './pages/Angelmain';
import Angelinvreq from './pages/Angel_inv_req';
import Metrics from './pages/Metrics';
import Mentor from './pages/Mentor';
import Pitchevent from './pages/Pitch_event';
import Entaccinv from './pages/Ent_accinv';
import { useLocation } from 'react-router-dom';

function App() {
  // const [darkMode, setdarkMode] = useState(false);
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      {/* <ThemeProvider> */}
        {/* <ColorModeProvider> */}
          <BasicExample ></BasicExample>
          <Routes>
            <Route
              path="/"
              element={
                user ? (
                  user.role === 'student' ? (
                    <Stumain />
                  ) : user.role === 'Entreprenuer' ? (
                    <Entmain />
                  ) : user.role === 'Investor' ? (
                    <Angelmain />
                  ) : (
                    <Notfound />
                  )
                ) : (
                  <Home />
                )
              }
            />
            {/* <Route path="/inv_req" element={<Angel_inv_req />} />
            <Route path="/inv_met" element={<Metrics />} />
            <Route path="/inv_men" element={<Mentor />} />
            <Route path="/inv_sch" element={<Pitch_event />} /> */}
            <Route
              path="/inv_req"
              element={
                !user || user.role !== 'Investor' ? (
                  <Notfound />
                ) : (
                  <Angelinvreq />
                )
              }
            />
            <Route
              path="/inv_met"
              element={
                !user || user.role !== 'Investor' ? (
                  <Notfound />
                ) : (
                  <Metrics />
                )
              }
            />
            <Route
              path="/inv_men"
              element={
                !user || user.role !== 'Investor' ? (
                  <Notfound />
                ) : (
                  <Mentor />
                )
              }
            />
            <Route
              path="/inv_sch"
              element={
                !user || user.role !== 'Investor' ? (
                  <Notfound />
                ) : (
                  <Pitchevent />
                )
              }
            />

            <Route
              path="/stu"
              element={
                !user ? (
                  <Login />
                ) : user.role === 'student' ? (
                  <Stumain />
                ) : (
                  <Notfound />
                )
              }
            />
            <Route
              path="/stu_vm/:title"
              element={
                !user ? (
                  <Login />
                ) : user.role === 'student' ? (
                  <Stuviewmore />
                ) : (
                  <Notfound />
                )
              }
            />
            <Route
              path="/stu_km/:header"
              element={
                !user ? (
                  <Login />
                ) : user.role === 'student' ? (
                  <Stuknowmore />
                ) : (
                  <Notfound />
                )
              }
            />
            <Route
              path="/stu_ideas"
              element={
                !user ? (
                  <Login />
                ) : user.role === 'student' ? (
                  <Stuideas />
                ) : (
                  <Notfound />
                )
              }
            />
            <Route
              path="/stu_view_idea/:title"
              element={
                !user ? (
                  <Login />
                ) : user.role === 'student' ? (
                  <Stuviewidea />
                ) : (
                  <Notfound />
                )
              }
            />
            <Route
              path="/ent"
              element={
                !user ? (
                  <Login />
                ) : user.role === 'Entreprenuer' ? (
                  <Entmain />
                ) : (
                  <Notfound />
                )
              }
            />
            <Route
              path="/entresp/:header"
              element={
                !user ? (
                  <Login />
                ) : user.role === 'Entreprenuer' ? (
                  <Entresp />
                ) : (
                  <Notfound />
                )
              }
            />
            <Route
              path="/upload"
              element={
                !user ? (
                  <Login />
                ) : user.role === 'Entreprenuer' ? (
                  <Entupload />
                ) : (
                  <Notfound />
                )
              }
            />
            <Route
              path="/ent_prop"
              element={
                !user ? (
                  <Login />
                ) : user.role === 'Entreprenuer' ? (
                  <Entprop />
                ) : (
                  <Notfound />
                )
              }
            />
            <Route
              path="/ent_accinv"
              element={
                !user ? (
                  <Login />
                ) : user.role === 'Entreprenuer' ? (
                  <Entaccinv />
                ) : (
                  <Notfound />
                )
              }
            />
            <Route
              path="/login"
              element={
                !user ? (
                  <Login />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/signup"
              element={
                !user ? (
                  <Signup />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route path="*" element={<Notfound />} />
          </Routes>
        {/* </ColorModeProvider> */}
      {/* // </ThemeProvider> */}
    </BrowserRouter>
  );
}

export default App;
