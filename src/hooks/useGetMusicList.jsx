import { useQuery } from "@tanstack/react-query";

async function getMusicList() {
  try {
    const result = await fetch("../../data/musicListv3.json");
    if (!result.ok) {
      throw new Error("Error getting music list...");
    }
    return await result.json();
  } catch (error) {
    throw new Error("Error getting music list...");
  }
}

function useGetMusicList() {
  const query = useQuery({ queryKey: ["musicList"], queryFn: getMusicList });

  return query;
}

export { useGetMusicList };
