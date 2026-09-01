export function getBalance() {
  return {
    amount: 0,
    symbol: "ETH",
    network: "Base"
  };
}

export function createBalanceRequest() {
  return {
    tool: "get_balance",
    args: {},
    requiresApproval: false
  };
}
