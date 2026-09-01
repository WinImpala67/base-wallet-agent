export function getWalletInfo(address) {
  if (!address) {
    return {
      connected: false,
      address: null
    };
  }

  return {
    connected: true,
    address
  };
}
