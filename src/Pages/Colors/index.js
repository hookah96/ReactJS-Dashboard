import React, { useState, useEffect } from 'react';
import './style.css';
import getColors from '../../Api/colors';
import Spinner from '../../components/spinner/index';
import ColorCard from '../../components/Card/index';

const Colors = () => {
  const [colors, setColors] = useState([
    {
      id: 0,
      name: '',
      year: 0,
      color: '',
    },
  ]);

  useEffect(() => {
    getColors().then((res) => setTimeout(() => setColors(res.data), 2000));
  }, [setColors]);

  const sortedArray = (arr) => {
    const len = arr.length;
    for (let i = len - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (arr[j].year < arr[j + 1].year) {
          let temp = arr[j].year;
          arr[j].year = arr[j + 1].year;
          arr[j + 1].year = temp;
        }
      }
    }
    return arr;
  };

  const cardItems = sortedArray(colors).map((col, i) => (
    <ColorCard name={col.name} year={col.year} color={col.color} key={col.id} />
  ));

  return (
    <div className='isloading'>
      {colors.length === 1 ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div>
          <div className='title'>
            <h2>Colors</h2>
            <h5>items: {colors.length}</h5>
          </div>

          <div className='cardContiner'>{cardItems}</div>
        </div>
      )}
    </div>
  );
};
export default Colors;
