export const sampleTasks = [
  {
    id: 't1',
    title: 'Design homepage',
    description: 'Create hero, features, and footer',
    team: 'Design',
    assignee: 'Aisha',
    status: 'In Progress',
    tags: ['UI', 'High'],
    createdAt: '2025-11-01T10:00:00Z',
    activity: [
      { time: '2025-11-02T09:00:00Z', note: 'Assigned to Aisha' },
      { time: '2025-11-03T11:00:00Z', note: 'Changed status to In Progress' }
    ]
  },
  // ...add more tasks
];

export const sampleTeams = [
  { id: 'design', name: 'Design', members: ['Aisha','Ali'] },
  { id: 'dev', name: 'Development', members: ['Bilal','Fatima'] },
];
