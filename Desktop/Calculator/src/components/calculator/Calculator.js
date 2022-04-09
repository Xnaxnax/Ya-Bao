import React, { useState } from 'react'
import './Calculator.css'

export default function Calculator() {

    const [button, setButton] = useState(false)

  return (
    <div className='calculator_bg'>
        <div className='calculator_wrapper'>
            <div>
                <div className="calculator">
                    <div className="display">
                        <span>0</span>
                    </div>

                    <div className="operators">
                        <button>/</button>
                        <button>x</button>
                        <button>-</button>
                        <button>+</button>
                    </div>

                    <div className="numbers">
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                    </div>

                    <div className="nullDot">
                        <button>0</button>
                        <button>.</button>
                    </div>

                    <div className="enter">
                        <button>=</button>
                    </div>
                </div>
            </div>
            
            <div>
                <div className='turner'>
                        {button ? <button onClick={() => setButton(!button)}>Runtime</button> : <button onClick={() => setButton(!button)}>Constructor</button>}
                </div>
                <div className='palitra'>
                    <div>
                        <h3>Перетащите сюда</h3>
                        <p>любой элемент из левой панели</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
