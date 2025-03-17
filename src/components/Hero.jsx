import { motion } from "framer-motion";

import { styles } from "../styles";
//import { ComputersCanvas } from "./canvas";
//import { EarthCanvas } from "./canvas";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import HackerRoom from "./canvas/HackerRoom"
import { Suspense } from "react"
//import CanvasLoader from "./CanvasLoader"
//import { Leva, useControls } from "leva"
import { useMediaQuery } from "react-responsive"
import CanvasLoader from "./Loader";

const Hero = () => {

  const isMobile = useMediaQuery({maxWidth: 768})
  const isSmall = useMediaQuery({maxWidth:440})
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024})

  return (
    <section className={`relative w-full h-screen mx-auto `}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Lorems</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>

            

      <Canvas className="w-full h-full py-13 " style={{ touchAction: "pan-y" }}>
              
              <PerspectiveCamera makeDefault position={[0,0,30]}/>

              <Suspense fallback={<CanvasLoader/>}>
              <HackerRoom 
              scale={ isSmall ? 0.069: isMobile ? 0.09 : 0.12 }
              position={isMobile ? [0.5, -7.5, 0] : [2,-15.5, 2]}
              rotation = {[0, -Math.PI, 0]}
              
              //scale={[x.scale, x.scale,x.scale]}
              //position={[x.positionX,x.positionY,x.positionZ]}
              //rotation={[x.rotationX,x.rotationY,x.rotationZ]}
              />

              <ambientLight intensity={1}/>
              <directionalLight intensity={0.5} position={[10,10,10]}/>
              <OrbitControls
              enableZoom={false} 
              enableDamping
              dampingFactor={0.1}
              maxPolarAngle={Math.PI/2}
              minPolarAngle={Math.PI/3}
              />
              </Suspense>
              

          </Canvas>
      
          <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center lg:ml-5'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
  
      
    </section>
  );
};

export default Hero;




      /*<Canvas className="w-full h-full py-10">
              
              <PerspectiveCamera makeDefault position={[0,0,30]}/>
              <HackerRoom 
              scale={ isSmall ? 0.059: isMobile ? 0.09 : 0.12 }
              position={isMobile ? [0.5, -7.5, 0] : [2,-15.5, 2]}
              rotation = {[0, -Math.PI, 0]}
              
              //scale={[x.scale, x.scale,x.scale]}
              //position={[x.positionX,x.positionY,x.positionZ]}
              //rotation={[x.rotationX,x.rotationY,x.rotationZ]}
              />

              <ambientLight intensity={1}/>
              <directionalLight intensity={0.5} position={[10,10,10]}/>
              <OrbitControls
              touchAction="pan-y"
              enableZoom={false} 
              enableDamping
              dampingFactor={0.1}
              maxPolarAngle={Math.PI/2}
              minPolarAngle={Math.PI/2}
              />

          </Canvas>*/