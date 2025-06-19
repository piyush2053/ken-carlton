import { Fragment } from "react/jsx-runtime";
import LOGO from '../../Assets/Logo/3.png'
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate()
    return (
        <Fragment>
            <div className={`flex items-center justify-between py-4 px-5 text-white !bg-black`}>
                <div className="flex items-center hover:cursor-pointer" onClick={()=>navigate('/')}>
                    <img  src={LOGO} alt="kencarltonlogo" className="h-10"/>
                </div>
            </div>
        </Fragment>
    );
}
