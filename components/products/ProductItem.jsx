"use client";

import Link from "next/link";
import StarRatings from "react-star-ratings";
import Image from "next/image";

const ProductItem = ({ product }) => {
  return (
    <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 flex p-3">
          <div
            style={{
              width: "80%",
              height: "70%",
              position: "relative",
            }}
          >
            <Image
              src={
                product?.images[0]
                  ? product.images[0].url
                  : "/images/default_product.png"
              }
              alt="product anme"
              height="240"
              width="240"
            />
          </div>
        </div>
        <div className="md:w-2/4">
          <div className="p-4">
            <Link
              href={`/products/${product?._id}`}
              className="hover:text-blue-600"
            >
              {product.name}
            </Link>
            <div className="flex flex-wrap items-center space-x-2 mb-2">
              <div className="ratings">
                <div className="my-1">
                  <StarRatings
                    rating={product?.ratings}
                    starRatedColor="#ffb829"
                    numberOfStars={5}
                    starDimension="18px"
                    starSpacing="1px"
                    name="rating"
                  />
                </div>
              </div>
              <b className="text-gray-300">•</b>
              <span className="ml-1 text-yellow-500">{product?.ratings}</span>
            </div>
            <p className="text-gray-500 mb-2">
              {product?.description.substring(0, 159)}...
            </p>
          </div>
        </div>
        <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
          <div className="p-5">
            <span className="text-xl font-semibold text-black">
              ${product?.price}
            </span>

            <p className="text-green-500">Free Shipping</p>
            <div className="my-3">
              <a className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer">
                {" "}
                Add to Cart{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductItem;

export const ProductItemSkeleton = () => {
  return (
    <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5 animate-pulse">
      <div className="flex flex-col md:flex-row">
        {/* Image Placeholder */}
        <div className="md:w-1/4 flex p-3">
          <div className="bg-gray-200 rounded w-full h-48"></div>
        </div>
        {/* Text Placeholder */}
        <div className="md:w-2/4 p-4 space-y-2">
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="flex space-x-2 items-center">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <b className="text-gray-300">•</b>
            <div className="h-4 bg-gray-200 rounded w-1/6"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
        {/* Price and Button Placeholder */}
        <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200 p-5">
          <div className="h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
          <div className="h-10 bg-blue-200 rounded w-3/4"></div>
        </div>
      </div>
    </article>
  );
};
