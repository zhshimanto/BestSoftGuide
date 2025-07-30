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
              <div class="text-sm text-gray-500">{{ category.count }} reviews</div>
              <div v-if="category.commission" class="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                {{ category.commission }}
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

// Static categories data
const categories = ref([
  {
    name: 'Email Marketing',
    slug: 'email-marketing',
    icon: '📧',
    description: 'Email marketing platforms and automation tools with high recurring commissions',
    count: 8,
    commission: '30% recurring',
    featured: true
  },
  {
    name: 'E-commerce',
    slug: 'ecommerce',
    icon: '🛒',
    description: 'Online store platforms and e-commerce solutions with premium affiliate rates',
    count: 12,
    commission: '200% bounty',
    featured: true
  },
  {
    name: 'CRM',
    slug: 'crm',
    icon: '📊',
    description: 'Customer relationship management and sales tools',
    count: 15,
    commission: '100% first month',
    featured: true
  },
  {
    name: 'Design Tools',
    slug: 'design',
    icon: '🎨',
    description: 'Creative design software and graphic tools for businesses',
    count: 10,
    commission: 'High conversion',
    featured: true
  },
  {
    name: 'SEO Tools',
    slug: 'seo',
    icon: '🔍',
    description: 'Search engine optimization and digital marketing tools',
    count: 8,
    commission: '40% recurring',
    featured: true
  },
  {
    name: 'Project Management',
    slug: 'project-management',
    icon: '📋',
    description: 'Project management and team collaboration platforms',
    count: 12,
    commission: '25% recurring'
  },
  {
    name: 'AI Tools',
    slug: 'ai-tools',
    icon: '🤖',
    description: 'Artificial intelligence and automation software',
    count: 6,
    commission: '30% recurring'
  },
  {
    name: 'Communication',
    slug: 'communication',
    icon: '💬',
    description: 'Team communication and video conferencing tools',
    count: 8,
    commission: '25% recurring'
  },
  {
    name: 'Security',
    slug: 'security',
    icon: '🔒',
    description: 'Cybersecurity, VPN, and password management tools',
    count: 6,
    commission: '30% recurring'
  }
])
</script>
