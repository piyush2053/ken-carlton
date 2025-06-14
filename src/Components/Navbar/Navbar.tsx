import { Fragment } from "react/jsx-runtime";
import LOGO from '../../Assets/Logo/3.png'

export default function Navbar() {
    return (
        <Fragment>
            <div className={`flex items-center justify-between py-4 px-5 text-white !bg-black`}>
                <div className="flex items-center ">
                    <img  src={LOGO} alt="kencarltonlogo" className="h-10"/>
                </div>
            </div>
        </Fragment>
    );
}
