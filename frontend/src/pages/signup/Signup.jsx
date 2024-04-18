// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import GenderCheckbox from "./GenderCheckbox";
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup'

const Signup = () => {
  const [inputs, setInputs]= useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });

  const {loading, signup} = useSignup()

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 max-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Cadastrar <span className='text-purple-400'> ChatSpace</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Seu Nome</span>
            </label>
            <input type="text"
            placeholder='ex: Fulano...'
            className='w-full input input-bordered h-10'
            value={inputs.fullName}
            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value})}
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Nome de Usuario</span>
            </label>
            <input type="text"
            placeholder='ex: fulano123...'
            className='w-full input input-bordered h-10'
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value})}
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Senha</span>
            </label>
            <input type="password"
            placeholder='Sua senha'
            className='w-full input input-bordered h-10'
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value})}
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirme sua senha</span>
            </label>
            <input type="password"
            placeholder='Confirmar sua senha '
            className='w-full input input-bordered h-10'
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value})}
            />
          </div>

          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

          <Link to='/login'
          className='text-sm hover:underline hover:text-purple-600 mt-2 inline-block'
          href='#'
          >
          Já possui cadastro? Clique aqui!
          </Link>
          <div>
            <button className='btn btn-block btn-sm mt-2 border-slate-700' disabled={loading}>
              {loading ? <span className='loading loading-spinner '></span> : "Cadastrar"} 
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;