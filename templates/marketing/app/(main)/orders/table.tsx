'use client';

import * as React from 'react';
import {
  RiArrowDownSFill,
  RiArrowLeftDoubleLine,
  RiArrowLeftSLine,
  RiArrowRightDoubleLine,
  RiArrowRightSLine,
  RiArrowUpSFill,
  RiCheckboxCircleFill,
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
import { format, parseISO } from 'date-fns';
import { useSetAtom } from 'jotai';

import { cn } from '@/utils/cn';
import { currencyFormatter } from '@/utils/number-formatter';
import * as Avatar from '@/components/ui/avatar';
import * as Button from '@/components/ui/button';
import * as Checkbox from '@/components/ui/checkbox';
import * as Pagination from '@/components/ui/pagination';
import * as Select from '@/components/ui/select';
import * as StatusBadge from '@/components/ui/status-badge';
import * as Table from '@/components/ui/table';

import { OrdersTableFilters } from './filters';
import OrderDetailDrawer, {
  orderDetailDrawerOpenAtom,
} from './order-detail-drawer';

const formatDate = (isoDate: string) => {
  return format(parseISO(isoDate), 'd MMM, HH:mm');
};

const data: Data[] = [
  {
    id: '#ORD-98745',
    customer: {
      name: 'Sophia Williams',
      image: '/images/avatar/illustration/sophia.png',
      color: 'yellow',
    },
    date: '2024-10-29T09:20:00Z',
    revenue: 399.99,
    purchased: {
      name: 'Apple Watch S5 GPS 40mm White',
    },
    status: {
      variant: 'completed',
      label: 'Paid',
    },
  },
  {
    id: '#ORD-28745',
    customer: {
      name: 'Laura Perez',
      image: '/images/avatar/illustration/laura.png',
      color: 'red',
    },
    date: '2024-10-28T10:30:00Z',
    revenue: 1299.99,
    purchased: {
      name: 'MacBook Pro M1 256GB Silvere',
    },
    status: {
      variant: 'completed',
      label: 'Paid',
    },
  },
  {
    id: '#ORD-56745',
    customer: {
      name: 'Lena Müller',
      image: '/images/avatar/illustration/lena.png',
      color: 'purple',
    },
    date: '2024-10-27T11:45:00Z',
    revenue: 1299.99,
    purchased: {
      name: 'iMac M1 24-inch Purple',
    },
    status: {
      variant: 'completed',
      label: 'Paid',
    },
  },
  {
    id: '#ORD-46345',
    customer: {
      name: 'Natalia Nowak',
      image: '/images/avatar/illustration/natalia.png',
      color: 'blue',
    },
    date: '2024-10-26T19:25:00Z',
    revenue: 549.99,
    purchased: {
      name: 'AirPods Max Green',
    },
    status: {
      variant: 'completed',
      label: 'Paid',
    },
  },
  {
    id: '#ORD-45248',
    customer: {
      name: 'Wei Chen',
      image: '/images/avatar/illustration/wei.png',
      color: 'gray',
    },
    date: '2024-10-25T18:12:00Z',
    revenue: 99.99,
    purchased: {
      name: 'HomePod Mini Orange',
    },
    status: {
      variant: 'completed',
      label: 'Paid',
    },
  },
  {
    id: '#ORD-21325',
    customer: {
      name: 'Emma Wright',
      image: '/images/avatar/illustration/emma.png',
      color: 'sky',
    },
    date: '2024-10-24T17:54:00Z',
    revenue: 1599.99,
    purchased: {
      name: 'Apple Studio Display Standard Glass',
    },
    status: {
      variant: 'completed',
      label: 'Paid',
    },
  },
  {
    id: '#ORD-73456',
    customer: {
      name: 'Ravi Patel',
      image: '/images/avatar/illustration/ravi.png',
      color: 'purple',
    },
    date: '2024-10-26T20:24:00Z',
    revenue: 249.99,
    purchased: {
      name: 'Apple AirPods Pro 2nd Gen',
    },
    status: {
      variant: 'completed',
      label: 'Paid',
    },
  },
  {
    id: '#ORD-21352',
    customer: {
      name: 'Nuray Aksoy',
      image: '/images/avatar/illustration/nuray.png',
      color: 'red',
    },
    date: '2024-10-25T21:57:00Z',
    revenue: 449.99,
    purchased: {
      name: 'iPad 10th Gen 64GB Wi-Fi Space Gray',
    },
    status: {
      variant: 'completed',
      label: 'Paid',
    },
  },
];

type Data = {
  id: string;
  customer: {
    name: string;
    image: string;
    color?: React.ComponentPropsWithoutRef<typeof Avatar.Root>['color'];
  };
  date: string;
  revenue: number;
  purchased: {
    name: string;
  };
  status: {
    variant: 'completed' | 'pending' | 'failed' | 'disabled';
    label: string;
  };
};

const getSortingIcon = (state: 'asc' | 'desc' | false) => {
  if (state === 'asc')
    return <RiArrowUpSFill className='size-5 text-text-soft-400' />;
  if (state === 'desc')
    return <RiArrowDownSFill className='size-5 text-text-soft-400' />;
  return <RiExpandUpDownFill className='size-5 text-text-soft-400' />;
};

function RowActionButton({ row }: { row: any }) {
  return (
    <Button.Root
      variant='neutral'
      mode='ghost'
      size='xsmall'
      onClick={(e) => {
        e.stopPropagation();
        console.log('row action clicked');
      }}
    >
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
        onClick={(e) => e.stopPropagation()}
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
    id: 'id',
    accessorKey: 'id',
    header: ({ column }) => (
      <div className='flex items-center gap-0.5 whitespace-nowrap'>
        ID
        <button
          type='button'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          {getSortingIcon(column.getIsSorted())}
        </button>
      </div>
    ),
    cell: ({ row }) => (
      <div className='flex min-w-[100px] items-center text-paragraph-sm text-text-strong-950'>
        {row.original.id}
      </div>
    ),
  },
  {
    id: 'date',
    accessorKey: 'date',
    header: ({ column }) => (
      <div className='flex items-center gap-0.5 whitespace-nowrap'>
        Date
        <button
          type='button'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          {getSortingIcon(column.getIsSorted())}
        </button>
      </div>
    ),
    cell: ({ row }) => (
      <div className='flex min-w-[106px] items-center text-paragraph-sm text-text-strong-950'>
        {formatDate(row.original.date)}
      </div>
    ),
  },
  {
    id: 'status',
    accessorKey: 'status.label',
    header: ({ column }) => (
      <div className='flex items-center gap-0.5'>
        Status
        <button
          type='button'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          {getSortingIcon(column.getIsSorted())}
        </button>
      </div>
    ),
    cell: ({ row }) => (
      <StatusBadge.Root status={row.original.status.variant}>
        <StatusBadge.Icon as={RiCheckboxCircleFill} />
        {row.original.status.label}
      </StatusBadge.Root>
    ),
  },
  {
    id: 'customer',
    accessorKey: 'customer.name',
    header: ({ column }) => (
      <div className='flex items-center gap-0.5'>
        Customer
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
      <div className='flex min-w-40 items-center gap-3'>
        <Avatar.Root size='24' color={row.original.customer.color}>
          <Avatar.Image src={row.original.customer.image} />
        </Avatar.Root>
        <div className='text-paragraph-sm text-text-strong-950'>
          {row.original.customer.name}
        </div>
      </div>
    ),
  },
  {
    id: 'purchased',
    accessorKey: 'purchased.name',
    header: ({ column }) => (
      <div className='flex items-center gap-0.5'>
        Purchased
        <button
          type='button'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          {getSortingIcon(column.getIsSorted())}
        </button>
      </div>
    ),
    cell: ({ row }) => (
      <div className='min-w-[276px] text-paragraph-sm text-text-strong-950'>
        {row.original.purchased.name}
      </div>
    ),
  },
  {
    id: 'revenue',
    accessorKey: 'revenue',
    header: ({ column }) => (
      <div className='flex items-center gap-0.5'>
        Revenue
        <button
          type='button'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          {getSortingIcon(column.getIsSorted())}
        </button>
      </div>
    ),
    cell: ({ row }) => (
      <div className='min-w-[92px] text-paragraph-sm text-text-strong-950'>
        {currencyFormatter.format(row.original.revenue)}
      </div>
    ),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: RowActionButton,
    meta: {
      className: 'px-4',
    },
  },
];

export function OrdersTable({ className }: { className?: string }) {
  const setOrderDetailDrawerOpen = useSetAtom(orderDetailDrawerOpenAtom);
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
      <OrderDetailDrawer />

      <div className={cn('flex w-full flex-1 flex-col', className)}>
        <OrdersTableFilters />

        <Table.Root className='-mx-4 w-auto px-4 lg:mx-0 lg:w-full lg:px-0'>
          <Table.Header>
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
                  <Table.Row
                    data-state={row.getIsSelected() && 'selected'}
                    onClick={() => {
                      console.log('Clicked row ID:', row.getValue('id'));
                      setOrderDetailDrawerOpen(true);
                    }}
                  >
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

        <div className='mt-auto'>
          <div className='mt-4 flex items-center justify-between py-4 lg:hidden'>
            <Button.Root
              variant='neutral'
              mode='stroke'
              size='xsmall'
              className='w-28'
            >
              Previous
            </Button.Root>
            <span className='whitespace-nowrap text-center text-paragraph-sm text-text-sub-600'>
              Page 2 of 16
            </span>
            <Button.Root
              variant='neutral'
              mode='stroke'
              size='xsmall'
              className='w-28'
            >
              Next
            </Button.Root>
          </div>
          <div className='mt-10 hidden items-center gap-3 lg:flex'>
            <span className='flex-1 whitespace-nowrap text-paragraph-sm text-text-sub-600'>
              Page 2 of 16
            </span>

            <Pagination.Root>
              <Pagination.NavButton>
                <Pagination.NavIcon as={RiArrowLeftDoubleLine} />
              </Pagination.NavButton>
              <Pagination.NavButton>
                <Pagination.NavIcon as={RiArrowLeftSLine} />
              </Pagination.NavButton>
              <Pagination.Item>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item current>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Item>...</Pagination.Item>
              <Pagination.Item>16</Pagination.Item>
              <Pagination.NavButton>
                <Pagination.NavIcon as={RiArrowRightDoubleLine} />
              </Pagination.NavButton>
              <Pagination.NavButton>
                <Pagination.NavIcon as={RiArrowRightSLine} />
              </Pagination.NavButton>
            </Pagination.Root>

            <div className='flex flex-1 justify-end'>
              <Select.Root size='xsmall' defaultValue='7'>
                <Select.Trigger className='w-auto'>
                  <Select.Value />
                </Select.Trigger>
                <Select.Content>
                  <Select.Item value={'7'}>7 / page</Select.Item>
                  <Select.Item value={'15'}>15 / page</Select.Item>
                  <Select.Item value={'50'}>50 / page</Select.Item>
                  <Select.Item value={'100'}>100 / page</Select.Item>
                </Select.Content>
              </Select.Root>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
