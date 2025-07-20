import { IconButton } from '@chakra-ui/react';
import { HiOutlineHome as IconHome } from 'react-icons/hi2';
import { IoSearch as IconSearch } from 'react-icons/io5';
import { HiOutlineLightningBolt as IconBolt } from 'react-icons/hi';
import { LuFilePlus as IconFileNew } from 'react-icons/lu';
import { useSidePanel } from '#actors/hooks/useSidePanel';
import { Inspector } from '#components/ui-blocks/inspector';

export const DemoPanelAsideLeftStart = () => {
  const { onExpand, sidePanelContent, isReady } = useSidePanel('panelLeft');

  return (
    <>
      <IconButton
        variant={sidePanelContent?.expand ? 'solid' : 'ghost'}
        onClick={onExpand}
      >
        <IconHome />
      </IconButton>
      <IconButton variant='ghost'>
        <IconSearch />
      </IconButton>
      {/*<DrawerBlock*/}
      {/*  opened={opened} onClose={close}*/}
      {/*/>*/}
      <Inspector
        trigger={
          <IconButton variant='ghost'>
            <IconBolt />
          </IconButton>
        }
      />

      <IconButton variant='ghost'>
        <IconFileNew />
      </IconButton>
    </>
  );
};

export const DemoPanelAsideLeftCenter = () => {
  return (
    <>
      <IconButton variant='ghost'>
        <IconHome />
      </IconButton>
      <IconButton variant='ghost'>
        <IconSearch />
      </IconButton>
      <IconButton variant='ghost'>
        <IconBolt />
      </IconButton>
      <IconButton variant='ghost'>
        <IconFileNew />
      </IconButton>
    </>
  );
};

export const DemoPanelAsideLeftEnd = () => {
  return (
    <>
      <IconButton variant='ghost'>
        <IconHome />
      </IconButton>
      <IconButton variant='ghost'>
        <IconSearch />
      </IconButton>
      <IconButton variant='ghost'>
        <IconBolt />
      </IconButton>
      <IconButton variant='ghost'>
        <IconFileNew />
      </IconButton>
    </>
  );
};

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
      <IconButton variant='ghost'>
        <IconSearch />
      </IconButton>
      <IconButton variant='ghost'>
        <IconBolt />
      </IconButton>
      <IconButton variant='ghost'>
        <IconFileNew />
      </IconButton>
    </>
  );
};

export const DemoPanelAsideRightCenter = () => {
  return (
    <>
      <IconButton variant='ghost'>
        <IconHome />
      </IconButton>
      <IconButton variant='ghost'>
        <IconSearch />
      </IconButton>
      <IconButton variant='ghost'>
        <IconBolt />
      </IconButton>
      <IconButton variant='ghost'>
        <IconFileNew />
      </IconButton>
    </>
  );
};

export const DemoPanelAsideRightEnd = () => {
  return (
    <>
      <IconButton variant='ghost'>
        <IconHome />
      </IconButton>
      <IconButton variant='ghost'>
        <IconSearch />
      </IconButton>
      <IconButton variant='ghost'>
        <IconBolt />
      </IconButton>
      <IconButton variant='ghost'>
        <IconFileNew />
      </IconButton>
    </>
  );
};
