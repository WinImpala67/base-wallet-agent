import { mcpConfig } from "./config.js";

export class BaseMCPClient {
  constructor(endpoint = mcpConfig.serverUrl) {
    this.endpoint = endpoint;
  }

  getEndpoint() {
    return this.endpoint;
  }

  getStatus() {
    return {
      connected: false,
      endpoint: this.endpoint
    };
  }
}
