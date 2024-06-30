import   { useState } from 'react';

const YouTubeDownloader = () => {
    const [videoLink, setVideoLink] = useState('');

    const handleLinkChange = (e) => {
        setVideoLink(e.target.value);
    };

    const downloadVideo = () => {
        if (!videoLink) return;

        const youtubedl = require('youtube-dl');
        const video = youtubedl(videoLink, ['-f', 'best']);

        video.on('info', function(info) {
            console.log('Download started');
            console.log('filename: ' + info._filename);
            console.log('size: ' + info.size);
            video.pipe(fs.createWriteStream(info._filename));
        });

        video.on('end', function() {
            console.log('Download finished');
        });
    };

    return (
        <div>
            <h2>YouTube Downloader</h2>
            <input type="text" value={videoLink} onChange={handleLinkChange} />
            <button onClick={downloadVideo}>Download</button>
        </div>
    );
};

export default YouTubeDownloader;
