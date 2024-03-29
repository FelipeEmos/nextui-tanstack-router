import { RootRoute, Route, Router } from "@tanstack/react-router";
import { BlueTab, GreenTab, IndexTab, YellowTab } from "../screens/tabs";
import { RootScreen } from "../screens/root";

const rootRoute = new RootRoute({
  component: RootScreen,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: IndexTab,
});

const greenRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/green",
  component: GreenTab,
});

const blueRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/blue",
  component: BlueTab,
});

const yellowRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/yellow",
  component: YellowTab,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  greenRoute,
  blueRoute,
  yellowRoute,
]);

export const router = new Router({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
