import React, {useEffect,useState} from 'react';
import axios from 'axios';


const fetchData = () => {
    return axios.get('https://raw.githubusercontent.com/invictustech/test/main/README.md')
  .then(({data}) => {
      return data;
  }) 
  .catch(err => {
    console.log(err);
  });
}

export default function Form(){
    const [ inputField , setInputField ] = useState('');
    const [ randomDataJSON, setrandomDataJSON] = useState(' ');
    const [ finalData, setfinalData ] = useState(' ');
    
    function handleChange(e){
         setInputField(e.target.value);
    }

    function show(){
        var wordCounts ={ };
        var words = randomDataJSON.trim(' ').replace(/[^\w\s]/g, '').replace(/[0-9]/g, '\u2022').split(/\s+/);
        for(var i = 0; i < words.length; i++){
              wordCounts[words[i].toLowerCase()] = (wordCounts[words[i].toLowerCase()] || 0) + 1;
          }
        
        var keysSorted = Object.keys(wordCounts).sort(function(a,b){return wordCounts[b]-wordCounts[a]});
        
            const rows = [];

            for (let i=-1; i<inputField; i++) {
            let column = [];
            if (i === -1) {
              column.push(<th className="head">Word</th>);
              <hr />
              column.push(<th className="head">Frequency</th>);
            }
            else {
              column.push(<td>{keysSorted[i]}</td>);
              column.push(<td>{wordCounts[keysSorted[i]]}</td>);
            }
              rows.push(<tr>{column}</tr>);
            }
        return rows;
    }
    function handleSubmit(e){
        setfinalData(show())
        e.preventDefault();
    }

    useEffect(() => {
        fetchData().then(randomData => {
          setrandomDataJSON(randomData);  
        });
    }, []);

    return(
        <div>
        <form onSubmit={handleSubmit}>
        <label>
          <input type="Number" value={inputField.value} onChange={handleChange}/>
        </label>
        <button onSubmit={handleSubmit}>Submit</button>
      </form>
      <p>{finalData}</p>
      </div>
    );
}

