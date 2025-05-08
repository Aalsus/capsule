'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ClothingItem {
  id: string;
  name: string;
  brand: string;
  imageUrl: string;
  likes: number;
  saves: number;
  username: string;
  avatar: string;
}

interface PopularItemsProps {
  items: ClothingItem[];
}

const PopularItems = ({ items }: PopularItemsProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {items.map((item) => (
        <Link href={`/item/${item.id}`} key={item.id}>
          <div className="bg-surface rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative aspect-[3/4]">
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="text-sm font-medium text-primary truncate">
                {item.name}
              </h3>
              <p className="text-xs text-secondary mb-2">
                {item.brand}
              </p>
              <div className="flex items-center justify-between text-xs text-secondary">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full overflow-hidden">
                    <Image
                      src={item.avatar}
                      alt={item.username}
                      width={16}
                      height={16}
                      className="object-cover"
                    />
                  </div>
                  <span className="truncate max-w-[80px]">
                    {item.username}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    {item.likes}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                    {item.saves}
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

export default PopularItems; 