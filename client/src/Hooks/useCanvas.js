import { useEffect, useRef, useState } from "react";

export const useCanvas = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ctx, setCtx] = useState({});
  const canvasRef = useRef(null);

  const mouseDown = (e) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  const mouseMove = (e) => {
    if (e.buttons !== 1) return;
    ctx.beginPath(); // begin

    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#c0392b";

    ctx.moveTo(pos.x, pos.y); // from
    mouseDown(e);
    ctx.lineTo(pos.x, pos.y); // to

    ctx.stroke(); // draw it!
  };

  const mouseUp = () => {
    const canvasEl = canvasRef.current;
    const anchor = document.getElementById("download");
    anchor.setAttribute("download", "number.png");
    anchor.setAttribute(
      "href",
      canvasEl.toDataURL("image/png").replace("image/png", "image/octet-stream")
    );
  };

  const clearCanvas = () => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  };

  useEffect(() => {
    const canvasObj = canvasRef.current;
    const context = canvasObj.getContext("2d");
    setCtx(context);

    context.canvas.width = 280;
    context.canvas.height = 280;
  }, []);

  return [canvasRef, mouseMove, mouseDown, mouseUp, clearCanvas];
};
