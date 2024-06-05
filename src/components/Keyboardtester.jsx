import   { useEffect } from 'react';
import './styles.css'; // Import your CSS file

const KeyboardTester = () => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      event.preventDefault();
      const keys = document.querySelectorAll('.keys');
      const j = event.code.toLowerCase();
      const code = keys[0].getElementsByClassName("k" + j)[0];
      const key = keys[0].getElementsByClassName("k" + event.key.toLowerCase())[0];
      
      if (code) {
        code.classList.add("pressed");
      } else if (key) {
        key.classList.add("pressed");
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="artboard">
      <h4>Click Here and start the test</h4>
      <div className="keyboard">
        <div className="row">
          <div className="keys">
            {keys.map((key, index) => (
              <div key={index} className={`k${key}`}>
                {key === 'backslash' && <a> \ </a>}
                {key === 'escape' && <a> esc </a>}
                {key === 'enter' && <a> return </a>}
                {key === 'backspace' && <a> del </a>}
                {key === 'controlleft' && <a> control </a>}
                {(key === 'altright' || key === 'altleft') && <a> option </a>}
                {(key === 'metaleft' || key === 'metaright') && <a> command </a>}
                {(key === 'shiftleft' || key === 'shiftright') && <a> shift </a>}
                {key === 'arrowleft' && <a> left </a>}
                {key === 'arrowright' && <a> right </a>}
                {key === 'arrowup' && <a> up </a>}
                {key === 'arrowdown' && <a> down </a>}
                {(key !== 'backslash' && key !== 'escape' && key !== 'enter' && key !== 'backspace' && key !== 'controlleft' && key !== 'altright' && key !== 'altleft' && key !== 'metaleft' && key !== 'metaright' && key !== 'shiftleft' && key !== 'shiftright' && key !== 'arrowleft' && key !== 'arrowright' && key !== 'arrowup' && key !== 'arrowdown') && <a>{key}</a>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyboardTester;

const keys = [
  "escape","f1","f2","f3","f4","f5","f6","f7","f8","f9","f10","f11","f12","f13","`","1","2","3","4","5","6","7","8","9","0","-","=","backspace","tab","q","w","e","r","t","y","u","i","o","p","[","]","backslash","capslock","a","s","d","f","g","h","j","k","l",";","'","enter","shiftleft","z","x","c","v","b","n","m",",",".","/","shiftright","controlleft","altleft","metaleft","space","metaright","altright","arrowup","arrowdown","arrowleft","arrowright"
];
