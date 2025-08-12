import React from 'react';
import { FormLabelProps, FormLabel, Stack, Tooltip } from '@mui/material';
import { HelpOutline } from '@mui/icons-material';

interface RenderInnerLabelParams {
  showInnerLabel?: boolean,
  error?: boolean,
  /** 仅showInnerLabel=true时传递给内部Label */
  innerLabelProps?: FormLabelProps,
  required?: boolean,
  label?: React.ReactNode,
  tooltip?: React.ReactNode,
}

export const renderInnerLabel = (params: RenderInnerLabelParams = {}) => {
  const { error, innerLabelProps, required, label, tooltip, showInnerLabel } = params;
  if (!showInnerLabel) return;
  return (
    <FormLabel error={error} {...(innerLabelProps || {})}>
      <Stack direction='row' width='100%'>
        <span title={label as string} style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {required && (
            <span style={{ color: 'red' }}>
              *&nbsp;
            </span>
          )}
          { label }
          &nbsp;
        </span>
        { !!tooltip && (
          <Tooltip
            title={tooltip}
            arrow
            placement='top'
          >
            <HelpOutline
              fontSize='small'
            />
          </Tooltip>
        )}
      </Stack>
    </FormLabel>
  );
};
