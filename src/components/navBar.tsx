import React from "react";
import {Navbar, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "¿Quien somos?",
    "Productos",
    "Servicio de entrega",
    "Puntos de venta"
  ];

  return (
    <Navbar className="dark h-[20vh] bg-black" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <img src="http://www.ladrillerabasile.com.ar/images/logo.png" className="h-10 lg:h-16"/>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="#quienesSomos" className="text-foreground">
            ¿Quien somos?
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#productos" className="text-foreground">
            Productos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-foreground">
            Puntos de venta
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="primary"
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
