import { useEffect, useState } from "react";

const useAssetsLoader = (): boolean => {
  // const glbFile = "/dispglass.glb";
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  // const [glbFileLoaded, setGlbFileLoaded] = useState(!glbFile);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleAssetsLoaded = () => {
      setAssetsLoaded(true);
    };
    window.addEventListener("load", handleAssetsLoaded);

    // if (glbFile) {
    //   const loader = new GLTFLoader();
    //   loader.load(
    //     glbFile,
    //     () => setGlbFileLoaded(true),
    //     undefined,
    //     (error) => {
    //       console.error(`Error loading GLB file: ${glbFile}`, error)
    //       setGlbFileLoaded(true);
    //     },
    //   );
    // }

    return () => {
      window.removeEventListener("load", handleAssetsLoaded);
      setAssetsLoaded(false);
    };
  }, []);

  useEffect(() => {
    if (assetsLoaded) {
      setIsLoading(false);
    }
  }, [assetsLoaded]);

  return isLoading;
};

export default useAssetsLoader;
