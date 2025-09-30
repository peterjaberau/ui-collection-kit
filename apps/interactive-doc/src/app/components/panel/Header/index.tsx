'use client'
import { FC } from "react"
import { IconButton, Icon, HStack, chakra, Box } from "@chakra-ui/react"
import { LuX, LuGripVertical } from "react-icons/lu"
import { HeaderProps } from "./interface"

export const ModalHeader: FC<HeaderProps> = (props) => {
  const { title, canMove, docLink, onClose } = props
  return (
    <Box css={{
      width: '100%',
      height: '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      flex: 'none',
      padding: '16px',
      paddingLeft: '4px',
      //padding-bottom: 8px;
      position: 'relative',
      borderBottomWidth: '1px',
      borderBottomColor: '#e9e8e6',
      borderTopLeftRadius: '0.5rem',
      borderTopRightRadius: '0.5rem',
      backgroundColor: '#f9f9f8'

    }}>
      <HStack gap={1} alignItems={"center"} css={{ width: "calc(100% - 32px)" }}>
        {canMove && (
          <Icon size={"md"}>
            <LuGripVertical />
          </Icon>
        )}
        <chakra.span
          css={{
            fontSize: "16px",
            fontWeight: "bold",
            display: "inline-block",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "calc(100% - 64px)",
            flex: "none",
          }}
        >
          {title}
        </chakra.span>
      </HStack>
      <IconButton onClick={onClose} variant="outline" size="xs">
        <LuX />
      </IconButton>
    </Box>
  )
}
