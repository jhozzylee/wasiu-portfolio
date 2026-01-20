import { defineType, defineField } from "sanity";

export default defineType({
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "problem",
      title: "Problem",
      type: "text",
    }),

    defineField({
      name: "solution",
      title: "Solution",
      type: "text",
    }),

    defineField({
      name: "outcomes",
      title: "Outcomes",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "quote",
      title: "Pull Quote",
      type: "string",
    }),

    // 🔹 THUMBNAIL (GRID)
    defineField({
      name: "thumbnail",
      title: "Thumbnail Image",
      type: "image",
      options: { hotspot: true },
    }),

    // 🔹 MAIN IMAGE (FEATURED / MODAL)
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
    }),

    defineField({
      name: "related",
      title: "Related Projects",
      type: "array",
      of: [{ type: "reference", to: [{ type: "portfolio" }] }],
    }),
  ],
});
