import React from 'react'

const LoginPage = ({isCustomer}) => {

    let color = "";
    let border = "";
    if (isCustomer === "yes"){
        color = 'bg-customer-color'
        border = 'border-customer-color'
    }else{
        color = 'bg-pro-color'
        border = 'border-pro-color'
    }

  return (
    <form className={`m-8 max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg border-8 ${border}`}>
  <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">{isCustomer ==="yes" ? "Customer" : "Professional"} Login</h2>

  <div className="mb-4">
    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
    <input
      type="text"
      id="name"
      name="name"
      required
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </div>

  <div className="mb-6">
    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
    <input
      type="password"
      id="password"
      name="password"
      required
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </div>

  <button
    type="submit"
    className={`w-full ${color}  hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
  >
    Log In
  </button>
</form>

  )
}

export default LoginPage
