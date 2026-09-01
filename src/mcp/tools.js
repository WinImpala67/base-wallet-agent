export const mcpTools = {
  getBalance: {
    name: "get_balance",
    description: "Get wallet balance"
  },

  sendToken: {
    name: "send_token",
    description: "Send a token with user approval"
  },

  swapToken: {
    name: "swap_token",
    description: "Swap supported tokens with user approval"
  },

  signMessage: {
    name: "sign_message",
    description: "Sign a message with user approval"
  },

  contractCall: {
    name: "contract_call",
    description: "Execute a contract call with user approval"
  }
};

export function getMcpTool(name) {
  return Object.values(mcpTools).find(
    (tool) => tool.name === name
  ) || null;
}

export function listMcpTools() {
  return Object.values(mcpTools);
}
