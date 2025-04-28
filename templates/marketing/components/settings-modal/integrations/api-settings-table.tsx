'use client';

import * as React from 'react';
import {
  RiArrowDownSFill,
  RiArrowUpSFill,
  RiExpandUpDownFill,
  RiMore2Line,
} from '@remixicon/react';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from '@tanstack/react-table';
import { format } from 'date-fns';

import { cn } from '@/utils/cn';
import * as Button from '@/components/ui/button';
import * as Table from '@/components/ui/table';

type Data = {
  id: string;
  name: string;
  created_at: string;
  last_used: string;
  key: string;
};

const data: Data[] = [
  {
    id: '1',
    name: 'Apps Integration',
    created_at: '2024-11-15',
    last_used: '2 days ago',
    key: 'sk_live_987654321abcdefghijklmnopqrstuvw',
  },
  {
    id: '2',
    name: 'Sales Dashboard',
    created_at: '2024-11-01',
    last_used: '12 hours ago',
    key: 'sk_live_45678923xyzabcdefghijklmnopqrs',
  },
  {
    id: '3',
    name: 'Marketing Analytics',
    created_at: '2024-10-28',
    last_used: '1 week ago',
    key: 'sk_live_741852963poiuytrewqlkjhgfdsazx',
  },
  {
    id: '4',
    name: 'Analytics Dashboard',
    created_at: '2024-10-20',
    last_used: '3 days ago',
    key: 'sk_live_369258147mnbvcxzlkjhgfdsapoiuy',
  },
  {
    id: '5',
    name: 'Orders Panel',
    created_at: '2024-10-12',
    last_used: '4 days ago',
    key: 'sk_live_159753468qwertyuiopasdfghjklzx',
  },
];

const getSortingIcon = (state: 'asc' | 'desc' | false) => {
  if (state === 'asc')
    return <RiArrowUpSFill className='size-5 text-text-soft-400' />;
  if (state === 'desc')
    return <RiArrowDownSFill className='size-5 text-text-soft-400' />;
  return <RiExpandUpDownFill className='size-5 text-text-soft-400' />;
};

function ActionCell({ row }: { row: any }) {
  return (
    <Button.Root variant='neutral' mode='ghost' size='xsmall'>
      <Button.Icon as={RiMore2Line} />
    </Button.Root>
  );
}

const columns: ColumnDef<Data>[] = [
  {
    id: 'description',
    accessorKey: 'name',
    header: ({ column }) => (
      <div className='flex items-center gap-0.5'>
        Description
        <button
          type='button'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          {getSortingIcon(column.getIsSorted())}
        </button>
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className='flex flex-col gap-0.5'>
          <div className='text-label-sm text-text-strong-950'>
            {row.original.name}
          </div>
          <div className='text-paragraph-xs text-text-sub-600'>
            Created · {format(new Date(row.original.created_at), 'MMM d, yyyy')}
          </div>
        </div>
      );
    },
  },
  {
    id: 'key',
    accessorKey: 'key',
    header: ({ column }) => (
      <div className='flex items-center gap-0.5'>
        Key
        <button
          type='button'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          {getSortingIcon(column.getIsSorted())}
        </button>
      </div>
    ),
    cell: ({ row }) => {
      return (
        <div className='flex flex-col gap-0.5'>
          <div className='text-paragraph-sm text-text-strong-950'>
            {row.original.key}
          </div>
          <div className='text-paragraph-xs text-text-sub-600'>
            Last used · {row.original.last_used}
          </div>
        </div>
      );
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ActionCell,
    meta: {
      className: 'px-4 w-0',
    },
  },
];

export default function ApiSettingsTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <>
      <Table.Root className='min-w-0 [&>table]:min-w-[532px]'>
        <Table.Header className='whitespace-nowrap'>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Row key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Table.Head
                    key={header.id}
                    className={header.column.columnDef.meta?.className}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </Table.Head>
                );
              })}
            </Table.Row>
          ))}
        </Table.Header>
        <Table.Body>
          {table.getRowModel().rows?.length > 0 &&
            table.getRowModel().rows.map((row, i, arr) => (
              <React.Fragment key={row.id}>
                <Table.Row data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map((cell) => (
                    <Table.Cell
                      key={cell.id}
                      className={cn(
                        'h-16',
                        cell.column.columnDef.meta?.className,
                      )}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </Table.Cell>
                  ))}
                </Table.Row>
                {i < arr.length - 1 && <Table.RowDivider />}
              </React.Fragment>
            ))}
        </Table.Body>
      </Table.Root>
    </>
  );
}
