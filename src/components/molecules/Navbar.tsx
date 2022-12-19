import { Box, Flex, Image } from '@chakra-ui/react';
import React, { useState } from 'react'
import NavbarItem from '../atoms/NavbarItem';
import iconUser from "../../assets/icons/icon-user-small.png";

interface IMenu {
  label: string,
  path: string,
  isActive: boolean
}

const menus: IMenu[] = [
  { label: "HOME", path: "/", isActive: true },
  { label: "NARASUMBER", path: "/narasumber", isActive: false },
  { label: "SOSIALISASI", path: "/sosialisasi", isActive: false },
  { label: "PELATIHAN A", path: "/pelatihan-a", isActive: false },
  { label: "PELATIHAN B", path: "/pelatihan-b", isActive: false },
  { label: "PELATIHAN C", path: "/pelatihan-c", isActive: false },
  { label: "PENDAMPINGAN", path: "/pendampingan", isActive: false },
  { label: "APRESIASI", path: "/apresiasi", isActive: false },
]

const Navbar = () => {
  const [menuItems, setMenuItems] = useState<IMenu[]>(menus);

  const onClick = (path: string) => {
    const oldActiveMenuIndex: number = menuItems.findIndex((item: IMenu) => item.isActive == true);
    const newActiveMenuIndex: number = menuItems.findIndex((item: IMenu) => item.path == path);
   
    if (oldActiveMenuIndex !== -1 && newActiveMenuIndex !== -1) {
      const oldActiveMenu: IMenu = { ...menuItems[oldActiveMenuIndex] };
      const newActiveMenu: IMenu = { ...menuItems[newActiveMenuIndex] };
      
      oldActiveMenu.isActive = false;
      newActiveMenu.isActive = true;

      const updatedMenuItems: IMenu[] = [...menuItems];
      updatedMenuItems[oldActiveMenuIndex] = oldActiveMenu;
      updatedMenuItems[newActiveMenuIndex] = newActiveMenu;

      setMenuItems(updatedMenuItems);
    }
  }

  return (
    <Box padding="30px 48px">
      <Flex columnGap="15px">
        { menuItems.map((menu: IMenu) => (
          <NavbarItem
            key={ menu.path }
            label={ menu.label }
            path={ menu.path }
            isActive={ menu.isActive }
            onClick={ onClick }
          />
        ))}

        <Image src={ iconUser } alt="icon-user" height="24px" />
      </Flex>
    </Box>
  )
}

export default Navbar