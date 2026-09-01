import { config } from "./config.js";
import { getWalletInfo } from "./wallet.js";
import { commands } from "./commands.js";

const agent = {
  name: "Base Wallet Agent",
  network: config.network,
  status: "learning"
};

const wallet = getWalletInfo();

console.log(`${agent.name} is ready.`);
console.log(`Network: ${agent.network}`);
console.log(`Wallet connected: ${wallet.connected}`);
console.log(`Available commands: ${Object.keys(commands).join(", ")}`);
