import { useCallback, useEffect, useRef, useState } from "react";

import { RandomProgram } from "../RandomProgram";
import { VideosList } from "../VideosList";
import { SelectedVideo } from "../SelectedVideo";

import { getRandomProgram } from "../../api";
import { getSelectedVideoId } from "../../utils/getSelectedVideoId";

import "./RandomProgramContainer.css";

export default function RandomProgramContainer() {
  const randomProgramContainerRef = useRef(null);

  const [randomProgram, setRandomProgram] = useState("");
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(getSelectedVideoId());

  const fetchRandomProgram = useCallback(async () => {
    try {
      const { program, videos } = await getRandomProgram();
      setRandomProgram(program);
      setVideos(videos);
      if (!selectedVideo) setSelectedVideo(videos[0].id.videoId);
    } catch {
      setError(true);
    }
  }, [selectedVideo]);

  useEffect(() => {
    fetchRandomProgram();
  }, [fetchRandomProgram]);

  useEffect(() => {
    randomProgramContainerRef.current.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [selectedVideo]);

  return (
    <section
      ref={randomProgramContainerRef}
      className="random-program-container"
    >
      <h2 className="random-program-title">
        Daily Random Yuzuru Hanyu Program!
      </h2>
      <section className="random-program-section">
        <RandomProgram program={randomProgram} />
        <SelectedVideo videoId={selectedVideo} />
        <VideosList
          program={randomProgram}
          videos={videos}
          error={error}
          onClick={setSelectedVideo}
        />
      </section>
    </section>
  );
}
