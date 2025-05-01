'use client';
import * as ButtonGroup from '@/components/ui/button-group';


import { componentsForNavigationMenu } from '../../store/data'
import * as Button from '../ui/button';
import { StoryPage } from './templates/story.page';
import { StoryBlock } from './templates/story.block';
import {
  RiSquareLine,
} from '@remixicon/react';

import { getComponentApi } from "../../utils/get"
import { isString } from "../../utils/child"

export const ButtonGroupComponent = () => {

  const api: any = getComponentApi('button-group-component')

  return (
    <StoryPage>

      {
        api.items.map((item: any) => (
          <StoryBlock title={item.title} icon={RiSquareLine}>
            <div className='flex flex-col items-center gap-4'>
              <ButtonGroup.Root {...item.props}>
                {isString(item?.props?.children) && item.props.children}

              </ButtonGroup.Root>

            </div>
          </StoryBlock>
        ))

      }




    </StoryPage>
  );
};

