'use client'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { MoreVertical, Trash } from 'react-feather'
import { DROPDOWN_ITEM_STYLES, DROPDOWN_STYLES } from './styles'
import IconButton from '../IconButton'

type EditorDropdownProps = {
  onClearStyles(): void
}
export const EditorDropdown = ({ onClearStyles }: EditorDropdownProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        style={{
          all: 'unset',
          lineHeight: 1,
          position: 'relative',
          color: 'muted',
        }}
      >
        <IconButton style={{ marginLeft: 2 }}>
          <MoreVertical size={16} />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content style={DROPDOWN_STYLES}>
        <DropdownMenu.Item style={DROPDOWN_ITEM_STYLES} onClick={onClearStyles}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Trash size={12} style={{ color: 'muted', marginRight: 2 }} />{' '}
            <span>Clear all styles</span>
          </div>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
