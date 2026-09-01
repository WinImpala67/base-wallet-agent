import { BaseMCPClient } from "./mcp/client.js";
import { getNetworkInfo } from "./tools/network.js";
import { getAddressInfo } from "./tools/address.js";

export class BaseWalletAgent {
  constructor(config) {
    this.config = config;
    this.mcp = new BaseMCPClient(config.mcpServer);
  }

  getStatus(address = null) {
    const network = getNetworkInfo();
    const wallet = getAddressInfo(address);

    return {
      network: network.name,
      testnet: network.testnet,
      chainId: network.chainId,
      wallet: wallet,
      mcpServer: this.mcp.getEndpoint(),
      mcpConfigured: this.mcp.isConfigured()
    };
  }
}
