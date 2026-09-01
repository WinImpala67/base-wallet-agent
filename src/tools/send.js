export function createSendRequest(token, recipient, amount) {
  if (!token || !recipient || !amount) {
    return {
      success: false,
      error: "Token, recipient, and amount are required"
    };
  }

  return {
    success: true,
    tool: "send_token",
    args: {
      token,
      recipient,
      amount
    },
    requiresApproval: true
  };
}
