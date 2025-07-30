<template>
  <div class="min-h-screen bg-gray-50">
    <article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Breadcrumb -->
      <nav class="mb-8">
        <ol class="flex items-center space-x-2 text-sm text-gray-500">
          <li><NuxtLink to="/" class="hover:text-primary-600">Home</NuxtLink></li>
          <li><span class="mx-2">/</span></li>
          <li><NuxtLink to="/blog" class="hover:text-primary-600">Blog</NuxtLink></li>
          <li><span class="mx-2">/</span></li>
          <li class="text-gray-900">{{ data?.title }}</li>
        </ol>
      </nav>

      <!-- Article Header -->
      <header class="bg-white rounded-xl shadow-sm p-8 mb-8">
        <div class="text-center">
          <div class="flex items-center justify-center gap-3 mb-4">
            <span v-if="data?.featured" class="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
              Featured
            </span>
            <span class="inline-block px-3 py-1 bg-secondary-100 text-secondary-700 text-sm font-medium rounded-full">
              {{ data?.category }}
            </span>
          </div>
          
          <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {{ data?.title }}
          </h1>
          
          <p class="text-xl text-gray-600 mb-6">
            {{ data?.description }}
          </p>
          
          <div class="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
            <span>By {{ data?.author }}</span>
            <span>•</span>
            <span>{{ formatDate(data?.published_date) }}</span>
            <span v-if="data?.updated_date !== data?.published_date">
              • Updated {{ formatDate(data?.updated_date) }}
            </span>
          </div>
        </div>
      </header>

      <!-- Featured Image Placeholder -->
      <div class="bg-white rounded-xl shadow-sm mb-8 overflow-hidden">
        <div class="aspect-video bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center">
          <div class="text-6xl font-bold text-secondary-600">
            {{ data?.title?.charAt(0) }}
          </div>
        </div>
      </div>

      <!-- Article Content -->
      <div class="bg-white rounded-xl shadow-sm p-8 mb-8">
        <div class="prose prose-lg max-w-none">
          <ContentRenderer :value="data" />
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

      <!-- Related Posts -->
      <div v-if="relatedPosts.length" class="bg-white rounded-xl shadow-sm p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink 
            v-for="post in relatedPosts" 
            :key="post._path"
            :to="post._path"
            class="group block p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all duration-200"
          >
            <h4 class="font-semibold text-gray-900 group-hover:text-primary-600 mb-2 line-clamp-2">
              {{ post.title }}
            </h4>
            <p class="text-sm text-gray-600 line-clamp-2 mb-3">
              {{ post.description }}
            </p>
            <div class="text-xs text-gray-500">
              {{ formatDate(post.published_date) }}
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

// Fetch the blog post content
const { data } = await queryContent(route.path).findOne()

// SEO
useHead({
  title: `${data?.title} - BestSoftGuide Blog`,
  meta: [
    { name: 'description', content: data?.description },
    { property: 'og:title', content: data?.title },
    { property: 'og:description', content: data?.description },
    { property: 'og:type', content: 'article' },
    { name: 'article:author', content: data?.author },
    { name: 'article:published_time', content: data?.published_date },
  ]
})

// Fetch related posts (excluding current)
const { data: allPosts } = await queryContent('/blog').find()
const relatedPosts = computed(() => {
  if (!allPosts.value) return []
  
  return allPosts.value
    .filter(post => post._path !== route.path)
    .slice(0, 3)
})

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
