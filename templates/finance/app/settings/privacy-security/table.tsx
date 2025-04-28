'use client';

import * as React from 'react';
import {
  RiArrowDownSFill,
  RiArrowUpSFill,
  RiChromeLine,
  RiCloseLine,
  RiExpandUpDownFill,
  RiFirefoxLine,
  RiSafariLine,
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
import * as CompactButton from '@/components/ui/compact-button';
import * as Table from '@/components/ui/table';

type Browser = 'chrome' | 'firefox' | 'safari';

const BROWSER_ENUMS: Record<
  Browser,
  {
    icon: React.ElementType;
    label: string;
  }
> = {
  chrome: {
    icon: RiChromeLine,
    label: 'Google Chrome',
  },
  firefox: { icon: RiFirefoxLine, label: 'Mozilla Firefox' },
  safari: { icon: RiSafariLine, label: 'Safari' },
};

type Data = {
  id: string;
  browser: Browser;
  location: string;
  mostRecentActivity: {
    isCurrent?: boolean;
    date: string;
  };
  ipAddress: string;
};

const data: Data[] = [
  {
    id: '326860a3',
    browser: 'chrome',
    location: 'Québec, Canada',
    mostRecentActivity: {
      isCurrent: true,
      date: '2024-11-12T15:52:00.000Z',
    },
    ipAddress: '224.0.1.1',
  },
  {
    id: '326860b3',
    browser: 'firefox',
    location: 'Vancouver, Canada',
    mostRecentActivity: {
      isCurrent: false,
      date: '2023-09-24T14:10:00.000Z',
    },
    ipAddress: '226.0.1.1',
  },
  {
    id: '326860c3',
    browser: 'safari',
    location: 'Paris, France',
    mostRecentActivity: {
      isCurrent: false,
      date: '2023-12-15T10:00:00.000Z',
    },
    ipAddress: '227.0.1.1',
  },
  {
    id: '326860d3',
    browser: 'chrome',
    location: 'Berlin, Germany',
    mostRecentActivity: {
      isCurrent: false,
      date: '2024-01-05T09:15:00.000Z',
    },
    ipAddress: '228.0.1.1',
  },
  {
    id: '326860e3',
    browser: 'firefox',
    location: 'Tokyo, Japan',
    mostRecentActivity: {
      isCurrent: false,
      date: '2024-03-20T13:30:00.000Z',
    },
    ipAddress: '229.0.1.1',
  },
];

const getSortingIcon = (state: 'asc' | 'desc' | false) => {
  if (state === 'asc')
    return <RiArrowUpSFill className='size-5 text-text-sub-600' />;
  if (state === 'desc')
    return <RiArrowDownSFill className='size-5 text-text-sub-600' />;
  return <RiExpandUpDownFill className='size-5 text-text-sub-600' />;
};

function ActionCell({ row }: { row: any }) {
  return (
    <CompactButton.Root variant='ghost' size='large' fullRadius>
      <CompactButton.Icon as={RiCloseLine} />
    </CompactButton.Root>
  );
}

const columns: ColumnDef<Data>[] = [
  {
    id: 'browser',
    accessorKey: 'browser',
    header: ({ column }) => (
      <div className='flex items-center gap-0.5'>
        Browser
        <button
          type='button'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          {getSortingIcon(column.getIsSorted())}
        </button>
      </div>
    ),
    enableSorting: true,
    cell: ({ row }) => {
      const Icon = BROWSER_ENUMS[row.original.browser].icon;
      const label = BROWSER_ENUMS[row.original.browser].label;

      return (
        <div className='flex items-center gap-3'>
          <div className='flex size-8 shrink-0 items-center justify-center rounded-full bg-faded-lighter'>
            <Icon className='size-5 text-text-sub-600' />
          </div>
          <div className='text-paragraph-sm text-text-strong-950'>{label}</div>
        </div>
      );
    },
  },
  {
    id: 'location',
    accessorKey: 'location',
    header: ({ column }) => (
      <div className='flex items-center gap-0.5'>
        Location
        <button
          type='button'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          {getSortingIcon(column.getIsSorted())}
        </button>
      </div>
    ),
    cell: ({ row }) => (
      <div className='text-paragraph-sm text-text-sub-600'>
        {row.original.location}
      </div>
    ),
  },
  {
    id: 'mostRecentActivity',
    accessorKey: 'mostRecentActivity.date',
    header: ({ column }) => (
      <div className='flex items-center gap-0.5'>
        Most recent activity
        <button
          type='button'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          {getSortingIcon(column.getIsSorted())}
        </button>
      </div>
    ),
    cell: ({ row }) => (
      <div className='text-paragraph-sm text-text-sub-600'>
        {row.original.mostRecentActivity.isCurrent
          ? 'Current Session'
          : format(
              row.original.mostRecentActivity.date,
              "MMM d, yyyy 'at' h:mm a",
            )}
      </div>
    ),
  },
  {
    id: 'ipAddress',
    accessorKey: 'ipAddress',
    header: ({ column }) => (
      <div className='flex items-center gap-0.5'>
        IP Address
        <button
          type='button'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          {getSortingIcon(column.getIsSorted())}
        </button>
      </div>
    ),
    cell: ({ row }) => (
      <div className='text-paragraph-sm text-text-sub-600'>
        {row.original.ipAddress}
      </div>
    ),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ActionCell,
    meta: {
      className: 'px-5 w-0',
    },
  },
];

export default function SessionsTable() {
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
    initialState: {
      sorting: [
        {
          id: 'member',
          desc: true,
        },
      ],
    },
  });

  return (
    <>
      <Table.Root className='-mx-4 w-auto px-4 lg:mx-0 lg:w-full lg:px-0 [&>table]:min-w-[860px]'>
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
                        'h-12',
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
