import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const MAINET_ALCHEMY_API_KEY_URL = process.env.MAINET_ALCHEMY_API_KEY_URL;

if (!MAINET_ALCHEMY_API_KEY_URL) {
  console.log("Please include MAINET_ALCHEMY_API_KEY_URL");
  process.exit(1);
}

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    hardhat: {
      forking: {
        //@ts-ignore
        url: MAINET_ALCHEMY_API_KEY_URL,
        blockNumber: 19257831,
      },
    },
  },
};

export default config;
