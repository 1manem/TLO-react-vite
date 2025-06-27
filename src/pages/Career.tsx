const Career = () => {
  return (
    <main className="flex-1 bg-white text-black font-dmsans px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Careers at Tiendas Law Offices</h1>
        <p className="text-lg mb-12">
          At TLO, we believe in nurturing talent and building a future together.
          We offer a dynamic and inclusive workplace for professionals who value
          integrity, collaboration, and growth.
        </p>

        <div className="text-left space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Why Work With Us?</h2>
            <ul className="list-disc list-inside space-y-1 text-base">
              <li>Exposure to high-profile legal matters across industries</li>
              <li>Supportive mentorship and professional development</li>
              <li>Flexible, inclusive, and collaborative work culture</li>
              <li>Opportunities for long-term career advancement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Current Openings</h2>
            <p className="text-base">
              We are currently hiring for:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-base">
              <li>Junior Associate – Corporate Law</li>
              <li>Legal Intern – Summer Program 2025</li>
            </ul>
            <p className="mt-4">
              To apply, send your CV and cover letter to:{" "}
              <a href="mailto:careers@tlofirm.com" className="text-blue-600 hover:underline">
                careers@tlofirm.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Internships</h2>
            <p className="text-base">
              Our internship programs give students and recent graduates hands-on experience in real legal work, guided by our team of experienced professionals.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Career;
