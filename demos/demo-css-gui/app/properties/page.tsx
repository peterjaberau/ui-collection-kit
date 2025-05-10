'use client';
import { useState } from 'react';
import {
  chakra,
  Stack,
  Flex,
  VStack,
  HStack,
  Box,
  Center,
  Container,
  Heading,
  Text,
  SimpleGrid,
} from '@chakra-ui/react';

import { FontFamilyPreview } from '#components/examples/FontFamilyPreview';
import { FontSizePreview } from '#components/examples/FontSizePreview';
import { FontStylePreview } from '#components/examples/FontStylePreview';
import { LetterSpacingPreview } from '#components/examples/LetterSpacingPreview';
import { TextTransformPreview } from '#components/examples/TextTransformPreview';
import { TextIndentPreview } from '#components/examples/TextIndentPreview';
import { AccentColorPreview } from '#components/examples/AccentColorPreview';
import { ColorPreview } from '#components/examples/ColorPreview';
import { BackgroundColorPreview } from '#components/examples/BackgroundColorPreview';
import { BorderColorPreview } from '#components/examples/BorderColorPreview';
import { BorderWidthPreview } from '#components/examples/BorderWidthPreview';
import { BorderStylePreview } from '#components/examples/BorderStylePreview';

import { AlignItemsPreview } from '#components/examples/AlignItemsPreview';
import { JustifyContentPreview } from '#components/examples/JustifyContentPreview';
import { FlexWrapPreview } from '#components/examples/FlexWrapPreview';
import { FlexGrowPreview } from '#components/examples/FlexGrowPreview';
import { FlexShrinkPreview } from '#components/examples/FlexShrinkPreview';
import { FlexDirectionPreview } from '#components/examples/FlexDirectionPreview';

import { OutlineColorPreview } from '#components/examples/OutlineColorPreview';
import { OutlineWidthPreview } from '#components/examples/OutlineWidthPreview';
import { OutlineStylePreview } from '#components/examples/OutlineStylePreview';
import { OutlineOffsetPreview } from '#components/examples/OutlineOffsetPreview';

import { ColorsPreview } from '#components/examples/ColorsPreview';
import { ColorPairPreview } from '#components/examples/ColorPairPreview';
import { TextDecorationColorPreview } from '#components/examples/TextDecorationColorPreview';
import { TextDecorationLinePreview } from '#components/examples/TextDecorationLinePreview';
import { TextDecorationStylePreview } from '#components/examples/TextDecorationStylePreview';
import { TextDecorationThicknessPreview } from '#components/examples/TextDecorationThicknessPreview';
import { WidthPreview } from '#components/examples/WidthPreview';
import { HeightPreview } from '#components/examples/HeightPreview';
import { OpacityPreview } from '#components/examples/OpacityPreview';
import { BackgroundImagePreview } from '#components/examples/BackgroundImagePreview';
import { BackgroundPreview } from '#components/examples/BackgroundPreview';
import { MixBlendModePreview } from '#components/examples/MixBlendModePreview';
import { BackgroundBlendModePreview } from '#components/examples/BackgroundBlendModePreview';
import { BorderRadiusPreview } from '#components/examples/BorderRadiusPreview';
import { BorderTopLeftRadiusPreview } from '#components/examples/BorderTopLeftRadiusPreview';
import { BoxShadowPreview } from '#components/examples/BoxShadowPreview';
import { TextShadowPreview } from '#components/examples/TextShadowPreview';
import { TextAlignPreview } from '#components/examples/TextAlignPreview';
import { FontWeightPreview } from '#components/examples/FontWeightPreview';
import { FilterPreview } from '#components/examples/FilterPreview';
import { CursorPreview } from '#components/examples/CursorPreview';

export default function Page() {
  return (
    <Container>
      <Stack>
        <Center>
          <Stack>
            <Heading size='4xl' textAlign='center'>
              Properties
            </Heading>
            <Text textStyle='xl' textAlign='center'>
              Preview available controls from the library
            </Text>
          </Stack>
        </Center>
        <SimpleGrid columns={5} gap={12}>
          <FontSizePreview />
          <FontFamilyPreview />
          <FontStylePreview />
          <FontWeightPreview />
          <TextAlignPreview />
          <TextTransformPreview />
          <LetterSpacingPreview />
          <TextIndentPreview />
          <ColorPreview />
          <AlignItemsPreview />
          <JustifyContentPreview />
          <FlexWrapPreview />
          <FlexGrowPreview />
          <FlexShrinkPreview />
          <FlexDirectionPreview />
          <BackgroundColorPreview />
          <BorderColorPreview />
          <TextDecorationColorPreview />
          <TextDecorationLinePreview />
          <TextDecorationStylePreview />
          <TextDecorationThicknessPreview />
          <AccentColorPreview />
          <BorderWidthPreview />
          <BorderStylePreview />
          <OutlineColorPreview />
          <OutlineWidthPreview />
          <OutlineStylePreview />
          <OutlineOffsetPreview />
          <BorderRadiusPreview />
          <FilterPreview />
          <BackgroundImagePreview />
          <BackgroundPreview />
          <BackgroundBlendModePreview />
          <MixBlendModePreview />
          <OpacityPreview />
          <BoxShadowPreview />
          <TextShadowPreview />
          <WidthPreview />
          <HeightPreview />
          <CursorPreview />
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
