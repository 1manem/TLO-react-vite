import { useState } from 'react';

const Career = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    coverLetter: '',
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null); // ✅ For resume file

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile) {
      alert('Please upload a resume file.');
      return;
    }

    const formPayload = new FormData();
    formPayload.append('name', formData.name);
    formPayload.append('email', formData.email);
    formPayload.append('position', formData.position);
    formPayload.append('coverLetter', formData.coverLetter);
    formPayload.append('resume', selectedFile); // ✅ Must match backend field

    try {
      const res = await fetch('http://localhost:5000/api/apply', {
        method: 'POST',
        body: formPayload,
      });

      const data = await res.json();
      alert(data.message);
      setFormData({ name: '', email: '', position: '', coverLetter: '' });
      setSelectedFile(null);
    } catch (error) {
      alert('Failed to submit application.');
    }
  };

  return (
    <main className="flex-1 bg-[#ECECEC] text-[#660000] font-roboto-condensed px-6 sm:px-10 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[clamp(2rem,6vw,4rem)] font-bold text-center mb-8">Careers at TLO Advocates</h1>

        <section>
          <h2 className="text-[clamp(1.5rem,4vw,2rem)] font-semibold mb-4">Apply Now</h2>
          <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded text-[#660000] bg-white"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded text-[#660000] bg-white"
              />
            </div>
            <select
              name="position"
              required
              value={formData.position}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded text-[#660000] bg-white"
            >
              <option value="">Select Position</option>
              <option value="Junior Associate – Corporate Law">Junior Associate – Corporate Law</option>
              <option value="Legal Intern – Summer Program 2025">Legal Intern – Summer Program 2025</option>
            </select>
            <textarea
              name="coverLetter"
              required
              rows={6}
              placeholder="Cover Letter"
              value={formData.coverLetter}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded text-[#660000] bg-white"
            ></textarea>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              required
              onChange={handleFileChange}
              className="block w-full"
            />
            <button
              type="submit"
              className="w-full sm:w-fit bg-[#660000] hover:bg-[#8B0000] text-white px-6 py-3 rounded transition"
            >
              Submit Application
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Career;
