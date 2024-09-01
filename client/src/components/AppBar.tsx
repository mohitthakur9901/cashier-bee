import { ModeToggle } from "./mode-toggle"
import { Button } from "@/components/ui/button"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { navlinks } from "@/Data/NavLinks"

function AppBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between p-4 border-b dark:border-white bg-gray-100 dark:bg-gray-800 z-40">
      <div className="logo text-xl font-bold">
        LOGO
      </div>
      <div className="nav-links flex items-center justify-between gap-5">
        {navlinks.map((link) => (
          <Link
            key={link.id}
            to={link.url}
            className={`transition-colors duration-300 ${pathname === link.url ? 'underline font-semibold text-blue-500' : 'text-gray-700 dark:text-gray-300 hover:text-blue-500'}`}
            aria-current={pathname === link.url ? 'page' : undefined}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="buttons flex items-center justify-between gap-5">
        <ModeToggle />
        <Button onClick={() => navigate('/signup')} aria-label="Sign up">
          Get Started
        </Button>
      </div>
    </div>
  )
}

export default AppBar;
