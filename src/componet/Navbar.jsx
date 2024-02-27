import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { userlogout } from '../redux/userdataSlice';


function Navbar() {

    const [menu, setMenu] = useState(true)
    const [screensize, setScreensize] = useState("")
    const [userName, setUserName] = useState("")

    const { logout } = useSelector((state) => state.userdata)
 
    const dispatch = useDispatch()

    const logoutuser = () => {
        dispatch(userlogout(false))
        localStorage.removeItem("userDetails")
    }

    useEffect(() => {
        if (localStorage.getItem("userDetails")) {
            const userdet = localStorage.getItem("userDetails")
            setUserName(JSON.parse(userdet).username || JSON.parse(userdet)[0].username)
            // console.log(JSON.parse(userdet))
            dispatch(userlogout(true))
        }
        const sizewidth = () => {
            setScreensize(window.innerWidth)
        }
        sizewidth()
        window.addEventListener("resize", () => {
            setScreensize(window.innerWidth)
        })

    }, [logout])

    return (
        <>
            <section className="py-3 bg-slate-800">
                <div className="lg:container w-full px-4 ">
                    <div className="flex justify-between items-center">
                        <Link to="/" className='text-4xl font-semibold text-theme'>LOGO</Link>
                        <div className="flex items-center gap-5">
                            {
                                (screensize >= 768) ?
                                    <div className=" ">
                                        <ul className='flex gap-10'>
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/about">About</Link></li>
                                            <li><Link to="/product">Product</Link></li>
                                            <li><Link to="/contact">Contact</Link></li>
                                            {logout && <li><Link to="/home">Dashbord</Link></li>}
                                            {logout && <li><Link>{userName}</Link></li>}
                                        </ul>
                                    </div>
                                    :
                                    <ul className={`${menu ? "-right-full" : "right-0"} fixed top-[64px] transition-all ease-linear duration-300 h-screen p-[30px] bg-slate-800 sm:w-[400px] w-full space-y-8`}>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/product">Product</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                        {logout && <li><Link to="/home">Dashbord</Link></li>}
                                    </ul>
                            }

                            <div className='flex items-center gap-3'>
                                {
                                    logout ?
                                        <button onClick={logoutuser} className="themebtn">Logout</button>
                                        :
                                        <Link to="/login" className="themebtn">Login</Link>
                                }
                                <IoMenu className='text-3xl md:hidden' onClick={() => setMenu(!menu)} />
                                {/* <IoClose className='text-3xl md:hidden' /> */}
                            </div>
                            {/* <Link to="/login" className="themebtn" >Logout </Link> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar
