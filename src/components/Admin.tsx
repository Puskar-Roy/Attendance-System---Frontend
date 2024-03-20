interface User {
  name: string;
  email: string;
  _id:string;
}
import { Link } from "react-router-dom";
const Admin = () => {
  const users: User[] = [
    { name: "Emily Jones", email: "adb@gmail.com" ,_id:"adsgisbguaobojgsabgoj"},
    { name: "David Lee", email: "adb@gmail.com" ,_id:"adsgisbguaobojgsabgoj"},
    { name: "Sophia Williams", email: "adb@gmail.com",_id:"adsgisbguaobojgsabgoj" },
    { name: "Michael Chen", email: "adb@gmail.com",_id:"adsgisbguaobojgsabgoj" },
    { name: "Mia Davis", email: "adb@gmail.com",_id:"adsgisbguaobojgsabgoj" },
    { name: "John Doe", email: "john.doe@example.com",_id:"adsgisbguaobojgsabgoj" },
    { name: "Jane Smith", email: "jane.smith@example.com",_id:"adsgisbguaobojgsabgoj" },
    { name: "Alice Johnson", email: "alice.johnson@example.com",_id:"adsgisbguaobojgsabgoj" },
    { name: "Bob Brown", email: "bob.brown@example.com",_id:"adsgisbguaobojgsabgoj" },
    { name: "Eva Wilson", email: "eva.wilson@example.com",_id:"adsgisbguaobojgsabgoj" },
    { name: "Harry Thompson", email: "harry.thompson@example.com",_id:"adsgisbguaobojgsabgoj" },
    { name: "Olivia Clark", email: "olivia.clark@example.com",_id:"adsgisbguaobojgsabgoj" },
    { name: "William Lewis", email: "william.lewis@example.com",_id:"adsgisbguaobojgsabgoj" },
    { name: "Isabella Hall", email: "isabella.hall@example.com" ,_id:"adsgisbguaobojgsabgoj"},
    { name: "Jack Allen", email: "jack.allen@example.com",_id:"adsgisbguaobojgsabgoj" },
    { name: "Ava Scott", email: "ava.scott@example.com",_id:"adsgisbguaobojgsabgoj" },
    { name: "James Green", email: "james.green@example.com",_id:"adsgisbguaobojgsabgoj" },
    { name: "Sophie Adams", email: "sophie.adams@example.com",_id:"adsgisbguaobojgsabgoj" },
    { name: "Lucas Baker", email: "lucas.baker@example.com",_id:"adsgisbguaobojgsabgoj" },
  ];

  return (
    <div className="h-[60vh] text-center flex flex-col gap-4">
      <div>
        <h1 className="text-2xl xl:text-3xl font-extrabold text-indigo-400 ubuntu-bold mt-12">
          All Users ({users.length})
        </h1>
      </div>
      <div className="sm:w-[40%] mx-auto max-h-[400px] overflow-y-auto">
        <ul className="divide-y divide-gray-200">
          {users.map((user, index) => (
            <Link
            to={`/user/${user._id}`}
              key={index}
              className="flex justify-center items-center py-4 px-6"
            >
              <h3 className="text-lg font-medium text-gray-800">
                {index + 1}.
              </h3>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-800">
                   {user.name}
                </h3>
                <p className="text-gray-600 text-base">{user.email}</p>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
