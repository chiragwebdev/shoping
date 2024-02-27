import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { fromdata, userlogout } from '../../redux/userdataSlice';
import { BiShow, BiHide } from "react-icons/bi";

function Signup() {

    const [user, setUser] = useState({
        id: 0,
        username: "",
        email: "",
        password: "",
        repassword: "",
        loginstatus: false
    });

    const [userSaveDetails, setUserSaveDetails] = useState()
    const [type, setType] = useState(true)
    const [errors, setErrors] = useState({})
    const navigat = useNavigate()

    const handlechange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }


    // let errors = {};
    const valid = () => {
        let err = {}
        let matchEmail;
        if (userSaveDetails) {
            matchEmail = userSaveDetails.filter((item) => {
                return item.email === user.email
            })
        }

        const { username, email, password, repassword } = user

        if (username.trim() === "") {
            err.username = "Please enter the user name"
        } else if (username.trim().length < 3) {
            err.username = "User must be three or more characters"
        }

        if (email.trim() === "") {
            err.email = "Please enter the valid email"
        } else if (matchEmail == user.email) {
            err.email = "The email address already exists"
        }

        if (password.trim() === "") {
            err.password = "Plase enter the user password"
        } else if (password.trim().length < 6) {
            err.password = "Passwords must be six or more characters"
        }

        if (repassword.trim() === "" || password !== repassword) {
            err.repassword = "Please enter the confirm password"
        }

        setErrors({ ...err })
        // console.log(Object.keys(err))
        return Object.keys(err).length < 1
    }
    const dispatch = useDispatch()

    const handlesubmit = (e) => {
        e.preventDefault()

        const validform = valid()

        if (validform) {

            // dispatch(fromdata({ ...user, id: udata.length + 1, loginstatus: true })) 
            let storedUser = JSON.parse(localStorage.getItem('shopping data'));

            if (localStorage.getItem("shopping data") == null) {
                localStorage.setItem("shopping data", '[]')
            }

            if (localStorage.getItem("userDetails") == null) {
                const a1 = { ...user, loginstatus: true }
                localStorage.setItem("userDetails", JSON.stringify(a1))
            }

            const add = { ...user, id: storedUser.length + 1, loginstatus: true }
            storedUser.push(add)
            localStorage.setItem("shopping data", JSON.stringify(storedUser))

            setUser({
                username: "",
                email: "",
                password: "",
                repassword: "",
            });
            dispatch(userlogout(true))
            navigat('/')
        }
    }

    useEffect(() => {
        if (localStorage.getItem('shopping data')) {
            const userdetailsapi = JSON.parse(localStorage.getItem('shopping data'));
            setUserSaveDetails(userdetailsapi)
        }
    }, [])


    return (
        <>
            <div className="container py-[100px]">
                <div className="max-w-[420px] mx-auto">
                    <h2 className="text-3xl mb-5 text-center">Sign in</h2>
                    <form onSubmit={handlesubmit}>
                        <input className={`p-3 rounded-md bg-slate-800 w-full border ${errors.username ? "border-red-600" : "border-slate-800"}`}
                            type="text"
                            name="username"
                            placeholder="User name"
                            value={user.username} onChange={handlechange}
                            autoComplete="off" />
                        {/* {usererror && <p className='text-red-400'>User must be three or more characters</p>} */}
                        {errors.username && <p className='text-red-400'>{errors.username}</p>}
                        <input className={`p-3 mt-3 rounded-md bg-slate-800 w-full border ${errors.email ? "border-red-600" : "border-slate-800"}`}
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={user.email} onChange={handlechange}
                            autoComplete="off" />
                        {errors.email && <p className='text-red-400'>{errors.email}</p>}
                        <div className='relative'>
                            <input className={`p-3 mt-3 rounded-md bg-slate-800 w-full border ${errors.password ? "border-red-600" : "border-slate-800"}`}
                                type={`${type? "password" : "text"}`}
                                name="password"
                                placeholder="Password"
                                value={user.password} onChange={handlechange} />
                            <span onClick={() => setType(!type)} className='absolute top-[50%] translate-y-[calc(-50%+7px)] right-3 cursor-pointer'>
                                {
                                    type ? <BiHide className='text-xl text-slate-400' /> : <BiShow className='text-xl text-slate-400' />
                                }
                            </span>
                        </div>
                        {errors.password && <p className='text-red-400'>{errors.password}</p>}
                        <input className={`p-3 mt-3 rounded-md bg-slate-800 w-full border ${errors.repassword ? "border-red-600" : "border-slate-800"}`}
                            type={`${type? "password" : "text"}`}
                            name="repassword"
                            placeholder="Confirm password"
                            value={user.repassword} onChange={handlechange} />
                        {errors.repassword && <p className='text-red-400'>{errors.repassword}</p>}
                        <p className='text-center mt-3 mb-10'>Have an account? <Link to="/login" className='text-theme font-medium'>Log in</Link></p>
                        <button className="themebtn w-full">Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup
