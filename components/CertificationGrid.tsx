import React from 'react';
import CertificationCard from './CertificationCard';
import { Certification } from '../types';
import RevealOnScroll from './RevealOnScroll';

interface CertificationGridProps {
  certifications: Certification[];
}

const CertificationGrid: React.FC<CertificationGridProps> = ({ certifications }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {certifications.map((cert, index) => (
        <RevealOnScroll key={cert.id} animation="scale-up" delay={index * 100}>
          <CertificationCard cert={cert} />
        </RevealOnScroll>
      ))}
    </div>
  );
};

export default CertificationGrid;