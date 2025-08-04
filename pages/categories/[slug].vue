<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <div class="text-6xl mb-4">{{ categoryData?.icon }}</div>
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            {{ categoryData?.name }} Software
          </h1>
          <p class="text-xl text-primary-100 max-w-3xl mx-auto">
            {{ categoryData?.description }}
          </p>
        </div>
      </div>
    </section>

    <!-- Category Content -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Reviews in this category -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">{{ categoryData?.name }} Reviews</h2>
          
          <div v-if="categoryReviews.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article 
              v-for="review in categoryReviews" 
              :key="review._path"
              class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
            >
              <div class="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <img v-if="review.featured_image" :src="review.featured_image" :alt="review.title" class="w-full h-full object-contain p-4">
                <div v-else class="text-4xl font-bold text-primary-600">
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
                
                <h2 class="text-xl font-bold text-gray-900 mb-2">
                  {{ review.title }}
                </h2>
                
                <p class="text-gray-600 mb-4">
                  {{ review.description }}
                </p>
                
                <div class="flex items-center justify-between">
                  <span class="text-sm font-medium text-primary-600">
                    {{ review.published_date ? new Date(review.published_date).toLocaleDateString() : '' }}
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

          <!-- Empty state -->
          <div v-else class="text-center py-16">
            <div class="text-gray-400 mb-4">
              <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">No reviews yet</h3>
            <p class="text-gray-600">Check back later for new {{ categoryData?.name.toLowerCase() }} software reviews.</p>
          </div>
        </div>

        <!-- Category Info -->
        <div class="bg-white rounded-xl shadow-sm p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">About {{ categoryData?.name }} Software</h2>
          <p class="text-gray-700 mb-6">{{ categoryData?.longDescription }}</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-if="categoryReviews.length > 0">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">Available Reviews</h3>
              <ul class="space-y-2">
                <li v-for="review in categoryReviews.slice(0, 5)" :key="review._path" class="text-gray-600">
                  • {{ review.title }}
                </li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-3">Key Features to Look For</h3>
              <ul class="space-y-2">
                <li v-for="feature in categoryData?.keyFeatures" :key="feature" class="text-gray-600">
                  • {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Get the current route
const route = useRoute()
const slug = route.params.slug

// Define category metadata
const categoryMeta = {
  'email-marketing': { 
    icon: '📧', 
    description: 'Email marketing platforms and automation tools',
    longDescription: 'Email marketing software helps businesses connect with their audience, automate campaigns, and analyze performance metrics.',
    keyFeatures: ['Email automation', 'List management', 'Analytics', 'A/B testing', 'Template design']
  },
  'ecommerce': { 
    icon: '🛒', 
    description: 'Online store platforms and e-commerce solutions',
    longDescription: 'E-commerce platforms enable businesses to sell products online with features for inventory, payments, and customer management.',
    keyFeatures: ['Product management', 'Payment processing', 'Shopping cart', 'Customer accounts', 'Order fulfillment']
  },
  'crm': { 
    icon: '📊', 
    description: 'Customer relationship management and sales tools',
    longDescription: 'CRM software helps businesses manage customer interactions, track sales opportunities, and improve customer retention.',
    keyFeatures: ['Contact management', 'Sales pipeline', 'Task automation', 'Reporting', 'Integration capabilities']
  },
  'design': { 
    icon: '🎨', 
    description: 'Graphic design, UI/UX, and creative software solutions',
    longDescription: 'Design software empowers creative professionals to create visual content, from graphics and illustrations to UI/UX designs.',
    keyFeatures: ['Vector editing', 'Photo manipulation', 'Prototyping', 'Collaboration', 'Asset libraries']
  },
  'seo': { 
    icon: '🔍', 
    description: 'Search engine optimization and keyword research tools',
    longDescription: 'SEO tools help websites improve their visibility in search engines through keyword research, backlink analysis, and performance tracking.',
    keyFeatures: ['Keyword research', 'Rank tracking', 'Site audits', 'Competitor analysis', 'Backlink monitoring']
  },
  'ai-tools': { 
    icon: '🤖', 
    description: 'Artificial intelligence and machine learning software',
    longDescription: 'AI tools leverage machine learning and artificial intelligence to automate tasks, generate content, and provide data-driven insights.',
    keyFeatures: ['Content generation', 'Data analysis', 'Process automation', 'Natural language processing', 'Predictive analytics']
  },
  'project-management': { 
    icon: '📝', 
    description: 'Task management and team collaboration platforms',
    longDescription: 'Project management software helps teams organize tasks, track progress, and collaborate effectively on projects of all sizes.',
    keyFeatures: ['Task assignment', 'Progress tracking', 'Team collaboration', 'Resource management', 'Reporting']
  },
  'productivity': { 
    icon: '⏱️', 
    description: 'Note-taking, time management, and personal productivity tools',
    longDescription: 'Productivity tools help individuals and teams organize information, manage time, and streamline workflows to get more done.',
    keyFeatures: ['Note-taking', 'Task management', 'Calendar integration', 'Time tracking', 'Knowledge management']
  },
  'communication': { 
    icon: '💬', 
    description: 'Team chat, video conferencing, and messaging platforms',
    longDescription: 'Communication software enables teams to collaborate through chat, video calls, and file sharing, whether working remotely or in-office.',
    keyFeatures: ['Instant messaging', 'Video conferencing', 'File sharing', 'Screen sharing', 'Integration with other tools']
  }
}

// Get category data from slug
const formattedName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

const categoryData = computed(() => {
  const meta = categoryMeta[slug] || {
    icon: '📁',
    description: 'Software tools and solutions',
    longDescription: 'Explore our collection of software tools and solutions in this category.',
    keyFeatures: ['Easy to use', 'Reliable performance', 'Regular updates', 'Customer support', 'Value for money']
  }
  
  return {
    name: formattedName,
    slug: slug,
    ...meta
  }
})

// Fetch all reviews from content directory
const { data: allReviews } = await useAsyncData(`categoryReviews-${slug}`, () => queryContent('reviews').find())

// Filter reviews by category
const categoryReviews = computed(() => {
  if (!categoryData.value || !allReviews.value) return []
  
  // Convert slug to category name (e.g., 'email-marketing' to 'Email Marketing')
  const categoryName = slug.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  
  return allReviews.value.filter(review => {
    // Match by category name from frontmatter
    return review.category && review.category.toLowerCase() === categoryName.toLowerCase()
  })
})

// SEO
useHead({
  title: `${categoryData.value?.name} Software Reviews - BestSoftGuide`,
  meta: [
    { name: 'description', content: `Find the best ${categoryData.value?.name.toLowerCase()} software. Read reviews, compare features, and discover the perfect tools for your needs.` }
  ]
})

// 404 if category not found
if (!categoryData.value) {
  throw createError({ statusCode: 404, statusMessage: 'Category not found' })
}
</script>
