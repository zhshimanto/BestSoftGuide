<template>
  <div class="min-h-screen bg-gray-50">
    <article class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Breadcrumb -->
      <nav class="mb-8">
        <ol class="flex items-center space-x-2 text-sm text-gray-500">
          <li><NuxtLink to="/" class="hover:text-primary-600">Home</NuxtLink></li>
          <li><span class="mx-2">/</span></li>
          <li><NuxtLink to="/reviews" class="hover:text-primary-600">Reviews</NuxtLink></li>
          <li><span class="mx-2">/</span></li>
          <li class="text-gray-900">{{ data?.title }}</li>
        </ol>
      </nav>

      <!-- Review Header -->
      <header class="bg-white rounded-xl shadow-sm p-8 mb-8">
        <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-4">
              <span class="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                {{ data?.category }}
              </span>
              <div class="flex items-center">
                <div class="flex text-yellow-400">
                  <svg v-for="i in 5" :key="i" class="w-5 h-5" :class="i <= Math.floor(data?.rating || 0) ? 'fill-current' : 'text-gray-300'" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <span class="ml-2 text-lg font-semibold text-gray-900">{{ data?.rating }}/5</span>
              </div>
            </div>
            
            <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {{ data?.title }}
            </h1>
            
            <p class="text-xl text-gray-600 mb-6">
              {{ data?.description }}
            </p>
            
            <div class="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span>By {{ data?.author }}</span>
              <span>•</span>
              <span>{{ formatDate(data?.published_date) }}</span>
              <span v-if="data?.updated_date !== data?.published_date">
                • Updated {{ formatDate(data?.updated_date) }}
              </span>
            </div>
          </div>
          
          <!-- Quick Info Card -->
          <div class="lg:w-80 bg-gray-50 rounded-lg p-6">
            <h3 class="font-semibold text-gray-900 mb-4">Quick Info</h3>
            
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-gray-600">Price:</span>
                <span class="font-medium">{{ data?.price }}</span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-gray-600">Rating:</span>
                <span class="font-medium">{{ data?.rating }}/5</span>
              </div>
              
              <div class="flex justify-between">
                <span class="text-gray-600">Category:</span>
                <span class="font-medium">{{ data?.category }}</span>
              </div>
            </div>
            
            <div v-if="data?.pros?.length" class="mt-6">
              <h4 class="font-medium text-green-700 mb-2">✓ Pros</h4>
              <ul class="text-sm text-gray-600 space-y-1">
                <li v-for="pro in data.pros" :key="pro">{{ pro }}</li>
              </ul>
            </div>
            
            <div v-if="data?.cons?.length" class="mt-4">
              <h4 class="font-medium text-red-700 mb-2">✗ Cons</h4>
              <ul class="text-sm text-gray-600 space-y-1">
                <li v-for="con in data.cons" :key="con">{{ con }}</li>
              </ul>
            </div>
            
            <a 
              v-if="data?.affiliate_link"
              :href="data.affiliate_link"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-6 w-full inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              Visit Website
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>
        </div>
      </header>

      <!-- Review Content -->
      <div class="bg-white rounded-xl shadow-sm p-8 mb-8">
        <div class="prose prose-lg max-w-none">
          <h2>What is Notion?</h2>
          <p>Notion is a versatile productivity platform that combines note-taking, project management, databases, and wikis into a single, customizable workspace. It's designed to replace multiple tools and provide a unified solution for personal and team productivity.</p>
          
          <h2>Key Features</h2>
          <h3>1. Flexible Page Structure</h3>
          <ul>
            <li><strong>Blocks-based editor:</strong> Everything in Notion is a block that can be moved, nested, and customized</li>
            <li><strong>Templates:</strong> Pre-built templates for common use cases</li>
            <li><strong>Nested pages:</strong> Create hierarchical structures for complex projects</li>
          </ul>
          
          <h3>2. Database Functionality</h3>
          <ul>
            <li><strong>Multiple views:</strong> Table, board, calendar, list, and gallery views</li>
            <li><strong>Properties:</strong> Custom fields with various data types</li>
            <li><strong>Relations:</strong> Link databases together for complex workflows</li>
          </ul>
          
          <h2>Final Verdict</h2>
          <p>Notion excels at providing a flexible, all-in-one workspace that can adapt to various workflows. While it has a learning curve, the investment in time pays off with increased productivity and organization.</p>
        </div>
      </div>

      <!-- Tags -->
      <div v-if="data?.tags?.length" class="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h3 class="font-semibold text-gray-900 mb-3">Tags</h3>
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="tag in data.tags" 
            :key="tag"
            class="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <!-- Related Reviews -->
      <div v-if="relatedReviews.length" class="bg-white rounded-xl shadow-sm p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-6">Related Reviews</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink 
            v-for="review in relatedReviews" 
            :key="review._path"
            :to="review._path"
            class="group block p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all duration-200"
          >
            <h4 class="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">
              {{ review.title }}
            </h4>
            <p class="text-sm text-gray-600 line-clamp-2">
              {{ review.description }}
            </p>
            <div class="flex items-center mt-3">
              <div class="flex text-yellow-400">
                <svg v-for="i in 5" :key="i" class="w-3 h-3" :class="i <= Math.floor(review.rating) ? 'fill-current' : 'text-gray-300'" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <span class="ml-1 text-xs text-gray-600">{{ review.rating }}</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
// Get the current route
const route = useRoute()

// Static review data (temporary)
const reviewData = {
  '/reviews/notion': {
    title: 'Notion Review: The Ultimate All-in-One Workspace',
    description: 'A comprehensive review of Notion, the popular productivity and note-taking app that combines databases, wikis, and project management.',
    category: 'Productivity',
    rating: 4.5,
    price: 'Free / $8 per month',
    pros: [
      'Highly customizable workspace',
      'Combines multiple tools in one',
      'Great collaboration features',
      'Powerful database functionality'
    ],
    cons: [
      'Steep learning curve',
      'Can be slow with large databases',
      'Limited offline functionality'
    ],
    affiliate_link: 'https://notion.so',
    author: 'BestSoftGuide Team',
    published_date: '2024-01-15',
    updated_date: '2024-01-15',
    tags: ['productivity', 'note-taking', 'collaboration', 'database']
  }
}

const data = computed(() => reviewData[route.path] || null)

// SEO
useHead({
  title: `${data?.title} - BestSoftGuide`,
  meta: [
    { name: 'description', content: data?.description },
    { property: 'og:title', content: data?.title },
    { property: 'og:description', content: data?.description },
    { property: 'og:type', content: 'article' },
    { name: 'article:author', content: data?.author },
    { name: 'article:published_time', content: data?.published_date },
  ]
})

// Related reviews (static)
const relatedReviews = ref([])

// Helper function to format dates
const formatDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.prose h1 {
  @apply text-3xl font-bold text-gray-900 mt-8 mb-4;
}

.prose h2 {
  @apply text-2xl font-bold text-gray-900 mt-6 mb-3;
}

.prose h3 {
  @apply text-xl font-semibold text-gray-900 mt-5 mb-2;
}

.prose p {
  @apply text-gray-700 leading-relaxed mb-4;
}

.prose ul {
  @apply list-disc list-inside text-gray-700 mb-4 space-y-1;
}

.prose strong {
  @apply font-semibold text-gray-900;
}
</style>
