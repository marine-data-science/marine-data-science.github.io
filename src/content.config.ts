import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const detailPageSchema = z.union([z.boolean(), z.string().url()]);
const homeSectionSchema = z.object({
  collection: z.enum(["research", "projects", "people", "theses", "teaching"]),
  limit: z.union([z.number().int().positive(), z.literal("all")]).optional(),
});

const baseSchema = z.object({
  title: z.string(),
  eyebrow: z.string().optional(),
  sourceUrl: z.string().url().optional(),
  lastModified: z.string().optional(),
  summary: z.string().optional().default(""),
  image: z.string().optional(),
  imageAlt: z.string().optional().default(""),
  order: z.number().optional().default(999),
  featured: z.boolean().optional().default(false),
});

const itemGlob = (base: string) =>
  glob({
    base,
    pattern: ["*.mdx", "!index.mdx"],
  });

const indexGlob = glob({
  base: "./content",
  pattern: ["*/index.mdx", "pages/*.mdx"],
});

const pages = defineCollection({
  loader: indexGlob,
  schema: baseSchema.extend({
    sections: z.array(homeSectionSchema).optional().default([]),
  }),
});

const people = defineCollection({
  loader: itemGlob("./content/people"),
  schema: baseSchema.extend({
    detailPage: detailPageSchema.optional().default(true),
    role: z.string(),
    room: z.string().optional(),
    address: z.string().optional(),
    email: z.string().email().optional(),
    group: z.string().optional(),
    alumni: z.boolean().optional().default(false),
  }),
});

const research = defineCollection({
  loader: itemGlob("./content/research"),
  schema: baseSchema.extend({
    detailPage: detailPageSchema.optional().default(true),
    tags: z.array(z.string()).optional().default([]),
    contact: z.string().optional(),
    related: z.array(z.string()).optional().default([]),
  }),
});

const projects = defineCollection({
  loader: itemGlob("./content/projects"),
  schema: baseSchema.extend({
    detailPage: detailPageSchema.optional().default(true),
    tags: z.array(z.string()).optional().default([]),
    funding: z.string().optional(),
    duration: z.string().optional(),
    partners: z.array(z.string()).optional().default([]),
    contact: z.string().optional(),
  }),
});

const teaching = defineCollection({
  loader: itemGlob("./content/teaching"),
  schema: baseSchema.extend({
    detailPage: detailPageSchema.optional().default(true),
    kind: z.string(),
    semester: z.string().optional(),
    dateRange: z.string().optional(),
    externalUrl: z.string().url().optional(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

const theses = defineCollection({
  loader: itemGlob("./content/theses"),
  schema: baseSchema.extend({
    detailPage: detailPageSchema.optional().default(true),
    status: z.enum(["Open", "Ongoing", "Finished"]),
    degree: z.string().optional(),
    supervisors: z.array(z.string()).optional().default([]),
    skills: z.array(z.string()).optional().default([]),
    contact: z.string().optional(),
  }),
});

export const collections = {
  pages,
  people,
  research,
  projects,
  teaching,
  theses,
};
