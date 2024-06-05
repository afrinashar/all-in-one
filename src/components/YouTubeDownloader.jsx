import   { useState } from 'react';
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import axios from "axios";
const YouTubeDownloader = () => {
  const [url, setUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDownload = async () => {
      try {
          const response = await axios.post('/download', { url });
          if (!response || !response.data) {
              throw new Error('Invalid response from server');
          }
          const videoUrl = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = videoUrl;
          link.setAttribute('download', 'video.mp4');
          document.body.appendChild(link);
          link.click();
      } catch (error) {
          setErrorMessage(error.response ? error.response.data.error : error.message);
      }
  };

  return (
      <div>
          <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter YouTube video URL"
          />
          <button onClick={handleDownload}>Download</button>
          {errorMessage && <p>{errorMessage}</p>}
      </div>
  );
}
export default YouTubeDownloader;
