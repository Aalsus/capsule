import React from 'react';
import Image from 'next/image';

interface ClothingItem {
  id: string;
  name: string;
  type: string;
  category: string;
  color?: string;
  brand?: string;
  imageUrl?: string;
}

interface WardrobeProps {
  items: ClothingItem[];
}

const Wardrobe: React.FC<WardrobeProps> = ({ items }) => {
  const categories = {
    tops: items.filter(item => item.type === 'верх'),
    bottoms: items.filter(item => item.type === 'низ'),
    shoes: items.filter(item => item.type === 'обувь'),
    accessories: items.filter(item => item.type === 'аксессуары'),
  };

  const CategorySection = ({ title, items }: { title: string; items: ClothingItem[] }) => (
    <div className="mb-12">
      <h2 className="section-title">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {items.map((item) => (
          <div key={item.id} className="card group p-3 hover:scale-[1.02] transition-all duration-300">
            <div className="relative w-full aspect-[3/4] mb-3 rounded-lg overflow-hidden">
              {item.imageUrl ? (
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Нет фото</span>
                </div>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
            </div>
            <div className="space-y-1">
              <h3 className="font-medium text-sm truncate">{item.name}</h3>
              <div className="flex flex-wrap gap-1 text-xs text-secondary">
                <span className="px-1.5 py-0.5 bg-gray-100 rounded-full">{item.category}</span>
                {item.brand && (
                  <span className="px-1.5 py-0.5 bg-gray-100 rounded-full">{item.brand}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-[1920px] mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Мой гардероб</h1>
        <button className="btn btn-primary">
          Создать комплект
        </button>
      </div>
      
      <CategorySection title="Верхняя одежда" items={categories.tops} />
      <CategorySection title="Нижняя одежда" items={categories.bottoms} />
      <CategorySection title="Обувь" items={categories.shoes} />
      <CategorySection title="Аксессуары" items={categories.accessories} />
    </div>
  );
};

export default Wardrobe; 