import { config } from "./config.js";
import { getWalletInfo } from "./wallet.js";
import { commands } from "./commands.js";
import { BaseWalletAgent } from "./agent.js";

const agent = new BaseWalletAgent(config);
const wallet = getWalletInfo();
const status = agent.getStatus(wallet.address);
const balanceRequest = agent.prepareBalanceCheck();

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

console.log(`Available commands: ${Object.keys(commands).join(", ")}`);
