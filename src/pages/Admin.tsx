import { useEffect, useState } from 'react';
import axios from 'axios';

// Define TypeScript interfaces
type Application = {
  name: string;
  email: string;
  message: string;
};

type Job = {
  id: number;
  title: string;
};

const Admin = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [newJob, setNewJob] = useState('');

  // Fetch jobs and applications on mount
  useEffect(() => {
    axios.get('/api/admin/applications').then((res) => setApplications(res.data));
    axios.get('/api/admin/jobs').then((res) => setJobs(res.data));
  }, []);

  // Add new job
  const addJob = () => {
    axios.post('/api/admin/jobs', { title: newJob }).then((res) => {
      setJobs((prev) => [...prev, res.data]);
      setNewJob('');
    });
  };

  // Delete a job by ID
  const deleteJob = (id: number) => {
    axios.delete(`/api/admin/jobs/${id}`).then(() => {
      setJobs((prev) => prev.filter((job) => job.id !== id));
    });
  };

  return (
    <main className="p-6 max-w-5xl mx-auto text-[#660000]">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      {/* Job Posting Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Job Postings</h2>
        <ul className="mb-4 space-y-1">
          {jobs.map((job) => (
            <li key={job.id} className="flex justify-between items-center border-b pb-1">
              <span>{job.title}</span>
              <button
                onClick={() => deleteJob(job.id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <input
            value={newJob}
            onChange={(e) => setNewJob(e.target.value)}
            className="border px-3 py-1 rounded w-full max-w-md"
            placeholder="New Job Title"
          />
          <button
            onClick={addJob}
            className="bg-[#660000] text-white px-4 py-1 rounded"
          >
            Add Job
          </button>
        </div>
      </section>

      {/* Applications Table */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Applications</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border px-2 py-1">Name</th>
                <th className="border px-2 py-1">Email</th>
                <th className="border px-2 py-1">Message</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, i) => (
                <tr key={i}>
                  <td className="border px-2 py-1">{app.name}</td>
                  <td className="border px-2 py-1">{app.email}</td>
                  <td className="border px-2 py-1">{app.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default Admin;
