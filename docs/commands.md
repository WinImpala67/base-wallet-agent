# Commands

## balance

Returns wallet balance information.

## address

Returns the connected wallet address.

## network

Returns the current blockchain network.

## MCP

Base MCP connects an AI assistant to Base Account.

MCP server:

https://mcp.base.org

Base MCP can provide wallet and onchain actions such as:

- Check balances
- Send tokens
- Swap supported tokens
- Sign messages
- Execute contract calls
- Pay x402 APIs

Write actions require user approval.

## Project Integration

This project keeps the MCP server configuration in:

src/mcp/config.js

The MCP client wrapper is located in:

src/mcp/client.js

The current implementation stores and validates the MCP server endpoint.

Real MCP tool execution will be added in a later step.

## Future Commands

- send
- swap
- sign
- verify
