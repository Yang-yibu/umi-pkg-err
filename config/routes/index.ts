import example from './example';
/*importRoutes*/

export default [
  {
    path: '/user',
    layout: false,
  },

  ...example,

  { component: './404', layout: false },
];
