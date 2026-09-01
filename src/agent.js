import { BaseMCPClient } from "./mcp/client.js";
import { getNetworkInfo } from "./tools/network.js";

export class BaseWalletAgent {
  constructor(config) {
    this.config = config;
    this.mcp = new BaseMCPClient(config.mcpServer);
  }

  getStatus() {
    const network = getNetworkInfo();

    return {
      network: network.name,
      testnet: network.testnet,
      chainId: network.chainId,
      mcpServer: this.mcp.getEndpoint(),
      mcpConfigured: this.mcp.isConfigured()
    };
  }
}
