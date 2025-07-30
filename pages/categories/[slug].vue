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
                
                <h2 class="text-xl font-bold text-gray-900 mb-2">
                  {{ review.title }}
                </h2>
                
                <p class="text-gray-600 mb-4">
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
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-3">Popular Tools</h3>
              <ul class="space-y-2">
                <li v-for="tool in categoryData?.popularTools" :key="tool" class="text-gray-600">
                  • {{ tool }}
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

// Static category data
const categories = {
  productivity: {
    name: 'Productivity',
    icon: '⚡',
    description: 'Tools to boost your efficiency and get more done.',
    longDescription: 'Productivity software helps individuals and teams work more efficiently by organizing tasks, managing time, and streamlining workflows. These tools range from simple to-do lists to comprehensive project management platforms.',
    popularTools: ['Notion', 'Todoist', 'Asana', 'Trello', 'Slack'],
    keyFeatures: ['Task management', 'Team collaboration', 'Time tracking', 'Integration capabilities', 'Mobile apps']
  },
  design: {
    name: 'Design',
    icon: '🎨',
    description: 'Creative tools for designers and visual artists.',
    longDescription: 'Design software empowers creative professionals to bring their ideas to life. From UI/UX design to graphic design and illustration, these tools provide the features needed for professional creative work.',
    popularTools: ['Figma', 'Adobe Creative Suite', 'Sketch', 'Canva', 'InVision'],
    keyFeatures: ['Vector editing', 'Collaboration features', 'Prototyping', 'Asset management', 'Export options']
  },
  development: {
    name: 'Development',
    icon: '💻',
    description: 'Essential tools for developers and programmers.',
    longDescription: 'Development tools help programmers write, test, and deploy code more efficiently. These include code editors, version control systems, testing frameworks, and deployment platforms.',
    popularTools: ['VS Code', 'GitHub', 'Docker', 'Postman', 'Vercel'],
    keyFeatures: ['Code editing', 'Version control', 'Debugging tools', 'API testing', 'Deployment automation']
  },
  communication: {
    name: 'Communication',
    icon: '💬',
    description: 'Team collaboration and communication platforms.',
    longDescription: 'Communication software facilitates team collaboration and information sharing. These tools help remote and distributed teams stay connected and work together effectively.',
    popularTools: ['Slack', 'Microsoft Teams', 'Discord', 'Zoom', 'Telegram'],
    keyFeatures: ['Instant messaging', 'Video calls', 'File sharing', 'Channel organization', 'Integration support']
  },
  marketing: {
    name: 'Marketing',
    icon: '📈',
    description: 'Tools to grow your business and reach customers.',
    longDescription: 'Marketing software helps businesses promote their products and services, analyze customer behavior, and optimize their marketing campaigns for better results.',
    popularTools: ['HubSpot', 'Mailchimp', 'Google Analytics', 'Hootsuite', 'Buffer'],
    keyFeatures: ['Email marketing', 'Social media management', 'Analytics', 'Lead generation', 'Campaign automation']
  },
  security: {
    name: 'Security',
    icon: '🔒',
    description: 'Protect your data and maintain privacy.',
    longDescription: 'Security software protects digital assets from threats and ensures data privacy. These tools include antivirus software, password managers, VPNs, and encryption tools.',
    popularTools: ['1Password', 'NordVPN', 'Malwarebytes', 'Bitwarden', 'LastPass'],
    keyFeatures: ['Threat protection', 'Password management', 'Data encryption', 'Privacy protection', 'Multi-device support']
  }
}

const categoryData = computed(() => categories[slug] || null)

// Static reviews data (same as in reviews page)
const allReviews = [
  {
    _path: '/reviews/notion',
    title: 'Notion Review: The Ultimate All-in-One Workspace',
    description: 'A comprehensive review of Notion, the popular productivity and note-taking app that combines databases, wikis, and project management.',
    category: 'Productivity',
    rating: 4.5,
    price: 'Free / $8 per month'
  },
  {
    _path: '/reviews/slack',
    title: 'Slack Review: Team Communication Made Easy',
    description: 'An in-depth look at Slack, the leading team communication platform used by millions worldwide.',
    category: 'Communication',
    rating: 4.3,
    price: 'Free / $6.67 per month'
  },
  {
    _path: '/reviews/figma',
    title: 'Figma Review: Collaborative Design Tool',
    description: 'A detailed review of Figma, the web-based design tool that has revolutionized collaborative design.',
    category: 'Design',
    rating: 4.7,
    price: 'Free / $12 per month'
  }
]

// Filter reviews by category
const categoryReviews = computed(() => {
  if (!categoryData.value) return []
  return allReviews.filter(review => review.category === categoryData.value.name)
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
