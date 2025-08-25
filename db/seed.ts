// db/seed-products.ts
import { PrismaClient } from '@prisma/client';
import { smoothieProducts } from './sample-data';

const prisma = new PrismaClient();

async function main() {
  // Upsert each product by unique slug.
  for (const p of smoothieProducts) {
    await prisma.product.upsert({
      where: { slug: p.slug },
      update: {
        // You can choose what fields should update on re-run:
        name: p.name,
        category: p.category,
        brand: p.brand,
        images: p.images,
        description: p.description,
        stock: p.stock,
        price: p.price,      // Decimal accepts string
        isFeatured: p.isFeatured,
      },
      create: p,
    });
  }

  console.log('Smoothie products upserted successfully ✅');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
