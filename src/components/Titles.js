import React from 'react';



class Titles extends React.Component{
  render(){
    return(
      <div
        className="titleHeadingDiv">
        <h2 className="titleTitle">Rain || Shine</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXkRYqBdLTx6S5LTMryqPQikqsUvuwh5UYy1sjU9aUvgG83wgN" alt="weather icon" className="app-logo-icon" />
        <p className="titleSubtitle">Your local weather source</p>
      </div>
    )
  }
}

export default Titles;