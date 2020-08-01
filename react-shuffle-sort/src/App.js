import React from 'react';
import './App.css';

const App = () => {
  const initialData = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const [arrayNumbers, setArrayNumbers] = React.useState(initialData);

  const shuffleNodes = () => {
    const sliced = arrayNumbers.slice(0);
    let arrayNumLength = sliced.length;
    while (--arrayNumLength) {
      const random = Math.floor(arrayNumLength * Math.random());
      const temp = sliced[random];
      sliced[random] = sliced[arrayNumLength];
      sliced[arrayNumLength] = temp;
    }
    setArrayNumbers(sliced);
  };
  const sortNodes = () => {
    const latestArray = [...arrayNumbers];
    setArrayNumbers(latestArray.sort((a, b) => a - b));
  };

  return (
    <>
      <div className='container'>
        <div className='header'>
          <h1>Shuffle and Sort</h1>
          <div className='seperator'></div>
        </div>

        <aside>
          <button
            id='shuffle'
            className='btn action active'
            onClick={shuffleNodes}>
            Shuffle
          </button>
          <button type='button' className='btn action' onClick={sortNodes}>
            Sort
          </button>
        </aside>

        <section>
          <article>
            <ul>
              {arrayNumbers.map((num, key) => {
                return (
                  <li key={key} className={`node-${num}`}>
                    {num}
                  </li>
                );
              })}
            </ul>
          </article>
        </section>

        <footer>
          <p>Shuffle and Sort by MUKUL KISHORE</p>
        </footer>
      </div>
    </>
  );
};

export default App;
