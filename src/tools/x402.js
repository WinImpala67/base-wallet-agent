export function createX402PaymentRequest(url, amount) {
  if (!url || !amount) {
    return {
      success: false,
      error: "URL and amount are required"
    };
  }

  return {
    success: true,
    tool: "pay_x402",
    args: {
      url,
      amount
    },
    requiresApproval: true
  };
}
