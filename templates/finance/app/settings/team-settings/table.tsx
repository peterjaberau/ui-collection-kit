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
import { format, isToday, isYesterday } from 'date-fns';

import { cn } from '@/utils/cn';
import * as Avatar from '@/components/ui/avatar';
import * as Button from '@/components/ui/button';
import * as Checkbox from '@/components/ui/checkbox';
import * as StatusBadge from '@/components/ui/status-badge';
import * as Table from '@/components/ui/table';

function formatRelativeDate(date: string) {
  if (isToday(date)) {
    return `Today, ${format(date, 'h:mm a')}`;
  } else if (isYesterday(date)) {
    return `Yesterday, ${format(date, 'h:mm a')}`;
  }

  return format(date, "MMM d, yyyy 'at' h:mm a");
}

type Data = {
  id: string;
  member: {
    name: string;
    avatar: string;
  };
  email: {
    value: string;
  };
  lastActivity: {
    value: string;
  };
  role: {
    label: string;
  };
};

const data: Data[] = [
  {
    id: '326860a3',
    member: {
      name: 'Arthur Taylor',
      avatar: '/images/avatar/illustration/arthur.png',
    },
    email: {
      value: 'arthur@alignui.com',
    },
    lastActivity: {
      value: '2024-11-12T15:52:00.000Z',
    },
    role: {
      label: 'CEO',
    },
  },
  {
    id: '326860b3',
    member: {
      name: 'Sophia Williams',
      avatar: '/images/avatar/illustration/sophia.png',
    },
    email: {
      value: 'sophia@alignui.com',
    },
    lastActivity: {
      value: '2024-11-11T08:21:00.000Z',
    },
    role: {
      label: 'HR Assistant',
    },
  },
  {
    id: '326860c3',
    member: {
      name: 'Matthew Johnson',
      avatar: '/images/avatar/illustration/matthew.png',
    },
    email: {
      value: 'matthew@alignui.com',
    },
    lastActivity: {
      value: '2024-11-12T15:24:00.000Z',
    },
    role: {
      label: 'Data Engineer',
    },
  },
  {
    id: '326860d3',
    member: {
      name: 'James Brown',
      avatar: '/images/avatar/illustration/james.png',
    },
    email: {
      value: 'james@alignui.com',
    },
    lastActivity: {
      value: '2023-09-24T14:10:00.000Z',
    },
    role: {
      label: 'Marketing Manager',
    },
  },
  {
    id: '326860e3',
    member: {
      name: 'Wei Chen',
      avatar: '/images/avatar/illustration/wei.png',
    },
    email: {
      value: 'wei@alignui.com',
    },
    lastActivity: {
      value: '2023-09-23T13:30:00.000Z',
    },
    role: {
      label: 'Operations Manager',
    },
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
    <Button.Root variant='neutral' mode='ghost' size='xsmall'>
      <Button.Icon as={RiMore2Line} />
    </Button.Root>
  );
}

const columns: ColumnDef<Data>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox.Root
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox.Root
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
    meta: {
      className: 'pr-0 w-0',
    },
  },
  {
    id: 'member',
    accessorKey: 'member.name',
    header: ({ column }) => (
      <div className='flex items-center gap-0.5'>
        Member Full Name
        <button
          type='button'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          {getSortingIcon(column.getIsSorted())}
        </button>
      </div>
    ),
    enableSorting: true,
    cell: ({ row }) => (
      <div className='flex items-center gap-3'>
        <Avatar.Root size='32'>
          <Avatar.Image src={row.original.member.avatar} />
        </Avatar.Root>
        <div className='text-label-sm text-text-strong-950'>
          {row.original.member.name}
        </div>
      </div>
    ),
  },
  {
    id: 'email',
    accessorKey: 'email.value',
    header: ({ column }) => (
      <div className='flex items-center gap-0.5'>
        Email Address
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
        {row.original.email.value}
      </div>
    ),
  },
  {
    id: 'lastActivity',
    accessorKey: 'lastActivity.value',
    header: ({ column }) => (
      <div className='flex items-center gap-0.5'>
        Account
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
        {formatRelativeDate(row.original.lastActivity.value)}
      </div>
    ),
  },
  {
    id: 'role',
    accessorKey: 'role.label',
    header: ({ column }) => (
      <div className='flex items-center gap-0.5'>
        Role
        <button
          type='button'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          {getSortingIcon(column.getIsSorted())}
        </button>
      </div>
    ),
    cell: ({ row }) => (
      <StatusBadge.Root variant='stroke' status='completed'>
        <StatusBadge.Dot />
        {row.original.role.label}
      </StatusBadge.Root>
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

export function TeamMembersTable() {
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
