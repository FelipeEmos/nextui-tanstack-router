import { useCallback } from "react";
import type {
  AnyRoute,
  ParsedLocation,
  RoutePaths,
  ToOptions,
} from "@tanstack/react-router";
import { useRouter } from "@tanstack/react-router";

import type { router } from "./router";

// NOTE: This is a workaround for a typesafety bug.
// I opened the following PR and we should keep this hack
// while we wait for it to be merged
//
// @link https://github.com/TanStack/router/pull/1063
type BuildLocationFn<TRouteTree extends AnyRoute> = <
  TFrom extends RoutePaths<TRouteTree> | string = string,
  TTo extends string = "",
  TMaskFrom extends RoutePaths<TRouteTree> | string = TFrom,
  TMaskTo extends string = "",
>(
  opts: ToOptions<TRouteTree, TFrom, TTo, TMaskFrom, TMaskTo> & {
    leaveParams?: boolean;
  },
) => ParsedLocation;

type HrefBuilderFn<TRouteTree extends AnyRoute> = <
  TFrom extends RoutePaths<TRouteTree> | string = string,
  TTo extends string = "",
  TMaskFrom extends RoutePaths<TRouteTree> | string = TFrom,
  TMaskTo extends string = "",
>(
  opts: ToOptions<TRouteTree, TFrom, TTo, TMaskFrom, TMaskTo> & {
    leaveParams?: boolean;
  },
) => string;

type ThisRouteTree = typeof router.routeTree;

export function useHrefBuilder() {
  const buildLocation = useRouter()
    .buildLocation as BuildLocationFn<ThisRouteTree>;

  const hrefBuilder: HrefBuilderFn<ThisRouteTree> = useCallback(
    (...args: Parameters<BuildLocationFn<ThisRouteTree>>) =>
      buildLocation(...args).href,
    [buildLocation],
  );

  return hrefBuilder;
}
