import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch,BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation,AiFillContacts } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import './SidebarJS.css'
const routes = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaHome />,
    },
    {
      path: "/users",
      name: "Users",
      icon: <FaUser />,
    },
    {
      path: "/messages",
      name: "Messages",
      icon: <MdMessage />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <BiAnalyse />,
    },
    {
      path: "/filemanager",
      name: "File Manager",
      icon: <AiTwotoneFileExclamation />,
      subRoutes: [
        {
          path: "/settings/profile",
          name: "Profile ",
          icon: <FaUser />,
        },
        {
          path: "/settings/2fa",
          name: "2FA",
          icon: <FaLock />,
        },
        {
          path: "/settings/billing",
          name: "Billing",
          icon: <FaMoneyBill />,
        },
      ],
    },
    {
      path: "/order",
      name: "Order",
      icon: <BsCartCheck />,
    },
    {
      path: "/setting",
      name: "Settings",
      icon: <BiCog />,
      exact: true,
      subRoutes: [
        {
          path: "/settings/profile",
          name: "Profile ",
          icon: <FaUser />,
        },
        {
          path: "/settings/2fa",
          name: "2FA",
          icon: <FaLock />,
        },
        {
          path: "/settings/billing",
          name: "Billing",
          icon: <FaMoneyBill />,
        },
      ],
    },
    {
      path: "/saved",
      name: "Saved",
      icon: <AiFillHeart />,
    },
    {
      path: "/contact",
      name: "Contact",
      icon:<AiFillContacts/>
    },
  ];
const Sidebar = ({children}) => {

    const [isOpen,setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const inputAnimation = {
        hidden:{
            width:0,
            padding:0,
            opacity:0,
            transition:{
                duration:0.2,
            }
        
        },

        show:{
            width:"140px",
            padding:"5px 15px",
            opacity:1,
            transition:{
                duration:0.7,
            }
        }
    }

    const showAnimation = {
        hidden:{
            width:0,
            transition:{
                duration:0.5,
            },
            opacity:0,
        
        },

        show:{
            width:"auto",
            
            opacity:1,
            transition:{
                duration:0.7,
            }
        }
    }
  return (
    <div className="main-container">

    <motion.div animate={{width: isOpen ? "200px":"35px", transition:{
        duration:0.5,
        type:"spring",
        damping:10,
    }}} className="sidebar">

    <div className="top_section">
    
    {isOpen && <motion.h1 initial="hidden" animate="show" exit="hidden" variants={inputAnimation} className="logo">V Ex Men</motion.h1>}
    <div className="bars">
    <FaBars onClick={toggle}/>
    
    </div>
    </div>

    <div className="search">
    <div className="search_icon">
    <BiSearch/>
    </div>

    <AnimatePresence>

    {isOpen && <motion.input initial="hidden" animate="show" exit="hidden" variants={inputAnimation} type="text"  placeholder="Search..."/>}
    
    </AnimatePresence>

    
    </div>

    <section className="routes">
    {routes.map((route)=>(
        <NavLink to={route.path} key={route.name} className="link">
        
        <div className="icon">{route.icon}</div>
        <AnimatePresence>
        {isOpen && <motion.div variants={showAnimation}
        initial="hidden"
        animate="show"
        exit="hidden" className="link_text">
        
        {route.name}
        </motion.div>}
        </AnimatePresence>
        </NavLink>
    ))}
    
    </section>
    </motion.div>
    <main>
    {children}
    </main>

    
    </div>
  )
}

export default Sidebar