'use client';

import React from 'react';
import Link from 'next/link';
import OutfitConstructor from '../components/OutfitConstructor';
import '../globals.css';

// Временные данные для демонстрации
const mockClothingItems = [
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
  {
    id: "6",
    name: "Белые кроссовки",
    type: "обувь",
    category: "кроссовки",
    brand: "Nike",
    imageUrl: "/items/sneakers.jpg"
  }
];

export default function ConstructorPage() {
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Конструктор образов
          </h1>
          <p className="text-secondary">
            Создавайте новые образы, перетаскивая вещи из вашего гардероба
          </p>
        </div>

        <OutfitConstructor items={mockClothingItems} />
      </main>
    </div>
  );
} 