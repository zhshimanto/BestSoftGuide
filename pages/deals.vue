<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Best Software Deals
          </h1>
          <p class="text-xl text-green-100 max-w-3xl mx-auto">
            Save money on the best software with our curated deals and discounts.
          </p>
        </div>
      </div>
    </section>

    <!-- Deals Grid -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="deal in deals" 
            :key="deal.name"
            class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
          >
            <div class="p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl font-bold text-gray-900">{{ deal.name }}</h3>
                <span class="bg-red-100 text-red-700 px-2 py-1 rounded-full text-sm font-medium">
                  {{ deal.discount }}
                </span>
              </div>
              
              <p class="text-gray-600 mb-4">{{ deal.description }}</p>
              
              <div class="flex items-center justify-between mb-4">
                <div>
                  <span class="text-2xl font-bold text-gray-900">${{ deal.salePrice }}</span>
                  <span class="text-lg text-gray-500 line-through ml-2">${{ deal.originalPrice }}</span>
                </div>
              </div>
              
              <a 
                :href="deal.link"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                Get Deal
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Best Software Deals - BestSoftGuide',
  meta: [
    { name: 'description', content: 'Find the best software deals and discounts. Save money on premium tools and applications.' }
  ]
})

const deals = ref([
  {
    name: 'Notion Pro',
    description: 'All-in-one workspace for teams',
    originalPrice: '96',
    salePrice: '48',
    discount: '50% OFF',
    link: 'https://notion.so'
  },
  {
    name: 'Figma Professional',
    description: 'Collaborative design platform',
    originalPrice: '144',
    salePrice: '72',
    discount: '50% OFF',
    link: 'https://figma.com'
  },
  {
    name: 'Slack Pro',
    description: 'Team communication platform',
    originalPrice: '80',
    salePrice: '60',
    discount: '25% OFF',
    link: 'https://slack.com'
  }
])
</script>
