export function formatSummary(summary) {
  const lines = [
    `Quán: ${summary?.restaurant ?? '-'}`,
    `Giờ: ${summary?.time ?? '-'}`,
  ];

  return lines.join('\n');
}
