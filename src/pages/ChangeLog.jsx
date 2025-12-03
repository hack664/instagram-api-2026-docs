export default function ChangeLog() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Change Log</h1>

        <p className="text-gray-600 mb-8">
          All notable changes will be documented here.  
          This project follows a structured, version-based update log.
        </p>

        <div className="space-y-8">

          {/* Sample template entry – you can add more */}
          <div className="border-l-4 border-blue-500 pl-4">
            <h2 className="text-xl font-semibold text-gray-900">v1.0.0 – Initial Release</h2>
            <p className="text-gray-600 mt-2">
              • Added all Instagram API endpoint documentation  
              • Added complete headers, parameters, and sample responses  
              • Designed clean UI for API reference  
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
