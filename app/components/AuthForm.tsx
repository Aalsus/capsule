'use client';

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  username?: string;
}

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    username: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!isLogin) {
      if (!formData.name.trim()) {
        newErrors.name = 'Имя обязательно';
      }
      if (!formData.username.trim()) {
        newErrors.username = 'Никнейм обязателен';
      } else if (formData.username.length < 3) {
        newErrors.username = 'Никнейм должен быть не менее 3 символов';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Некорректный email';
    }

    if (!formData.password) {
      newErrors.password = 'Пароль обязателен';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Пароль должен быть не менее 6 символов';
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Пароли не совпадают';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Здесь будет логика авторизации/регистрации
      console.log(formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Очищаем ошибку при изменении поля
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-primary">
            {isLogin ? 'Вход в аккаунт' : 'Создание аккаунта'}
          </h2>
          <p className="mt-2 text-center text-sm text-secondary">
            {isLogin ? 'Нет аккаунта? ' : 'Уже есть аккаунт? '}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setErrors({});
                setFormData({
                  name: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
                  username: ''
                });
              }}
              className="font-medium text-accent hover:text-accent/80"
            >
              {isLogin ? 'Зарегистрироваться' : 'Войти'}
            </button>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            {!isLogin && (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">
                    Имя
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`appearance-none rounded-lg relative block w-full px-3 py-2 border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    } placeholder-gray-500 text-primary focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm`}
                    placeholder="Введите ваше имя"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-primary mb-1">
                    Никнейм
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    value={formData.username}
                    onChange={handleChange}
                    className={`appearance-none rounded-lg relative block w-full px-3 py-2 border ${
                      errors.username ? 'border-red-500' : 'border-gray-300'
                    } placeholder-gray-500 text-primary focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm`}
                    placeholder="Введите никнейм"
                  />
                  {errors.username && (
                    <p className="mt-1 text-sm text-red-500">{errors.username}</p>
                  )}
                </div>
              </>
            )}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={`appearance-none rounded-lg relative block w-full px-3 py-2 border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } placeholder-gray-500 text-primary focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm`}
                placeholder="Введите ваш email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-primary mb-1">
                Пароль
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={isLogin ? "current-password" : "new-password"}
                required
                value={formData.password}
                onChange={handleChange}
                className={`appearance-none rounded-lg relative block w-full px-3 py-2 border ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                } placeholder-gray-500 text-primary focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm`}
                placeholder="Введите пароль"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </div>
            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-primary mb-1">
                  Подтвердите пароль
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`appearance-none rounded-lg relative block w-full px-3 py-2 border ${
                    errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                  } placeholder-gray-500 text-primary focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm`}
                  placeholder="Повторите пароль"
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
                )}
              </div>
            )}
          </div>

          {isLogin && (
            <div className="flex items-center justify-end">
              <div className="text-sm">
                <a href="#" className="font-medium text-accent hover:text-accent/80">
                  Забыли пароль?
                </a>
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
            >
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-background text-secondary">
                Или войдите через
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Войти через Google</span>
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                />
              </svg>
            </button>

            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Войти через Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm; 