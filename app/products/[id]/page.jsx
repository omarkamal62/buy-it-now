import ProductDetails from "../../../components/products/ProductDetails";
import axios from "axios";

const getProductDetails = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const { data } = await axios.get(`${process.env.API_URL}/api/products/${id}`);
  return data?.product;
};

const ProductDetailsPage = async ({ params }) => {
  // Await params if it's a promise
  const resolvedParams = await params;
  const product = await getProductDetails(resolvedParams.id);

  return <ProductDetails product={product} />;
};

export default ProductDetailsPage;
