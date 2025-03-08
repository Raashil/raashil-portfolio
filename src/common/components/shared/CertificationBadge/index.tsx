import Image from 'next/image';
import React from 'react';

interface CertificationBadgeProps {
  src: string; // Path to the badge image
  alt: string; // Alt text for the image
  name: string; // Name of the certification
  width?: number; // Optional: Width of the image
  height?: number; // Optional: Height of the image
  link?: string; // Optional: Link to the certification details
}

const CertificationBadge: React.FC<CertificationBadgeProps> = ({
  src,
  alt,
  name,
  width = 200,
  height = 200,
  link,
}) => {
  const image = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="rounded-lg shadow-lg hover:scale-105 transition-transform"
    />
  );

  return (
    <div className="text-center" style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {image}
        </a>
      ) : (
        image
      )}
    </div>
  );
};

export default CertificationBadge;