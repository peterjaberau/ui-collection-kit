export const availableIntegrations: IntegrationItem[] = [
  {
    id: 'microsoft-office-365',
    name: 'Microsoft Office 365',
    description: 'Seamless collaboration and document management.',
    isActive: true,
    icon: ['/images/major-brands/microsoft-office.svg'],
  },
  {
    id: 'zoom',
    name: 'Zoom',
    description: 'For conducting virtual meetings and interviews.',
    isActive: true,
    icon: ['/images/major-brands/zoom.svg'],
  },
  {
    id: 'slack',
    name: 'Slack',
    description: 'For team communication and real-time collaboration.',
    isActive: true,
    icon: ['/images/major-brands/slack.svg'],
  },
  {
    id: 'trello',
    name: 'Trello',
    description: 'For task management and project collaboration.',
    isActive: false,
    icon: ['/images/major-brands/trello.svg'],
  },
  {
    id: 'monday-com',
    name: 'Monday.com',
    description: 'For project tracking, and HR task management.',
    isActive: false,
    icon: ['/images/major-brands/monday.svg'],
  },
  {
    id: 'skype',
    name: 'Skype',
    description: 'For virtual meetings, and real-time communication.',
    isActive: false,
    icon: ['/images/major-brands/skype.svg'],
  },
];

export const upcomingIntegrations: IntegrationItem[] = [
  {
    id: 'jira',
    name: 'Jira',
    description: 'For agile project management and issue tracking.',
    isActive: false,
    icon: ['/images/major-brands/jira.svg'],
  },
  {
    id: 'asana',
    name: 'Asana',
    description: 'For project management and task tracking.',
    isActive: false,
    icon: ['/images/major-brands/asana.svg'],
  },
  {
    id: 'zendesk',
    name: 'Zendesk',
    description: 'For customer support and ticket management.',
    isActive: false,
    icon: [
      '/images/major-brands/zendesk.svg',
      '/images/major-brands/zendesk-white.svg',
    ],
  },
];

export type IntegrationItem = {
  id: string;
  icon: [string, string?];
  name: string;
  description?: string;
  isActive: boolean;
};
