# Sample Hardhat Project

This project demonstrates an hardhat project that uses a mainnet forking setup.

## Installation

```bash
npm install
```

## Configuration

Create an env file

```bash
touch .env
```

Add the following to the .env file

```bash

MAINET_ALCHEMY_API_KEY_URL=https://eth-mainnet.alchemyapi.io/v2/<your-alchemy-api-key>
```

## Usage

```bash
npx hardhat run scripts/sendUsdc.ts
```
