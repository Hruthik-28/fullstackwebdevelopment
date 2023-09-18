import React, { useState } from 'react'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'

function Auth() {
    const [isSignUp, setIsSignUp] = useState(false)

    return (
        <>
        {
            (isSignUp) ? <SignUp /> : < Login />
        }

        <div className="text-center">
          <button
            className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => setIsSignUp(prev => !prev)}
          >
            {
                (isSignUp) ? "Sign Up" : "Login"
            }
          </button>
        </div>

        {
            (isSignUp) 
            ?       
            <div className="text-center mt-4">
                <p className="text-base">
                have an account? <p className='text-blue-500 cursor-pointer'>
                    <legend onClick={() => setIsSignUp(prev => !prev)}>Sign In</legend>
                </p>
                </p>
            </div>
            :
            <div className="text-center mt-4">
                <p className="text-base">
                Don't have an account? <p className='text-blue-500 cursor-pointer'>
                    <legend onClick={() => setIsSignUp(prev => !prev)}>Sign Up</legend>
                </p>
                </p>
            </div>

        }
        </>
    )
}

export default Auth
