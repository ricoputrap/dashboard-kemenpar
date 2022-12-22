import { Box, Flex, Image } from '@chakra-ui/react';
import NavbarItem from '../atoms/NavbarItem';
import iconUser from "../../assets/icons/icon-user-small.png";
import { Link, Location, useLocation } from 'react-router-dom';

interface IMenu {
  label: string,
  path: string,
}

const menus: IMenu[] = [
  { label: "HOME", path: "/" },
  { label: "NARASUMBER", path: "/narasumber" },
  { label: "SOSIALISASI", path: "/sosialisasi" },
  { label: "PELATIHAN A", path: "/pelatihan-a" },
  { label: "PELATIHAN B", path: "/pelatihan-b" },
  { label: "PELATIHAN C", path: "/pelatihan-c" },
  { label: "PENDAMPINGAN", path: "/pendampingan" },
  { label: "APRESIASI", path: "/apresiasi" },
]

const Navbar: React.FC = () => {
  const location: Location = useLocation();

  const getIsActive = (path: string): boolean => {
    return path == location.pathname;
  }

  return (
    <Box
      padding="30px 48px 15px"
      height="fit-content"
      borderBottom="2px solid #EAC170"
      position="relative"
    >
      <Box
        position="absolute"
        bottom="-2px"
        right={0}
        height="2px"
        width="100%"
        borderBottom="2px solid #EAC170"
        filter="blur(4px)"
      ></Box>
      <Flex columnGap="14px">
        { menus.map((menu: IMenu) => (
          <NavbarItem
            key={ menu.path }
            label={ menu.label }
            path={ menu.path }
            isActive={ getIsActive(menu.path) }
          />
        ))}

        <Box zIndex={2}>
          <Link to="/profile">
            <Image
              src={ iconUser }
              alt="icon-user"
              height="24px"
            />
          </Link>
        </Box>
      </Flex>
    </Box>
  )
}

export default Navbar