import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { userlogout } from '../../redux/userdataSlice';
import { BiShow, BiHide } from "react-icons/bi";

function Login() {

    const [userlogindata, setUserlogindata] = useState({
        email: "",
        password: "",
    });

    const [type, setType] = useState(true)
    const [errors, setErrors] = useState({})

    const handlechange = (e) => {
        const { name, value } = e.target
        setUserlogindata({ ...userlogindata, [name]: value })
    }

    const navigat = useNavigate()
    const dispatch = useDispatch()

    const handlesubmit = (e) => {
        e.preventDefault();
        let err = {}
        const userloaded = JSON.parse(localStorage.getItem("shopping data"))
        let errors = 0;
        const ab = userloaded.filter((item) => {
            return item.email === userlogindata.email
        })
        if (ab.length === 0) {
            err.username = "Please enter the valid email"
        } else {
            if (ab[0].password !== userlogindata.password) {
                err.password = "Wrong passwords"
            }
        }
        setErrors({ ...err })

        if (Object.keys(err).length < 1) {
            localStorage.setItem("userDetails", JSON.stringify(ab))
            dispatch(userlogout(true))
            navigat('/')
        }
    }
    return (
        <>
            <div className="container py-[100px]">
                <div className="max-w-[420px] mx-auto">
                    <h2 className="text-3xl mb-5 text-center">Log in</h2>
                    <form onSubmit={handlesubmit}>
                        <input className={`p-3 mt-3 rounded-md bg-slate-800 w-full border ${errors.username ? "border-red-600" : "border-slate-800"}`}
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={userlogindata.email} onChange={handlechange}
                            autoComplete="off" />
                        {errors.username && <p className='text-red-400'>{errors.username}</p>}
                        <div className='relative'>
                            <input className={`p-3 mt-3 rounded-md bg-slate-800 w-full border ${errors.password ? "border-red-600" : "border-slate-800"}`}
                                type={`${type ? "password" : "text"}`}
                                name="password"
                                placeholder="Password"
                                value={userlogindata.password} onChange={handlechange} />
                            <span onClick={() => setType(!type)} className='absolute top-[50%] translate-y-[calc(-50%+7px)] right-3 cursor-pointer'>
                                {
                                    type ? <BiHide className='text-xl text-slate-400' /> : <BiShow className='text-xl text-slate-400' />
                                }
                            </span>
                        </div>
                        {errors.password && <p className='text-red-400'>{errors.password}</p>}
                        <p className='text-center mt-3 mb-10'>Don't have an account? <Link to="/signup" className='text-theme font-medium'>Sign up</Link></p>
                        <button className="themebtn w-full">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
