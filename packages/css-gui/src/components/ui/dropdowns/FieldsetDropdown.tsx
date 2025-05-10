'use client'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { MoreVertical, Trash } from 'react-feather'
import { DROPDOWN_ITEM_STYLES, DROPDOWN_STYLES } from './styles'

type FieldsetDropdownProps = {
  onRemove(): void
}
export const FieldsetDropdown = ({ onRemove }: FieldsetDropdownProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        style={{
          padding: 1,
          marginRight: 0,
          appearance: 'none',
          WebkitAppearance: 'none',
          background: 'backgroundOffset',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          color: 'muted',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'color .2s ease-in-out',
          // ':hover': {
          //   color: 'text',
          // },
          // ':disabled': {
          //   opacity: '50%',
          //   cursor: 'initial',
          // },
        }}
      >
        <MoreVertical size={15} strokeWidth={2}  />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content style={DROPDOWN_STYLES}>
        <DropdownMenu.Item style={DROPDOWN_ITEM_STYLES} onClick={onRemove}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Trash size={12} style={{ color: 'muted', marginRight: 2 }} />{' '}
            <span>Delete group</span>
          </div>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
