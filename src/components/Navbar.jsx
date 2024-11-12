import Logo from './Logo';
import Buttons from './Button';
export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between m-0 p-4 bg-slate-300 ">
        <Logo />
        <Buttons children={"Login"} type={"outlined"} />
      </nav>
    </div>
  );
}
