import { client } from "./sanity";

export async function getProjects() {
  return await client.fetch(`
    *[_type == "project"] | order(publishedAt desc) {
      _id,
      title,
      shortDescription,
      description,
      problem,
      solution,
      outcomes,
      pullQuote,
      mainImage,
      thumbnail,
      relatedProjects[]->{
        _id,
        title,
        thumbnail
      }
    }
  `);
}
