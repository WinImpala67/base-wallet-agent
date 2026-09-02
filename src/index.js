import { config } from "./config.js";
import { getWalletInfo } from "./wallet.js";
import { commands } from "./commands.js";
import { BaseWalletAgent } from "./agent.js";

const agent = new BaseWalletAgent(config);
const wallet = getWalletInfo();
const status = agent.getStatus(wallet.address);

const balanceRequest = agent.prepareBalanceCheck();

const sendRequest = agent.prepareSend(
  "ETH",
  "0x0000000000000000000000000000000000000000",
  "0.001"
);

const swapRequest = agent.prepareSwap("ETH", "USDC", "0.01");
const signRequest = agent.prepareSign("Base Wallet Agent");

const contractRequest = agent.prepareContractCall(
  "0x0000000000000000000000000000000000000000",
  "exampleFunction",
  []
);

const x402Request = agent.prepareX402Payment(
  "https://example.com/api",
  "0.001"
);

console.log(`${agent.config.network} Wallet Agent`);
console.log(`Wallet connected: ${wallet.connected}`);
console.log(`Network: ${status.network}`);
console.log(`Testnet: ${status.testnet}`);
console.log(`Chain ID: ${status.chainId}`);
console.log(`MCP configured: ${status.mcpConfigured}`);

console.log("MCP tools:");

for (const tool of status.mcpTools) {
  console.log(`- ${tool.name}: ${tool.description}`);
}

console.log("Balance request:");
console.log(`Tool: ${balanceRequest.tool}`);
console.log(`Requires approval: ${balanceRequest.requiresApproval}`);

console.log("Send request:");

if (sendRequest.success) {
  console.log(`Tool: ${sendRequest.tool}`);
  console.log(`Token: ${sendRequest.args.token}`);
  console.log(`Recipient: ${sendRequest.args.recipient}`);
  console.log(`Amount: ${sendRequest.args.amount}`);
  console.log(`Requires approval: ${sendRequest.requiresApproval}`);
} else {
  console.log(`Error: ${sendRequest.error}`);
}

console.log("Swap request:");

if (swapRequest.success) {
  console.log(`Tool: ${swapRequest.tool}`);
  console.log(`From token: ${swapRequest.args.fromToken}`);
  console.log(`To token: ${swapRequest.args.toToken}`);
  console.log(`Amount: ${swapRequest.args.amount}`);
  console.log(`Requires approval: ${swapRequest.requiresApproval}`);
} else {
  console.log(`Error: ${swapRequest.error}`);
}

console.log("Sign request:");

if (signRequest.success) {
  console.log(`Tool: ${signRequest.tool}`);
  console.log(`Message: ${signRequest.args.message}`);
  console.log(`Requires approval: ${signRequest.requiresApproval}`);
} else {
  console.log(`Error: ${signRequest.error}`);
}

console.log("Contract call request:");
console.log(`Tool: ${contractRequest.tool}`);
console.log(`Requires approval: ${contractRequest.requiresApproval}`);

console.log("x402 payment request:");

if (x402Request.success) {
  console.log(`Tool: ${x402Request.tool}`);
  console.log(`URL: ${x402Request.args.url}`);
  console.log(`Amount: ${x402Request.args.amount}`);
  console.log(`Requires approval: ${x402Request.requiresApproval}`);
} else {
  console.log(`Error: ${x402Request.error}`);
}

console.log(`Available commands: ${Object.keys(commands).join(", ")}`);
