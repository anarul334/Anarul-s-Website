import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { BlogPost } from '../types';
import {
  Search,
  Calendar,
  Clock,
  User,
  ChevronRight,
  X,
  BookOpen,
  Share2,
} from 'lucide-react';

export const HealthBlog: React.FC = () => {
  const { language, t } = useLanguage();
  const { blogPosts } = useData();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>();
    blogPosts.forEach((post) => {
      cats.add(post.category[language]);
    });
    return Array.from(cats);
  }, [blogPosts, language]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'all' || post.category[language] === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title[language].toLowerCase().includes(q) ||
        post.summary[language].toLowerCase().includes(q) ||
        post.content[language].toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [blogPosts, selectedCategory, searchQuery, language]);

  return (
    <section id="blog" className="py-16 md:py-20 bg-slate-50/70 dark:bg-[#0F1B38] border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-semibold text-teal-700 dark:text-teal-400 mb-2">
            {language === 'bn' ? 'স্বাস্থ্য সচেতনতা' : 'Rural Health Education'}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F3A5F] dark:text-white tracking-tight" style={{ textWrap: 'balance' }}>
            {t('blogTitle')}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {t('blogSubtitle')}
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          
          {/* Search Bar */}
          <div className="relative max-w-md w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('blogSearchPlaceholder')}
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white dark:bg-[#111C35] rounded-xl border border-slate-200 dark:border-slate-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl border border-slate-200/60 dark:border-slate-700">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-white dark:bg-[#111C35] text-[#1F3A5F] dark:text-teal-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t('allCategories')}
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-white dark:bg-[#111C35] text-[#1F3A5F] dark:text-teal-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="p-12 text-center bg-white dark:bg-[#111C35] rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-500 text-sm">
            {language === 'bn' ? 'কোনো স্বাস্থ্য প্রবন্ধ পাওয়া যায়নি।' : 'No health guides found matching your search.'}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="group bg-white dark:bg-[#111C35] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 flex flex-col justify-between hover:shadow-md hover:border-teal-500/50 transition-all cursor-pointer"
              >
                <div className="space-y-3">
                  
                  {/* Clean unboxed metadata with typographic middot */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-teal-700 dark:text-teal-400">
                      {post.category[language]}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{post.readTime}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{post.date}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#1F3A5F] dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors line-clamp-2">
                    {post.title[language]}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {post.summary[language]}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-teal-700 dark:text-teal-400 group-hover:translate-x-1 transition-transform">
                  <span>{t('readArticle')}</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </article>
            ))}
          </div>
        )}

      </div>

      {/* Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs">
          <div
            className="bg-white dark:bg-[#111C35] w-full max-w-2xl max-h-[85vh] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-2xl overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label={t('closeArticle')}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Post Meta */}
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
              <span className="font-semibold text-teal-700 dark:text-teal-400">
                {selectedPost.category[language]}
              </span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">{selectedPost.date}</span>
              <span aria-hidden="true">·</span>
              <span>{selectedPost.author}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#1F3A5F] dark:text-white mb-4">
              {selectedPost.title[language]}
            </h3>

            <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-200 mb-6 italic">
              {selectedPost.summary[language]}
            </div>

            <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed whitespace-pre-line space-y-4">
              {selectedPost.content[language]}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {language === 'bn' ? 'লেখক: মোঃ আনোয়ারুল ইসলাম (RMP)' : 'By Md. Anoarul Islam (RMP)'}
              </span>
              <button
                onClick={() => setSelectedPost(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors cursor-pointer"
              >
                {t('closeArticle')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
