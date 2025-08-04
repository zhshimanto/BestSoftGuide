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
        <!-- Empty state when no categories -->
        <div v-if="categories.length === 0" class="text-center py-16">
          <div class="text-gray-400 mb-4">
            <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-900 mb-2">Categories Coming Soon</h3>
          <p class="text-gray-600 max-w-md mx-auto">We're organizing our software reviews by category. Check back soon as we add new categories and reviews.</p>
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
            v-for="category in categories" 
            :key="category.name"
            :class="[
              'bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 relative',
              category.featured ? 'ring-2 ring-primary-200' : ''
            ]"
          >
            <!-- Featured Badge -->
            <div v-if="category.featured" class="absolute -top-2 -right-2 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              HIGH VALUE
            </div>
            
            <div class="text-4xl mb-4">{{ category.icon }}</div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ category.name }}</h3>
            <p class="text-gray-600 mb-4">{{ category.description }}</p>
            
            <div class="flex justify-between items-center mb-4">
              <div class="text-sm text-gray-500">{{ category.count }} {{ category.count === 1 ? 'review' : 'reviews' }}</div>
              <div v-if="category.featured" class="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                Featured
              </div>
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

// Fetch all reviews to extract categories
const { data: reviews } = await useAsyncData('categoryReviews', () => queryContent('reviews').find())

// Define category metadata
const categoryMeta = {
  'email-marketing': { icon: '📧', description: 'Email marketing platforms and automation tools', featured: true },
  'ecommerce': { icon: '🛒', description: 'Online store platforms and e-commerce solutions', featured: true },
  'crm': { icon: '📊', description: 'Customer relationship management and sales tools', featured: true },
  'design': { icon: '🎨', description: 'Graphic design, UI/UX, and creative software solutions', featured: false },
  'seo': { icon: '🔍', description: 'Search engine optimization and keyword research tools', featured: true },
  'ai-tools': { icon: '🤖', description: 'Artificial intelligence and machine learning software', featured: true },
  'project-management': { icon: '📝', description: 'Task management and team collaboration platforms', featured: false },
  'productivity': { icon: '⏱️', description: 'Note-taking, time management, and personal productivity tools', featured: false },
  'communication': { icon: '💬', description: 'Team chat, video conferencing, and messaging platforms', featured: false }
}

// Extract unique categories from reviews frontmatter
const extractedCategories = {}
if (reviews.value) {
  reviews.value.forEach(review => {
    const category = review.category
    if (!category) return
    
    // Convert category to slug for consistent keys
    const categorySlug = category.toLowerCase().replace(/ /g, '-')
    
    if (!extractedCategories[categorySlug]) {
      extractedCategories[categorySlug] = {
        name: category,
        slug: categorySlug,
        count: 0,
        ...categoryMeta[categorySlug] || { icon: '📁', description: 'Software tools and solutions', featured: false }
      }
    }
    extractedCategories[categorySlug].count++
  })
}

// Convert to array and sort by featured status
const categories = ref(Object.values(extractedCategories).sort((a, b) => {
  if (a.featured === b.featured) return a.name.localeCompare(b.name)
  return a.featured ? -1 : 1
}))
</script>
