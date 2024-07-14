import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const HomePage = lazy(() => import ('./pages/Home'));
const ListPage = lazy(() => import ('./pages/List'));
const Error404Page = lazy(() => import('./error-pages/Error404'));
// const Error500 = lazy(() => import('./error-pages/Error500'));


function AppRoutes() {
  const routeConfig = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/list',
        element: <ListPage />,
        // children: [
        //     { path: '/list/child1', element: <Child1 /> },
        //     { path: '/list/child2/:id', element: <Child2 /> },
        // ],
    },
    {
      path: '*',
      element: <Error404Page />,
    }
  ];

  return (<>{ useRoutes(routeConfig) }</>);

}

export default AppRoutes;
