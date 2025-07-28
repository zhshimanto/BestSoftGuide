<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-100 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find the <span class="text-primary-600">Perfect Software</span><br>
            for Your Needs
          </h1>
          <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover comprehensive reviews, detailed comparisons, and expert recommendations 
            to help you choose the right software solutions for your business or personal use.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="btn-primary text-lg px-8 py-3">
              Browse Reviews
            </button>
            <button class="btn-secondary text-lg px-8 py-3">
              Submit Software
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Categories -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Popular Categories</h2>
          <p class="text-lg text-gray-600">Explore software by category</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="category in categories" :key="category.name" 
               class="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                <Icon :name="category.icon" class="text-primary-600" />
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">{{ category.name }}</h3>
                <p class="text-sm text-gray-500">{{ category.count }} software</p>
              </div>
            </div>
            <p class="text-gray-600">{{ category.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div class="bg-white rounded-lg p-6 shadow-sm">
            <div class="text-3xl font-bold text-primary-600 mb-2">500+</div>
            <div class="text-gray-600">Software Reviewed</div>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-sm">
            <div class="text-3xl font-bold text-primary-600 mb-2">50K+</div>
            <div class="text-gray-600">Happy Users</div>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-sm">
            <div class="text-3xl font-bold text-primary-600 mb-2">25+</div>
            <div class="text-gray-600">Categories</div>
          </div>
          <div class="bg-white rounded-lg p-6 shadow-sm">
            <div class="text-3xl font-bold text-primary-600 mb-2">99%</div>
            <div class="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-primary-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">
          Ready to Find Your Perfect Software?
        </h2>
        <p class="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Join thousands of users who trust BestSoftGuide for their software decisions.
        </p>
        <button class="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200">
          Get Started Now
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
// Define categories data
const categories = [
  {
    name: 'Productivity',
    count: 85,
    description: 'Tools to boost your productivity and manage tasks efficiently.',
    icon: 'ChartBarIcon'
  },
  {
    name: 'Design Tools',
    count: 62,
    description: 'Creative software for designers and visual content creators.',
    icon: 'PaintBrushIcon'
  },
  {
    name: 'Development',
    count: 78,
    description: 'IDEs, frameworks, and tools for software developers.',
    icon: 'CodeBracketIcon'
  },
  {
    name: 'Marketing',
    count: 45,
    description: 'Digital marketing tools and analytics platforms.',
    icon: 'MegaphoneIcon'
  },
  {
    name: 'Security',
    count: 38,
    description: 'Cybersecurity solutions and privacy protection tools.',
    icon: 'ShieldCheckIcon'
  },
  {
    name: 'Communication',
    count: 52,
    description: 'Team collaboration and communication platforms.',
    icon: 'ChatBubbleLeftRightIcon'
  }
]

// Set page meta
useHead({
  title: 'BestSoftGuide - Software Reviews & Recommendations',
  meta: [
    { name: 'description', content: 'Discover the best software solutions with our comprehensive reviews and recommendations. Find the perfect tools for your business or personal use.' }
  ]
})
</script>
