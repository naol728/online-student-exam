import Logo from './Logo';
import Buttons from './Button';
export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between m-0 p-4 bg-blue-100 shadow-xl ">
        <Logo />
        <Buttons children={"Login"} type={"outlined"} />
      </nav>
    </div>
  );
}
