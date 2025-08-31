import { db } from '../src/lib/db';
import { products } from '../src/lib/db/schema';

const leatherBags = [
  {
    name: 'Classic Leather Tote',
    description: 'A timeless leather tote bag perfect for everyday use. Made from premium full-grain leather with spacious interior and comfortable handles.',
    price: '299.99',
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    category: 'Tote Bags',
    stock: 15,
  },
  {
    name: 'Executive Briefcase',
    description: 'Professional leather briefcase with multiple compartments for laptops and documents. Crafted from Italian leather with brass hardware.',
    price: '449.99',
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    category: 'Briefcases',
    stock: 8,
  },
  {
    name: 'Vintage Messenger Bag',
    description: 'Rugged leather messenger bag with adjustable strap. Perfect for students and professionals who need style and functionality.',
    price: '199.99',
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    category: 'Messenger Bags',
    stock: 22,
  },
  {
    name: 'Luxury Handbag',
    description: 'Elegant leather handbag with gold-tone hardware. Features multiple pockets and a detachable shoulder strap.',
    price: '379.99',
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    category: 'Handbags',
    stock: 12,
  },
  {
    name: 'Travel Duffle Bag',
    description: 'Spacious leather duffle bag perfect for weekend trips. Water-resistant lining and reinforced handles for durability.',
    price: '329.99',
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    category: 'Travel Bags',
    stock: 6,
  },
  {
    name: 'Crossbody Satchel',
    description: 'Compact leather crossbody bag with adjustable strap. Perfect for hands-free convenience while maintaining style.',
    price: '159.99',
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    category: 'Crossbody Bags',
    stock: 18,
  },
];

async function seed() {
  try {
    console.log('Seeding database with leather bags...');
    
    await db.insert(products).values(leatherBags);
    
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seed();