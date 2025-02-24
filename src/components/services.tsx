"use client";

import { JSX, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tree, TreeNode } from "react-organizational-chart";
import Parent from "./ServicesComponents/Parent";
import Child from "./ServicesComponents/Child";
import GrandChild from "./ServicesComponents/GrandChild";
import GreatGrandChild from "./ServicesComponents/GreatGrandChild";
import { Vortex } from "../components/ui/vortex";


export default function Services() {
  type Service = {
    id: string;
    title: string;
    icon: JSX.Element;
    description: string;
    subservices: { title: string; description: string }[];
  };

  const [lineGradient, setLineGradient] = useState("#D3D3D3");

  useEffect(() => {
    let colors = ["#D3D3D3", "#A9A9A9", "#808080", "#696969", "#D3D3D3"];
    let index = 0;
    const interval = setInterval(() => {
      setLineGradient(colors[index]);
      index = (index + 1) % colors.length;
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (


    <section id="services" className=" h-[72rem] bg-slate-950 overflow-hidden relative w-screen mx-auto rounded-md  ">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center w-full h-full py-20"
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-4"
          >
            Our Services
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
            Comprehensive solutions in engineering, manufacturing, and talent services
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full "
        >
          <Tree
            lineWidth={"2px"}
            lineColor={lineGradient}
            lineBorderRadius={"10px"}
            label={<Parent link="/" title="ERAYA" />}
          >
            <TreeNode label={<Child link="/" title="Design and Enginnering" />}>
              <TreeNode label={<GrandChild link="/" title="Computer Aided Design(CAD)" />}>
                <TreeNode label={<GreatGrandChild link="/" title="Computer Aided Machining (CAM)" />}>
                  <TreeNode label={<GreatGrandChild link="/" title="Finite Element Analysis (FEA)" />}>
                    <TreeNode label={<GreatGrandChild link="/" title="Computational Fluid  Dynamics (CFD)" />}>
                      <TreeNode label={<GreatGrandChild link="/" title="Design Optimization" />}>
                      </TreeNode>
                    </TreeNode>
                  </TreeNode>
                </TreeNode>
              </TreeNode>
              <TreeNode label={<GrandChild link="/" title="Product Development" />}>
                <TreeNode label={<GreatGrandChild link="/" title="Computer Aided Machining (CAM)" />}>
                  <TreeNode label={<GreatGrandChild link="/" title="Finite Element Analysis (FEA)" />}>
                    <TreeNode label={<GreatGrandChild link="/" title="Computational Fluid  Dynamics (CFD)" />}>
                      <TreeNode label={<GreatGrandChild link="/" title="Design Optimization" />}>
                      </TreeNode>
                    </TreeNode>
                  </TreeNode>
                </TreeNode>
              </TreeNode>
              <TreeNode label={<GrandChild link="/" title="Testing" />}>
                <TreeNode label={<GreatGrandChild link="/" title="Computer Aided Machining (CAM)" />}>
                  <TreeNode label={<GreatGrandChild link="/" title="Finite Element Analysis (FEA)" />}>
                    <TreeNode label={<GreatGrandChild link="/" title="Computational Fluid  Dynamics (CFD)" />}>
                      <TreeNode label={<GreatGrandChild link="/" title="Design Optimization" />}>
                        <TreeNode label={<GreatGrandChild link="/" title="Computer Aided Machining (CAM)" />}>
                          <TreeNode label={<GreatGrandChild link="/" title="Finite Element Analysis (FEA)" />}>
                            <TreeNode label={<GreatGrandChild link="/" title="Computational Fluid  Dynamics (CFD)" />}>
                              <TreeNode label={<GreatGrandChild link="/" title="Design Optimization" />}>
                              </TreeNode>
                            </TreeNode>
                          </TreeNode>
                        </TreeNode>
                      </TreeNode>
                    </TreeNode>
                  </TreeNode>
                </TreeNode>
              </TreeNode>
            </TreeNode>
            <TreeNode label={<Child link="/" title="Manufacturing" />}>
              <TreeNode label={<GreatGrandChild link="/" title="Finite Element Analysis (FEA)" />}>
                <TreeNode label={<GreatGrandChild link="/" title="Computational Fluid  Dynamics (CFD)" />}>
                  <TreeNode label={<GreatGrandChild link="/" title="Design Optimization" />}>
                    <TreeNode label={<GreatGrandChild link="/" title="Computer Aided Machining (CAM)" />}>
                      <TreeNode label={<GreatGrandChild link="/" title="Finite Element Analysis (FEA)" />}>
                        <TreeNode label={<GreatGrandChild link="/" title="Computational Fluid  Dynamics (CFD)" />}>
                          <TreeNode label={<GreatGrandChild link="/" title="Design Optimization" />}>
                          </TreeNode>
                        </TreeNode>
                      </TreeNode>
                    </TreeNode>
                  </TreeNode>
                </TreeNode>
              </TreeNode>
            </TreeNode>
            <TreeNode label={<Child link="/" title="Talent Services" />}>

              <TreeNode label={<GreatGrandChild link="/" title="Finite Element Analysis (FEA)" />}>
                <TreeNode label={<GreatGrandChild link="/" title="Computational Fluid  Dynamics (CFD)" />}>
                  <TreeNode label={<GreatGrandChild link="/" title="Design Optimization" />}>
                    <TreeNode label={<GreatGrandChild link="/" title="Computer Aided Machining (CAM)" />}>
                      <TreeNode label={<GreatGrandChild link="/" title="Finite Element Analysis (FEA)" />}>
                        <TreeNode label={<GreatGrandChild link="/" title="Computational Fluid  Dynamics (CFD)" />}>
                          <TreeNode label={<GreatGrandChild link="/" title="Design Optimization" />}>
                          </TreeNode>
                        </TreeNode>
                      </TreeNode>
                    </TreeNode>
                  </TreeNode>
                </TreeNode>
              </TreeNode>
            </TreeNode>
          </Tree>
        </motion.div>
      </Vortex>
    </section>

  );
}


// <TreeNode label={<div>Grand Child 2</div>} />