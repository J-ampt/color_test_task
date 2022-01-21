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
      {color: colorstate[index].color, selected: !colorstate[index].selected}, 
      ...colorstate.slice(index+1, 6)
    ]);
  };

  function submit(){
    const blue_color = colorstate.filter((current) => current.color==='#3B00F8').length;
    const selected_blue_color = colorstate.filter((current) => current.color==='#3B00F8' && current.selected).length;
    const miss_clicked = colorstate.filter((current) => current.color!=='#3B00F8' && current.selected).length;
    if(miss_clicked) {
      alert('You have selected wrong color')
    }
    else if(blue_color === selected_blue_color){
      alert("You have selected all blue squres")
    }
    else{
      alert("You have missed a few")
    }
    }

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
      <button className="btn btn-primary mt-2"
        onClick={submit}
      >Submit</button>
    </div>
  )
}
export default Home;