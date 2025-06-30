const Career = () => {
  return (
    <main className="flex-1 bg-[#8B0000] text-white font-roboto-condensed px-6 sm:px-10 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold mb-8">Careers at TLO Advocates</h1>
        <p className="text-[clamp(1rem,2.5vw,1.5rem)] mb-12">
          At TLO, we believe in nurturing talent and building a future together.
          We offer a dynamic and inclusive workplace for professionals who value
          integrity, collaboration, and growth.
        </p>

        <div className="text-left space-y-10">
          <section>
            <h2 className="text-[clamp(1.5rem,4vw,2rem)] font-semibold mb-4">Why Work With Us?</h2>
            <ul className="list-disc list-inside space-y-2 text-[clamp(1rem,2.5vw,1.25rem)]">
              <li>Exposure to high-profile legal matters across industries</li>
              <li>Supportive mentorship and professional development</li>
              <li>Flexible, inclusive, and collaborative work culture</li>
              <li>Opportunities for long-term career advancement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[clamp(1.5rem,4vw,2rem)] font-semibold mb-4">Current Openings</h2>
            <p className="text-[clamp(1rem,2.5vw,1.25rem)]">
              We are currently hiring for:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2 text-[clamp(1rem,2.5vw,1.25rem)]">
              <li>Junior Associate – Corporate Law</li>
              <li>Legal Intern – Summer Program 2025</li>
            </ul>
            <p className="mt-4 text-[clamp(1rem,2.5vw,1.25rem)]">
              To apply, send your CV and cover letter to:{" "}
              <a href="mailto:careers@tlofirm.com" className="text-blue-300 hover:underline">
                careers@tlofirm.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-[clamp(1.5rem,4vw,2rem)] font-semibold mb-4">Internships</h2>
            <p className="text-[clamp(1rem,2.5vw,1.25rem)]">
              Our internship programs give students and recent graduates hands-on experience in real legal work, guided by our team of experienced professionals.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Career;
