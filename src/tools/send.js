export function createSendRequest(token, recipient, amount) {
  return {
    tool: "send_token",
    args: {
      token,
      recipient,
      amount
    },
    requiresApproval: true
  };
}
