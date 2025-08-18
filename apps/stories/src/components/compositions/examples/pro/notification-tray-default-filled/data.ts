export interface Sender {
  id: string
  email?: string
  phone?: string
  image?: string
}

export interface MessageAction {
  /** Status of the message action */
  status?: 'pending' | 'done'
  /** List of buttons associated with the message action */
  buttons?: MessageButton[]
}

export interface MessageButton {
  /** Type of button for the action result */
  type: 'primary' | 'secondary'
  /** Content of the button */
  content: string
  /** Content of the result when the button is clicked */
  resultContent?: string
}

export interface Notification {
  id: string
  sender: Sender
  title?: string
  subject?: string
  message: string
  status: 'sent' | 'delivered' | 'failed' | 'pending'
  read: boolean
  seen: boolean
  clicked: boolean
  read_at?: string
  seen_at?: string
  clicked_at?: string
  interacted_at?: string
  created_at: string
  updated_at: string
  delivered_at?: string
  actions?: MessageAction
}

export const notifications: Notification[] = [
  {
    id: 'notif_001',
    sender: {
      id: 'user_123',
      email: 'john.doe@company.com',
      phone: '+1234567890',
    },
    title: 'Project Update Required',
    subject: 'Action needed: Project Alpha status',
    message: 'Please review and approve the latest project milestone deliverables.',
    status: 'delivered',
    read: false,
    seen: true,
    clicked: false,
    seen_at: '2024-08-13T09:15:30Z',
    created_at: '2024-08-13T09:00:00Z',
    updated_at: '2024-08-13T09:15:30Z',
    delivered_at: '2024-08-13T09:05:12Z',
    actions: {
      status: 'pending',
      buttons: [
        { type: 'primary', content: 'Approve' },
        { type: 'secondary', content: 'Request Changes' },
      ],
    },
  },
  {
    id: 'notif_002',
    sender: {
      id: 'user_456',
      email: 'sarah.wilson@company.com',
    },
    title: 'Team Meeting Reminder',
    message: "Don't forget about our weekly standup meeting at 2 PM today.",
    status: 'sent',
    read: true,
    seen: true,
    clicked: true,
    read_at: '2024-08-13T08:45:22Z',
    seen_at: '2024-08-13T08:30:15Z',
    clicked_at: '2024-08-13T08:46:10Z',
    interacted_at: '2024-08-13T08:46:10Z',
    created_at: '2024-08-13T08:00:00Z',
    updated_at: '2024-08-13T08:46:10Z',
    delivered_at: '2024-08-13T08:02:33Z',
  },
  {
    id: 'notif_003',
    sender: {
      id: 'system_001',
      email: 'notifications@platform.com',
    },
    subject: 'Security Alert',
    message:
      "New login detected from an unrecognized device. If this wasn't you, please secure your account immediately.",
    status: 'delivered',
    read: false,
    seen: false,
    clicked: false,
    created_at: '2024-08-13T07:30:00Z',
    updated_at: '2024-08-13T07:35:20Z',
    delivered_at: '2024-08-13T07:32:14Z',
    actions: {
      status: 'pending',
      buttons: [
        { type: 'primary', content: 'This was me' },
        { type: 'secondary', content: 'Secure Account' },
      ],
    },
  },
  {
    id: 'notif_004',
    sender: {
      id: 'user_789',
      email: 'mike.chen@company.com',
      phone: '+1987654321',
    },
    title: 'Document Shared',
    message: "Mike Chen shared 'Q3 Financial Report.pdf' with you.",
    status: 'delivered',
    read: true,
    seen: true,
    clicked: false,
    read_at: '2024-08-12T16:20:45Z',
    seen_at: '2024-08-12T16:18:30Z',
    created_at: '2024-08-12T16:15:00Z',
    updated_at: '2024-08-12T16:20:45Z',
    delivered_at: '2024-08-12T16:16:22Z',
  },
  {
    id: 'notif_005',
    sender: {
      id: 'user_234',
      email: 'lisa.rodriguez@company.com',
    },
    title: 'Task Assignment',
    subject: 'New task assigned: Database optimization',
    message:
      'You have been assigned a new task: Optimize database queries for the user management system.',
    status: 'failed',
    read: false,
    seen: false,
    clicked: false,
    created_at: '2024-08-12T14:00:00Z',
    updated_at: '2024-08-12T14:05:30Z',
    actions: {
      status: 'pending',
      buttons: [
        { type: 'primary', content: 'Accept Task' },
        { type: 'secondary', content: 'Decline' },
      ],
    },
  },
  {
    id: 'notif_006',
    sender: {
      id: 'user_567',
      phone: '+1555123456',
    },
    message:
      'Your expense report for July has been approved and will be processed with the next payroll.',
    status: 'delivered',
    read: true,
    seen: true,
    clicked: false,
    read_at: '2024-08-12T11:30:15Z',
    seen_at: '2024-08-12T11:28:45Z',
    created_at: '2024-08-12T11:15:00Z',
    updated_at: '2024-08-12T11:30:15Z',
    delivered_at: '2024-08-12T11:17:33Z',
  },
  {
    id: 'notif_007',
    sender: {
      id: 'user_890',
      email: 'david.kim@company.com',
    },
    title: 'Code Review Request',
    subject: 'Please review: Feature/user-authentication',
    message: 'David Kim has requested your review on the user authentication feature branch.',
    status: 'delivered',
    read: false,
    seen: true,
    clicked: false,
    seen_at: '2024-08-12T09:45:20Z',
    created_at: '2024-08-12T09:30:00Z',
    updated_at: '2024-08-12T09:45:20Z',
    delivered_at: '2024-08-12T09:33:18Z',
    actions: {
      status: 'pending',
      buttons: [
        { type: 'primary', content: 'Start Review' },
        { type: 'secondary', content: 'Assign to Others' },
      ],
    },
  },
  {
    id: 'notif_008',
    sender: {
      id: 'system_002',
      email: 'billing@platform.com',
    },
    title: 'Payment Confirmation',
    subject: 'Invoice payment successful',
    message: 'Your payment of $149.99 for the Pro plan has been processed successfully.',
    status: 'delivered',
    read: true,
    seen: true,
    clicked: true,
    read_at: '2024-08-11T18:22:10Z',
    seen_at: '2024-08-11T18:20:30Z',
    clicked_at: '2024-08-11T18:23:45Z',
    interacted_at: '2024-08-11T18:23:45Z',
    created_at: '2024-08-11T18:15:00Z',
    updated_at: '2024-08-11T18:23:45Z',
    delivered_at: '2024-08-11T18:16:55Z',
  },
  {
    id: 'notif_009',
    sender: {
      id: 'user_345',
      email: 'emma.taylor@company.com',
      phone: '+1444555666',
    },
    title: 'Meeting Invitation',
    subject: 'Invitation: Product roadmap discussion',
    message:
      "You're invited to discuss the Q4 product roadmap. Meeting scheduled for tomorrow at 10 AM.",
    status: 'pending',
    read: false,
    seen: false,
    clicked: false,
    created_at: '2024-08-11T15:00:00Z',
    updated_at: '2024-08-11T15:00:00Z',
    actions: {
      status: 'pending',
      buttons: [
        { type: 'primary', content: 'Accept' },
        { type: 'secondary', content: 'Decline' },
        { type: 'secondary', content: 'Tentative' },
      ],
    },
  },
  {
    id: 'notif_010',
    sender: {
      id: 'user_678',
      email: 'alex.johnson@company.com',
    },
    message:
      'The server maintenance scheduled for this weekend has been completed successfully. All systems are now operational.',
    status: 'delivered',
    read: false,
    seen: false,
    clicked: false,
    created_at: '2024-08-11T08:00:00Z',
    updated_at: '2024-08-11T08:05:12Z',
    delivered_at: '2024-08-11T08:02:30Z',
    actions: {
      status: 'done',
      buttons: [{ type: 'primary', content: 'Acknowledge' }],
    },
  },
]
