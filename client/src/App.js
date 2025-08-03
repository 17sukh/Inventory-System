import {useState} from 'react';
function App(){
  const [day,setDay]=useState("");
  const [prediction,setPrediction]=useState(null);

  const getPredict=async()=>{
    console.log("fetching prediction for day:",day);
    try{
    const response=await fetch("http://127.0.0.1:5001/predict",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({day:Number(day)})
    });
    console.log("response status:",response.status);
    if(!response.ok)throw new Error("failed to fetch data");
    const data=await response.json();
    console.log("prediction received:",data);
    setPrediction(data.predicted_sales);
  }
  catch(error){
    console.error("error fetching prediction:",error);
  }
  };
  return(
    <div>
      <h1>Sales Prediction</h1>
      <input placeholder="Enter day number" onChange={(e)=>setDay(e.target.value)}/>
      <button onClick={getPredict}>Predict Sales</button>
      {prediction && <p>Predicted Sales: {prediction.toFixed(2)}</p>}
    </div>
  );

}
export default App;