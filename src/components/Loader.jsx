/*import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;*/


import { Html, useProgress } from "@react-three/drei";
import { useState, useEffect } from "react";

const CanvasLoader = ({ onLoadingComplete }) => {
  const { progress } = useProgress();
  const [showModels, setShowModels] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setShowModels(true);
        if (onLoadingComplete) onLoadingComplete(); // Notify parent
      }, 500); // Delay models by 500ms
    }
  }, [progress, onLoadingComplete]);

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {!showModels && (
        <>
          <span className="canvas-loader"></span>
          <p
            style={{
              fontSize: 14,
              color: "#F1F1F1",
              fontWeight: 800,
              marginTop: 40,
            }}
          >
            {progress.toFixed(2)}%
          </p>
        </>
      )}
    </Html>
  );
};

export default CanvasLoader;
