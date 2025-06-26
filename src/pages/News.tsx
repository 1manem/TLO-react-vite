import sampleImage from 'src/assets/office.jpg';
import '../index.css';

const News = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#910000] to-[#660000] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 text-left pl-[40px]">
          <h1 className="text-[96px] font-bold font-roboto-condensed leading-none mb-6">
            NEWS PAGE.
          </h1>
          <p className="text-[32px] font-normal font-roboto-condensed leading-snug">
            Crossing all obstacles<br />
            to achieve our client’s goals
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src={sampleImage}
            alt="Office"
            className="rounded-md w-full object-cover max-h-[400px]"
          />
        </div>
      </div>
    </main>
  );
};

export default News;

// src/index.css additions
