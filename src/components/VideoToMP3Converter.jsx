import   { useState } from 'react';
import ffmpeg from 'fluent-ffmpeg';

const VideoToMP3Converter = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [error, setError] = useState('');

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const convertToMP3 = () => {
        if (!selectedFile) {
            setError('Please select a file.');
            return;
        }

        const outputPath = `${selectedFile.name.split('.')[0]}.mp3`;

        ffmpeg(selectedFile)
            .toFormat('mp3')
            .on('end', () => console.log('Conversion finished'))
            .on('error', (err) => {
                setError(`Error: ${err.message}`);
            })
            .save(outputPath);
    };

    return (
        <div>
            <h2>Video to MP3 Converter</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={convertToMP3}>Convert</button>
            {error && <p>{error}</p>}
        </div>
    );
};

export default VideoToMP3Converter;
