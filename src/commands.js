export const commands = {
  balance: {
    description: "Check the wallet balance"
  },

  address: {
    description: "Show the connected wallet address"
  },

  network: {
    description: "Show the current blockchain network"
  },

  send: {
    description: "Prepare a token transfer with user approval"
  },

  swap: {
    description: "Prepare a token swap with user approval"
  },

  sign: {
    description: "Prepare a message signature with user approval"
  },

  contract: {
    description: "Prepare a contract call with user approval"
  },

  x402: {
    description: "Prepare an x402 payment with user approval"
  }
};

export function getCommand(name) {
  return commands[name] || null;
}
