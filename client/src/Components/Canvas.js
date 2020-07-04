import React from "react";
import { useCanvas } from "../Hooks/useCanvas";

import "../css/tailwind.css";

const Canvas = () => {
  const [canvasRef, mouseMove, mouseDown, mouseUp, clearCanvas] = useCanvas();

  return (
    <div className="">
      <canvas
        ref={canvasRef}
        onMouseMove={mouseMove}
        onMouseDown={mouseDown}
        onMouseUp={mouseUp}
        className="bg-white"
      />
      <button className="bg-red-600 rounded m-2 p-2" onClick={clearCanvas}>
        Clear
      </button>
      <a id="download" href="google.com" className="text-white">
        download
      </a>
    </div>
  );
};

export default Canvas;
