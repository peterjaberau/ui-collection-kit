'use client';
import { componentsForNavigationMenu } from '../../store/data'
import * as LinkButton from '../ui/link-button';
import { StoryPage } from './templates/story.page';
import { StoryBlock } from './templates/story.block';
import {
  RiSquareLine,
} from '@remixicon/react';
import { getComponentApi } from '../../utils/get'
import { isString } from "../../utils/child"


export const LinkButtonStory = () => {

  const api: any = getComponentApi('link-button')




  return (
    <StoryPage>

      {
        api.items.map((item: any) => (
          <StoryBlock title={item.title} icon={RiSquareLine}>
            <div className='flex flex-col items-center gap-4'>
              <LinkButton.Root {...item.props}>
                {isString(item?.props?.children) && item.props.children}

              </LinkButton.Root>

            </div>
          </StoryBlock>
        ))

      }




    </StoryPage>
  );
};
