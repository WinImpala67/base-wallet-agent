# Base Wallet Agent

An AI agent project built around the Base blockchain.

Base Wallet Agent is a learning project focused on building a safe, modular AI agent that can work with wallet information, Base MCP tools, and blockchain actions.

The project is being developed step by step with an emphasis on **user approval before sensitive wallet actions**.

## Features

### Wallet information

* Connected wallet status
* Wallet address
* Current network
* Chain ID
* Testnet detection

### MCP integration

The project includes a lightweight MCP client and a registry of available MCP tools.

Current MCP tools:

* `get_balance` — Get wallet balance
* `send_token` — Prepare a token transfer
* `swap_token` — Prepare a token swap
* `sign_message` — Prepare a message signature
* `contract_call` — Prepare a contract call
* `pay_x402` — Prepare an x402 payment

### Wallet actions

The agent can prepare the following actions:

* Balance check
* Token transfer
* Token swap
* Message signing
* Contract call
* x402 payment

Sensitive actions are prepared rather than silently executed.

## User Approval

Security is a core part of the project.

Actions that can move assets, sign messages, interact with contracts, or make payments require explicit user approval.

Examples include:

* Sending tokens
* Swapping tokens
* Signing messages
* Contract calls
* x402 payments

The agent prepares the requested action and marks it with:

```text
requiresApproval: true
```

The goal is to keep the user in control of sensitive blockchain operations.

## Project Structure

```text
src/
├── agent.js
├── commands.js
├── config.js
├── env.js
├── index.js
├── wallet.js
│
├── mcp/
│   ├── client.js
│   └── tools.js
│
└── tools/
    ├── address.js
    ├── balance.js
    ├── contract.js
    ├── network.js
    ├── send.js
    ├── sign.js
    ├── swap.js
    └── x402.js
```

## Commands

The project defines the following agent commands:

| Command    | Description                                    |
| ---------- | ---------------------------------------------- |
| `balance`  | Check the wallet balance                       |
| `address`  | Show the connected wallet address              |
| `network`  | Show the current blockchain network            |
| `send`     | Prepare a token transfer with user approval    |
| `swap`     | Prepare a token swap with user approval        |
| `sign`     | Prepare a message signature with user approval |
| `contract` | Prepare a contract call with user approval     |
| `x402`     | Prepare an x402 payment with user approval     |

## Architecture

The project separates the main responsibilities into several layers:

**Agent**

`BaseWalletAgent` provides the main interface for wallet information and action preparation.

**MCP**

`BaseMCPClient` handles MCP configuration, tool lookup, and preparation of MCP tool calls.

**Tools**

Individual helpers prepare specific wallet actions such as transfers, swaps, signatures, contract calls, and x402 payments.

**Commands**

`commands.js` provides the command definitions available to the agent.

## Current Status

🚧 **Work in progress**

The project is currently focused on the architecture and safe preparation of wallet actions.

The next development stages will focus on:

* Command routing
* User approval flow
* MCP tool execution
* Real Base blockchain interaction
* Error handling
* Testing
* Production safety

## Learning Goals

This project is being built to learn:

* Base blockchain development
* AI agent architecture
* MCP integration
* Wallet interaction
* Transaction preparation
* User-confirmed blockchain actions
* x402 payments
* Safe agent design

## Disclaimer

This is a learning project and should not be considered production-ready wallet software.

Always verify transaction details and contract interactions before approving blockchain actions.
