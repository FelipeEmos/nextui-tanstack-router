# NextUI + Tanstack Router

This repo is an experiment of using [NextUI](https://nextui.org/) and [Tansktack Router](https://tanstack.com/router/v1) together.

# Video Showcase

- Observe how it doesn't cause unnecessary rerenders

https://github.com/FelipeEmos/nextui-tanstack-router/assets/10969700/929286f4-dcb3-408e-9e73-806f06956aca

# Typesafety

The best way to integrate these two would be to have the NextUI components accept the router objects with the amazing typesafety that comes with the Tanstack Router lib.

Unfortunatly that's super hard to achieve, it's much better to enforce the typesafety manually from the use of a hook `useHref` that takes a typesafe object (that's aware of your router tree!) and make it build the `href`s you're gonna pass into the NextUI compoonents.

The other piece of the puzzle is just to configure the `NextUIProvider` to use your amazing router. Take a look at the `main.tsx` file for that.

# How to run

```console
pnpm install
pnpm dev
```



