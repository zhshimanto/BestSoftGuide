<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-secondary-600 to-secondary-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Software Blog
          </h1>
          <p class="text-xl text-secondary-100 max-w-3xl mx-auto">
            Stay updated with the latest software trends, tips, and industry insights.
          </p>
        </div>
      </div>
    </section>

    <!-- Blog Posts -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Main Content -->
          <div class="lg:col-span-2">
            <div class="space-y-8">
              <!-- Static Blog Post 1 -->
              <article class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                <div class="aspect-video bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center p-4">
                  <img src="/images/blog/productivity-apps-2025.svg" alt="Productivity Apps 2025" class="h-full object-contain" />
                </div>
                
                <div class="p-6">
                  <div class="flex items-center text-sm text-gray-500 mb-3">
                    <span>BestSoftGuide Team</span>
                    <span class="mx-2">•</span>
                    <span>January 20, 2024</span>
                    <span class="ml-3 inline-block px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                  
                  <h2 class="text-2xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors duration-200">
                    <NuxtLink to="/blog/best-productivity-apps-2025">
                      10 Best Productivity Apps for 2025
                    </NuxtLink>
                  </h2>
                  
                  <p class="text-gray-600 mb-4 line-clamp-3">
                    Discover the top productivity applications that will boost your efficiency and help you get more done in 2025.
                  </p>
                  
                  <div class="flex items-center justify-between">
                    <div class="flex flex-wrap gap-2">
                      <span class="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">productivity</span>
                      <span class="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">apps</span>
                      <span class="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">2024</span>
                    </div>
                    <NuxtLink 
                      to="/blog/best-productivity-apps-2024"
                      class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                    >
                      Read More
                      <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </NuxtLink>
                  </div>
                </div>
              </article>
            </div>

          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <div class="space-y-8">
              <!-- Popular Tags -->
              <div class="bg-white rounded-xl shadow-sm p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Popular Tags</h3>
                <div class="flex flex-wrap gap-2">
                  <span class="inline-block px-3 py-1 bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 text-sm rounded-full cursor-pointer transition-colors duration-200">
                    productivity
                  </span>
                  <span class="inline-block px-3 py-1 bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 text-sm rounded-full cursor-pointer transition-colors duration-200">
                    apps
                  </span>
                  <span class="inline-block px-3 py-1 bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 text-sm rounded-full cursor-pointer transition-colors duration-200">
                    2024
                  </span>
                  <span class="inline-block px-3 py-1 bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 text-sm rounded-full cursor-pointer transition-colors duration-200">
                    security
                  </span>
                  <span class="inline-block px-3 py-1 bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 text-sm rounded-full cursor-pointer transition-colors duration-200">
                    cybersecurity
                  </span>
                </div>
              </div>

              <!-- Newsletter Signup -->
              <div class="bg-primary-50 rounded-xl p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">Stay Updated</h3>
                <p class="text-gray-600 mb-4">Get the latest software insights delivered to your inbox.</p>
                <div class="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                  <button class="w-full px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO
useHead({
  title: 'Software Blog - BestSoftGuide',
  meta: [
    { name: 'description', content: 'Read the latest software insights, reviews, and industry trends on our blog.' }
  ]
})

//  dynamic data



</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
