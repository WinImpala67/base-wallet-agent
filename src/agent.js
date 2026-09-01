import { BaseMCPClient } from "./mcp/client.js";
import { listMcpTools } from "./mcp/tools.js";
import { getNetworkInfo } from "./tools/network.js";
import { getAddressInfo } from "./tools/address.js";
import { createBalanceRequest } from "./tools/balance.js";
import { createSendRequest } from "./tools/send.js";

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
      mcpConfigured: this.mcp.isConfigured(),
      mcpTools: listMcpTools()
    };
  }

  prepareAction(toolName, args = {}) {
    return this.mcp.prepareToolCall(toolName, args);
  }

  prepareBalanceCheck() {
    return createBalanceRequest();
  }

  prepareSend(token, recipient, amount) {
    return createSendRequest(token, recipient, amount);
  }
}
