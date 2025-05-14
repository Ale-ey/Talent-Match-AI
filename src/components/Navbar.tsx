
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  
} from "@/components/ui/breadcrumb"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"



export default function Navbar() {
  return (
    <main className="fixed top-0 w-full bg-white z-50 shadow py-2">
      <header className="flex justify-between items-center">
        <nav className="flex items-center  px-4 space-x-22 ">
          <div className="LOGO">Talent Match AI</div>
          <div className="Nav">
            <Breadcrumb className="text-gray-">
              <BreadcrumbList className="space-x-5">                
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/logout">Jobs</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>


          </div>

        </nav>
        <div className="profile px-6">
          <Menubar >
            <MenubarMenu>
              <MenubarTrigger>CN
                </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  My Account<MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>Settings</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Logout</MenubarItem>
                               
              </MenubarContent>
            </MenubarMenu>
          </Menubar>



        </div>

      </header>
      
    </main>
  );
}