import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import { useState } from 'react';

import BasicExample from './components/BasicExample';
import Login from './pages/Login';
import Signup from './pages/Signup';

import Stumain from './pages/student/Stumain';
import Stuviewmore from './pages/student/Stuviewmore';
import Stuknowmore from './pages/student/Stuknowmore';
import Stuideas from './pages/student/Stuideas';
import Stuviewidea from './pages/student/Stuviewidea';

import Entresp from './pages/entrepreneur/Entresp';
import Entmain from './pages/entrepreneur/Entmain';
import Entupload from './pages/entrepreneur/Entupload';
import Entprop from './pages/entrepreneur/Entprop';
import Entaccinv from './pages/entrepreneur/Ent_accinv';

import './style.css';
import Angelmain from './pages/investor/Angelmain';
import Angelinvreq from './pages/investor/Angel_inv_req';
import Metrics from './pages/investor/Metrics';
import Mentor from './pages/investor/Mentor';
import Pitchevent from './pages/investor/Pitch_event';
import Entaccinv from './pages/Ent_accinv';

import Notfound from './pages/Notfound';
import Home from './pages/Home';

function App() {

  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      {}
        {}
          <BasicExample ></BasicExample>
          <Routes>
            <Route
              path="/"
              element={
                user ? (
                  user.role === 'Student' ? (
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
            {}
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
                ) : user.role === 'Student' ? (
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
                ) : user.role === 'Student' ? (
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
                ) : user.role === 'Student' ? (
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
                ) : user.role === 'Student' ? (
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
                ) : user.role === 'Student' ? (
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
        {}
      {}
    </BrowserRouter>
  );
}

export default App;