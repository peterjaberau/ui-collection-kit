'use client';

import { type SlotRecipeProps, useSlotRecipe } from '@chakra-ui/react';

import { rootSlotRecipe } from './root.recipe';
import { LayoutThreePartsProps } from '#components/types';

import { Root } from './root';
import { RootBody } from './root.body';
import { RootHeader } from './root.header';
import { RootHeaderInner } from './root.header.inner';
import { RootFooter } from './root.footer';
import { RootFooterInner } from './root.footer.inner';
import { RootAside } from './root.aside';
import { RootAsideInner } from './root.aside.inner';
import { RootAsideLeft } from './root.aside.left';
import { RootAsideRight } from './root.aside.right';
import { RootMain } from './root.main';

////////////////////////////////////////////////////////////////////////////////////

export interface LayoutRootProps extends SlotRecipeProps<'layoutRoot'> {
  header?: LayoutThreePartsProps;
  left?: LayoutThreePartsProps;
  main?: React.ReactNode;
  right?: LayoutThreePartsProps;
  footer?: LayoutThreePartsProps;
  [key: string]: any;
}

const Index = (props: LayoutRootProps) => {
  /**
   * Separate the recipe props from the component props
   */
  const recipe = useSlotRecipe({ recipe: rootSlotRecipe });
  const [recipeProps, restProps] = recipe.splitVariantProps(props);

  /**
   * destructure the props
   */
  const { header, left, main, right, footer, ...rest } = restProps;
  const { start: headerStart, center: headerCenter, end: headerEnd } = header;
  const { start: rightStart, center: rightCenter, end: rightEnd } = right;
  const { start: leftStart, center: leftCenter, end: leftEnd } = left;
  const { start: footerStart, center: footerCenter, end: footerEnd } = footer;

  const styles = recipe(recipeProps);

  return (
    <Root css={{ ...styles.root }} {...rest}>
      {header && (
        <RootHeader
          css={{ ...styles.header }}
          start={
            headerStart && (
              <RootHeaderInner css={{ ...styles.headerStart }}>
                {headerStart}
              </RootHeaderInner>
            )
          }
          center={
            headerCenter && (
              <RootHeaderInner css={{ ...styles.headerCenter }}>
                {headerCenter}
              </RootHeaderInner>
            )
          }
          end={
            headerEnd && (
              <RootHeaderInner css={{ ...styles.headerEnd }}>
                {headerEnd}
              </RootHeaderInner>
            )
          }
        />
      )}
      <RootBody css={{ ...styles.body }}>
        {left && (
          <RootAside css={{ ...styles.aside }}>
            <RootAsideLeft
              css={{ ...styles.left }}
              start={
                leftStart && (
                  <RootAsideInner css={{ ...styles.leftStart }}>
                    {leftStart}
                  </RootAsideInner>
                )
              }
              center={
                leftCenter && (
                  <RootAsideInner css={{ ...styles.leftCenter }}>
                    {leftCenter}
                  </RootAsideInner>
                )
              }
              end={
                leftEnd && (
                  <RootAsideInner css={{ ...styles.leftEnd }}>
                    {leftEnd}
                  </RootAsideInner>
                )
              }
            />
          </RootAside>
        )}
        {main && <RootMain css={{ ...styles.main }}>{main}</RootMain>}
        {right && (
          <RootAside css={{ ...styles.aside }}>
            <RootAsideRight
              css={{ ...styles.right }}
              start={
                rightStart && (
                  <RootAsideInner css={{ ...styles.rightStart }}>
                    {rightStart}
                  </RootAsideInner>
                )
              }
              center={
                rightCenter && (
                  <RootAsideInner css={{ ...styles.rightCenter }}>
                    {rightCenter}
                  </RootAsideInner>
                )
              }
              end={
                rightEnd && (
                  <RootAsideInner css={{ ...styles.rightEnd }}>
                    {rightEnd}
                  </RootAsideInner>
                )
              }
            />
          </RootAside>
        )}
      </RootBody>
      {footer && (
        <RootFooter
          css={{ ...styles.footer }}
          start={
            footerStart && (
              <RootFooterInner css={{ ...styles.footerStart }}>
                {footerStart}
              </RootFooterInner>
            )
          }
          center={
            footerCenter && (
              <RootFooterInner css={{ ...styles.footerCenter }}>
                {footerCenter}
              </RootFooterInner>
            )
          }
          end={
            footerEnd && (
              <RootFooterInner css={{ ...styles.footerEnd }}>
                {footerEnd}
              </RootFooterInner>
            )
          }
        />
      )}
    </Root>
  );
};

export default Index;
