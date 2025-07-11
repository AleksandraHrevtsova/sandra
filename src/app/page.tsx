import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import CompanyLogos from "@/components/CompanyLogos";

import PrintResume from "@/components/PrintResume";

export default function HomePage() {
  return (
    <>
      <main id="resume-content" className="min-h-screen bg-gray-50 dark:bg-gray-950 space-y-12">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <CompanyLogos />
        <EducationSection />
        <ProjectsSection />
      </main>
      <div className="no-print">
        <PrintResume />
      </div>
    </>
  );
}
