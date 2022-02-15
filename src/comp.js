import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Comp = () => {
  const [data, setData] = useState([]);
  const [found, setFound] = useState([]);

  useEffect(() => {
    // Axios.get
    /*const fetchedData = axios.get(
      'https://randomuser.me/api/?inc=name&results=100'
    );     
    fetchedData.then((res) => {
      console.log(res.data.results);
    }); */

    // Axios.get Async Await
    /* const fetchedData = async () => {
      let res = await axios.get(
        'https://randomuser.me/api/?inc=name&results=100'
      );
      console.log(res.data.results);
    };
    fetchedData(); */

    // Fetch Async await

    const fetchedData = async () => {
      let res = await fetch('https://randomuser.me/api/?inc=name&results=10');
      res = await res.json();
      //console.log(res.results);
      res = res.results;
      setData(...data, res);
    };
    fetchedData();
  }, []);

  const changeHandler = (event) => {
    //console.log(data);
    // test data
    var testData = [
      { name: { title: 'Ms', first: 'Sira', last: 'Brantjes' } },
      { name: { title: 'Mrs', first: 'Adina', last: 'Landrø' } },
      { name: { title: 'Mr', first: 'Pål', last: 'Trøen' } },
      { name: { title: 'Mr', first: 'Eren', last: 'Sadıklar' } },
      { name: { title: 'Mrs', first: 'Asia', last: 'De Hoog' } },
      { name: { title: 'Mrs', first: 'Alicja', last: 'Fries' } },
      { name: { title: 'Mr', first: 'Isaiah', last: 'Sutton' } },
      { name: { title: 'Mrs', first: 'Maëline', last: 'Meunier' } },
      { name: { title: 'Mrs', first: 'Charlotte', last: 'Ambrose' } },
      { name: { title: 'Mr', first: 'Alexander', last: 'Cooper' } },
    ];
    setData(testData);
    let inputVal = event.target.value;
    if (inputVal && inputVal.length >= 3) {
      const findNames = (item) => {
        let y = data.filter((val) => {
          console.log(val.name.first.search(item), val.name.last.search(item));
          if (
            val.name.first.search(item) >= 0 ||
            val.name.last.search(item) >= 0
          ) {
            return true;
          }
        });

        //return y;
        //console.log(y);
        setFound(y);
        // console.log(found);
      };

      findNames(inputVal);
    } else {
      setFound([]);
    }
  };

  var searchResults = found.map((val) => {
    return <p>{val.name.title + ' ' + val.name.first + ' ' + val.name.last}</p>;
  });
  return (
    <div>
      <p>Search with First Name:</p>
      <input type="text" onChange={changeHandler} />
      <div>
        <p>Search Results</p>
        <div>{searchResults}</div>
      </div>
    </div>
  );
};

export default Comp;
