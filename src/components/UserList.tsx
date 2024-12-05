import { User } from '../types/user';

interface UserListProps {
  users: User[];
}

export function UserList({ users }: UserListProps) {
  return (
    <div className="space-y-4 w-full max-w-4xl">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Registered Users</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{user.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Email: {user.email}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Date of Birth: {new Date(user.dateOfBirth).toLocaleDateString()}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Registered: {new Date(user.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}