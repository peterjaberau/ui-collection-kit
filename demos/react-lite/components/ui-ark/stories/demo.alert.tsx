import { StoryPage } from './templates/story.page';
import { StoryBlock } from './templates/story.block';
import * as Alert from "../../ui/alert";
import * as LinkButton from '../../ui/link-button';
import {
    RiAlertFill,
    RiErrorWarningFill,
} from '@remixicon/react';



export const AlertStory = () => {
    return (
    <StoryPage>


        <StoryBlock title='Alert' icon={RiAlertFill}>
            <div className='flex flex-col items-center gap-4'>
                <Alert.Root variant='filled' status='error'>
                    <Alert.Icon as={RiErrorWarningFill} />
                    Insert your alert title here!
                    <LinkButton.Root variant='modifiable' size='medium' underline>
                        Upgrade
                    </LinkButton.Root>
                    <button type='button'>
                        <Alert.CloseIcon />
                    </button>
                </Alert.Root>
            </div>
        </StoryBlock>




    </StoryPage>
  );
};
