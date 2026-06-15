export type InputRecord = {
  id: string;
  label?: string;
  active?: boolean;
};

export type NormalizedRecord = {
  id: string;
  label: string;
  active: boolean;
};

export function normalizeRecords(records: readonly InputRecord[]): NormalizedRecord[] {
  return records
    .map((record) => ({
      id: record.id.trim(),
      label: normalizeLabel(record.label),
      active: record.active ?? true,
    }))
    .filter((record) => record.id.length > 0);
}

function normalizeLabel(label: string | undefined): string {
  const trimmed = label?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : "Untitled";
}
