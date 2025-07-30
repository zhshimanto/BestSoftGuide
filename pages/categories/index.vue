<template>
  <div class="min-h-screen bg-gray-50">
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
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="category in categories" 
            :key="category.name"
            class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6"
          >
            <div class="text-4xl mb-4">{{ category.icon }}</div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ category.name }}</h3>
            <p class="text-gray-600 mb-4">{{ category.description }}</p>
            <div class="text-sm text-gray-500 mb-4">{{ category.count }} reviews</div>
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

// Static categories data
const categories = ref([
  {
    name: 'Productivity',
    slug: 'productivity',
    icon: '⚡',
    description: 'Tools to boost your efficiency and get more done.',
    count: 15
  },
  {
    name: 'Design',
    slug: 'design',
    icon: '🎨',
    description: 'Creative tools for designers and visual artists.',
    count: 12
  },
  {
    name: 'Development',
    slug: 'development',
    icon: '💻',
    description: 'Essential tools for developers and programmers.',
    count: 18
  },
  {
    name: 'Communication',
    slug: 'communication',
    icon: '💬',
    description: 'Team collaboration and communication platforms.',
    count: 8
  },
  {
    name: 'Marketing',
    slug: 'marketing',
    icon: '📈',
    description: 'Tools to grow your business and reach customers.',
    count: 10
  },
  {
    name: 'Security',
    slug: 'security',
    icon: '🔒',
    description: 'Protect your data and maintain privacy.',
    count: 6
  }
])
</script>
