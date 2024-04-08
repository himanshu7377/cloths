import React from "react";
import login from '../assets/login.jpg'

function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("login ");
    };

    return (
        <div className="h-screen w-screen flex justify-center items-center" >
            <div className="p-10 rounded-lg shadow-md" style={{ backgroundImage: `url(${login})`, backgroundSize:"cover", backgroundPosition: 'center' }}>
                <div className="mb-5 text-center">
                    <h1 className="text-3xl font-bold text-white">LOGIN</h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="flex items-center">
                        <label htmlFor="email" className="w-24 text-white">Email:</label>
                        <input type="email" id="email" name="email" className="input-field flex-1" />
                    </div>

                    <div className="flex items-center">
                        <label htmlFor="password" className="w-24 text-white">Password:</label>
                        <input type="password" id="password" name="password" className="input-field flex-1" />
                    </div>

                    <div className="text-center ">
                        <button type="submit" className="btn-submit bg-green-700 p-2 rounded-md w-[100px] text-white">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
