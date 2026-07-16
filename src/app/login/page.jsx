import LoginForm from '@/components/auth/LoginForm';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

const Login = () => {
  return (
    <div>
      <Navbar/>
      <LoginForm/>
    </div>
  );
};

export default Login;