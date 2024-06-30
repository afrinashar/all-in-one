// App.js
import VideoToMP3Converter from './components/VideoToMP3Converter';
import YouTubeDownloader from './components/YouTubeDownloader';
import VideoEditor from './components/VideoEditor';
import Translator from './components/Translator';

const App = () => {
    return (
        <div>
            <h1>Video Tool</h1>
            <div>
                <VideoToMP3Converter />
                <YouTubeDownloader />
                <VideoEditor />
                <Translator />
            </div>
        </div>
    );
};

export default App;
