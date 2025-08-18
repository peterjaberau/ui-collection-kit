import { Button, SimpleGrid } from '@chakra-ui/react'
import { LuFacebook, LuLink, LuTwitter } from 'react-icons/lu'
import { SiWhatsapp } from 'react-icons/si'

export const ShareLinks = () => {
  return (
    <SimpleGrid columns={2} gap="1.5" colorPalette="gray">
      {shareLinks.map((link) => (
        <Button key={link.value} variant="outline" size="sm">
          {link.icon} {link.title}
        </Button>
      ))}
    </SimpleGrid>
  )
}

const shareLinks = [
  {
    value: 'x',
    title: 'Twitter',
    url: '#',
    icon: <LuTwitter />,
  },
  {
    value: 'copy',
    title: 'Copy Link',
    url: '#',
    icon: <LuLink />,
  },
  {
    value: 'facebook',
    title: 'Facebook',
    url: '#',
    icon: <LuFacebook />,
  },
  {
    value: 'whatsapp',
    title: 'WhatsApp',
    url: '#',
    icon: <SiWhatsapp />,
  },
]
