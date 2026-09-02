export function createContractCallRequest(
  contractAddress,
  functionName,
  args = []
) {
  if (!contractAddress || !functionName) {
    return {
      success: false,
      error: "Contract address and function name are required"
    };
  }

  return {
    success: true,
    tool: "contract_call",
    args: {
      contractAddress,
      functionName,
      args
    },
    requiresApproval: true
  };
}
