export function getAddressInfo(address) {
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
