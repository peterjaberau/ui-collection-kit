import React from 'react';
import { useField, Field, observer } from '@formily/react';
import { Field as FieldType } from '@formily/core';
import { FormItem } from '@formily/antd-v5';
import { Radio } from 'antd';
import { usePrefix, IconWidget } from '#packages/react';
import { FlexStyleSetter } from '../FlexStyleSetter';
import { RadioCard, HStack, Icon } from '@chakra-ui/react';
import cls from 'classnames';
import { LuRectangleHorizontal as IconDisplayBlock } from 'react-icons/lu';
import { MdAbc as IconDisplayInline } from 'react-icons/md';
import { CgDisplayFlex as IconDisplayFlex } from 'react-icons/cg';
import { RiInputMethodLine as IconDisplayInlineBlock } from 'react-icons/ri';

// import './styles.less'

export interface IDisplayStyleSetterProps {
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  onChange?: (value: string) => void;
}

export const DisplayStyleSetter: React.FC<IDisplayStyleSetterProps> = observer(
  (props) => {
    const field = useField<FieldType>();
    const prefix = usePrefix('display-style-setter');

    const items = [
      {
        label: <IconDisplayBlock />,
        value: 'block',
      },
      {
        label: <IconDisplayInlineBlock />,
        value: 'inline-block',
      },
      {
        label: <IconDisplayInline />,
        value: 'inline',
      },
      {
        label: <IconDisplayFlex />,
        value: 'flex',
      },
    ];

    return (
      <>
        <FormItem.BaseItem
          label={field.title}
          className={cls(prefix, props.className)}
          style={props.style}
        >
          <RadioCard.Root
            orientation='vertical'
            align='center'
            w='full'
            size='sm'
            value={props.value}
            defaultValue={props.value}
            onValueChange={(e) => props.onChange?.(e.value)}
          >
            <HStack flex={1} justify='center' alignItems='center'>
              {items.map((item: any) => (
                <RadioCard.Item key={item.value} value={item.value}>
                  <RadioCard.ItemHiddenInput />
                  <RadioCard.ItemControl p={2} >
                    <Icon fontSize='14px'>{item.label}</Icon>
                  </RadioCard.ItemControl>
                </RadioCard.Item>
              ))}
            </HStack>
          </RadioCard.Root>

        </FormItem.BaseItem>
        <Field
          name='flex'
          basePath={field.address.parent()}
          visible={false}
          reactions={(flexField) => {
            flexField.visible = field.value === 'flex';
          }}
          component={[FlexStyleSetter]}
        />
      </>
    );
  },
);
