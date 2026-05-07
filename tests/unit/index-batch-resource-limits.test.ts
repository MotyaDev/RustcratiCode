// SPDX-License-Identifier: AGPL-3.0-only
// Copyright (C) 2026 Giancarlo Erra - Altaire Limited

import { describe, expect, it } from "vitest";

function parsePositiveIntEnv(name: string, raw: string | undefined, defaultValue: number): number {
  if (raw === undefined) return defaultValue;
  const parsed = Number(raw);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw new Error(`Invalid ${name}: "${raw}". Must be a positive integer.`);
  }
  return parsed;
}

describe("indexing resource limit env validation", () => {
  it("uses defaults when env vars are undefined", () => {
    expect(parsePositiveIntEnv("INDEX_BATCH_SIZE", undefined, 50)).toBe(50);
    expect(parsePositiveIntEnv("INDEX_MAX_CHUNKS_IN_MEMORY", undefined, 1200)).toBe(1200);
  });

  it("accepts positive integers", () => {
    expect(parsePositiveIntEnv("INDEX_BATCH_SIZE", "25", 50)).toBe(25);
    expect(parsePositiveIntEnv("INDEX_MAX_CHUNKS_IN_MEMORY", "2000", 1200)).toBe(2000);
  });

  it("rejects parseInt-style partial numbers", () => {
    expect(() => parsePositiveIntEnv("INDEX_BATCH_SIZE", "20foo", 50)).toThrow(
      "INDEX_BATCH_SIZE",
    );
  });

  it("rejects non-integer values", () => {
    expect(() => parsePositiveIntEnv("INDEX_MAX_CHUNKS_IN_MEMORY", "2.5", 1200)).toThrow(
      "INDEX_MAX_CHUNKS_IN_MEMORY",
    );
  });

  it("rejects zero and negatives", () => {
    expect(() => parsePositiveIntEnv("INDEX_BATCH_SIZE", "0", 50)).toThrow("INDEX_BATCH_SIZE");
    expect(() => parsePositiveIntEnv("INDEX_MAX_CHUNKS_IN_MEMORY", "-10", 1200)).toThrow(
      "INDEX_MAX_CHUNKS_IN_MEMORY",
    );
  });
});
