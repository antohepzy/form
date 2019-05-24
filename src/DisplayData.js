import React from 'react';
const DisplayData =({finalData})=>{
	return(
	<div className= "pa2 ma2 bw2 shadow-3" >
      {Object.keys(finalData).map((key,i)=>{
      	return (
      		
      		<div style={{display:'flex', justifyContent:'center'}}>
      		<h3 key={i}> {key}: </h3>
      		<h4 key={key}> {finalData[key]} </h4> 
      		
      		</div>);
        })}
      </div> 
	);
}

export default DisplayData;