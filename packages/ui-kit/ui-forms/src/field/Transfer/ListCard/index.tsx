import React from 'react';
import { useSafeState } from 'ahooks';
import { Box, Card, CardHeader, Checkbox, Divider, FormControlLabel, List, ListItemIcon, ListItemText, TextField, ListItemButton } from '@mui/material';
import { isEqual, isInArray, intersection } from '@iimm/shared';
import type { SxProps, TextFieldProps, CheckboxProps, ListItemTextProps, CardProps, ListItemButtonProps } from '@mui/material';

export interface ListCardCommonProps {
  showSelectAll?: boolean,
  showSearch?: boolean,
  listSx?: SxProps,
  cardSx?: SxProps,
  cardHeaderSx?: SxProps,
  listItemButtonProps?: ListItemButtonProps,
  /** 搜索关键字的文本框的Props */
  searchProps?: TextFieldProps,
  /** 每个选项前的复选框的props */
  itemCheckboxProps?: CheckboxProps,
  /** 选项的文本ListItemText的props */
  listItemTextProps?: ListItemTextProps,
  error?: boolean,
}

type Item = number | string | object;

interface ListCardProps extends ListCardCommonProps {
  readOnly?: boolean,
  disabled?: boolean,
  options: {value: Item, label:React.ReactNode, disabled?: boolean}[],
  title?: React.ReactNode,
  items: Item[],
  checked: Item[],
  setChecked: (value: Item[] | ((v: Item[])=> Item[])) => void,
  handleToggle: (value: Item) => void,
  handleToggleAll: (items: Item[]) => void,
}

export const ListCard = React.forwardRef((props: ListCardProps, ref?: CardProps['ref']) => {
  const {
    showSelectAll, showSearch,
    disabled, readOnly, options, error,
    title, items, checked, setChecked,
    handleToggleAll, handleToggle,
    listSx, cardSx, cardHeaderSx, listItemButtonProps, searchProps, itemCheckboxProps, listItemTextProps,
  } = props;
  const checkedNumber = intersection(checked, items).length;
  const [ keyword, setKeyword ] = useSafeState('');
  const onKeywordChange = (v = '') => {
    if (readOnly || disabled) return;
    setKeyword(v);
    setChecked([]);
  };
  return (
    <Card
      sx={{
        boxShadow: '0px 2px 5px #999999',
        ...(cardSx || {}),
      }}
      ref={ref}
    >
      <CardHeader
        avatar={
          showSelectAll ? (
            <FormControlLabel
              label={`${checkedNumber}/${items.length}`}
              control={
                <Checkbox
                  onClick={() => handleToggleAll(items)}
                  checked={checkedNumber === items.length && !!items.length}
                  indeterminate={checkedNumber !== items.length && !!checkedNumber}
                  disabled={disabled || !items.length}
                />
              }
            />
          ) : null
        }
        title={<Box color={error ? 'red' : 'default'}>{title}</Box>}
        sx={{
          py: 0.5,
          color: error ? 'red' : 'default',
          ...(cardHeaderSx || {}),
        }}
      />
      <Divider />
      { showSearch && (
        <TextField
          sx = {{ px: 1 }}
          size = 'small'
          fullWidth
          {...(searchProps || {})}
          value = {keyword}
          onChange = {(e) => onKeywordChange(e?.target?.value || '')}
        />
      )}
      <List
        dense
        role='list'
        component='div'
        sx={{
          bgcolor: 'background.paper',
          overflow: 'auto',
          ...(listSx || {}),
        }}
      >
        { items.filter((ele) => {
          const label = options.find((v) => isEqual(ele, v.value))?.label;
          return `${ele}`.includes(keyword || '') || ((typeof label === 'number' || typeof label === 'string') ? `${label}`.includes(keyword || '') : false);
        }).map((item, i) => (
          <ListItemButton
            key={`${item}-${i}`}
            role='listitem'
            divider
            {...(listItemButtonProps || {})}
            disabled={disabled || options.find((opt) => isEqual(item, opt.value))?.disabled}
            onClick={() => handleToggle(item)}
          >
            <ListItemIcon sx={{ ml: -1.5 }}>
              <Checkbox
                size='small'
                disableRipple
                tabIndex={-1}
                {...itemCheckboxProps || {}}
                checked={isInArray(item, checked)}
              />
            </ListItemIcon>
            <ListItemText
              primary = {options.find((opt) => isEqual(item, opt.value))?.label}
              {...(listItemTextProps || {})}
            />
          </ListItemButton>
        ))}
      </List>
    </Card>
  );
});

