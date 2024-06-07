import styles from "../styles/movie-video.module.css";

import { API_URL } from "../(home)/page";

async function getVideos(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("someting broke.");
  const response = await fetch(`${API_URL}/${id}/videos`);
  const json = response.json();
  return json;
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);

  return (
    <div className={styles.container}>
      {videos.map((video: any) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ))}
    </div>
  );
}
