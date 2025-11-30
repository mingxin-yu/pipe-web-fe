// Left navigation configuration
export interface LeftNavItem {
  key: string;
  label: string;
  path: string;
  children?: LeftNavItem[];
}

export const LEFT_NAV_TITLE = 'Navigation';
export const LEFT_NAV_SUBTITLE = 'Menu';

export const LEFT_NAV_ITEMS: LeftNavItem[] = [
  {
    key: 'projects',
    label: 'Projects',
    path: '/projects',
  },
  {
    key: 'designs',
    label: 'Designs',
    path: '/designs',
    children: [
      {
        key: 'designs.list',
        label: 'Designs',
        path: '/designs',
        children: [
          {
            key: 'designs.list',
            label: 'All Designs',
            path: '/designs',
          },
          {
            key: 'designs.create',
            label: 'Create Design',
            path: '/designs/create',
          },
          {
            key: 'designs.detail',
            label: 'Design Details',
            path: '/designs/:designId',
          },
        ],
      },
      {
        key: 'design-spaces',
        label: 'Design Spaces',
        path: '/design-spaces',
        children: [
          {
            key: 'design-spaces.list',
            label: 'All Design Spaces',
            path: '/design-spaces',
          },
          {
            key: 'design-spaces.create',
            label: 'Create Design Space',
            path: '/design-spaces/create',
          },
          {
            key: 'design-spaces.detail',
            label: 'Design Space Details',
            path: '/design-spaces/:designSpaceId',
          },
        ],
      },
      {
        key: 'design-params',
        label: 'Design Parameters',
        path: '/design-params',
        children: [
          {
            key: 'design-params.list',
            label: 'All Parameters',
            path: '/design-params',
          },
          {
            key: 'design-params.create',
            label: 'Create Parameter',
            path: '/design-params/create',
          },
          {
            key: 'design-params.detail',
            label: 'Parameter Details',
            path: '/design-params/:designParamId',
          },
          {
            key: 'design-params.default',
            label: 'Default Parameters',
            path: '/design-params/default',
          },
        ],
      },
      {
        key: 'design-results',
        label: 'Design Results',
        path: '/design-results',
        children: [
          {
            key: 'design-results.list',
            label: 'All Results',
            path: '/design-results',
          },
          {
            key: 'design-results.detail',
            label: 'Result Details',
            path: '/design-results/:designResultId',
          },
          {
            key: 'design-results.viewer',
            label: '3D Viewer',
            path: '/design-results/:designResultId/viewer',
          },
        ],
      },
      {
        key: 'design-tasks',
        label: 'Design Tasks',
        path: '/design-tasks',
        children: [
          {
            key: 'design-tasks.list',
            label: 'All Tasks',
            path: '/design-tasks',
          },
          {
            key: 'design-tasks.create',
            label: 'Create Task',
            path: '/design-tasks/create',
          },
          {
            key: 'design-tasks.detail',
            label: 'Task Details',
            path: '/design-tasks/:taskId',
          },
          {
            key: 'design-tasks.pending',
            label: 'Pending Tasks',
            path: '/design-tasks/pending',
          },
          {
            key: 'design-tasks.running',
            label: 'Running Tasks',
            path: '/design-tasks/running',
          },
          {
            key: 'design-tasks.completed',
            label: 'Completed Tasks',
            path: '/design-tasks/completed',
          },
        ],
      },
    ],
  },
  {
    key: 'organizations',
    label: 'Organizations',
    path: '/organizations',
    children: [
      {
        key: 'organizations.list',
        label: 'All Organizations',
        path: '/organizations',
      },
      {
        key: 'organizations.create',
        label: 'Create Organization',
        path: '/organizations/create',
      },
      {
        key: 'organizations.detail',
        label: 'Organization Details',
        path: '/organizations/:organizationId',
      },
    ],
  },
];

