// Base structure
const base = {
  _createdAt: "",
  _id: "",
  _rev: "",
  _type: "",
  _updatedAt: "",
};

// Post structure
const Post = {
  ...base,
  author: {}, // Author structure
  body: [], // Array of Block structures
  categories: [], // Array of Category structures
  mainImage: {}, // Image structure
  slug: {}, // Slug structure
  title: "",
  description: "",
};

// Author structure
const author = {
  ...base,
  description: "",
  image: {}, // Image structure
  name: "",
  slug: {}, // Slug structure
};

// Image structure
const image = {
  _type: "image",
  asset: {}, // Reference structure
};

// Reference structure
const reference = {
  _type: "slug",
  current: "",
};

// Slug structure
const slug = {
  _type: "slug",
  current: "",
};

// Block structure
const block = {
  _key: "",
  _type: "block",
  children: [], // Array of Span structures
  markDefs: [],
  style: "normal", // Can be "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote"
};

// Span structure
const span = {
  _key: "",
  _type: "span",
  marks: [],
  text: "",
};

// Category structure
const category = {
  ...base,
  description: "",
  title: "",
};
