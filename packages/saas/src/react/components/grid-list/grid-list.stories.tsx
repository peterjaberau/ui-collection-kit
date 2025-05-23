import * as React from 'react'

import { Box, Card, Container, HStack, Text } from '@chakra-ui/react'
import { Meta, StoryObj } from '@storybook/react'
import { FiMail, FiMessageSquare } from 'react-icons/fi'

import { Avatar } from '../avatar/index'
import { Checkbox } from '../checkbox/index'
import { RadioGroup } from '../radio-group/index'
import { Radio } from '../radio/index'
import { Switch } from '../switch/index'
import { Tag } from '../tag/index'
import { GridList } from './index'

export default {
  title: 'SaasUI/Components/GridList',
  component: GridList.Root,
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
} as Meta

type Story = StoryObj<GridList.RootProps>

const users = [
  {
    name: 'Elliot Alderson',
    position: 'Hacker',
    role: 'admin',
  },
  {
    name: 'Martin Wallström',
    position: 'CEO',
    role: 'owner',
  },
]

export const Basic: Story = {
  args: {
    children: (
      <>
        <GridList.Item>
          <GridList.Cell>
            <Text fontWeight="medium">Elliot Alderson</Text>
            <Text textStyle="sm" color="fg.muted">
              Hacker
            </Text>
          </GridList.Cell>
          <GridList.Cell>
            <Tag>Admin</Tag>
          </GridList.Cell>
        </GridList.Item>
        <GridList.Item>
          <GridList.Cell>
            <Text fontWeight="medium">Tyrell Wellick</Text>
            <Text textStyle="sm" color="fg.muted">
              CEO
            </Text>
          </GridList.Cell>
          <GridList.Cell>
            <Tag>Owner</Tag>
          </GridList.Cell>
        </GridList.Item>
      </>
    ),
  },
}

export const WithIcons: Story = {
  args: {
    children: (
      <>
        <GridList.Item>
          <GridList.Cell>
            <Avatar name="Elliot Alderson" size="sm" />
          </GridList.Cell>
          <GridList.Cell flex="1">
            <Text fontWeight="medium">Elliot Alderson</Text>
            <Text textStyle="sm" color="fg.muted">
              Hacker
            </Text>
          </GridList.Cell>
          <GridList.Cell>
            <Tag>Admin</Tag>
          </GridList.Cell>
        </GridList.Item>
        <GridList.Item>
          <GridList.Cell>
            <Avatar name="Tyrell Wellick" size="sm" />
          </GridList.Cell>
          <GridList.Cell flex="1">
            <Text fontWeight="medium">Tyrell Wellick</Text>
            <Text textStyle="sm" color="fg.muted">
              CEO
            </Text>
          </GridList.Cell>
          <GridList.Cell>
            <Tag>owner</Tag>
          </GridList.Cell>
        </GridList.Item>
      </>
    ),
  },
}

export const WithHeader: Story = {
  args: {
    children: (
      <>
        <GridList.Header>Users</GridList.Header>
        <GridList.Item>
          <GridList.Cell>
            <Avatar name="Elliot Alderson" size="sm" />
          </GridList.Cell>
          <GridList.Cell flex="1">
            <Text fontWeight="medium">Elliot Alderson</Text>
            <Text textStyle="sm" color="fg.muted">
              Hacker
            </Text>
          </GridList.Cell>
          <GridList.Cell>
            <Tag>Admin</Tag>
          </GridList.Cell>
        </GridList.Item>
        <GridList.Item>
          <GridList.Cell>
            <Avatar name="Tyrell Wellick" size="sm" />
          </GridList.Cell>
          <GridList.Cell flex="1">
            <Text fontWeight="medium">Tyrell Wellick</Text>
            <Text textStyle="sm" color="fg.muted">
              CEO
            </Text>
          </GridList.Cell>
          <GridList.Cell>
            <Tag>Owner</Tag>
          </GridList.Cell>
        </GridList.Item>
      </>
    ),
  },
}

export const WithCheckbox: Story = {
  render: () => {
    return (
      <Card.Root width="320px">
        <GridList.Root>
          {['Release V3', 'Learn Saas UI'].map((todo) => {
            const [checked, setChecked] = React.useState(false)
            return (
              <GridList.Item
                key={todo}
                aria-selected={checked}
                onClick={() => setChecked(!checked)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setChecked(!checked)
                  }
                }}
                _selected={{
                  bg: 'colorPalette.subtle',
                }}
              >
                <GridList.Cell display="flex" alignItems="center">
                  <Checkbox checked={checked} />
                </GridList.Cell>
                <GridList.Cell flex="1">
                  <Text fontWeight="medium">{todo}</Text>
                </GridList.Cell>
              </GridList.Item>
            )
          })}
        </GridList.Root>
      </Card.Root>
    )
  },
}

const tshirtVariants = [
  {
    id: '1',
    title: 'Red T-Shirt',
    description: 'A bright and bold red t-shirt',
  },
  {
    id: '2',
    title: 'Blue T-Shirt',
    description: 'A cool and calming blue t-shirt',
  },
  {
    id: '3',
    title: 'Green T-Shirt',
    description: 'A fresh and lively green t-shirt',
  },
]

export const WithRadio: Story = {
  render: () => {
    const [checked, setChecked] = React.useState('1')
    return (
      <Box width="400px">
        <RadioGroup.Root name="variant" value={checked}>
          <GridList.Root>
            {tshirtVariants.map((variant) => {
              const isChecked = checked === variant.id
              return (
                <GridList.Item
                  key={variant.id}
                  onClick={() => setChecked(variant.id)}
                  borderRadius="md"
                  borderWidth="1px"
                  mb="2"
                  aria-selected={isChecked}
                  _selected={{
                    borderColor: 'border.emphasized',
                  }}
                >
                  <GridList.Cell flex="1" flexDirection="column">
                    <Text fontWeight="medium">{variant.title}</Text>
                    <Text color="fg.muted">{variant.description}</Text>
                  </GridList.Cell>
                  <GridList.Cell alignSelf="flex-start" mt="1">
                    <Radio value={variant.id} />
                  </GridList.Cell>
                </GridList.Item>
              )
            })}
          </GridList.Root>
        </RadioGroup.Root>
      </Box>
    )
  },
}

export const WithSwitch: Story = {
  render: () => {
    const [values, setValues] = React.useState({
      email: false,
      chat: false,
    })

    return (
      <Card.Root width="100%" maxW="320px">
        <GridList.Root interactive>
          <GridList.Header>Notifications</GridList.Header>
          <GridList.Item
            onClick={() => setValues({ ...values, email: !values.email })}
          >
            <GridList.Cell px="2">
              <FiMail />
            </GridList.Cell>
            <GridList.Cell flex="1">Email</GridList.Cell>
            <GridList.Cell>
              <Switch aria-label="Email" checked={values.email} />
            </GridList.Cell>
          </GridList.Item>
          <GridList.Item
            onClick={() => setValues({ ...values, chat: !values.chat })}
          >
            <GridList.Cell px="2">
              <FiMessageSquare />
            </GridList.Cell>
            <GridList.Cell flex="1">Chat</GridList.Cell>
            <GridList.Cell>
              <Switch aria-label="Chat" checked={values.chat} />
            </GridList.Cell>
          </GridList.Item>
        </GridList.Root>
      </Card.Root>
    )
  },
}

export const Interactive: Story = {
  render: () => {
    return (
      <Card.Root width="320px">
        <GridList.Root interactive>
          <GridList.Header>Today</GridList.Header>
          <GridList.Item>
            <GridList.Cell width="10">
              <Avatar name="Elliot Alderson" size="sm" />
            </GridList.Cell>
            <GridList.Cell flex="1" flexDirection="column">
              <Text fontWeight="medium">A bug is never just a mistake.</Text>
              <Text fontSize="sm" color="fg.muted" lineClamp={2}>
                <Text as="span" color="app-text">
                  Elliot Alderson
                </Text>{' '}
                — It represents something bigger. An error of thinking that
                makes you who you are.
              </Text>
            </GridList.Cell>
          </GridList.Item>
          <GridList.Item>
            <GridList.Cell width="10">
              <Avatar name="Tyrell Wellick" size="sm" />
            </GridList.Cell>
            <GridList.Cell flex="1" flexDirection="column">
              <Text fontWeight="medium">Hi</Text>
              <Text fontSize="sm" color="fg.muted" lineClamp={2}>
                <Text as="span" color="app-text">
                  Tyrell Wellick
                </Text>{' '}
                — Unfortunately, we're all human. Except me, of course.
              </Text>
            </GridList.Cell>
          </GridList.Item>
        </GridList.Root>
      </Card.Root>
    )
  },
}

export const Rounded: Story = {
  render: () => {
    return (
      <Card.Root width="320px">
        <GridList.Root variant="rounded" interactive>
          <GridList.Header>Today</GridList.Header>
          <GridList.Item>
            <GridList.Cell width="10">
              <Avatar name="Elliot Alderson" size="sm" />
            </GridList.Cell>
            <GridList.Cell flex="1" flexDirection="column">
              <Text fontWeight="medium">A bug is never just a mistake.</Text>
              <Text fontSize="sm" color="fg.muted" lineClamp={2}>
                <Text as="span" color="app-text">
                  Elliot Alderson
                </Text>{' '}
                — It represents something bigger. An error of thinking that
                makes you who you are.
              </Text>
            </GridList.Cell>
          </GridList.Item>
          <GridList.Item>
            <GridList.Cell width="10">
              <Avatar name="Tyrell Wellick" size="sm" />
            </GridList.Cell>
            <GridList.Cell flex="1" flexDirection="column">
              <Text fontWeight="medium">Hi</Text>
              <Text fontSize="sm" color="fg.muted" lineClamp={2}>
                <Text as="span" color="app-text">
                  Tyrell Wellick
                </Text>{' '}
                — Unfortunately, we're all human. Except me, of course.
              </Text>
            </GridList.Cell>
          </GridList.Item>
        </GridList.Root>
      </Card.Root>
    )
  },
}

const states = {
  'in-progress': {
    color: 'amber',
    label: 'In progress',
  },
  todo: {
    color: 'gray',
    label: 'Todo',
  },
}

export const StickyHeaders: Story = {
  render: () => {
    const issues = [
      {
        id: 'SUI-123',
        title: 'Research product trends',
        date: '10 Jan',
        labels: ['research', 'trends'],
        status: 'in-progress',
      },
      {
        id: 'SUI-133',
        title: 'Develop user interface',
        date: '3 Feb',
        labels: ['UI', 'development'],
        status: 'in-progress',
      },
      {
        id: 'SUI-134',
        title: 'Create user experience flows',
        date: '5 Feb',
        labels: ['UX', 'flows'],
        status: 'in-progress',
      },
      {
        id: 'SUI-135',
        title: 'Select materials for production',
        date: '7 Feb',
        labels: ['materials', 'production'],
        status: 'in-progress',
      },
      {
        id: 'SUI-136',
        title: 'Work with engineers on product specifications',
        date: '9 Feb',
        labels: ['engineering', 'specifications'],
        status: 'in-progress',
      },
      {
        id: 'SUI-137',
        title: 'Conduct user research',
        date: '11 Feb',
        labels: ['user research', 'testing'],
        status: 'in-progress',
      },
      {
        id: 'SUI-124',
        title: 'Brainstorm product ideas',
        date: '12 Jan',
        labels: ['brainstorming', 'ideas'],
        status: 'todo',
      },
      {
        id: 'SUI-125',
        title: 'Create initial sketches',
        date: '15 Jan',
        labels: ['sketches', 'design'],
        status: 'todo',
      },
      {
        id: 'SUI-126',
        title: 'Get feedback on sketches',
        date: '17 Jan',
        labels: ['feedback', 'design'],
        status: 'todo',
      },
      {
        id: 'SUI-127',
        title: 'Refine and finalize design',
        date: '20 Jan',
        labels: ['design', 'refinement'],
        status: 'todo',
      },
      {
        id: 'SUI-128',
        title: 'Create 3D model',
        date: '23 Jan',
        labels: ['3D', 'model'],
        status: 'todo',
      },
      {
        id: 'SUI-129',
        title: 'Test and iterate prototype',
        date: '25 Jan',
        labels: ['testing', 'prototype'],
        status: 'todo',
      },
      {
        id: 'SUI-130',
        title: 'Refine prototype based on feedback',
        date: '27 Jan',
        labels: ['feedback', 'iteration'],
        status: 'todo',
      },
      {
        id: 'SUI-131',
        title: 'Create final product',
        date: '30 Jan',
        labels: ['final', 'product'],
        status: 'todo',
      },
      {
        id: 'SUI-132',
        title: 'Test final product before launch',
        date: '1 Feb',
        labels: ['testing', 'final'],
        status: 'todo',
      },
    ]

    const inProgress = issues.filter(({ status }) => status === 'in-progress')
    const todo = issues.filter(({ status }) => status === 'todo')

    const renderIssue = (issue: any) => {
      return (
        <GridList.Item
          borderBottom="1px solid"
          borderColor="border.muted"
          fontSize="sm"
          _hover={{
            bg: 'bg.muted',
          }}
        >
          <GridList.Cell color="fg.muted">{issue.id}</GridList.Cell>
          <GridList.Cell flex="1">
            <Text lineClamp={1}>{issue.title}</Text>
          </GridList.Cell>
          <GridList.Cell color="fg.muted" display="flex" gap="1">
            {issue.labels.map((label: any) => (
              <Tag
                key={label}
                variant="outline"
                size="md"
                borderRadius="full"
                color="fg.muted"
                _hover={{
                  color: 'fg',
                }}
              >
                {label}
              </Tag>
            ))}
          </GridList.Cell>
          <GridList.Cell color="fg.muted" textStyle="xs">
            {issue.date}
          </GridList.Cell>
        </GridList.Item>
      )
    }

    return (
      <Card.Root width="100%" overflowY="auto" maxH="240px">
        <GridList.Root py="0">
          <GridList.Header
            fontWeight="normal"
            bg="bg.muted/95"
            boxShadow="0 1px 0 0 var(--chakra-colors-border), 0 -1px 0 0 var(--chakra-colors-border)"
            color="fg.subtle"
            position="sticky"
            top="0"
            zIndex="popover"
            gap="2"
            _first={{
              borderTopWidth: '0',
            }}
          >
            In Progress{' '}
            <Text as="span" color="fg.muted">
              {inProgress.length}
            </Text>
          </GridList.Header>
          {inProgress.map(renderIssue)}
          <GridList.Header
            fontWeight="normal"
            bg="bg.muted/95"
            boxShadow="0 1px 0 0 var(--chakra-colors-border), 0 -1px 0 0 var(--chakra-colors-border)"
            color="fg.subtle"
            position="sticky"
            top="0"
            zIndex="popover"
            gap="2"
          >
            Todo{' '}
            <Text as="span" color="fg.muted">
              {todo.length}
            </Text>
          </GridList.Header>
          {todo.map(renderIssue)}
        </GridList.Root>
      </Card.Root>
    )
  },
}
