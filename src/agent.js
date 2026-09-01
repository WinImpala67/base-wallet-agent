export class BaseWalletAgent {
  constructor(config) {
    this.config = config;
  }

  getStatus() {
    return {
      network: this.config.network,
      testnet: this.config.testnet
    };
  }
}
