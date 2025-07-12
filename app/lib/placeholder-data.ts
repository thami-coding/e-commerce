export const products = [
  {
    id: "p001",
    name: "Classic White T-Shirt",
    slug: "classic-white-tshirt",
    description:
      "A timeless white t-shirt made from 100% organic cotton. Comfortable, breathable, and perfect for everyday wear.",
    price: 109.0,
    images: [
      {
        alt: "Front view of Classic White T-Shirt",
        smallImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
        mediumImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
        largeImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
      },
      {
        alt: "Back view of Classic White T-Shirt",
        smallImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
        mediumImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
        largeImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
      },
    ],
    variants: [
      { id: "variant_xs", name: "X", stock: 15 },
      { id: "variant_s", name: "S", stock: 25 },
      { id: "variant_m", name: "M", stock: 40 },
      { id: "variant_l", name: "L", stock: 30 },
      { id: "variant_xl", name: "XL", stock: 20 },
    ],
    department: { name: "Men", slug: "men" },
    category: { id: "cat_tshirts", name: "T-Shirts", slug: "t-shirts" },
    tags: ["clothing", "t-shirt", "white", "unisex", "organic"],
    created_at: "2025-07-09T15:00:00Z",
    updated_at: "2025-07-09T15:00:00Z",
  },

  {
    id: "p002",
    name: "Slim Fit Denim Jeans",
    slug: "slim-fit-denim-jeans",
    description:
      "Stylish and durable denim jeans with a modern slim fit. Perfect for casual outings.",
    price: 399.99,
    images: [
      {
        alt: "Front view of Slim Fit Denim Jeans",
        smallImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
        mediumImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
        largeImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
      },
    ],
    variants: [
      { id: "variant_xs", name: "X", stock: 10 },
      { id: "variant_s", name: "S", stock: 18 },
      { id: "variant_m", name: "M", stock: 24 },
      { id: "variant_l", name: "L", stock: 19 },
      { id: "variant_xl", name: "XL", stock: 8 },
    ],
    department: { name: "Men", slug: "men" },
    category: { id: "cat_jeans", name: "Jeans", slug: "jeans" },
    tags: ["denim", "pants", "casual", "blue"],
    created_at: "2025-07-09T15:00:00Z",
    updated_at: "2025-07-09T15:00:00Z",
  },

  {
    id: "p003",
    name: "Women's Linen Summer Dress",
    slug: "linen-summer-dress",
    description:
      "Breezy and beautiful, this linen dress is perfect for sunny days and beach walks.",
    price: 549.0,
    images: [
      {
        alt: "Front view of Linen Summer Dress",
        smallImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
        mediumImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
        largeImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
      },
    ],
    variants: [
      { id: "variant_xs", name: "X", stock: 8 },
      { id: "variant_s", name: "S", stock: 15 },
      { id: "variant_m", name: "M", stock: 20 },
      { id: "variant_l", name: "L", stock: 11 },
      { id: "variant_xl", name: "XL", stock: 4 },
    ],
    department: { name: "Women", slug: "women" },
    category: { id: "cat_dresses", name: "Dresses", slug: "dresses" },
    tags: ["linen", "summer", "dress", "lightweight"],
    created_at: "2025-07-09T15:00:00Z",
    updated_at: "2025-07-09T15:00:00Z",
  },

  {
    id: "p004",
    name: "Unisex Oversized Hoodie",
    slug: "oversized-hoodie",
    description:
      "Warm, oversized hoodie with kangaroo pocket. Made for comfort and style.",
    price: 299.99,
    images: [
      {
        alt: "Oversized Hoodie",
        smallImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
        mediumImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
        largeImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
      },
    ],
    variants: [
      { id: "variant_xs", name: "X", stock: 22 },
      { id: "variant_s", name: "S", stock: 31 },
      { id: "variant_m", name: "M", stock: 17 },
      { id: "variant_l", name: "L", stock: 13 },
      { id: "variant_xl", name: "XL", stock: 6 },
    ],
    department: { name: "Unisex", slug: "unisex" },
    category: { id: "cat_hoodies", name: "Hoodies", slug: "hoodies" },
    tags: ["hoodie", "oversized", "casual", "cotton"],
    created_at: "2025-07-09T15:00:00Z",
    updated_at: "2025-07-09T15:00:00Z",
  },

  {
    id: "p005",
    name: "Kids Graphic T-Shirt",
    slug: "kids-graphic-tshirt",
    description:
      "Fun and colorful t-shirt for kids featuring playful graphic prints.",
    price: 149.0,
    images: [
      {
        alt: "Front view of Kids Graphic T-Shirt",
        smallImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
        mediumImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
        largeImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
      },
    ],
    variants: [
      { id: "variant_xs", name: "X", stock: 14 },
      { id: "variant_s", name: "S", stock: 16 },
      { id: "variant_m", name: "M", stock: 14 },
      { id: "variant_l", name: "L", stock: 9 },
      { id: "variant_xl", name: "XL", stock: 3 },
    ],
    department: { name: "Kids", slug: "kids" },
    category: { id: "cat_kidswear", name: "T-Shirts", slug: "t-shirts" },
    tags: ["kids", "graphic", "t-shirt", "colorful"],
    created_at: "2025-07-09T15:00:00Z",
    updated_at: "2025-07-09T15:00:00Z",
  },

  {
    id: "p006",
    name: "Men's Formal Shirt",
    slug: "mens-formal-shirt",
    description:
      "Crisp formal shirt for office wear or special occasions. Available in slim fit.",
    price: 279.5,
    images: [
      {
        alt: "Front view of Men's Formal Shirt",
        smallImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
        mediumImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
        largeImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
      },
    ],
    variants: [
      { id: "variant_xs", name: "X", stock: 10 },
      { id: "variant_s", name: "S", stock: 20 },
      { id: "variant_m", name: "M", stock: 30 },
      { id: "variant_l", name: "L", stock: 25 },
      { id: "variant_xl", name: "XL", stock: 15 },
    ],
    department: { name: "Men", slug: "men" },
    category: { id: "cat_shirts", name: "Shirts", slug: "shirts" },
    tags: ["formal", "shirt", "white", "slim-fit"],
    created_at: "2025-07-09T15:00:00Z",
    updated_at: "2025-07-09T15:00:00Z",
  },

  {
    id: "p007",
    name: "Women's Activewear Leggings",
    slug: "activewear-leggings",
    description:
      "High-waisted, stretch leggings ideal for yoga, gym, or lounging.",
    price: 199.0,
    images: [
      {
        alt: "Activewear Leggings",
        smallImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
        mediumImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
        largeImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
      },
    ],
    variants: [
      { id: "variant_xs", name: "X", stock: 12 },
      { id: "variant_s", name: "S", stock: 15 },
      { id: "variant_m", name: "M", stock: 20 },
      { id: "variant_l", name: "L", stock: 17 },
      { id: "variant_xl", name: "XL", stock: 9 },
    ],
    department: { name: "Women", slug: "women" },
    category: { id: "cat_activewear", name: "Activewear", slug: "activewear" },
    tags: ["leggings", "stretch", "gym", "activewear"],
    created_at: "2025-07-09T15:00:00Z",
    updated_at: "2025-07-09T15:00:00Z",
  },

  {
    id: "p008",
    name: "Men's Running Shoes",
    slug: "mens-running-shoes",
    description:
      "Breathable and lightweight running shoes for daily workouts and casual runs.",
    price: 799.99,
    images: [
      {
        alt: "Men's Running Shoes",
        smallImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
        mediumImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
        largeImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
      },
    ],
    variants: [
      { id: "variant_xs", name: "X", stock: 4 },
      { id: "variant_s", name: "S", stock: 8 },
      { id: "variant_m", name: "M", stock: 12 },
      { id: "variant_l", name: "L", stock: 6 },
      { id: "variant_xl", name: "XL", stock: 5 },
    ],
    department: { name: "Men", slug: "men" },
    category: { id: "cat_shoes", name: "Shoes", slug: "shoes" },
    tags: ["shoes", "running", "sports", "footwear"],
    created_at: "2025-07-09T15:00:00Z",
    updated_at: "2025-07-09T15:00:00Z",
  },

  {
    id: "p009",
    name: "Women's Wool Coat",
    slug: "womens-wool-coat",
    description:
      "Elegant wool coat that keeps you warm and stylish through winter.",
    price: 1299.0,
    images: [
      {
        alt: "Women's Wool Coat",
        smallImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
        mediumImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
        largeImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
      },
    ],
    variants: [
      { id: "variant_xs", name: "X", stock: 5 },
      { id: "variant_s", name: "S", stock: 10 },
      { id: "variant_m", name: "M", stock: 8 },
      { id: "variant_l", name: "L", stock: 6 },
      { id: "variant_xl", name: "XL", stock: 3 },
    ],
    department: { name: "Women", slug: "women" },
    category: { id: "cat_outerwear", name: "Outerwear", slug: "outerwear" },
    tags: ["coat", "wool", "winter", "warm"],
    created_at: "2025-07-09T15:00:00Z",
    updated_at: "2025-07-09T15:00:00Z",
  },

  {
    id: "p010",
    name: "Unisex Cotton Beanie",
    slug: "cotton-beanie",
    description:
      "Soft cotton beanie to keep your head warm and your style cool.",
    price: 89.99,
    images: [
      {
        alt: "Unisex Cotton Beanie",
        smallImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
        mediumImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
        largeImg: "https://picsum.photos/seed/QnkkI0P/3665/1892",
      },
    ],
    variants: [
      { id: "variant_xs", name: "X", stock: 20 },
      { id: "variant_s", name: "S", stock: 30 },
      { id: "variant_m", name: "M", stock: 25 },
      { id: "variant_l", name: "L", stock: 15 },
      { id: "variant_xl", name: "XL", stock: 10 },
    ],
    department: { name: "Unisex", slug: "unisex" },
    category: {
      id: "cat_accessories",
      name: "Accessories",
      slug: "accessories",
    },
    tags: ["beanie", "cotton", "winter", "accessory"],
    created_at: "2025-07-09T15:00:00Z",
    updated_at: "2025-07-09T15:00:00Z",
  },
];
