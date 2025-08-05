import React from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetail.css";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Pi Securities Public Company Limited",
    description: "Design and Develop Websites",
    logo: "/photo/pi.png",
    category: "FinTech",
    images: [
      "/photo/pi/1.png",
      "/photo/pi/2.png",
      "/photo/pi/3.png",
      "/photo/pi/4.png",
      "/photo/pi/5.png",
      "/photo/pi/6.png",
      "/photo/pi/7.png",
      "/photo/pi/8.png",
      "/photo/pi/9.png",
      "/photo/pi/10.png",
      "/photo/pi/11.png",
      "/photo/pi/12.png",
      "/photo/pi/13.png",
      "/photo/pi/14.png",
      "/photo/pi/15.png",
      "/photo/pi/16.png",
    ],
  },
  {
    id: 2,
    title: "Klang Hospital",
    description: "Design and Develop Websites",
    logo: "/photo/klang.png",
    category: "Healthcare",
    images: [
      "/photo/klang/1.png",
      "/photo/klang/2.png",
      "/photo/klang/3.png",
      "/photo/klang/4.png",
      "/photo/klang/5.png",
      "/photo/klang/6.png",
      "/photo/klang/7.png",
      "/photo/klang/8.png",
      "/photo/klang/9.png",
      "/photo/klang/10.png",
    ],
  },
  {
    id: 3,
    title: "OmniFood",
    description: "Design and Develop Websites",
    logo: "/photo/omnifood.png",
    category: "Academic",
    images: [
      "/photo/omnifood/11.png",
      "/photo/omnifood/22.png",
      "/photo/omnifood/33.png",
      "/photo/omnifood/44.png",
      "/photo/omnifood/55.png",
      "/photo/omnifood/66.png",
      "/photo/omnifood/77.png",
      "/photo/omnifood/88.png",
      "/photo/omnifood/99.png",
    ],
  },
  {
    id: 4,
    title: "Deli Delivery Food",
    description: "Design Websites",
    logo: "/photo/deli.png",
    category: "Academic",
    images: [
      "/photo/delivery/01.jpg",
      "/photo/delivery/02.jpg",
      "/photo/delivery/03.jpg",
      "/photo/delivery/04.jpg",
      "/photo/delivery/05.jpg",
      "/photo/delivery/06.jpg",
      "/photo/delivery/07.jpg",
      "/photo/delivery/08.jpg",
      "/photo/delivery/010.jpg",
      "/photo/delivery/011.jpg",
      "/photo/delivery/012.jpg",
      "/photo/delivery/013.jpg",
      "/photo/delivery/014.jpg",
      "/photo/delivery/015.jpg",
      "/photo/delivery/016.jpg",
      "/photo/delivery/017.jpg",
      "/photo/delivery/018.jpg",
      "/photo/delivery/019.jpg",
      "/photo/delivery/020.jpg",
      "/photo/delivery/021.jpg",
      "/photo/delivery/022.jpg",
      "/photo/delivery/023.jpg",
      "/photo/delivery/024.jpg",
    ],
  },
  {
    id: 5,
    title: "Health and Fitness",
    description: "Design Websites",
    logo: "/photo/health.png",
    category: "Academic",
    images: [
      "/photo/health/1.png",
      "/photo/health/2.png",
      "/photo/health/3.png",
      "/photo/health/4.png",
      "/photo/health/5.png",
      "/photo/health/7.png",
      "/photo/health/8.png",
      "/photo/health/9.png",
      "/photo/health/10.png",
      "/photo/health/11.png",
      "/photo/health/12.png",
      "/photo/health/13.png",
      "/photo/health/14.png",
      "/photo/health/15.png",
      "/photo/health/16.png",
    ],
  },
  {
    id: 6,
    title: "A Star Technology Company",
    description: "Design Websites",
    logo: "/photo/a-star.png",
    category: "websites company",
    images: [
      "/photo/a-star/a1.png",
      "/photo/a-star/a2.png",
      "/photo/a-star/a3.png",
      "/photo/a-star/a4.png",
      "/photo/a-star/a5.png",
      "/photo/a-star/a6.png",
      "/photo/a-star/a7.png",
    ],
  },
  {
    id: 7,
    title: "BeTask Consulting Company",
    description: "Design Websites and Application",
    logo: "/photo/betask.png",
    category: "User Form Service",
    images: [
      "/photo/betask/Desktop.jpg",
      "/photo/betask/Mobile1.jpg",
      "/photo/betask/Mobile2.jpg",
      "/photo/betask/Mobile3.jpg",
    ],
  },
  {
    id: 8,
    title: "SparkJoy Company",
    description: "Design Websites and Application",
    logo: "/photo/sparkjoy.png",
    category: "Novel Application",
    images: ["/photo/sparkjoy/Desktop.png", "/photo/sparkjoy/Home.png"],
  },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  const [previewIndex, setPreviewIndex] = useState(null);

  if (!project) {
    return <div>Project not found</div>;
  }

  // ฟังก์ชันเปิด preview
  const openPreview = (index) => {
    setPreviewIndex(index);
  };

  // ฟังก์ชันปิด preview
  const closePreview = () => {
    setPreviewIndex(null);
  };

  return (
    <div className="project-detail-container">
      <h1 className="project-detail-title">{project.title}</h1>
      <p className="project-detail-description">{project.description}</p>

      <div className="project-detail-grid">
        {project.images.map((imgSrc, idx) => (
          <img
            key={idx}
            src={imgSrc}
            alt={`${project.title} - image ${idx + 1}`}
            className="project-detail-image"
            onClick={() => openPreview(idx)}
          />
        ))}
      </div>

      {previewIndex !== null && (
        <div className="lightbox-backdrop" onClick={closePreview}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()} // กันไม่ให้คลิกหลุด modal เมื่อคลิกในภาพ
          >
            <button className="lightbox-close-button" onClick={closePreview}>
              &times;
            </button>
            <img
              src={project.images[previewIndex]}
              alt={`${project.title} - preview`}
              className="lightbox-image"
            />
          </div>
        </div>
      )}
    </div>
  );
}
