import axios from "axios";


async function getUserdata() {
  const response = await axios.get("http://localhost:3000/api/user");
  return response.data;
}

export default async function Home() {
  await new Promise((r) => setTimeout(r, 5000));
  const userDetails = await getUserdata();
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {userDetails?.name}</div>

          {userDetails?.email}
        </div>
      </div>
    </div>
  );
}
