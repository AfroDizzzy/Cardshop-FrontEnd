import { SignInButtonNavBar } from "./signInButton";
import { SignUpButtonNavBar } from "./signUpButton";
import { NavBarSearch } from "./tanstackQuery";
import './navBar.css'


export function NavBar() {

    return (
        <div className="navbar bg-base-100 shadow-sm h-[10vh]">
            <div className="flex gap-2">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost rounded-field">Dropdown</div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        // <nav className="nav-bar">
        //     <NavBarSearch/>
        //     <SignInButtonNavBar/>
        //     <SignUpButtonNavBar/>

        // </nav>
    )
}