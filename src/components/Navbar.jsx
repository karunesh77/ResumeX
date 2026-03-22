export default function Navbar({ onLogoClick, rightSlot }) {
  return (
    <nav className="nav">
      <div className="nav-logo" onClick={onLogoClick}>
        Resume<span>X</span>
      </div>
      <div className="nav-acts">{rightSlot}</div>
    </nav>
  );
}
