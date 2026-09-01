import { getEnv } from "../env.js";

export const mcpConfig = {
  serverUrl: getEnv("BASE_MCP_SERVER", "https://mcp.base.org")
};
