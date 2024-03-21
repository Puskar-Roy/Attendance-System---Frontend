const TakeAttendance = () => {
  return (
    <div className="flex justify-center min-h-[60vh] mt-20">
      <div className="bg-white overflow-hidden rounded-lg ">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-2xl font-bold leading-6 ubuntu-bold text-center text-gray-900">
            User <span className="text-indigo-500">Profile</span>
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-xl font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
                John Doe
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-xl font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
                johndoe@example.com
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-xl font-medium text-gray-500">Status</dt>
              <dd className="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
                present
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-xl font-medium text-gray-500">Date</dt>
              <dd className="mt-1 text-xl text-gray-900 sm:mt-0 sm:col-span-2">
                24/03/2024
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default TakeAttendance;
