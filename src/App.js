import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
// import Home from './pages/Home'
import BasicExample from './components/BasicExample'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Stumain from './pages/Stumain'
import Stuviewmore from "./pages/Stuviewmore"
import Stuknowmore from "./pages/Stuknowmore"
import Stuideas from "./pages/Stuideas"
import Stuviewidea from "./pages/Stuviewidea"
import Entresp from "./pages/Entresp"
import Entmain from './pages/Entmain'
import Entupload from './pages/Entupload'
import Notfound from './pages/Notfound'

function App() {
  const { user } = useAuthContext()

  return (
    <BrowserRouter>
      <BasicExample></BasicExample>
      <Routes>
        <Route
          path="/"
          element={
            user ? (user.role === 'Student' ? <Stumain /> : <Entmain />) :
              <Navigate to="/login" />
          }
        />
        <Route
          path="/stu"
          element={!user ? <Login /> : (user.role === 'Student' ? <Stumain /> : <Entmain />)}
        />
        <Route
          path="/stu_vm/:title"
          element={!user ? <Login /> : (user.role === 'Student' ? <Stuviewmore /> : <Notfound />)}
        />
        <Route
          path="stu_km/:header"
          element={!user ? <Login /> : (user.role === 'Student' ? <Stuknowmore /> : <Notfound />)}
        />
        <Route
          path="/stu_ideas"
          element={!user ? <Login /> : (user.role === 'Student' ? <Stuideas /> : <Notfound />)}
        />
        <Route
          path="/stu_view_idea/:title"
          element={!user ? <Login /> : (user.role === 'Student' ? <Stuviewidea /> : <Notfound />)}
        />
        <Route
          path="/ent"
          element={!user ? <Login /> : (user.role === 'Entreprenuer' ? <Entmain /> : <Notfound />)}
        />
        <Route
          path="/entresp/:header"
          element={!user ? <Login /> : (user.role === 'Entreprenuer' ? <Entresp /> : <Notfound />)}
        />
        <Route
          path="/upload"
          element={!user ? <Login /> : (user.role === 'Student' ? <Notfound /> : <Entupload />)}
        />
        <Route
          path="/login"
          element={!user ? <Login /> :
            <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="*"
          element={<Notfound />}
        />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
