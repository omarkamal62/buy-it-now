import ListProducts from "../components/products/ListProducts";
import axios from "axios";

import queryString from "query-string";

const getProducts = async (searchParams) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  searchParams = await searchParams;

  const urlParams = {
    keyword: searchParams.keyword,
    page: searchParams.page,
  };

  const searchQuery = queryString.stringify(urlParams);

  const { data } = await axios.get(
    `${process.env.API_URL}/api/products?${searchQuery}`
  );
  return data;
};

export default async function Home({ searchParams }) {
  const productsData = await getProducts(searchParams);

  return <ListProducts data={productsData} />;
}
