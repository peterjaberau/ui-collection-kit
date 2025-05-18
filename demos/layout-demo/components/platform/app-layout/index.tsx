'use client';

import { type SlotRecipeProps, useSlotRecipe } from '@chakra-ui/react';

import { rootSlotRecipe } from './root.recipe';
import { LayoutThreePartsProps } from '#platform/common/types'

import { Root } from './root';
import { RootBody } from './root.body';
import { RootHeader } from './root.header';
import { RootHeaderInner } from './root.header.inner';
import { RootFooter } from './root.footer';
import { RootFooterInner } from './root.footer.inner';
import { RootAside } from './root.aside';
import { RootAsideInner } from './root.aside.inner';
import { RootBar } from './root.bar';
import { RootBarInner } from './root.bar.inner';
import { RootMain } from './root.main';

////////////////////////////////////////////////////////////////////////////////////

export interface LayoutRootProps extends SlotRecipeProps<'layoutRoot'> {
  header?: LayoutThreePartsProps;
  leftBar?: LayoutThreePartsProps;
  left?: LayoutThreePartsProps;
  main?: React.ReactNode;
  rightBar?: LayoutThreePartsProps;
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
  const { header, leftBar, left, main, rightBar, right, footer, ...rest } = restProps;
  const { start: headerStart, center: headerCenter, end: headerEnd } = header ?? {};
  const { start: leftBarStart, center: leftBarCenter, end: leftBarEnd } = leftBar ?? {};
  const { start: leftStart, center: leftCenter, end: leftEnd } = left ?? {};
  const { start: rightBarStart, center: rightBarCenter, end: rightBarEnd } = rightBar ?? {};
  const { start: rightStart, center: rightCenter, end: rightEnd } = right ?? {};
  const { start: footerStart, center: footerCenter, end: footerEnd } = footer ?? {};

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
        {leftBar && (
          <RootBar
            css={{ ...styles.leftBar }}
            start={
              leftBarStart && (
                <RootBarInner css={{ ...styles.leftBarStart }}>
                  {leftStart}
                </RootBarInner>
              )
            }
            center={
              leftBarCenter && (
                <RootBarInner css={{ ...styles.leftBarCenter }}>
                  {leftCenter}
                </RootBarInner>
              )
            }
            end={
              leftBarEnd && (
                <RootBarInner css={{ ...styles.leftBarEnd }}>
                  {leftEnd}
                </RootBarInner>
              )
            }
          />
        )}

        {left && (
            <RootAside
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
        )}
        {main && <RootMain css={{ ...styles.main }}>{main}</RootMain>}

        {right && (
            <RootAside
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
        )}
        {rightBar && (
          <RootBar
            css={{ ...styles.rightBar }}
            start={
              leftBarStart && (
                <RootBarInner css={{ ...styles.rightBarStart }}>
                  {leftStart}
                </RootBarInner>
              )
            }
            center={
              rightBarCenter && (
                <RootBarInner css={{ ...styles.rightBarCenter }}>
                  {leftCenter}
                </RootBarInner>
              )
            }
            end={
              rightBarEnd && (
                <RootBarInner css={{ ...styles.rightBarEnd }}>
                  {rightEnd}
                </RootBarInner>
              )
            }
          />
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
