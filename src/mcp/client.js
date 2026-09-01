import { mcpConfig } from "./config.js";
import { getMcpTool } from "./tools.js";

export class BaseMCPClient {
  constructor(endpoint = mcpConfig.serverUrl) {
    this.endpoint = endpoint;
  }

  getEndpoint() {
    return this.endpoint;
  }

  isConfigured() {
    return Boolean(this.endpoint);
  }

  getStatus() {
    return {
      configured: this.isConfigured(),
      endpoint: this.endpoint
    };
  }

  hasTool(name) {
    return Boolean(getMcpTool(name));
  }

  prepareToolCall(name, args = {}) {
    const tool = getMcpTool(name);

    if (!tool) {
      return {
        success: false,
        error: "MCP tool not found"
      };
    }

    return {
      success: true,
      tool: tool.name,
      args,
      requiresApproval: true
    };
  }
}
