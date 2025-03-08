"use client";

import CertificationBadge from '@/common/components/shared/CertificationBadge';
import SectionDivider from './shared/section-divider';

export default function Certifications() {
  return (
    <section id="certifications" className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" >
        <CertificationBadge
          src="/certifications/aws-certified-cloud-practitioner.png"
          alt="AWS Certified Cloud Practitioner"
          name="AWS Certified Cloud Practitioner"
          // link="https://example.com/certification1"
          />
         <CertificationBadge
            src="/certifications/BMC_certification.png"
            alt="Bloomberg market Concepts"
            name="Bloomberg market Concepts"
            // link="https://example.com/certification1"
            />
          <CertificationBadge
            src="/certifications/inspire-international-student-professional-readiness-education-program-certification.png"
            alt="PACE INSPIRE"
            name="PACE INSPIRE"
            // link="https://example.com/certification1"
            />
      </div>
    </section>       
  );
}