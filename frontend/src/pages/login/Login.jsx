// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const {loading, login} = useLogin();

   const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
   };


  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Login
                <span className='text-purple-500'> ChatSpace</span>
            </h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Nome de Usuário</span>
                    </label>
                    <input type="text" 
                    placeholder='Entre com seu usuário'
                    className='w-full input input-bordered h-10'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Senha</span>
                    </label>
                    <input type="password" 
                    placeholder='Entre com sua senha'
                    className='w-full input input-bordered h-10'
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <Link to='/signup' className='text-sm hover:underline hover:text-purple-600 mt-2 inline-block'>
                    Não tem uma conta? Clique aqui!
                </Link>
                <div>
                    <button className='btn btn-block btn-sm mt-2' disabled={loading}>
                        {loading ? <span className='loading loading-spinner'></span>: "Login"}
                    </button>
                </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login