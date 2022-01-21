import React, { useState } from "react";


function Home(){
  const getColor = () => {
    const colors = ['#000000', '#00ff00', '#3B00F8', '#3B00F8', '#FFF700', '#8900F8', '#fc93ea', '#262a3d', '#ff435b']
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
      
    const index = Math.floor(Math.random() * 10)

    return colors[index];
  }

  const [colorstate, setcolors]=useState(
    [
      {color: getColor(), selected: false},
      {color: getColor(), selected: false},
      {color: getColor(), selected: false},
      {color: getColor(), selected: false},
      {color: getColor(), selected: false},
      {color: getColor(), selected: false},
    ]
  );

  const selectColor = (index) => {
    setcolors([
      ...colorstate.slice(0, index), 
      {color: colorstate[index].color, selected: true}, 
      ...colorstate.slice(index+1, 6)
    ]);
  };

  return(
    <div className="container">
      <div className="row">
        {colorstate.map(
          (blockInfo, index) => (
            <div 
              key={`${index}_color`}
              className={`col-4 ${blockInfo.selected ? 'selected-block' : ''}`}
              style={{backgroundColor: blockInfo.color, width:400, height:400}}
              onClick={() => selectColor(index)}
            >
                &nbsp;
              </div>
          )
        )}
      </div>
    </div>
  )
}
export default Home;