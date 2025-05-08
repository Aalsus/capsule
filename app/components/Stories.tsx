'use client';

import React from 'react';
import Image from 'next/image';

interface Story {
  id: string;
  username: string;
  avatar: string;
  hasUnseenStory: boolean;
}

interface StoriesProps {
  stories: Story[];
}

const Stories = ({ stories }: StoriesProps) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex space-x-4 p-4">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center space-y-1">
            <div className={`relative w-16 h-16 rounded-full p-[2px] ${
              story.hasUnseenStory ? 'bg-gradient-to-tr from-yellow-400 to-pink-500' : 'bg-gray-200'
            }`}>
              <div className="w-full h-full rounded-full overflow-hidden bg-white p-[2px]">
                <Image
                  src={story.avatar}
                  alt={story.username}
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <span className="text-xs text-primary truncate max-w-[64px]">
              {story.username}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories; 