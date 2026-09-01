export const commands = {
  balance: {
    description: "Check the wallet balance"
  },

  address: {
    description: "Show the connected wallet address"
  },

  network: {
    description: "Show the current blockchain network"
  }
};

export function getCommand(name) {
  return commands[name] || null;
}
