import { config } from "./config.js";
import { getWalletInfo } from "./wallet.js";
import { commands } from "./commands.js";
import { BaseWalletAgent } from "./agent.js";

const agent = new BaseWalletAgent(config);
const wallet = getWalletInfo();
const status = agent.getStatus();

console.log(`${agent.config.network} Wallet Agent`);
console.log(`Wallet connected: ${wallet.connected}`);
console.log(`Network: ${status.network}`);
console.log(`Testnet: ${status.testnet}`);
console.log(`MCP configured: ${status.mcpConfigured}`);
console.log(`Available commands: ${Object.keys(commands).join(", ")}`);
