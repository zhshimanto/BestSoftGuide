<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            About BestSoftGuide
          </h1>
          <p class="text-xl text-primary-100 max-w-3xl mx-auto">
            Your trusted source for comprehensive software reviews and recommendations.
          </p>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-xl shadow-sm p-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p class="text-lg text-gray-700 mb-6">
            At BestSoftGuide, we believe that finding the right software shouldn't be overwhelming. 
            Our mission is to provide honest, comprehensive reviews that help you make informed decisions 
            about the tools that power your work and life.
          </p>
          
          <h2 class="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
          <ul class="text-lg text-gray-700 space-y-3 mb-6">
            <li>• Comprehensive software reviews with real-world testing</li>
            <li>• Side-by-side comparisons of similar tools</li>
            <li>• Industry insights and trends analysis</li>
            <li>• Best deals and discount recommendations</li>
          </ul>
          
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p class="text-lg text-gray-700">
            Have questions or suggestions? We'd love to hear from you at 
            <a href="mailto:hello@bestsoftguide.com" class="text-primary-600 hover:text-primary-700">
              hello@bestsoftguide.com
            </a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'About Us - BestSoftGuide',
  meta: [
    { name: 'description', content: 'Learn about BestSoftGuide and our mission to help you find the best software solutions.' }
  ]
})
</script>
