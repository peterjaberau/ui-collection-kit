import { StoryPage } from './templates/story.page';
import { StoryBlock } from './templates/story.block';
import * as Avatar from "../../ui/avatar";

import {
    RiAlertFill,
    RiErrorWarningFill,
} from '@remixicon/react';



export const AvatarStory = () => {
    return (
    <StoryPage>


        <StoryBlock title='Avatar' icon={RiAlertFill}>
            <div className='flex flex-col items-center gap-4'>
                <Avatar.Root>
                    <Avatar.Image src='../demos/react-lite/public/images/avatar/illustration/arthur.png' />
                </Avatar.Root>
            </div>
        </StoryBlock>




    </StoryPage>
  );
};
