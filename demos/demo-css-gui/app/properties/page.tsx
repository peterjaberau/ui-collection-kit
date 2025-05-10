'use client';
import { useState } from 'react';
import { chakra } from '@chakra-ui/react';

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
    <div>
      <chakra.header
        css={{
          pt: [5, 6, 7],
          px: 4,
          textAlign: 'center',
        }}
      >
        <chakra.h1 css={{ fontSize: [6, 8, '128px'], my: 0, lineHeight: 1.25 }}>
          Properties
        </chakra.h1>
        <chakra.h2 css={{ color: 'muted', fontWeight: 500, my: 0 }}>
          Preview available controls from the library
        </chakra.h2>
      </chakra.header>
      <chakra.section css={{ mt: 6, pb: 6 }}>
        <chakra.div css={{ px: [4, 5, 5], maxWidth: '114em', mx: 'auto' }}>
          <chakra.section
            css={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(18rem, 1fr))',
              gap: '2rem',
            }}
          >
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
          </chakra.section>
        </chakra.div>
      </chakra.section>
    </div>
  );
}
