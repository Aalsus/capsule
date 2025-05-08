import AuthForm from '../components/AuthForm';

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-surface border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-accent">
                Capsule
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <AuthForm />
      </main>
    </div>
  );
} 