import Vue from 'vue';
import Router from 'vue-router';

import P1 from '@/components/P1';
import P2 from '@/components/P2';
import P3 from '@/components/P3';
import P4 from '@/components/P4';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: P1,
    },
    {
      path: '/p2',
      component: P2,
    },
    {
      path: '/p3',
      component: P3,
    },
    {
      path: '/p4',
      component: P4,
    },
  ],
});

