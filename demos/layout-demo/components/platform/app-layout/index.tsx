'use client';

import { type SlotRecipeProps, useSlotRecipe } from '@chakra-ui/react';

import { rootSlotRecipe } from './root.recipe';
import { LayoutThreePartsProps } from '#platform/common/types'

import { Root } from './root';
import { RootBody } from './root.body';
import { RootSection } from './root.section';
import { RootSectionInner } from './root.section.inner';
import { RootAside } from './root.aside';
import { RootAsideInner } from './root.aside.inner';
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
        <RootSection
          css={{ ...styles.header }}
          start={
            headerStart && (
              <RootSectionInner css={{ ...styles.headerStart }}>
                {headerStart}
              </RootSectionInner>
            )
          }
          center={
            headerCenter && (
              <RootSectionInner css={{ ...styles.headerCenter }}>
                {headerCenter}
              </RootSectionInner>
            )
          }
          end={
            headerEnd && (
              <RootSectionInner css={{ ...styles.headerEnd }}>
                {headerEnd}
              </RootSectionInner>
            )
          }
        />
      )}
      <RootBody css={{ ...styles.body }}>
        {leftBar && (
          <RootAside
            css={{ ...styles.leftBar }}
            start={
              leftBarStart && (
                <RootAsideInner css={{ ...styles.leftBarStart }}>
                  {leftStart}
                </RootAsideInner>
              )
            }
            center={
              leftBarCenter && (
                <RootAsideInner css={{ ...styles.leftBarCenter }}>
                  {leftCenter}
                </RootAsideInner>
              )
            }
            end={
              leftBarEnd && (
                <RootAsideInner css={{ ...styles.leftBarEnd }}>
                  {leftEnd}
                </RootAsideInner>
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
          <RootAside
            css={{ ...styles.rightBar }}
            start={
              leftBarStart && (
                <RootAsideInner css={{ ...styles.rightBarStart }}>
                  {leftStart}
                </RootAsideInner>
              )
            }
            center={
              rightBarCenter && (
                <RootAsideInner css={{ ...styles.rightBarCenter }}>
                  {leftCenter}
                </RootAsideInner>
              )
            }
            end={
              rightBarEnd && (
                <RootAsideInner css={{ ...styles.rightBarEnd }}>
                  {rightEnd}
                </RootAsideInner>
              )
            }
          />
        )}
      </RootBody>
      {footer && (
        <RootSection
          css={{ ...styles.footer }}
          start={
            footerStart && (
              <RootSectionInner css={{ ...styles.footerStart }}>
                {footerStart}
              </RootSectionInner>
            )
          }
          center={
            footerCenter && (
              <RootSectionInner css={{ ...styles.footerCenter }}>
                {footerCenter}
              </RootSectionInner>
            )
          }
          end={
            footerEnd && (
              <RootSectionInner css={{ ...styles.footerEnd }}>
                {footerEnd}
              </RootSectionInner>
            )
          }
        />
      )}
    </Root>
  );
};

export default Index;
