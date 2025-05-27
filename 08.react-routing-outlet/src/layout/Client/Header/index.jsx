import {NavLink} from "react-router-dom";
const ClinetHeader = () => {
    return (
        <header className="bg-black !p-5">
            <nav className=''>
                <ul className='flex space-x-4 text-white text-lg font-semibold gap-4'>
                 <li>
                    <NavLink className={({isActive})=> isActive ? "!text-red-400" : "text-white"} to={"/"}>Home</NavLink>
                 </li>
                 <li>
                    <NavLink className={({isActive})=> isActive ? "!text-red-400" : "text-white"} to={"/about"}>About</NavLink>
                 </li>
                 <li>
                    <NavLink className={({isActive})=> isActive ? "!text-red-400" : "text-white"} to={"/contact"}>Contact</NavLink>
                 </li>
                 <li>
                    <NavLink className={({isActive})=> isActive ? "!text-red-400" : "text-white"} to={"/products"}>Products</NavLink>
                 </li>
                </ul>
            </nav>
        </header>
    )
}

export default ClinetHeader
