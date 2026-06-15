import { describe, expect, it } from "vitest";

import { normalizeRecords } from "../src/example.js";

describe("normalizeRecords", () => {
  it("normalizes record identifiers, labels, and active flags", () => {
    const records = normalizeRecords([
      { id: " alpha ", label: " First item ", active: false },
      { id: "beta", label: "Second item" },
    ]);

    expect(records).toEqual([
      { id: "alpha", label: "First item", active: false },
      { id: "beta", label: "Second item", active: true },
    ]);
  });

  it("drops records with empty identifiers and supplies a default label", () => {
    const records = normalizeRecords([
      { id: "   ", label: "Ignored" },
      { id: "gamma", label: "   " },
    ]);

    expect(records).toEqual([{ id: "gamma", label: "Untitled", active: true }]);
  });
});
