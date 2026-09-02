export function createSignRequest(message) {
  if (!message) {
    return {
      success: false,
      error: "Message is required"
    };
  }

  return {
    success: true,
    tool: "sign_message",
    args: {
      message
    },
    requiresApproval: true
  };
}
