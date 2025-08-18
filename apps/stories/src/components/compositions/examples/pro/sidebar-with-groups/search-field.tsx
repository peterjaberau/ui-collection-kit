import { Icon, Input, InputGroup } from '@chakra-ui/react'
import { LuSearch } from 'react-icons/lu'

export const SearchField = () => {
  return (
    <InputGroup
      flex="1"
      startElement={
        <Icon size="sm">
          <LuSearch />
        </Icon>
      }
    >
      <Input placeholder="Search" />
    </InputGroup>
  )
}
