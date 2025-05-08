import React from 'react';
import Image from 'next/image';

interface ProfileProps {
  user: {
    name: string;
    username: string;
    bio?: string;
    avatar?: string;
  };
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="card p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="relative w-40 h-40 rounded-2xl overflow-hidden ring-4 ring-[var(--accent)] ring-opacity-20">
            {user.avatar ? (
              <Image
                src={user.avatar}
                alt={user.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent)]/50 flex items-center justify-center">
                <span className="text-5xl text-white font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
            <p className="text-[var(--secondary)] text-lg mb-4">@{user.username}</p>
            {user.bio && (
              <p className="text-[var(--secondary)] text-lg leading-relaxed">{user.bio}</p>
            )}
            <div className="mt-6 flex gap-4 justify-center md:justify-start">
              <button className="btn btn-primary">
                Редактировать профиль
              </button>
              <button className="btn border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white">
                Поделиться
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 