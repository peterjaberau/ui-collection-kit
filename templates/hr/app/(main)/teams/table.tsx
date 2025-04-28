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

import { cn } from '@/utils/cn';
import * as Avatar from '@/components/ui/avatar';
import * as Button from '@/components/ui/button';
import * as Checkbox from '@/components/ui/checkbox';
import * as FileFormatIcon from '@/components/ui/file-format-icon';
import * as Pagination from '@/components/ui/pagination';
import * as Select from '@/components/ui/select';
import * as StatusBadge from '@/components/ui/status-badge';
import * as Table from '@/components/ui/table';
import { ThemedImage } from '@/components/themed-image';
import { TeamsTableFilters } from '@/app/(main)/teams/filters';

const data: Data[] = [
  {
    id: '326860c3',
    member: {
      name: 'James Brown',
      email: 'james@alignui.com',
      image: '/images/avatar/illustration/james.png',
    },
    title: {
      name: 'Marketing Manager',
      date: 'Since Aug, 2021',
    },
    project: {
      name: 'Monday.com',
      description: 'Campaign Strategy Brainstorming',
      image: ['/images/major-brands/monday.svg'],
    },
    doc: {
      name: 'brown-james.pdf',
      size: '2.4 MB',
    },
    status: {
      variant: 'completed',
      label: 'Active',
    },
  },
  {
    id: '8a2c57d0',
    member: {
      name: 'Sophia Williams',
      email: 'sophia@alignui.com',
      image: '/images/avatar/illustration/sophia.png',
    },
    title: {
      name: 'HR Assistant',
      date: 'Since Aug, 2021',
    },
    project: {
      name: 'Notion',
      description: 'Employee Engagement Survey',
      image: [
        '/images/major-brands/notion.svg',
        '/images/major-brands/notion-white.svg',
      ],
    },
    doc: {
      name: 'williams-sophia.pdf',
      size: '2.4 MB',
    },
    status: {
      variant: 'completed',
      label: 'Active',
    },
  },
  {
    id: '1a6256ab',
    member: {
      name: 'Arthur Taylor',
      email: 'arthur@alignui.com',
      image: '/images/avatar/illustration/arthur.png',
    },
    title: {
      name: 'Entrepreneur / CEO',
      date: 'Since May, 2022',
    },
    project: {
      name: 'Spotify',
      description: 'Vision and Goal Setting Session',
      image: ['/images/major-brands/spotify.svg'],
    },
    doc: {
      name: 'taylor-arthur.pdf',
      size: '2.4 MB',
    },
    status: {
      variant: 'disabled',
      label: 'Absent',
    },
  },
  {
    id: '9f92efe3',
    member: {
      name: 'Emma Wright',
      email: 'emma@alignui.com',
      image: '/images/avatar/illustration/emma.png',
    },
    title: {
      name: 'Front-end Developer',
      date: 'Since Sep, 2022',
    },
    project: {
      name: 'Formcarry',
      description: 'User Feedback Analysis',
      image: ['/images/major-brands/formcarry.svg'],
    },
    doc: {
      name: 'wright-emma.pdf',
      size: '1.9 MB',
    },
    status: {
      variant: 'completed',
      label: 'Active',
    },
  },
  {
    id: 'a5b7b936',
    member: {
      name: 'Matthew Johnson',
      email: 'matthew@alignui.com',
      image: '/images/avatar/illustration/matthew.png',
    },
    title: {
      name: 'Data Software Engineer',
      date: 'Since Feb, 2022',
    },
    project: {
      name: 'Loom',
      description: 'Data Analysis Methodology',
      image: ['/images/major-brands/loom.svg'],
    },
    doc: {
      name: 'johnson-matthew.pdf',
      size: '2.9 MB',
    },
    status: {
      variant: 'completed',
      label: 'Active',
    },
  },
  {
    id: '0153ab9a',
    member: {
      name: 'Laura Perez',
      email: 'laura@alignui.com',
      image: '/images/avatar/illustration/laura.png',
    },
    title: {
      name: 'Fashion Designer',
      date: 'Since Mar, 2022',
    },
    project: {
      name: 'Tidal',
      description: 'Design Trends and Inspirations',
      image: [
        '/images/major-brands/tidal.svg',
        '/images/major-brands/tidal-white.svg',
      ],
    },
    doc: {
      name: 'perez-laura.pdf',
      size: '2.5 MB',
    },
    status: {
      variant: 'disabled',
      label: 'Absent',
    },
  },
  {
    id: 'e18b8b38',
    member: {
      name: 'Wei Chen',
      email: 'wei@alignui.com',
      image: '/images/avatar/illustration/wei.png',
    },
    title: {
      name: 'Operations Manager',
      date: 'Since July, 2021',
    },
    project: {
      name: 'Dropbox',
      description: 'Process Optimization Brainstorming',
      image: ['/images/major-brands/dropbox.svg'],
    },
    doc: {
      name: 'chen-wei.pdf',
      size: '2.6 MB',
    },
    status: {
      variant: 'completed',
      label: 'Active',
    },
  },
];

type Data = {
  id: string;
  member: {
    name: string;
    email: string;
    image: string;
  };
  title: {
    name: string;
    date: string;
  };
  project: {
    name: string;
    description: string;
    image: [string, string?];
  };
  doc: {
    name: string;
    size: string;
  };
  status: {
    variant: 'completed' | 'pending' | 'failed' | 'disabled';
    label: string;
  };
};

const getSortingIcon = (state: 'asc' | 'desc' | false) => {
  if (state === 'asc')
    return <RiArrowUpSFill className='size-5 text-text-sub-600' />;
  if (state === 'desc')
    return <RiArrowDownSFill className='size-5 text-text-sub-600' />;
  return <RiExpandUpDownFill className='size-5 text-text-sub-600' />;
};

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
      className: 'pr-0',
    },
  },
  {
    id: 'member',
    accessorKey: 'member.name',
    header: ({ column }) => (
      <div className='flex items-center gap-0.5'>
        Member Name
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
      <div className='flex min-w-[212px] items-center gap-3'>
        <Avatar.Root size='40'>
          <Avatar.Image src={row.original.member.image} />
        </Avatar.Root>
        <div className='flex flex-col gap-0.5'>
          <span className='text-label-sm text-text-strong-950'>
            {row.original.member.name}
          </span>
          <span className='text-paragraph-xs text-text-sub-600'>
            {row.original.member.email}
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 'title',
    accessorKey: 'title.name',
    header: ({ column }) => (
      <div className='flex items-center gap-0.5'>
        Title
        <button
          type='button'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          {getSortingIcon(column.getIsSorted())}
        </button>
      </div>
    ),
    cell: ({ row }) => (
      <div className='flex min-w-[156px] flex-col gap-0.5'>
        <span className='text-label-sm text-text-strong-950'>
          {row.original.title.name}
        </span>
        <span className='text-paragraph-xs text-text-sub-600'>
          {row.original.title.date}
        </span>
      </div>
    ),
  },
  {
    id: 'project',
    accessorKey: 'project.name',
    header: ({ column }) => (
      <div className='flex items-center gap-0.5'>
        Projects
        <button
          type='button'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          {getSortingIcon(column.getIsSorted())}
        </button>
      </div>
    ),
    cell: ({ row }) => (
      <div className='flex w-[232px] items-center gap-3'>
        <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200'>
          <ThemedImage
            src={row.original.project.image[0]}
            srcDark={row.original.project.image[1]}
            alt=''
            width={28}
            height={28}
          />
        </div>
        <div className='flex min-w-0 flex-col gap-0.5'>
          <span className='text-label-sm text-text-strong-950'>
            {row.original.project.name}
          </span>
          <span className='truncate text-paragraph-xs text-text-sub-600'>
            {row.original.project.description}
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 'doc',
    accessorKey: 'doc.name',
    header: ({ column }) => (
      <div className='flex items-center gap-0.5 whitespace-nowrap'>
        Member Documents
        <button
          type='button'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          {getSortingIcon(column.getIsSorted())}
        </button>
      </div>
    ),
    cell: ({ row }) => (
      <div className='flex min-w-[192px] items-center gap-3'>
        <FileFormatIcon.Root format='PDF' size='small' color='red' />
        <div className='flex flex-col gap-0.5'>
          <span className='text-label-sm text-text-strong-950'>
            {row.original.doc.name}
          </span>
          <span className='text-paragraph-xs text-text-sub-600'>
            {row.original.doc.size}
          </span>
        </div>
      </div>
    ),
  },
  {
    id: 'status',
    accessorKey: 'status.label',
    header: ({ column }) => (
      <div className='flex min-w-24 items-center gap-0.5'>
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
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => (
      <Button.Root variant='neutral' mode='ghost' size='xsmall'>
        <Button.Icon as={RiMore2Line} />
      </Button.Root>
    ),
    meta: {
      className: 'px-4',
    },
  },
];

export function MembersTable({ className }: { className?: string }) {
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
    <div className={cn('flex w-full flex-1 flex-col', className)}>
      <TeamsTableFilters />

      <Table.Root className='-mx-4 mt-5 w-auto px-4 lg:mx-0 lg:mt-4 lg:w-full lg:px-0'>
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
                <Table.Row data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map((cell) => (
                    <Table.Cell
                      key={cell.id}
                      className={cell.column.columnDef.meta?.className}
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
  );
}
