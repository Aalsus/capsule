import Link from 'next/link';
import Stories from './components/Stories';
import PopularCapsules from './components/PopularCapsules';
import PopularItems from './components/PopularItems';
import UserAvatar from './components/UserAvatar';
import './globals.css';

// Временные данные для демонстрации
const mockUser = {
  username: "anna_p",
  avatar: "/avatars/anna.jpg"
};

const mockStories = [
  {
    id: "1",
    username: "anna_p",
    avatar: "/avatars/anna.jpg",
    hasUnseenStory: true
  },
  {
    id: "2",
    username: "masha_style",
    avatar: "/avatars/masha.jpg",
    hasUnseenStory: true
  },
  {
    id: "3",
    username: "dasha_capsule",
    avatar: "/avatars/dasha.jpg",
    hasUnseenStory: false
  },
  {
    id: "4",
    username: "kate_minimal",
    avatar: "/avatars/kate.jpg",
    hasUnseenStory: true
  },
  {
    id: "5",
    username: "liza_wardrobe",
    avatar: "/avatars/liza.jpg",
    hasUnseenStory: false
  }
];

const mockCapsules = [
  {
    id: "1",
    title: "Минималистичный гардероб на лето",
    username: "anna_p",
    avatar: "/avatars/anna.jpg",
    coverImage: "/capsules/summer.jpg",
    likes: 245,
    items: 15
  },
  {
    id: "2",
    title: "Базовый гардероб на каждый день",
    username: "masha_style",
    avatar: "/avatars/masha.jpg",
    coverImage: "/capsules/basic.jpg",
    likes: 189,
    items: 20
  },
  {
    id: "3",
    title: "Капсула для офиса",
    username: "dasha_capsule",
    avatar: "/avatars/dasha.jpg",
    coverImage: "/capsules/office.jpg",
    likes: 156,
    items: 12
  }
];

const mockItems = [
  {
    id: "1",
    name: "Белая футболка",
    brand: "Uniqlo",
    imageUrl: "/items/tshirt.jpg",
    likes: 89,
    saves: 45,
    username: "anna_p",
    avatar: "/avatars/anna.jpg"
  },
  {
    id: "2",
    name: "Черные джинсы",
    brand: "Levi's",
    imageUrl: "/items/jeans.jpg",
    likes: 76,
    saves: 38,
    username: "masha_style",
    avatar: "/avatars/masha.jpg"
  },
  {
    id: "3",
    name: "Белая рубашка",
    brand: "Massimo Dutti",
    imageUrl: "/items/shirt.jpg",
    likes: 65,
    saves: 29,
    username: "dasha_capsule",
    avatar: "/avatars/dasha.jpg"
  },
  {
    id: "4",
    name: "Черные ботинки",
    brand: "Dr. Martens",
    imageUrl: "/items/boots.jpg",
    likes: 92,
    saves: 47,
    username: "kate_minimal",
    avatar: "/avatars/kate.jpg"
  },
  {
    id: "5",
    name: "Черная сумка",
    brand: "COS",
    imageUrl: "/items/bag.jpg",
    likes: 58,
    saves: 31,
    username: "liza_wardrobe",
    avatar: "/avatars/liza.jpg"
  }
];

export default function Home() {
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
              <UserAvatar username={mockUser.username} avatar={mockUser.avatar} />
              <Link href="/auth" className="btn btn-primary">
                Войти
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto">
        <Stories stories={mockStories} />
        
        <section className="py-8">
          <h2 className="text-2xl font-bold text-primary px-4 mb-4">
            Популярные капсулы
          </h2>
          <PopularCapsules capsules={mockCapsules} />
        </section>

        <section className="py-8">
          <h2 className="text-2xl font-bold text-primary px-4 mb-4">
            Популярная одежда
          </h2>
          <PopularItems items={mockItems} />
        </section>
      </main>

      <footer className="bg-[var(--surface)] border-t border-gray-100 mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[var(--secondary)]">
            © 2024 Capsule. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
} 