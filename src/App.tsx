import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import Home from './pages/Home';
import DoctorSearch from './pages/DoctorSearch';
import VoiceCommand from './pages/VoiceCommand';
import AppointmentScheduling from './pages/AppointmentScheduling';
import AppointmentConfirmation from './pages/AppointmentConfirmation';
import Appointments from './pages/Appointments';
import AppointmentDetails from './components/AppointmentDetails';
import Profile from './pages/Profile';
import TravelGuide from './pages/TravelGuide';
import CarrefourVoyages from './pages/CarrefourVoyages';
import ProfileChoice from './pages/ProfileChoice';
import PractitionerTypeChoice from './pages/PractitionerTypeChoice';
import PractitionerSignup from './pages/PractitionerSignup';
import PractitionerInfo from './pages/PractitionerInfo';
import PractitionerPreview from './pages/PractitionerPreview';
import PractitionerDashboard from './pages/PractitionerDashboard';
import ProfessionalDetails from './pages/ProfessionalDetails';

const mockAppointment = {
  id: '1',
  date: '2 juin 2023',
  time: '09:30',
  doctor: {
    name: 'Dr Virginie USOLINI',
    specialty: 'Laboratoire',
    imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300'
  },
  patient: {
    name: 'Julien Bakala',
    gender: 'Homme',
    age: 38,
    phone: '+33650439664'
  },
  location: {
    type: 'Cabinet',
    address: 'Sydney, New South Wales',
    city: 'Sydney',
    country: 'AUS',
    phone: '+33675990550'
  },
  price: 40.00
};

export default function App() {
  return (
    <div className="h-screen overflow-x-hidden">
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<DoctorSearch />} />
        <Route path="/voice-command" element={<VoiceCommand />} />

        {/* Protected routes */}
        <Route path="/appointment" element={
          <PrivateRoute>
            <AppointmentScheduling />
          </PrivateRoute>
        } />
        <Route path="/appointment/confirmation" element={
          <PrivateRoute>
            <AppointmentConfirmation />
          </PrivateRoute>
        } />
        <Route path="/appointments" element={
          <PrivateRoute>
            <Appointments />
          </PrivateRoute>
        } />
        <Route path="/profile" element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        } />
        <Route path="/profile-choice" element={
          <PrivateRoute>
            <ProfileChoice />
          </PrivateRoute>
        } />
        <Route path="/practitioner-type" element={
          <PrivateRoute>
            <PractitionerTypeChoice />
          </PrivateRoute>
        } />
        <Route path="/practitioner-signup" element={
          <PrivateRoute>
            <PractitionerSignup />
          </PrivateRoute>
        } />
        <Route path="/practitioner-info" element={
          <PrivateRoute>
            <PractitionerInfo />
          </PrivateRoute>
        } />
        <Route path="/practitioner-preview" element={
          <PrivateRoute>
            <PractitionerPreview />
          </PrivateRoute>
        } />
        <Route path="/practitioner-dashboard" element={
          <PrivateRoute>
            <PractitionerDashboard />
          </PrivateRoute>
        } />
        <Route path="/professional-details" element={
          <PrivateRoute>
            <ProfessionalDetails />
          </PrivateRoute>
        } />
        <Route path="/travel-guide" element={
          <PrivateRoute>
            <TravelGuide />
          </PrivateRoute>
        } />
        <Route path="/partner/carrefour-voyages" element={
          <PrivateRoute>
            <CarrefourVoyages />
          </PrivateRoute>
        } />
        <Route path="/appointments/:id" element={
          <PrivateRoute>
            <AppointmentDetails appointment={mockAppointment} />
          </PrivateRoute>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}