import { getEnv } from "../env.js";

const defaultServerUrl = "https://mcp.base.org";

export const mcpConfig = {
  serverUrl: getEnv("BASE_MCP_SERVER", defaultServerUrl)
};

export function isMcpConfigured() {
  return Boolean(mcpConfig.serverUrl);
}
