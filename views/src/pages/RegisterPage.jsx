import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className='px-10'>

      <div className="h-screen flex justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body gap-0">
            <h2 className="card-title text-2xl my-5">Register</h2>

            <div class="form-control w-full max-w-xs">
              <label class="label"><span class="label-text">Name</span></label>
              <input type="text" placeholder="" class="input input-bordered w-full max-w-xs" />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label"><span class="label-text">Username</span></label>
              <input type="text" placeholder="" class="input input-bordered w-full max-w-xs" />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label"><span class="label-text">Email</span></label>
              <input type="email" placeholder="" class="input input-bordered w-full max-w-xs" />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label"><span class="label-text">Password</span></label>
              <input type={showPassword ? 'text' : 'password'} placeholder="" class="input input-bordered w-full max-w-xs" />
              <label class="label place-content-end">
                <a onClick={togglePasswordVisibility} class="label-text-alt text-xs underline" style={{ cursor: 'pointer' }}>
                  {showPassword ? 'Hide Password' : 'Show Password'}
                </a>
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label"><span class="label-text">Confirm Password</span></label>
              <input type={showConfirmPassword ? 'text' : 'password'} placeholder="" class="input input-bordered w-full max-w-xs" />
              <label class="label place-content-end">
                <a onClick={toggleConfirmPasswordVisibility} class="label-text-alt text-xs underline" style={{ cursor: 'pointer' }}>
                  {showConfirmPassword ? 'Hide Password' : 'Show Password'}
                </a>
              </label>
            </div>
            <div className="card-actions justify-center mt-4">
              <button className="btn btn-primary w-80">Register</button>
              <p className='text-xs text-center'>Already have account ? 
                <span className='underline text-sky-600 decoration-sky-600 ms-1' style={{ cursor: 'pointer' }} onClick={() => navigate("/login")}>Login</span>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default RegisterPage