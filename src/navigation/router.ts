import { RootRoute, Route, Router, useRouter } from "@tanstack/react-router";
import { BlueTab, GreenTab, IndexTab, YellowTab } from "../screens/tabs";
import { RootScreen } from "../screens/root";
import { useCallback } from "react";

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

export function useHrefBuilder() {
  const { buildLocation } = useRouter();

  return useCallback(
    (...args: Parameters<(typeof router)["buildLocation"]>) => {
      return buildLocation(...args).href;
    },
    [buildLocation]
  );
}

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
