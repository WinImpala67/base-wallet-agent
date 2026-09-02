export function createSwapRequest(fromToken, toToken, amount) {
  if (!fromToken || !toToken || !amount) {
    return {
      success: false,
      error: "From token, to token, and amount are required"
    };
  }

  return {
    success: true,
    tool: "swap_token",
    args: {
      fromToken,
      toToken,
      amount
    },
    requiresApproval: true
  };
}
