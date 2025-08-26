import products from "../data/products";
import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";

export default function Home() {
  return (
    <div className="max-w-[1152px] mx-auto px-6 py-8">
      <PageHeading title="Explore Sukai Beauty Products!">
        Add glamourous to your beauty with our exclusive product collection
      </PageHeading>
      <ProductListings products={products} />
    </div>
  );
}