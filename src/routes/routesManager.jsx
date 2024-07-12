import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMemo } from 'react';
import { RoutesPath } from './routespath';
import ResponsiveAppBar from '../componentes/navbar'
export const RouterManager = () => {
  const routes = useMemo(
    () =>
      Object.keys(RoutesPath).map((path) => {
        const RouteComponent = RoutesPath[path];
        return (
          <Route
            key={path}
            path={path}
            element={<RouteComponent />}
          />
        );
      }),
    []
  );
  return (
    <BrowserRouter>
    <ResponsiveAppBar />
      <Routes>{routes}</Routes>
    </BrowserRouter>
  );
};