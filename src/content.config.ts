import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown files in the content/blog directory
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		
		// PERBAIKAN PENTING:
		// Kita izinkan gambar berupa String (dari folder public) atau undefined (kosong)
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog };