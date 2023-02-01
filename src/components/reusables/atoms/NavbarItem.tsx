import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

type Props = {
  label: string;
  path: string;
  isActive: boolean;
}

const NavbarItem: React.FC<Props> = ({
  label, path, isActive
}) => {

  return (
    <Box
      zIndex={2}
      fontSize="12px"
      color={isActive ? "main" : "white"}
      fontWeight={isActive ? "700" : "400"}
    >
      <Link to={ path }>
        { label }
      </Link>
    </Box>
  )
}

export default NavbarItem