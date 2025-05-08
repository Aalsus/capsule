'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Capsule {
  id: string;
  title: string;
  username: string;
  avatar: string;
  coverImage: string;
  likes: number;
  items: number;
}

interface PopularCapsulesProps {
  capsules: Capsule[];
}

const PopularCapsules = ({ capsules }: PopularCapsulesProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {capsules.map((capsule) => (
        <Link href={`/capsule/${capsule.id}`} key={capsule.id}>
          <div className="bg-surface rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative aspect-square">
              <Image
                src={capsule.coverImage}
                alt={capsule.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-primary mb-2">
                {capsule.title}
              </h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden">
                    <Image
                      src={capsule.avatar}
                      alt={capsule.username}
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm text-secondary">
                    {capsule.username}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-secondary">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    {capsule.likes}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    {capsule.items}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PopularCapsules; 