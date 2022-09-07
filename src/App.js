import React, {useState} from "react";

const SignUp = () => {
    const [firstname, setFirstname] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const changeInput = (e) => {

        //associe la valeur des input dans les constantes
        if(e.target.name === "firstname"){
            setFirstname(e.target.value)
        }
        else if(e.target.name === "name"){
            setName(e.target.value)
        }

        else if(e.target.name === "email"){
            setEmail(e.target.value)
        }

        else if(e.target.name === "password"){
            setPassword(e.target.value)
        }

    }



    return (

        <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>

            <div className='max-w-md w-full space-y-8'>

                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://media.zeemly.com/zeemly/product/tailwind-css.png"
                        alt="Tailwind css"
                    />

                    <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Sign up</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or{' '}
                        <a href="SignIn" className="font-medium text-indigo-600 hover:text-indigo-500">
                            sign in to your account
                        </a>

                    </p>
                </div>
                <br/>

                <form  className='text-center' /*method="POST"*/>

                    <div>

                        {/* Prenom */}
                        <div>

                            <input type="text" autoComplete='none' onChange={changeInput} value={firstname} id='firstname' name='firstname' required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                            test-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                   placeholder='firstname'/>
                        </div>

                        {/* Nom de famille */}

                        <div>
                            <input type="text" autoComplete='none' onChange={changeInput} value={name} id='name' name='name' required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                            test-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                   placeholder='name'/>
                        </div>

                        {/* Email */}

                        <div>
                            <input type="email" autoComplete='none' id='email' value={email} onChange={changeInput} name='email' required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                            test-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                   placeholder='email adress'/>
                        </div>


                        {/* Mot de passe */}

                        <div>
                            <input type="password" autoComplete='none' id='password' value={password} onChange={changeInput} name='password' required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                            test-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                   placeholder='password'/>
                        </div>

                        <div>
                            <input type="password" autoComplete='none' required className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500
                            test-gray-900 rounded-t-md mb-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                   placeholder='confirm password'/>
                        </div>

                        <div>
                            <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                               >Sign up
                            </button>

                        </div>

                    </div>
                </form>
            </div>
        </div>
    )

}
export default SignUp