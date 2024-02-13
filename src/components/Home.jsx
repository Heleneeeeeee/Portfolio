import { useEffect, useState } from "react";

const Home = () => {
    const bubbleItems = [
        11, 12, 21, 9, 24, 16, 19, 12, 11, 20, 8, 13, 15, 11, 9, 17, 25, 20, 24, 11,
        14, 9, 19, 17, 23, 15, 25, 19, 17, 23, 15, 5, 19, 23, 22, 12, 15, 11, 23, 12,
        19, 11, 9,
      ];
    
      const [currentText, setCurrentText] = useState('');
      const phrase = "Junior Web Developer";
    
      useEffect(() => {
        const textArray = phrase.split('');
        let newText = '';
    
        textArray.forEach((char, i) => {
          setTimeout(() => {
            newText += char;
            setCurrentText(newText);
          }, i * 100);
        });
    
        setTimeout(() => {
          setCurrentText('');
        }, textArray.length * 100);
      }, []);
    
    return (
        <section>
        <div className="container">
          <div className="bubbles">
            {bubbleItems.map((value, index) => (
              <span key={index} style={{'--i': value}}></span>
            ))}
          </div>
          <div className='home'>
            <div>
              <h1>Hello I am Helene</h1>
              <p className='text'>{currentText}</p>
              <button>View my work</button>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Home;