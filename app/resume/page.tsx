export default function ResumePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-[#0c0a09] dark:to-gray-900">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-10 text-black dark:text-white">
          📄 Download My Resumes
        </h1>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="/resumes/BergenholtzResume.pdf"
            download
            className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-md font-semibold hover:opacity-90 transition"
          >
            Software Engineering Resume
          </a>

          <a
            href="/resumes/Data_BergenholtzResume.pdf"
            download
            className="px-6 py-3 border border-black dark:border-white text-black dark:text-white rounded-md font-semibold hover:opacity-90 transition"
          >
            Data Analytics Resume
          </a>
        </div>
      </div>
    </div>
  );
}
