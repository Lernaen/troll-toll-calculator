import Nav from './Nav'
import Logo from './Logo'
import UserAuthArea from './UserAuthArea'
export default function Navbar() {
  return (
    <div className="navbar bg-accent-bg grid min-h-24 grid-cols-[auto_1fr_auto] items-center gap-16 px-16 py-4">
      <Logo />
      <Nav />
      <UserAuthArea />
    </div>
  )
}
