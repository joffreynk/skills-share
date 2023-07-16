import { notFound } from "next/navigation";

const fetcher = async (endPoint) => {
  const res = await fetch(`http://localhost:3000/api/${endPoint}`, {
    cache: "no-store",
  });
  if (!res.ok) return notFound();

  return res.json();
};

export default fetcher
