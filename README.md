# Subgraph for Reward Smart Contract

This project is a subgraph that indexes the `Reward` smart contract on the Ethereum blockchain (or other supported chains). It tracks key events and actions, such as users earning points, redeeming points, and the contract’s token price updates. By using this subgraph, you can query historical events, monitor contract activity, and integrate it with your front-end application for real-time updates.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Deployment](#deployment)
- [Querying](#querying)
- [Testing](#testing)
- [License](#license)

## Introduction

This subgraph listens to the `Reward` smart contract deployed on a blockchain (Ethereum, for example) and provides an efficient way to index key events. The subgraph tracks events like `Rewarded`, `Redeemed`, and `TokenPriceUpdated`, which can be used to build powerful front-end applications.

This subgraph uses The Graph's hosted service to create a fully decentralized query interface that can be easily integrated with any dApp or platform to retrieve blockchain data.

## Features

- **Tracking User Rewards**: Monitor when a user earns points.
- **Tracking Point Redemptions**: Track when users redeem points for tokens.
- **Token Price Updates**: Index updates to the token price by the contract owner.
- **Efficient Querying**: Use GraphQL to query the blockchain data quickly and efficiently.

## Getting Started

To get started with the subgraph, follow the instructions below.

### Prerequisites

Ensure you have the following software installed:

- [Node.js](https://nodejs.org/) (v12.0.0 or higher)
- [Yarn](https://yarnpkg.com/) or [npm](https://npmjs.com)
- [The Graph CLI](https://thegraph.com/docs/introduction) - Command-line interface for deploying subgraphs
- [Graph Node](https://thegraph.com/docs/graph-node) (for local testing)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ogbuanu/mobi-interview-subgraph.git
   cd mobi-interview-subgraph
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Install The Graph CLI globally if you don't have it already:

   ```bash
   npm install -g @graphprotocol/graph-cli
   ```

### Configuration

You’ll need to configure the `subgraph.yaml` file to point to your deployed contract and specify which events you want to track.

1. Open the `subgraph.yaml` file in the root of your project.
2. Modify the following parameters:
   - **network**: The blockchain network where your contract is deployed (e.g., `mainnet`, `ropsten`).
   - **contractAddress**: The address of your deployed `Reward` contract.
   - **startBlock**: The block number from which to start indexing (can be 0 if it's a fresh subgraph).

Example:

```yaml
specVersion: 0.0.2
subgraph:
  name: reward-contract
  description: Subgraph for Reward Smart Contract

dataSources:
  - kind: ethereum/contract
    name: Reward
    network: mainnet
    source:
      address: "0xYourContractAddressHere"
      abi: Reward
      startBlock: 12345678
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.5
      language: wasm/assemblyscript
      entities:
        - Rewarded
        - Redeemed
        - TokenPriceUpdated
```
