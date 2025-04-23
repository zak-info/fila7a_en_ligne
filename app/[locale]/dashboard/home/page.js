import Home from '@components/dashboard/User/Home/Home'
import { getServerSession } from "next-auth";
import { authOptions } from "@app/api/auth/[...nextauth]/route";

const page = async () => {

  const session = await getServerSession(authOptions);
  

  return (
    <Home />
  )
}

export default page