'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface UserAvatarProps {
  username: string;
  avatar: string;
}

const UserAvatar = ({ username, avatar }: UserAvatarProps) => {
  return (
    <Link 
      href={`/profile/${username}`}
      className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
    >
      <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-accent">
        <Image
          src={avatar}
          alt={username}
          width={32}
          height={32}
          className="object-cover"
        />
      </div>
      <span className="text-sm font-medium text-primary hidden sm:block">
        {username}
      </span>
    </Link>
  );
};

export default UserAvatar; 