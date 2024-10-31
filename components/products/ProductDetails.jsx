"use client";
import { useRef } from "react";
import StarRatings from "react-star-ratings";
import Breadcrumbs from "../layout/Breadcrumbs";

const ProductDetails = ({ product }) => {
  const imageRef = useRef(null);

  const setImgPreview = (url) => {
    imageRef.current.src = url;
  };

  const breadCrumbs = [
    { name: "Home", url: "/" },
    {
      name: `${product?.name.substring(0, 100)}...`,
      url: `/products/${product?._id}`,
    },
  ];

  return (
    <>
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <section className="bg-white py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-5">
            <aside>
              <div className="border border-gray-200 shadow-sm p-3 text-center rounded mb-5">
                <img
                  ref={imageRef}
                  className="object-cover inline-block"
                  src={
                    product?.images[0]
                      ? product.images[0].url
                      : "/images/default_product.png"
                  }
                  alt="Product title"
                  width="340"
                  height="340"
                />
              </div>
              <div className="space-x-2 overflow-auto text-center whitespace-nowrap">
                {product?.images?.map((image) => {
                  return (
                    <a
                      key={image?.public_id}
                      onClick={() => setImgPreview(image?.url)}
                      className="inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500 cursor-pointer"
                    >
                      <img
                        className="w-14 h-14"
                        src={image?.url}
                        alt="Product title"
                        width="500"
                        height="500"
                      />
                    </a>
                  );
                })}
              </div>
            </aside>
            <main>
              <h2 className="font-semibold text-2xl mb-4">{product?.name}</h2>

              <div className="flex flex-wrap items-center space-x-2 mb-2">
                <div className="ratings">
                  <StarRatings
                    rating={product?.ratings}
                    starRatedColor="#ffb829"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="2px"
                    name="rating"
                  />
                </div>
                <span className="text-yellow-500">{product?.ratings}</span>

                <svg
                  width="6px"
                  height="6px"
                  viewBox="0 0 6 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="3" cy="3" r="3" fill="#DBDBDB" />
                </svg>

                <span className="text-green-500">Verified</span>
              </div>

              <p className="mb-4 font-semibold text-xl">${product?.price}</p>

              <p className="mb-4 text-gray-500">{product?.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                <button className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700">
                  <i className="fa fa-shopping-cart mr-2"></i>
                  Add to cart
                </button>
              </div>

              <ul className="mb-5">
                <li className="mb-1">
                  {" "}
                  <b className="font-medium w-36 inline-block">Stock</b>
                  {product?.stock >= 1 ? (
                    <span className="text-green-500">In Stock</span>
                  ) : (
                    <span className="text-red-500">Out of Stock</span>
                  )}
                </li>
                <li className="mb-1">
                  {" "}
                  <b className="font-medium w-36 inline-block">Category:</b>
                  <span className="text-gray-500">{product?.category}</span>
                </li>
                <li className="mb-1">
                  {" "}
                  <b className="font-medium w-36 inline-block">
                    Seller / Brand:
                  </b>
                  <span className="text-gray-500">{product?.seller}</span>
                </li>
              </ul>
            </main>
          </div>

          {/* <NewReview /> */}
          <hr />

          <div className="font-semibold">
            <h1 className="text-gray-500 review-title mb-6 mt-10 text-2xl">
              Other Customers Reviews
            </h1>
            {/* <Reviews /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;

export const ProductDetailsSkeleton = () => {
  return (
    <>
      {/* Skeleton for Breadcrumbs */}
      <div className="bg-gray-200 h-6 w-1/3 mb-4 animate-pulse"></div>

      <section className="bg-white py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-5">
            {/* Skeleton for Image and Thumbnails */}
            <aside>
              <div className="border border-gray-200 shadow-sm p-3 text-center rounded mb-5 animate-pulse">
                <div className="bg-gray-200 w-full h-80 mx-auto"></div>
              </div>
              <div className="flex space-x-2 overflow-auto text-center whitespace-nowrap">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="inline-block bg-gray-200 rounded-md w-14 h-14 animate-pulse"
                  ></div>
                ))}
              </div>
            </aside>

            {/* Skeleton for Product Details */}
            <main>
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>

              <div className="flex items-center space-x-2 mb-2">
                <div className="h-5 bg-gray-200 rounded w-32 animate-pulse"></div>
                <div className="h-5 bg-gray-200 rounded w-12 animate-pulse"></div>
                <div className="h-2 w-2 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="h-5 bg-gray-200 rounded w-16 animate-pulse"></div>
              </div>

              <div className="h-6 bg-gray-200 rounded w-1/4 mb-4 animate-pulse"></div>

              <div className="space-y-2 mb-4">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-4 bg-gray-200 rounded w-full animate-pulse"
                  ></div>
                ))}
              </div>

              <div className="h-10 bg-blue-200 rounded w-1/3 mb-5 animate-pulse"></div>

              <ul className="space-y-2">
                {Array.from({ length: 3 }).map((_, index) => (
                  <li
                    key={index}
                    className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"
                  ></li>
                ))}
              </ul>
            </main>
          </div>

          <hr />

          {/* Skeleton for Reviews Section */}
          <div className="font-semibold mt-10">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-6 animate-pulse"></div>
            {Array.from({ length: 2 }).map((_, index) => (
              <div
                key={index}
                className="h-20 bg-gray-200 rounded mb-4 animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
