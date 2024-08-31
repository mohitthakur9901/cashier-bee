import { ModeToggle } from "./mode-toggle"
import { Button } from "@/components/ui/button"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { navlinks } from "@/Data/NavLinks"


function AppBar() {
    const {pathname} = useLocation();
    const navigate = useNavigate()
    
   
  return (
    <div className="flex items-center justify-between p-4 border-b  dark:border-white ">
        <div className="logo">
            LOGO
        </div>
        <div className="nav-links flex items-center justify-between gap-5">
        {navlinks.map((link) => (
                    <Link 
                        key={link.id} 
                        to={link.url} 
                        className={`${pathname === link.url ? 'underline' : ''}`}
                    >
                        {link.title}
                    </Link>
                ))}
        </div>
        <div className="buttons flex items-center justify-between gap-5">
            <ModeToggle/>
            <Button onClick={() => navigate('/signup')}>Get Started</Button>
        </div>
    </div>
  )
}

export default AppBar