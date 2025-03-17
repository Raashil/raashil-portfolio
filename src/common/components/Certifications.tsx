"use client";

import CertificationBadge from '@/common/components/shared/CertificationBadge';
import SectionDivider from './shared/section-divider';
import SectionHeading from './shared/section-heading';
import { useSectionInView } from '@/common/lib/hooks';

export default function Certifications() {
  const { ref } = useSectionInView("certifications");

  return (
    <section 
      id="certifications" 
      ref={ref}
      className="flex w-full flex-col items-center justify-center py-24 dark:bg-darkBg dark:text-white"
    >
      <SectionHeading>Certifications</SectionHeading>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
      </div>
      <div className="flex w-full justify-center dark:bg-darkBg">
        <SectionDivider />
      </div>
    </section>
  );
}