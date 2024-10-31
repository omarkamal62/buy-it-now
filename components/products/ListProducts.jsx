import React from "react";
import Filters, { FiltersSkeleton } from "../layout/Filters";
import ProductItem, { ProductItemSkeleton } from "./ProductItem";
import CustomPagination from "../layout/CustomPagination";

const ListProducts = ({ data }) => {
  return (
    <section className="py-12">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row -mx-4">
          <Filters />

          <main className="md:w-2/3 lg:w-3/4 px-3">
            {data?.products.map((product) => {
              return <ProductItem key={product?._id} product={product} />;
            })}

            <CustomPagination
              resPerPage={data?.resPerPage}
              productsCount={data?.filteredProductsCount}
            />
          </main>
        </div>
      </div>
    </section>
  );
};

export default ListProducts;

export const ListProductsSkeleton = () => {
  return (
    <section className="py-12">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row -mx-4">
          {/* Skeleton for Filters (if necessary) */}
          {/* You can create a FiltersSkeleton component similarly if needed */}
          <FiltersSkeleton />

          <main className="md:w-2/3 lg:w-3/4 px-3">
            {/* Render multiple ProductItemSkeletons to simulate loading list */}
            {Array.from({ length: 5 }).map((_, index) => (
              <ProductItemSkeleton key={index} />
            ))}
          </main>
        </div>
      </div>
    </section>
  );
};
