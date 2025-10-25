export interface JournalEntry {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
}

export interface JournalEntryMetadata {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}
