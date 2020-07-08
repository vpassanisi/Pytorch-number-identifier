import { useEffect, useRef, useState } from "react";

export const useCanvas = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ctx, setCtx] = useState({});
  const [pred, setPred] = useState(null);
  const [canvas, setCanvas] = useState({});
  const canvasRef = useRef(null);

  const mouseDown = (e) => {
    const rect = canvas.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const mouseMove = (e) => {
    if (e.buttons !== 1) return;
    ctx.beginPath(); // begin

    ctx.lineWidth = 20;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#ffffff";

    ctx.moveTo(pos.x, pos.y); // from
    mouseDown(e);
    ctx.lineTo(pos.x, pos.y); // to

    ctx.stroke(); // draw it!
  };

  const predict = async () => {
    const canvasEl = canvasRef.current;
    let blob = await new Promise((resolve) =>
      canvasEl.toBlob(resolve, "image/png")
    );
    try {
      const res = await fetch("/predict", {
        method: "POST",
        body: blob,
      });

      const json = await res.json();

      if (json.data) {
        setPred(json.data);
      } else {
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const clearCanvas = () => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    setPred(null);
  };

  useEffect(() => {
    const canvasObj = canvasRef.current;
    const context = canvasObj.getContext("2d");
    setCtx(context);
    setCanvas(document.getElementById("canvas"));

    context.canvas.width = 280;
    context.canvas.height = 280;

    context.fillStyle = "black";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }, []);

  return [canvasRef, mouseMove, mouseDown, clearCanvas, predict, pred];
};
