import React, { useEffect } from 'react';
import { SegmentGroup, Button, HStack } from '@chakra-ui/react';

import { useDesigner, TextWidget } from '#packages/react';
import { GlobalRegistry } from '#packages/core';
import { observer } from '@formily/react';
import { loadInitialSchema, saveSchema } from '../service';

const languageOptions = [
  { label: 'English', value: 'en-us' },
  { label: 'Chinese', value: 'zh-cn' },
  { label: 'Korean', value: 'ko-kr' },
];

const supportLocales = ['zh-cn', 'en-us', 'ko-kr'];

export const ActionsWidget = observer(() => {
  const designer = useDesigner();
  useEffect(() => {
    loadInitialSchema(designer);
  }, []);
  useEffect(() => {
    if (!supportLocales.includes(GlobalRegistry.getDesignerLanguage())) {
      GlobalRegistry.setDesignerLanguage('en-us');
    }
  }, []);
  return (
    <HStack>
      <Button color='colorPalette.contrast'>{GlobalRegistry.getDesignerLanguage()}</Button>
      <SegmentGroup.Root
        value={GlobalRegistry.getDesignerLanguage()}
        defaultValue={'en-us'}
        onValueChange={(e) => GlobalRegistry.setDesignerLanguage(e.value)}
      >
        <SegmentGroup.Indicator />
        <SegmentGroup.Items items={languageOptions} />
      </SegmentGroup.Root>

      <Button
        color='colorPalette.contrast'
        onClick={() => {
          saveSchema(designer);
        }}
      >
        Save
      </Button>
    </HStack>
  );
});
