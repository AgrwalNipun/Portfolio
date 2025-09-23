import { cn } from "../utils/utils"
import { ThemeToggle } from '../components/ThemeToggle'




const navItems = [
    {name:'Home',href:"#home",},
    {name:'About',href:"#about",},
    {name:'Skills',href:"#skills",},
    {name:'Projects',href:"#projects",},
    {name:'Contact',href:"#contact",},

]




export const Navbar=()=>{

    
    return <nav className={cn(
        "py-5 fixed w-full z-40 transition-all duration-300 "              
    )}>
    

    <div className=" container flex items-center justify-between">
        <a href = '#hero' className="text-xl font-bold text-primary flex items-center">
            <span >

            <span className="text-glow text-foreground">Nipun Agrawal</span>{" "}
            Portfolio</span>
        
    </a>

          <ThemeToggle/>

    </div>

    
    

    </nav>


}