import type { JournalEntry, JournalEntryMetadata } from '../types/entry';

// This will store all journal entries
// Each entry should be added to this array
const entries: JournalEntry[] = [];

/**
 * Get all journal entries sorted by date (most recent first)
 */
export function getAllEntries(): JournalEntryMetadata[] {
  return entries
    .map(({ id, title, date, excerpt, tags }) => ({
      id,
      title,
      date,
      excerpt,
      tags,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get a specific journal entry by ID
 */
export function getEntryById(id: string): JournalEntry | undefined {
  return entries.find((entry) => entry.id === id);
}

/**
 * Get recent entries (default: 4 most recent)
 */
export function getRecentEntries(count: number = 4): JournalEntryMetadata[] {
  return getAllEntries().slice(0, count);
}

/**
 * Search entries by title, content, or tags
 */
export function searchEntries(query: string): JournalEntryMetadata[] {
  const lowerQuery = query.toLowerCase();
  return entries
    .filter(
      (entry) =>
        entry.title.toLowerCase().includes(lowerQuery) ||
        entry.content.toLowerCase().includes(lowerQuery) ||
        entry.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    )
    .map(({ id, title, date, excerpt, tags }) => ({
      id,
      title,
      date,
      excerpt,
      tags,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default entries;
