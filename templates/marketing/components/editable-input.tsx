'use client';

import * as React from 'react';
import { RiPencilFill } from '@remixicon/react';
import mergeRefs from 'merge-refs';

import { cn } from '@/utils/cn';

const EditableInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'> & {
    prefix?: string;
  }
>(
  (
    { className, value: initialValue = '', onChange, prefix, ...rest },
    forwardedRef,
  ) => {
    const [editing, setEditing] = React.useState(false);
    const [value, setValue] = React.useState(initialValue);
    const [tempValue, setTempValue] = React.useState(value);

    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
      setValue(initialValue);
      setTempValue(initialValue);
    }, [initialValue]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTempValue(e.target.value);
      onChange?.(e);
    };

    const handleCancel = () => {
      setTempValue(value);
      setEditing(false);
    };

    const handleSave = () => {
      setValue(tempValue);
      setEditing(false);
      const syntheticEvent = {
        target: { value: tempValue },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange?.(syntheticEvent);
    };

    const handleStartEditing = () => {
      setEditing(true);
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
          // Set cursor position to the end
          const length = inputRef.current.value.length;
          inputRef.current.setSelectionRange(length, length);
        }
      }, 0);
    };

    return (
      <div
        className={cn(
          'group relative flex h-10 w-full items-center gap-2.5 rounded-10 bg-bg-white-0 px-3',
          'transition duration-200 ease-out',
          'hover:[&:not(&:has(input:focus))]:bg-bg-weak-50 hover:[&:not(&:has(input:focus))]:text-text-strong-950',
          'has-[input:focus]:ring-1 has-[input:focus]:ring-inset has-[input:focus]:ring-primary-base',
          {
            'cursor-pointer': !editing,
          },
        )}
        onClick={(e) => {
          if (editing) return e.preventDefault();
          handleStartEditing();
        }}
      >
        <div className='flex w-full items-baseline'>
          {prefix && (
            <span className='select-none text-paragraph-sm text-text-strong-950'>
              {prefix}
            </span>
          )}
          <input
            type='text'
            ref={mergeRefs(inputRef, forwardedRef)}
            value={tempValue}
            onChange={handleInputChange}
            readOnly={!editing}
            className={cn(
              'h-10 w-full flex-1 bg-transparent bg-none caret-primary-base',
              'text-paragraph-sm text-text-strong-950',
              'transition duration-200 ease-out',
              'placeholder:text-text-soft-400',
              'focus:outline-none',
              'read-only:pointer-events-none',
              className,
            )}
            {...rest}
          />
        </div>
        {!editing && (
          <div className='shrink-0'>
            <RiPencilFill className='size-5 text-text-soft-400' />
          </div>
        )}
        {editing && (
          <div className='flex shrink-0 items-center gap-2.5'>
            <button
              type='button'
              className='text-label-sm text-text-sub-600'
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type='button'
              className='text-label-sm text-primary-base'
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        )}
      </div>
    );
  },
);
EditableInput.displayName = 'EditableInput';

export { EditableInput };
