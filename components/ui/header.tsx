"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import { MenuIcon, ShieldCloseIcon } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Card id="ui-h" className="ml-2 mr-2 mt-2">
      <CardContent className="px-5 py-8 justify-between items-center flex flex-row relative">
        <Image
          src="/Logo_Einstein.png"
          alt="logo Einstein"
          height={22}
          width={120}
        />
        <div className="flex items-center mx-auto">
          {" "}
          {/* Contêiner para centralizar o h1 */}
          <h1 className="mr-8 text-center">Helpdesk Ensino</h1>
          <Button
            variant="outline"
            size="icon"
            className="h-6 w-6 mr-1 block md:hidden" // Mostra apenas em telas menores (md e abaixo)
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <ShieldCloseIcon size={22} />
            ) : (
              <MenuIcon size={22} />
            )}
          </Button>
        </div>
        {isMenuOpen && (
          <div className="absolute top-full right-0 bg-gray-100 shadow-lg mt-1 rounded overflow-hidden">
            <ul className="p-2">
              <li>Grupo 1</li>
              <li>Grupo 2</li>
              <li>Grupo 3</li>
              <li>Grupo 4</li>
              <li>Grupo 5</li>
              <li>Grupo 6</li>
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Header;
