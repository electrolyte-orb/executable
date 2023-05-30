import { WarningHexagon } from "iconoir-react";

export default function WelcomePage() {
  return (
    <div>
      <h1 className="text-4xl tracking-tight font-bold text-white">
        Welcome to the new place.
      </h1>
      <h2 className="mt-4 font-medium text-xl text-white">Start Exploring:</h2>
      <div className="rounded border border-neutral-800 mt-4 h-32 w-full grid place-items-center">
        <div className="flex gap-4 flex-col items-center text-lg">
          <WarningHexagon />
          <div>The App is still in development.</div>
        </div>
      </div>
    </div>
  );
}
