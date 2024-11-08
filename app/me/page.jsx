import Profile from "../../components/auth/Profile";
import axios from "axios";

const getAddresses = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const { data } = await axios.get(`${process.env.API_URL}/api/address`);
  return data?.addresses;
};

const ProfilePage = async () => {
  const addresses = await getAddresses();

  return <Profile addresses={addresses} />;
};

export default ProfilePage;
