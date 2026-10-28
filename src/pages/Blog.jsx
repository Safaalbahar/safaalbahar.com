import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/useLanguage';
import { Calendar, User } from 'lucide-react';


const Blog = () => {
  const { t, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: t.blog.categories.all },
    { id: 'seafood', name: t.blog.categories.seafood },
    { id: 'frozen', name: t.blog.categories.frozen },
    { id: 'horeca', name: t.blog.categories.horeca },
    { id: 'market', name: t.blog.categories.market }
  ];

  const posts = [
    {
      title: isRTL ? 'أفضل الممارسات لتخزين المأكولات البحرية المجمدة' : 'Best Practices for Storing Frozen Seafood',
      category: 'seafood',
      date: '2025-01-10',
      author: isRTL ? 'فريق صفا البحر' : 'SAFA AL BAHAR Team',
      excerpt: isRTL ? 'تعرف على كيفية الحفاظ على جودة المأكولات البحرية المجمدة في عملك.' : 'Learn how to maintain the quality of frozen seafood in your business.',
      image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47'
    },
    {
      title: isRTL ? 'اتجاهات سوق الأغذية في السعودية 2025' : 'Saudi Arabia Food Market Trends 2025',
      category: 'market',
      date: '2025-01-08',
      author: isRTL ? 'فريق صفا البحر' : 'SAFA AL BAHAR Team',
      excerpt: isRTL ? 'نظرة عامة على اتجاهات السوق الرئيسية التي تشكل صناعة الأغذية.' : 'An overview of key market trends shaping the food industry.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e'
    },
    {
      title: isRTL ? 'نصائح لإدارة سلسلة التبريد في قطاع الضيافة' : 'Cold Chain Management Tips for HORECA',
      category: 'horeca',
      date: '2025-01-05',
      author: isRTL ? 'فريق صفا البحر' : 'SAFA AL BAHAR Team',
      excerpt: isRTL ? 'نصائح أساسية لإدارة سلسلة التبريد في قطاع الفنادق والمطاعم.' : 'Essential tips for managing cold chain in hotels and restaurants.',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d'
    },
    {
      title: isRTL ? 'دليل المشتري: اختيار موردي اللحوم المجمدة' : 'Buyer\'s Guide: Choosing Frozen Meat Suppliers',
      category: 'frozen',
      date: '2025-01-03',
      author: isRTL ? 'فريق صفا البحر' : 'SAFA AL BAHAR Team',
      excerpt: isRTL ? 'ما الذي يجب البحث عنه عند اختيار مورد اللحوم المجمدة لعملك.' : 'What to look for when selecting a frozen meat supplier for your business.',
      image: 'https://images.unsplash.com/photo-1588347818036-e62d094bb2c8'
    },
    {
      title: isRTL ? 'تحسين قائمة المطعم باستخدام المأكولات البحرية الموسمية' : 'Optimizing Restaurant Menus with Seasonal Seafood',
      category: 'horeca',
      date: '2024-12-28',
      author: isRTL ? 'فريق صفا البحر' : 'SAFA AL BAHAR Team',
      excerpt: isRTL ? 'كيفية إنشاء قوائم جذابة مع المأكولات البحرية الطازجة الموسمية.' : 'How to create appealing menus with fresh seasonal seafood.',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de'
    },
    {
      title: isRTL ? 'حلول التوريد بالجملة للمطابخ المركزية' : 'Bulk Supply Solutions for Central Kitchens',
      category: 'frozen',
      date: '2024-12-25',
      author: isRTL ? 'فريق صفا البحر' : 'SAFA AL BAHAR Team',
      excerpt: isRTL ? 'استراتيجيات فعالة للتوريد بالجملة في عمليات المطابخ الكبيرة.' : 'Efficient strategies for bulk supply in large kitchen operations.',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba'
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? posts 
    : posts.filter(p => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>{isRTL ? 'المدونة والتحديثات - صفا البحر' : 'Blog & Updates - SAFA AL BAHAR'}</title>
        <meta name="description" content={t.blog.subtitle} />
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-[#001F3F] to-[#003366]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}
          >
            {t.blog.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90"
            style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}
          >
            {t.blog.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-[#0099CC] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#001F3F] mb-3 line-clamp-2" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
                    {post.excerpt}
                  </p>
                  <button className="text-[#0099CC] font-semibold hover:text-[#007AA3] transition-colors" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Inter, sans-serif' }}>
                    {t.blog.readMore} →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Blog;