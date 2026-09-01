import { BaseMCPClient } from "./mcp/client.js";

export class BaseWalletAgent {
  constructor(config) {
    this.config = config;
    this.mcp = new BaseMCPClient(config.mcpServer);
  }

  getStatus() {
    return {
      network: this.config.network,
      testnet: this.config.testnet,
      mcpServer: this.mcp.getEndpoint()
    };
  }
}
