import { notFound } from "next/navigation";

const fetcher = async (endPoint) => {
  const res = await fetch(`http://localhost:300/api/${endPoint}`, {
    cache: "no-store",
  });
  if (!res.ok) return notFound();

  return res.json();
};

export default fetcher
