import { ConnectKitButton } from "connectkit";

export const ExampleButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, hide, address, ensName }) => {
        return (
          <button
            className="px-6 py-2 border rounded-2xl text-sm
          font-semibold bg-black dark:bg-white dark:text-black text-white whitespace-nowrap"
            onClick={show}
          >
            {isConnected
              ? address?.slice(1, 5) + "..." + address?.slice(-3)
              : "Connect"}
          </button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};

export const ConnectButtonwagmi = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, hide, address, ensName }) => {
        return (
          <button
            className="bg-gradient-to-r from-purple-400 to-pink-600 hover:to-purple-500 text-white font-bold py-2 px-10 rounded-2xl tracking-[1px]"
            onClick={show}
          >
            Connect
          </button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};
