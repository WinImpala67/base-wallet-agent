export class BaseMCPClient {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getEndpoint() {
    return this.endpoint;
  }
}
