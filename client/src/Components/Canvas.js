import React from "react";
import { useCanvas } from "../Hooks/useCanvas";

import "../css/tailwind.css";

const Canvas = () => {
  const [
    canvasRef,
    mouseMove,
    mouseDown,
    clearCanvas,
    predict,
    pred,
  ] = useCanvas();

  return (
    <div className="flex flex-col items-center justify-center">
      <canvas
        id="canvas"
        ref={canvasRef}
        onMouseMove={mouseMove}
        onMouseDown={mouseDown}
        className="bg-white mx-auto border-2 border-white mt-4"
      />
      <div>
        <button className="bg-red-600 rounded m-2 p-2" onClick={clearCanvas}>
          Clear
        </button>
        <button className="bg-blue-500 rounded m-2 p-2" onClick={predict}>
          Predict
        </button>
      </div>
      <div className="text-white"> Predicted Number: {pred}</div>
    </div>
  );
};

export default Canvas;
