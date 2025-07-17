import { IconButton } from '@chakra-ui/react';
import { HiOutlineHome as IconHome } from 'react-icons/hi2';
import { IoSearch as IconSearch } from 'react-icons/io5';
import { HiOutlineLightningBolt as IconBolt } from 'react-icons/hi';
import { LuFilePlus as IconFileNew } from 'react-icons/lu';
import { useSidePanel } from '#actors/hooks/useSidePanel';
import { DrawerBlock } from '#components/ui-blocks/drawer';
import { useDisclosure } from "@mantine/hooks";
import { Drawer } from '@mantine/core';

export const DemoPanelAsideLeftStart = () => {
  const { onExpand, sidePanelContent, isReady } = useSidePanel('panelLeft');
  const [opened, { open, close }] = useDisclosure(false);


  return (
    <>
      <IconButton
        variant={sidePanelContent?.expand ? 'solid' : 'ghost'}
        onClick={onExpand}
      >
        <IconHome />
      </IconButton>
      <IconButton variant="ghost">
        <IconSearch />
      </IconButton>
      {/*<DrawerBlock*/}
      {/*  opened={opened} onClose={close}*/}
      {/*/>*/}
      <Drawer opened={opened} onClose={close} withCloseButton={false}>
        Drawer without header, press escape or click on overlay to close
      </Drawer>
      <IconButton variant="ghost" onClick={open}>
        <IconBolt />
      </IconButton>


      <IconButton variant="ghost">
        <IconFileNew />
      </IconButton>

    </>
  )
}

export const DemoPanelAsideLeftCenter = () => {

  return (
    <>
      <IconButton variant="ghost">
        <IconHome />
      </IconButton>
      <IconButton variant="ghost">
        <IconSearch />
      </IconButton>
      <IconButton variant="ghost">
        <IconBolt />
      </IconButton>
      <IconButton variant="ghost">
        <IconFileNew />
      </IconButton>

    </>
  )
}

export const DemoPanelAsideLeftEnd = () => {

  return (
    <>
      <IconButton variant="ghost">
        <IconHome />
      </IconButton>
      <IconButton variant="ghost">
        <IconSearch />
      </IconButton>
      <IconButton variant="ghost">
        <IconBolt />
      </IconButton>
      <IconButton variant="ghost">
        <IconFileNew />
      </IconButton>

    </>
  )
}

export const DemoPanelAsideRightStart = () => {
  const { onExpand, sidePanelContent, isReady } = useSidePanel('panelRight');

  return (
    <>
      <IconButton
        variant={sidePanelContent?.expand ? 'solid' : 'ghost'}
        onClick={onExpand}
      >
        <IconHome />
      </IconButton>
      <IconButton variant="ghost">
        <IconSearch />
      </IconButton>
      <IconButton variant="ghost">
        <IconBolt />
      </IconButton>
      <IconButton variant="ghost">
        <IconFileNew />
      </IconButton>

    </>
  )
}

export const DemoPanelAsideRightCenter = () => {

  return (
    <>
      <IconButton variant="ghost">
        <IconHome />
      </IconButton>
      <IconButton variant="ghost">
        <IconSearch />
      </IconButton>
      <IconButton variant="ghost">
        <IconBolt />
      </IconButton>
      <IconButton variant="ghost">
        <IconFileNew />
      </IconButton>

    </>
  )
}

export const DemoPanelAsideRightEnd = () => {

  return (
    <>
      <IconButton variant="ghost">
        <IconHome />
      </IconButton>
      <IconButton variant="ghost">
        <IconSearch />
      </IconButton>
      <IconButton variant="ghost">
        <IconBolt />
      </IconButton>
      <IconButton variant="ghost">
        <IconFileNew />
      </IconButton>

    </>
  )
}
