import Home from '@components/dashboard/Home/Home'
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";

const page = async () => {

  const session = await getServerSession(authOptions);
  

  return (
    <Home />
  )
}

export default page