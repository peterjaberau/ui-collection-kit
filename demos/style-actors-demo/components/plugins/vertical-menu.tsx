import { VStack, IconButton } from '@chakra-ui/react';
import { MdOutlineFileCopy as IconFile } from 'react-icons/md';
import { FaSearch as IconSearch } from 'react-icons/fa';
import { CgDebug as IconDebug } from 'react-icons/cg';
import { BsPlugin as IconPlugin } from 'react-icons/bs';

export const VerticalMenu = () => {
  return (
    <VStack>
      <IconButton size='sm' variant='ghost'>
        <IconFile />
      </IconButton>
      <IconButton size='sm' variant='ghost'>
        <IconSearch />
      </IconButton>
      <IconButton size='sm' variant='ghost'>
        <IconDebug />
      </IconButton>
      <IconButton size='sm' variant='ghost'>
        <IconPlugin />
      </IconButton>
    </VStack>
  );
};
