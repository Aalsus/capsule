'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Wardrobe from '../../components/Wardrobe';

// Временные данные для демонстрации
const mockUser = {
  name: "Анна Петрова",
  username: "anna_p",
  bio: "Люблю минималистичный стиль и капсульный гардероб",
  avatar: "/avatars/anna.jpg",
  followers: 1234,
  following: 567,
  capsules: 5
};

const mockClothingItems = [
  // Верхняя одежда
  {
    id: "1",
    name: "Белая футболка",
    type: "верх",
    category: "футболка",
    brand: "Uniqlo",
    imageUrl: "/items/tshirt.jpg"
  },
  {
    id: "2",
    name: "Черная водолазка",
    type: "верх",
    category: "водолазка",
    brand: "COS",
    imageUrl: "/items/turtleneck.jpg"
  },
  {
    id: "3",
    name: "Белая рубашка",
    type: "верх",
    category: "рубашка",
    brand: "Massimo Dutti",
    imageUrl: "/items/shirt.jpg"
  },
  // Нижняя одежда
  {
    id: "4",
    name: "Черные джинсы",
    type: "низ",
    category: "джинсы",
    brand: "Levi's",
    imageUrl: "/items/jeans.jpg"
  },
  {
    id: "5",
    name: "Черные брюки",
    type: "низ",
    category: "брюки",
    brand: "COS",
    imageUrl: "/items/pants.jpg"
  },
  // Обувь
  {
    id: "6",
    name: "Белые кроссовки",
    type: "обувь",
    category: "кроссовки",
    brand: "Nike",
    imageUrl: "/items/sneakers.jpg"
  }
];

export default function ProfilePage({ params }: { params: { username: string } }) {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <nav className="bg-[var(--surface)] border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-[var(--accent)]">
                Capsule
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/auth" className="btn btn-primary">
                Войти
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
            <Image
              src={mockUser.avatar}
              alt={mockUser.username}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8 mb-4">
              <h1 className="text-2xl font-bold text-primary">
                {mockUser.username}
              </h1>
              <button className="btn btn-primary">
                Редактировать профиль
              </button>
            </div>
            <div className="flex space-x-8 mb-4">
              <div>
                <span className="font-semibold text-primary">{mockUser.capsules}</span>
                <span className="text-secondary ml-1">капсул</span>
              </div>
              <div>
                <span className="font-semibold text-primary">{mockUser.followers}</span>
                <span className="text-secondary ml-1">подписчиков</span>
              </div>
              <div>
                <span className="font-semibold text-primary">{mockUser.following}</span>
                <span className="text-secondary ml-1">подписок</span>
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-primary">{mockUser.name}</h2>
              <p className="text-secondary">{mockUser.bio}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <Wardrobe items={mockClothingItems} />
        </div>
      </main>
    </div>
  );
} 