import { getProductBySlug } from '@/lib/actions/product.actions';
import { notFound } from 'next/navigation';
import ProductPrice from '@/components/shared/product/product-price';
import ProductImages from '@/components/shared/product/product-images';
import ReviewList from './review-list';
import { auth } from '@/auth';
import Rating from '@/components/shared/product/rating';

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;

  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const session = await auth();
  const userId = session?.user?.id;

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Images Column (unchanged) */}
          <div className="col-span-2">
            <ProductImages images={product.images} />
          </div>

          {/* Details Column (expanded, no right-side card) */}
          <div className="col-span-3 p-5">
            <div className="flex flex-col gap-4">
              {/* Name */}
              <h1 className="h3-bold">{product.name}</h1>

              {/* Reviews under the name */}
              <div className="flex items-center gap-3 text-base">
                <Rating value={Number(product.rating)} />
                <span className="text-muted-foreground">
                  {product.numReviews} reviews
                </span>
              </div>

              {/* Category • Brand on one line */}
              <p className="text-sm text-muted-foreground">
                {product.category} • {product.brand}
              </p>

              {/* Description */}
              <div>
                <p className="font-semibold mb-1">Description</p>
                <p>{product.description}</p>
              </div>

              {/* Price at the end */}
              <div className="pt-2">
                <ProductPrice
                  value={Number(product.price)}
                  className="inline-block rounded-full bg-green-100 text-green-700 px-5 py-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews section (unchanged) */}
      <section className="mt-10">
        <h2 className="h2-bold mb-5">Customer Reviews</h2>
        <ReviewList
          userId={userId || ''}
          productId={product.id}
          productSlug={product.slug}
        />
      </section>
    </>
  );
};

export default ProductDetailsPage;
