"use client";

import Image from "next/image";
import CMeJobs from "@/assets/images/Homescreen/CMeJobs.webp";
import RagaAI from "@/assets/images/Homescreen/RagaAI.jpeg";

export default function CompaniesMarque() {
  const companiesList = [
    { id: 1, name: "RagaAI", image: RagaAI },
    { id: 2, name: "CMeJobs", image: CMeJobs },
    { id: 2, name: "CMeJobs", image: CMeJobs },
    { id: 2, name: "CMeJobs", image: CMeJobs },
    { id: 2, name: "CMeJobs", image: CMeJobs },
  ];

  return (
    
   <div style={{width:"100%", backgroundColor:"green",display:"flex", justifyContent:"center"}} >
     <div className="marquee-wrapper">
      <div className="marquee-track">
        {[...companiesList, ...companiesList].map((item, i) => (
          <div className="marquee-item" key={i}>
            <Image src={item.image} alt={item.name} fill />
          </div>
        ))}
      </div>

      <style jsx>{`
        .marquee-wrapper {
          overflow: hidden;
          width: 50%;
          background: #fff;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 12s linear infinite;
          // background: red;
        }

        .marquee-item {
          width: 80px;
          height: 80px;
          position: relative;
          margin: 0 20px;
          flex-shrink: 0;
        }

        @keyframes marquee {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
   </div>
  );
}
