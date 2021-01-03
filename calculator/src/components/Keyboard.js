import React from "react";
import "./Keyboard.css";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Keyboard = (props) => {
  return (
    <div className="keyboard">
      <button onClick={props.click} className="operation">
        +
      </button>
      <button onClick={props.click} className="operation">
        -
      </button>
      <button onClick={props.click} className="operation">
        *
      </button>
      <button onClick={props.click} className="operation">
        /
      </button>
      <button onClick={props.click}>1</button>
      <button onClick={props.click}>2</button>
      <button onClick={props.click}>3</button>
      <button onClick={props.click}>4</button>
      <button onClick={props.click}>5</button>
      <button onClick={props.click}>6</button>
      <button onClick={props.click}>7</button>
      <button onClick={props.click}>8</button>
      <button onClick={props.click}>9</button>
      <button onClick={props.click}>.</button>
      <button onClick={props.click}>0</button>
      <button onClick={props.click} className="operation">
        <FontAwesomeIcon icon={faBackspace} />
      </button>
      <button onClick={props.click} className="operation">
        C
      </button>
      <button onClick={props.click} className="operation">
        =
      </button>
    </div>
  );
};

export default Keyboard;
