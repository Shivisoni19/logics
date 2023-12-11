import React from 'react'

const star = () => {
    let n = 5; // row or column count
    // defining an empty string
    let string = "";
    for(let i = 0; i < n; i++) { // external loop
        for(let j = 0; j < n; j++) { // internal loop
          string += "*";          
        }
        // newline after each row
        string += "\n";
      }
      console.log(string);
 
  const Hollow = () => {
    let n = 5;
     let string = "";
     for(let i = 1; i <= n; i++)
     {
       for(let j = 1; j <= n; j++) 
       {
         if(i===1 || i===n || j===1 || j===n)
         {
          string += "*"; 
         }
         else
         {
          string += " "; 
         }
       }
       string += "\n";
     }
     console.log(string);
  }

  const leftTriangle = () => {
    let n = 5;
    let string = "";
    for(let i = 1; i <= n; i++)
    {
      for(let j = 1; j <= i; j++)
      {
        string += "*";
      }
      string += "\n"; 
    }
    console.log(string);
  }

  const rightTriangle = () => {
   let n = 5;
   let string = "";
   for(let i = 1; i <= n; i++)
   {
     for(let k = 4; k >= i; k--) 
     {
      string += " ";
     }
     for(let j = 1; j <= i; j++)
     {
      string += "*";
     }
     string += "\n"; 
   }
   console.log(string);
  }

  const pyramidTriangle = () => {
    let n = 5;
    let string = "";
    for(let i = 1; i <= n; i++)
    {
      for(let k = n-1; k >= i; k--)
      {
        string += " "; 
      }
      for(let j = 1; j <= ((2*i)-1); j++ )
      {
        string += "*";
      }
      string += "\n";  
    }
    console.log(string);
  }

  const pyramidspaceTriangle = () => {
    let n = 5;
    let string = "";
   for(let i = 1; i <= n; i++)
   {
     for(let k = n-1 ; k >= i; k--)
     {
      string += " ";
     }
     for(let j = 1; j <= i; j++)
     {
      string += "* "; 
     }
     string += "\n";
   }
   console.log(string);
  }

  const DiamondPattern = () => {
    let n = 4;
    let string = "";
    for(let i = 1; i <= n; i++)
    {
      for(let k = n-1; k >= i; k--)
      {
        string += " ";
      }
      for(let j = 1; j <= ((2*i)-1); j++)
      {
        string += "*";
      }
      string += "\n";
    }
    for(let i = 3; i >= 1; i--)
    {
      for(let k = n-1; k >= i; k--)
      {
        string += " ";
      }
      for(let j = 1; j <= ((2*i)-1); j++)
      {
        string += "*";
      }
      string += "\n";
    }
    console.log(string);
  } 

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3'>
            <h4>Square pattern in React</h4>
            <div className='text-center'>
              <button onClick={star} className="btn btn-primary text-center mt-2">Star</button>
            </div>       
          </div>
          <div className='col-lg-3'>
            <h4>Hollow Square pattern</h4>
            <div className='text-center'>
              <button onClick={Hollow} className="btn btn-primary text-center mt-2">Star</button>
            </div>       
          </div>
          <div className='col-lg-3'>
            <h4>LeftTriangle in javascript</h4>
            <div className='text-center'>
              <button onClick={leftTriangle} className="btn btn-primary text-center mt-2">Star</button>
            </div>       
          </div>
          <div className='col-lg-3'>
            <h4>RighttTriangle in javascript</h4>
            <div className='text-center'>
              <button onClick={rightTriangle} className="btn btn-primary text-center mt-2">Star</button>
            </div>       
          </div>
          <div className='col-lg-3'>
            <h4>Pyramid in javascript</h4>
            <div className='text-center'>
              <button onClick={pyramidTriangle} className="btn btn-primary text-center mt-2">Star</button>
            </div>       
          </div>
          <div className='col-lg-3'>
            <h4>Pyramid with space in javascript</h4>
            <div className='text-center'>
              <button onClick={pyramidspaceTriangle} className="btn btn-primary text-center mt-2">Star</button>
            </div>       
          </div>
          <div className='col-lg-3'>
            <h4>Diamond Pattern in javascript</h4>
            <div className='text-center'>
              <button onClick={DiamondPattern} className="btn btn-primary text-center mt-2">Star</button>
            </div>       
          </div>
        </div>
      </div>
    </>
  )
  }

export default star
