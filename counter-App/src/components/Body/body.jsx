import React, { useState } from 'react';
import Button from '../Button/button'


export function Body() {
        const [counter, setCounter] = useState(0);
      
        const add = () => {
          setCounter(counter + 1);
        };
      
        const subtract = () => {

                if (counter > 0) {
                  setCounter(counter - 1);
                }
              };

        const reset = () => {
                setCounter(0);
              };
      
        return (
          <body className='body-background'>
            <div className='counter-container'>
              <h1 className='counter-value'> {counter}</h1>
                <div className='btn-container'>
                 <Button onClick={add} className='btn-add'>+</Button>
                 <Button onClick={reset} className='btn-reset'>RESET</Button>
                 <Button onClick={subtract} className='btn-add'>-</Button>
                 
                </div>
            </div>

          </body>
        );
      }