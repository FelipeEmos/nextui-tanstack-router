const commonClassNames = " flex h-96 justify-center items-center text-5xl"

export function IndexTab() {
  return <div className={"bg-gray-300" + commonClassNames}>
    Index
  </div>;
}

export function GreenTab() {
  return <div className={"bg-green-300" + commonClassNames}>
    Green
  </div>;
}

export function BlueTab() {
  return <div className={"bg-blue-300" + commonClassNames}>
    Blue
  </div>;
}

export function YellowTab() {
  return <div className={"bg-amber-300" + commonClassNames}>
    Yellow
  </div>;
}
