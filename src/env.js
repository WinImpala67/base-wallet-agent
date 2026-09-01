export function getEnv(name, fallback = null) {
  return process.env[name] || fallback;
}
