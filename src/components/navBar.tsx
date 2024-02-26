import React from "react";
import { Navbar, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      title: "¿Quien somos?",
      url: "#quiensomos"
    },
    {
      title: "Productos",
      url: "#productos"
    },
    {
      title: "Puntos de venta",
      url: "#puntosdeventa"
    }
  ];

  return (
    <Navbar className="dark bg-black" height="7rem" maxWidth="xl" onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-white"
        />
        <NavbarBrand>
          <img src="ladrillera-basile/logo.png" className="h-10 lg:h-16" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="#quienesSomos" className="text-foreground">
            ¿Quienes somos?
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#productos" className="text-foreground">
            Productos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#puntosdeventa" className="text-foreground">
            Puntos de venta
          </Link>
        </NavbarItem>
        <NavbarItem>
          <a href="http://www.instagram.com/ladrillerabasile/" target="_blank">
            <img src="ladrillera-basile/instagramIcon.png" alt="icon" width={20} />
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="http://www.facebook.com/ladrillerabasile" target="_blank">
            <img src="ladrillera-basile/facebookIcon.png" alt="icon" width={18} />
          </a>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.title}-${index}`}>
            <Link
              color="primary"
              className="w-full"
              href={item.url}
              size="lg"
              onClick={() => { setIsMenuOpen(false) }}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
