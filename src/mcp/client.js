import { mcpConfig } from "./config.js";

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
}
