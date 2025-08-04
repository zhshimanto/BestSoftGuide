<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Software Categories
          </h1>
          <p class="text-xl text-primary-100 max-w-3xl mx-auto">
            Explore software by category to find the perfect tools for your specific needs.
          </p>
        </div>
      </div>
    </section>

    <!-- Categories Grid -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Empty state when no categories -->
        <div v-if="categories.length === 0" class="text-center py-16">
          <div class="text-gray-400 mb-4">
            <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">Categories Coming Soon</h3>
          <p class="text-gray-600 dark:text-gray-300 max-w-md mx-auto">We're organizing our software reviews by category. Check back soon as we add new categories and reviews.</p>
          <div class="mt-6">
            <NuxtLink to="/" class="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200">
              Back to Home
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Categories grid -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="category in sortedCategories" 
            :key="category.slug"
            class="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 relative"
          >
            <div class="flex items-center mb-4">
              <Icon :name="category.icon" class="text-primary-600 w-8 h-8 mr-3" />
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ category.name }}</h3>
            </div>
            
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ category.description }}</p>
            
            <div class="flex justify-between items-center mb-4">
              <div class="text-sm text-gray-500 dark:text-gray-400">{{ category.reviewCount }} {{ category.reviewCount === 1 ? 'review' : 'reviews' }}</div>
            </div>
            
            <NuxtLink 
              :to="`/categories/${category.slug}`"
              class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              View Category
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO
useHead({
  title: 'Software Categories - BestSoftGuide',
  meta: [
    { name: 'description', content: 'Browse software by category. Find productivity tools, design software, development tools, and more.' }
  ]
})

// Manually define categories for static site generation
const categories = ref([
  {
    name: 'Productivity',
    slug: 'productivity',
    description: 'Tools to help you get more done in less time',
    icon: 'i-heroicons-clock',
    reviewCount: 2,
    image: '/images/categories/productivity.jpg'
  },
  {
    name: 'Communication',
    slug: 'communication',
    description: 'Tools for better team and customer communication',
    icon: 'i-heroicons-chat-bubble-left-right',
    reviewCount: 2,
    image: '/images/categories/communication.jpg'
  },
  {
    name: 'Project Management',
    slug: 'project-management',
    description: 'Software to keep your projects on track',
    icon: 'i-heroicons-clipboard-document-check',
    reviewCount: 1,
    image: '/images/categories/project-management.jpg'
  },
  {
    name: 'Design',
    slug: 'design',
    description: 'Tools for creating beautiful designs and prototypes',
    icon: 'i-heroicons-paint-brush',
    reviewCount: 1,
    image: '/images/categories/design.jpg'
  },
  {
    name: 'SEO',
    slug: 'seo',
    description: 'Tools to improve your search engine rankings',
    icon: 'i-heroicons-magnifying-glass',
    reviewCount: 1,
    image: '/images/categories/seo.jpg'
  },
  {
    name: 'Email Marketing',
    slug: 'email-marketing',
    description: 'Software for effective email campaigns',
    icon: 'i-heroicons-envelope',
    reviewCount: 1,
    image: '/images/categories/email-marketing.jpg'
  }
])

// No additional category metadata needed - all data is in the categories array

// Sort categories by name
const sortedCategories = computed(() => {
  return [...categories.value].sort((a, b) => a.name.localeCompare(b.name))
})
</script>
