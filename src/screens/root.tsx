import { Button, Link, Tab, Tabs } from "@nextui-org/react";
import { Outlet, useMatches } from "@tanstack/react-router";
import { useCallback, useMemo, useState } from "react";
import { useHrefBuilder } from "../navigation/router";

function TabsComponent() {
  const hrefBuilder = useHrefBuilder();

  const tabItems = useMemo(
    () =>
      [
        {
          href: hrefBuilder({ to: "/" }),
          title: "Index",
        },
        {
          href: hrefBuilder({ to: "/green" }),
          title: "Green",
        },
        {
          href: hrefBuilder({ to: "/blue" }),
          title: "Blue",
        },
        {
          href: hrefBuilder({ to: "/yellow" }),
          title: "Yellow",
        },
      ] as const,
    [hrefBuilder]
  );

  const matches = useMatches();

  const tabsMatchLevel = 1;
  const selectedKey =
    matches.length > tabsMatchLevel
      ? matches[tabsMatchLevel].pathname
      : undefined;

  return (
    <Tabs variant="underlined" selectedKey={selectedKey} size="lg">
      {tabItems.map(({ href, title }) => (
        <Tab key={href} title={title} href={href} as={Link} />
      ))}
    </Tabs>
  );
}

export function RootScreen() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div>
        <div className="flex flex-wrap justify-between items-center flex-row">
          <h1 className="text-4xl font-bold py-4">NextUI + Tanstack Router</h1>
          <RandomNumberRerenderChecker />
        </div>
        <TabsComponent />
      </div>

      <Outlet />
    </div>
  );
}

function RandomNumberRerenderChecker() {
  const [randomNumber, setRandomNumber] = useState(Math.random());
  const randomize = useCallback(() => setRandomNumber(Math.random()), []);

  return (
    <div className="p-4 bg-slate-300 w-64 rounded-lg flex flex-col gap-4">
      <p className="text-xl font-bold">Rerender Checker</p>
      <p className="text-medium font-medium">
        Random Number:{" "}
        <span className="text-red-800 font-bold">
          {randomNumber.toString().slice(0, 5)}
        </span>
      </p>
      <Button color="primary" onPress={randomize}>
        Randomize!
      </Button>
      <p className="italic">
        If the Page is being reloaded, then this number will change
      </p>
    </div>
  );
}
