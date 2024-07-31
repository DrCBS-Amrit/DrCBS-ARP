"use client";
import { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    employeeId: '',
    contactNo: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [inputStyles, setInputStyles] = useState({
    name: 'font-bold',
    employeeId: 'font-bold',
    contactNo: 'font-bold',
    email: 'font-bold',
    password: 'font-bold',
    confirmPassword: 'font-bold',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (value) {
      setInputStyles({
        ...inputStyles,
        [name]: 'font-normal',
      });
    } else {
      setInputStyles({
        ...inputStyles,
        [name]: 'font-bold',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-2 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg px-4 pt-2 pb-4 w-full max-w-xs">
        <div className="text-blue-600 text-xl font-bold mb-4 text-center">
          Registration Form
        </div>
        <form onSubmit={handleSubmit}>
          <label className="block text-xs font-bold mb-1">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`block border border-gray-300 rounded px-2 py-1 mt-1 w-full text-xs ${inputStyles.name}`}
            />
          </label>
          <label className="block text-xs font-bold mb-1">
            Employee ID:
            <input
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleChange}
              required
              className={`block border border-gray-300 rounded px-2 py-1 mt-1 w-full text-xs ${inputStyles.employeeId}`}
            />
          </label>
          <label className="block text-xs font-bold mb-1">
            Contact No:
            <input
              type="text"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              required
              className={`block border border-gray-300 rounded px-2 py-1 mt-1 w-full text-xs ${inputStyles.contactNo}`}
            />
          </label>
          <label className="block text-xs font-bold mb-1">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`block border border-gray-300 rounded px-2 py-1 mt-1 w-full text-xs ${inputStyles.email}`}
            />
          </label>
          <label className="block text-xs font-bold mb-1">
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className={`block border border-gray-300 rounded px-2 py-1 mt-1 w-full text-xs ${inputStyles.password}`}
            />
          </label>
          <label className="block text-xs font-bold mb-1">
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className={`block border border-gray-300 rounded px-2 py-1 mt-1 w-full text-xs ${inputStyles.confirmPassword}`}
            />
          </label>
          <button 
            type="submit" 
            className="mt-2 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white font-semibold py-1 px-3 rounded-lg text-xs w-full transition-transform transform hover:scale-105"
          >
            Submit
          </button>
        </form>
        <div className="mt-2 text-center">
          <a 
            href="/login" 
            className="text-blue-500 hover:underline text-xs font-semibold"
          >
            Already registered? Log in
          </a>
        </div>
      </div>
    </main>
  );
};

export default RegisterForm;
