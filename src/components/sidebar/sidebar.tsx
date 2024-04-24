import { Pentagon, Home, BriefcaseBusiness, LogOut } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"
import SideLink from "./side-link"


const sidebarRoutes = [
  {
    label: "Home",
    href: "/",
    icon: <Home className="size-5" />,
    tooltip: "Home"
  },
  {
    label: "My Jobs",
    href: "/my-jobs",
    icon: <BriefcaseBusiness className="size-5" />,
    tooltip: "My Jobs"
  }
]


const Sidebar = () => {
  return (
    <aside
      className="inset-y fixed bg-foreground left-0 z-20 flex h-full flex-col border-r justify-between"
    >
      <div className="border-b border-b-slate-700 p-2">
        <Link
          href={"/"}
        >
          <Button
            variant={"link"}
            size={"icon"}
            aria-label="Home"
          >
            <Pentagon className="size-5 text-white" />
          </Button>
        </Link>
      </div>
      <nav className="grid gap-1 p-2 mt-2">
        {sidebarRoutes.map((route) => (
          <SideLink
            key={route.href}
            href={route.href}
            label={route.label}
            icon={route.icon}
            tooltip={route.tooltip}
          />
        ))}
      </nav>
      <Button
        size={"icon"}
        className="mt-auto text-primary bg-transparent hover:text-primary-foreground transition ease-out duration-200 mx-2 mb-3"
      >
        <LogOut className="size-5" />
      </Button>


    </aside>
  )
}

export default Sidebar