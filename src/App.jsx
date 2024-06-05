// // App.js
import 'bootstrap/dist/css/bootstrap.min.css';

 //import VideoToMP3Converter from './components/VideoToMP3Converter';
 import RemoveBackground from './components/BackroundRemove';
import KeyboardTester from './components/Keyboardtester';
import YouTubeDownloader from './components/YouTubeDownloader';
// import VideoEditor from './components/VideoEditor';
// import Translator from './components/Translator';

import Puzzle from "./Puzzle";
import { Route, Routes } from 'react-router';
import { Dashboard } from './Dashboard';
import CompressorComp from './components/CompressImage';

const App = () => {
    return (
        <div>
              <Routes>
                <Route exact path='/'    element={<Dashboard/>} />

                <Route exact path='/remove-background'    element={ <RemoveBackground/> } />

                <Route exact path='/keyboard-test'    element={ <KeyboardTester/> } />
                <Route exact path='/image-compress'    element={ <CompressorComp/> } />

              </Routes>
               
                {/* <KeyboardTester/> */}
               {/* <VideoToMP3Converter /> */}
                {/* <YouTubeDownloader />   */}
               {/*   <VideoEditor />
                <Translator /> */}
           
        </div>
    );
};

export default App;
