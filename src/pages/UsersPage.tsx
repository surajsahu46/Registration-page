import { Link } from 'react-router-dom';
import { UserList } from '../components/UserList';
import { User } from '../types/user';

interface UsersPageProps {
  users: User[];
}

export function UsersPage({ users }: UsersPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Registered Users</h1>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Register New User
          </Link>
        </div>
        <UserList users={users} />
      </div>
    </div>
  );
}