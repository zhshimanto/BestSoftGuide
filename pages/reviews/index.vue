<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Software Reviews
          </h1>
          <p class="text-xl text-primary-100 max-w-3xl mx-auto">
            Comprehensive, unbiased reviews of the latest software tools to help you make informed decisions.
          </p>
        </div>
      </div>
    </section>

    <!-- Reviews Grid -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Filter Bar -->
        <div class="mb-8 flex flex-wrap gap-4">
          <button 
            @click="selectedCategory = 'all'"
            :class="selectedCategory === 'all' ? 'bg-primary-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'"
            class="px-4 py-2 rounded-lg border transition-colors duration-200"
          >
            All Reviews
          </button>
          <button 
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="selectedCategory === category ? 'bg-primary-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'"
            class="px-4 py-2 rounded-lg border transition-colors duration-200"
          >
            {{ category }}
          </button>
        </div>

        <!-- Reviews Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="review in filteredReviews" 
            :key="review._path"
            class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
          >
            <div class="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
              <div class="text-4xl font-bold text-primary-600">
                {{ review.title.charAt(0) }}
              </div>
            </div>
            
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                  {{ review.category }}
                </span>
                <div class="flex items-center">
                  <div class="flex text-yellow-400">
                    <svg v-for="i in 5" :key="i" class="w-4 h-4" :class="i <= Math.floor(review.rating) ? 'fill-current' : 'text-gray-300'" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <span class="ml-1 text-sm text-gray-600">{{ review.rating }}</span>
                </div>
              </div>
              
              <h2 class="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                {{ review.title }}
              </h2>
              
              <p class="text-gray-600 mb-4 line-clamp-3">
                {{ review.description }}
              </p>
              
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-primary-600">
                  {{ review.price }}
                </span>
                <NuxtLink 
                  :to="review._path"
                  class="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
                >
                  Read Review
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>

        <!-- Empty State -->
        <div v-if="filteredReviews.length === 0" class="text-center py-16">
          <div class="text-gray-400 mb-4">
            <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          <h3 class="text-lg font-medium text-gray-900 mb-2">No reviews found</h3>
          <p class="text-gray-600">Try selecting a different category or check back later for new reviews.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO
useHead({
  title: 'Software Reviews - BestSoftGuide',
  meta: [
    { name: 'description', content: 'Read comprehensive software reviews and find the best tools for your needs. Unbiased ratings and detailed analysis.' }
  ]
})

// Static reviews data (temporary)
const reviews = ref([
  {
    _path: '/reviews/notion',
    title: 'Notion Review: The Ultimate All-in-One Workspace',
    description: 'A comprehensive review of Notion, the popular productivity and note-taking app that combines databases, wikis, and project management.',
    category: 'Productivity',
    rating: 4.5,
    price: 'Free / $8 per month',
    author: 'BestSoftGuide Team',
    published_date: '2024-01-15'
  },
  {
    _path: '/reviews/slack',
    title: 'Slack Review: Team Communication Made Easy',
    description: 'An in-depth look at Slack, the leading team communication platform used by millions worldwide.',
    category: 'Communication',
    rating: 4.3,
    price: 'Free / $6.67 per month',
    author: 'BestSoftGuide Team',
    published_date: '2024-01-10'
  },
  {
    _path: '/reviews/figma',
    title: 'Figma Review: Collaborative Design Tool',
    description: 'A detailed review of Figma, the web-based design tool that has revolutionized collaborative design.',
    category: 'Design',
    rating: 4.7,
    price: 'Free / $12 per month',
    author: 'BestSoftGuide Team',
    published_date: '2024-01-05'
  }
])

// Get unique categories
const categories = computed(() => {
  const cats = reviews.value.map(review => review.category)
  return [...new Set(cats)].sort()
})

// Filter state
const selectedCategory = ref('all')

// Filtered reviews
const filteredReviews = computed(() => {
  if (selectedCategory.value === 'all') {
    return reviews.value
  }
  
  return reviews.value.filter(review => review.category === selectedCategory.value)
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
