import type { JournalEntry } from '../../types/entry';

/**
 * Template for creating a new journal entry
 * 
 * Instructions:
 * 1. Copy this file and rename it with the date: YYYY-MM-DD-title.ts (e.g., 2025-10-25-my-first-entry.ts)
 * 2. Fill in the metadata and content
 * 3. Import and add to the entries array in ../entries.ts
 */

export const entry: JournalEntry = {
  // Unique identifier (use date-based format: YYYY-MM-DD-slug)
  id: '2025-01-01-example',
  
  // Entry title
  title: 'Example Entry Title',
  
  // Date in YYYY-MM-DD format
  date: '2025-01-01',
  
  // Short excerpt (1-2 sentences for preview cards)
  excerpt: 'This is a brief summary of the journal entry that will appear in the preview cards.',
  
  // Array of tags for categorization
  tags: ['Tag1', 'Tag2', 'Tag3'],
  
  // Full content (supports markdown-style formatting)
  content: `
# Main Heading

Introduction paragraph goes here.

## Section Heading

Content for this section. You can write multiple paragraphs.

### Subsection

- Bullet point 1
- Bullet point 2
- Bullet point 3

## Another Section

More content here. You can include:
- Code snippets (inline or blocks)
- Lists
- Multiple paragraphs
- And more

## Key Takeaways

What did you learn? What are the main points?

## Next Steps

What's next? What do you want to explore?
  `,
};
