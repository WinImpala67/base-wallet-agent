import { BaseMCPClient } from "./mcp/client.js";
import { listMcpTools } from "./mcp/tools.js";
import { getNetworkInfo } from "./tools/network.js";
import { getAddressInfo } from "./tools/address.js";
import { createBalanceRequest } from "./tools/balance.js";
import { createSendRequest } from "./tools/send.js";
import { createSwapRequest } from "./tools/swap.js";
import { createSignRequest } from "./tools/sign.js";
import { createContractCallRequest } from "./tools/contract.js";
import { createX402PaymentRequest } from "./tools/x402.js";

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
    if (!toolName || typeof toolName !== "string") {
      return {
        success: false,
        error: "Tool name is required"
      };
    }

    return this.mcp.prepareToolCall(toolName, args);
  }

  prepareCommand(command, args = {}) {
    if (!command || typeof command !== "string") {
      return {
        success: false,
        error: "Command is required"
      };
    }

    switch (command) {
      case "balance":
        return this.prepareBalanceCheck();

      case "send":
        return this.prepareSend(
          args.token,
          args.recipient,
          args.amount
        );

      case "swap":
        return this.prepareSwap(
          args.fromToken,
          args.toToken,
          args.amount
        );

      case "sign":
        return this.prepareSign(args.message);

      case "contract":
        return this.prepareContractCall(
          args.contractAddress,
          args.functionName,
          args.args || []
        );

      case "x402":
        return this.prepareX402Payment(
          args.url,
          args.amount
        );

      default:
        return {
          success: false,
          error: "Unknown command"
        };
    }
  }

  prepareBalanceCheck() {
    return createBalanceRequest();
  }

  prepareSend(token, recipient, amount) {
    return createSendRequest(token, recipient, amount);
  }

  prepareSwap(fromToken, toToken, amount) {
    return createSwapRequest(fromToken, toToken, amount);
  }

  prepareSign(message) {
    return createSignRequest(message);
  }

  prepareContractCall(contractAddress, functionName, args = []) {
    return createContractCallRequest(
      contractAddress,
      functionName,
      args
    );
  }

  prepareX402Payment(url, amount) {
    return createX402PaymentRequest(url, amount);
  }
}
