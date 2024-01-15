import { Tab, Tabs } from "@nextui-org/react";
import { Outlet } from "@tanstack/react-router";

function Header() {
  return <div>
    <h1 className="text-2xl font-bold py-4">NextUI + Tanstack Router</h1>
    <Tabs variant="underlined">
      <Tab title="Index" href="/" />
      <Tab title="Green" href="/green" />
      <Tab title="Blue" href="/blue" />
      <Tab title="Yellow" href="/yellow" />
    </Tabs>
  </div>
}

export function RootScreen() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <Header />
      <Outlet />
    </div>
  );
}
