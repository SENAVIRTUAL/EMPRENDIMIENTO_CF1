export default [
  {
    path: '/',
    name: 'inicio',
    // component: //este componente se agrega automaticamente
  },
  {
    path: '/glosario',
    name: 'glosario',
    // component: //este componente se agrega automaticamente
  },
  {
    path: '/complementario',
    name: 'complementario',
    // component: //este componente se agrega automaticamente
  },
  {
    path: '/referencias',
    name: 'referencias',
    // component: //este componente se agrega automaticamente
  },
  {
    path: '/creditos',
    name: 'creditos',
    // component: //este componente se agrega automaticamente
  },
  {
    path: '/introduccion',
    name: 'introduccion',
    component: () =>
      import(/* webpackChunkName: "intro" */ '../views/Introduccion.vue'),
  },
  {
    path: '/curso',
    name: 'curso',
    // component: //este componente se agrega automaticamente
    redirect: {
      name: 'tema1',
    },
    children: [
      {
        path: 'tema1',
        name: 'tema1',
        component: () =>
          import(/* webpackChunkName: "tema1" */ '../views/Tema1.vue'),
      },
      {
        path: 'tema2',
        name: 'tema2',
        component: () =>
          import(/* webpackChunkName: "tema2" */ '../views/Tema2.vue'),
      },
      {
        path: 'tema3',
        name: 'tema3',
        component: () =>
          import(/* webpackChunkName: "tema3" */ '../views/Tema3.vue'),
      },
    ],
  },
  {
    path: '/actividad',
    name: 'actividad',
    component: () =>
      import(/* webpackChunkName: "actividad" */ '../views/Actividad.vue'),
  },
  {
    path: '/sintesis',
    name: 'sintesis',
    component: () =>
      import(/* webpackChunkName: "sintesis" */ '../views/sintesis.vue'),
  },
]
