'use client';

import { useEffect } from 'react';

type RAFCallback = (time: number, deltaTime: number) => void;

class RAFCoordinator {
  private callbacks = new Set<RAFCallback>();
  private rafId: number | null = null;
  private lastTime = 0;
  private running = false;

  subscribe(callback: RAFCallback) {
    this.callbacks.add(callback);
    if (!this.running) this.start();

    return () => {
      this.callbacks.delete(callback);
      if (this.callbacks.size === 0) this.stop();
    };
  }

  private start() {
    this.running = true;
    this.lastTime = performance.now();
    this.tick(this.lastTime);
  }

  private stop() {
    this.running = false;
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  private tick = (time: number) => {
    const deltaTime = time - this.lastTime;
    this.lastTime = time;

    this.callbacks.forEach((callback) => {
      try {
        callback(time, deltaTime);
      } catch (error) {
        console.error('RAF callback error:', error);
      }
    });

    if (this.running) {
      this.rafId = requestAnimationFrame(this.tick);
    }
  };
}

// Global singleton instance
const coordinator = new RAFCoordinator();

/**
 * Hook to subscribe to the global RAF coordinator.
 * This consolidates all RAF loops into a single loop for better performance.
 *
 * @param callback - Function called on each animation frame with time and deltaTime
 * @param deps - Dependency array (like useEffect)
 */
export function useRAFCoordinator(callback: RAFCallback, deps: any[] = []) {
  useEffect(() => {
    return coordinator.subscribe(callback);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
