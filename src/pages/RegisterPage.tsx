import { RegistrationForm } from '../components/RegistrationForm';
import { User } from '../types/user';

interface RegisterPageProps {
  onRegister: (user: User) => void;
}

export function RegisterPage({ onRegister }: RegisterPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Please fill in your information below
          </p>
        </div>
        <RegistrationForm onRegister={onRegister} />
      </div>
    </div>
  );
}