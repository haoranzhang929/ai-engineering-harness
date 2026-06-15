import { normalizeRecords } from "./example.js";

const records = normalizeRecords([
  { id: " alpha ", label: " First item " },
  { id: " ", label: "Ignored" },
  { id: "beta", active: false },
]);

console.log(JSON.stringify(records, null, 2));
