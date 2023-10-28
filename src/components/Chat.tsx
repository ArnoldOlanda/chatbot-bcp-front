import { BoxChat } from "./BoxChat";

/**
 * Este elemento representa la pantalla principal
 * @returns JSX.Element
 */

export function Chat() {
  const imageURL = "/src/assets/bg3.png";

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div
        className="bg-cover h-full w-full"
        style={{ backgroundImage: `url(${imageURL})` }}
      >
        <BoxChat />
      </div>
    </div>
  );
}
