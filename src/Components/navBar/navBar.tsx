import { SignInButtonNavBar } from "./signInButton/signInButton";
import { SignUpButtonNavBar } from "./signUpButton/signUpButton";
import { SearchInputArea } from "./searchInputArea/searchInputArea";

export function NavBar() {
  return (
    <nav className="navbar flex bg-base-100 shadow-sm h-[5vh]">
      <a href="/" className="home-icon">
        <img
          alt="Tailwind CSS Navbar component"
          src="card.jpg"
          className="h-full w-auto object-contain"
        ></img>
      </a>
      <SearchInputArea />
      <SignInButtonNavBar />
      <SignUpButtonNavBar />
    </nav>
  );
}
