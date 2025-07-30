<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p class="text-xl text-primary-100 max-w-3xl mx-auto">
            Get in touch with our team. We'd love to hear from you!
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="py-16">
      <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-xl shadow-sm p-8">
          <form class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input type="text" id="name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" id="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
            </div>
            
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input type="text" id="subject" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea id="message" rows="5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"></textarea>
            </div>
            
            <button type="submit" class="w-full px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Contact Us - BestSoftGuide',
  meta: [
    { name: 'description', content: 'Contact BestSoftGuide. Get in touch with questions, suggestions, or partnership opportunities.' }
  ]
})
</script>
