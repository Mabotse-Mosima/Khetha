const SIMULATED_LATENCY_MS = 400;

export function simulateNetwork<T>(data: T, delayMs: number = SIMULATED_LATENCY_MS): Promise<T> {
  return new Promise((resolve) => setTimeout(() => resolve(data), delayMs));
}
