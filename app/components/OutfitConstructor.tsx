'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';

interface ClothingItem {
  id: string;
  name: string;
  type: string;
  category: string;
  brand: string;
  imageUrl: string;
}

interface OutfitConstructorProps {
  items: ClothingItem[];
}

const OutfitConstructor = ({ items }: OutfitConstructorProps) => {
  const [selectedItems, setSelectedItems] = useState<ClothingItem[]>([]);
  const [draggedItem, setDraggedItem] = useState<ClothingItem | null>(null);

  const handleDragStart = useCallback((item: ClothingItem) => {
    setDraggedItem(item);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (draggedItem) {
      setSelectedItems(prev => [...prev, draggedItem]);
      setDraggedItem(null);
    }
  }, [draggedItem]);

  const removeItem = useCallback((itemId: string) => {
    setSelectedItems(prev => prev.filter(item => item.id !== itemId));
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Палитра с одеждой */}
      <div className="w-full lg:w-1/3 bg-[var(--surface)] rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Мой гардероб</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={() => handleDragStart(item)}
              className="cursor-move bg-white rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-square mb-2">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover rounded"
                />
              </div>
              <p className="text-sm font-medium truncate">{item.name}</p>
              <p className="text-xs text-gray-500 truncate">{item.brand}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Область конструктора */}
      <div className="flex-1">
        <div
          className="bg-white rounded-lg p-4 min-h-[500px] border-2 border-dashed border-gray-200"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <h3 className="text-lg font-semibold mb-4">Конструктор образа</h3>
          
          {selectedItems.length === 0 ? (
            <div className="flex items-center justify-center h-[400px] text-gray-400">
              Перетащите вещи сюда для создания образа
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {selectedItems.map((item) => (
                <div
                  key={item.id}
                  className="relative bg-white rounded-lg p-2 shadow-sm"
                >
                  <button
                    onClick={() => removeItem(item.id)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    ×
                  </button>
                  <div className="relative aspect-square mb-2">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover rounded"
                    />
                  </div>
                  <p className="text-sm font-medium truncate">{item.name}</p>
                  <p className="text-xs text-gray-500 truncate">{item.brand}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {selectedItems.length > 0 && (
          <div className="mt-4 flex justify-end">
            <button className="btn btn-primary">
              Сохранить образ
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OutfitConstructor; 