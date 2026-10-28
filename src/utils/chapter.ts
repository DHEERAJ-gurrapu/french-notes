export function chapterLabels(tags: string[]): string[] {
  const chapters = tags
    .filter((tag) => /^unit-\d+$/.test(tag))
    .sort((a, b) => Number(a.slice(5)) - Number(b.slice(5)))
    .map((chapter) => `Chapter ${chapter.slice(5)} · Unité ${chapter.slice(5)}`);
  return chapters.length ? [...new Set(chapters)] : ['General vocabulary'];
}

export function chapterLabel(tags: string[]): string {
  return chapterLabels(tags)[0];
}
