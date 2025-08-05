<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Email Marketing Software
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with your audience using the best email marketing tools and platforms
          </p>
        </div>
      </div>
    </section>

    <!-- Category Info -->
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row gap-8">
          <div class="md:w-2/3">
            <p class="text-lg text-gray-700 mb-6">
              Email marketing tools help creators, businesses, and marketers build and nurture relationships with their audience through personalized email communication. From newsletters to automated sequences, these platforms are essential for modern digital marketing strategies.
            </p>
            
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
            <ul class="list-disc pl-5 mb-8 text-gray-700 space-y-2">
              <li>Email campaign creation and automation</li>
              <li>Subscriber management and segmentation</li>
              <li>Landing pages and sign-up forms</li>
              <li>A/B testing and analytics</li>
              <li>E-commerce and payment integrations</li>
            </ul>
            
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Featured Tools</h2>
            <div class="flex flex-wrap gap-2 mb-8">
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">ConvertKit</span>
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">Mailchimp</span>
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">ActiveCampaign</span>
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">Flodesk</span>
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">Beehiiv</span>
            </div>
          </div>
          
          <div class="md:w-1/3">
            <div class="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Why Email Marketing Matters</h3>
              <p class="text-gray-700 mb-4">
                In today's digital landscape, email marketing continues to deliver exceptional ROI because:
              </p>
              <ul class="list-disc pl-5 text-gray-700 space-y-2">
                <li>You own your audience and contact list</li>
                <li>Direct communication without algorithm interference</li>
                <li>Higher conversion rates than social media</li>
                <li>Personalized content delivery</li>
                <li>Measurable results and performance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews List -->
    <section class="py-16 bg-white border-t border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
          Email Marketing Software Reviews
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- ConvertKit Review Card -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <NuxtLink to="/reviews/email-marketing/convertkit-review" class="block">
              <div class="h-48 bg-gray-50 flex items-center justify-center">
                <img src="/images/logos/convertkit.svg" alt="ConvertKit" class="h-16 w-16" />
              </div>
              <div class="p-6">
                <div class="flex items-center mb-2">
                  <div class="flex text-yellow-400">
                    <Icon name="i-heroicons-star" class="w-5 h-5" />
                    <Icon name="i-heroicons-star" class="w-5 h-5" />
                    <Icon name="i-heroicons-star" class="w-5 h-5" />
                    <Icon name="i-heroicons-star" class="w-5 h-5" />
                    <Icon name="i-heroicons-star-half" class="w-5 h-5" />
                  </div>
                  <span class="ml-2 text-gray-600">4.7/5</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">ConvertKit Review 2025: The Best Email Platform for Creators?</h3>
                <p class="text-gray-600 mb-4 line-clamp-3">Complete ConvertKit review covering features, pricing, pros & cons, and whether it's the best email marketing tool for creators in 2025.</p>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-500">Aug 5, 2025</span>
                  <span class="text-primary-600 font-medium">Read Review →</span>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Categories Section -->
    <section class="py-16 bg-white border-t border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
          Related Categories
        </h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <NuxtLink to="/categories/communication" class="group">
            <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div class="flex items-center">
                <div class="bg-blue-100 rounded-full p-3 mr-4">
                  <Icon name="i-heroicons-chat-bubble-left-right" class="w-6 h-6 text-blue-600" />
                </div>
                <h3 class="text-xl font-semibold text-gray-900 group-hover:text-primary-600">Communication Tools</h3>
              </div>
            </div>
          </NuxtLink>
          
          <NuxtLink to="/categories/productivity" class="group">
            <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div class="flex items-center">
                <div class="bg-green-100 rounded-full p-3 mr-4">
                  <Icon name="i-heroicons-check-circle" class="w-6 h-6 text-green-600" />
                </div>
                <h3 class="text-xl font-semibold text-gray-900 group-hover:text-primary-600">Productivity Software</h3>
              </div>
            </div>
          </NuxtLink>
          
          <NuxtLink to="/categories/project-management" class="group">
            <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div class="flex items-center">
                <div class="bg-purple-100 rounded-full p-3 mr-4">
                  <Icon name="i-heroicons-clipboard-document-list" class="w-6 h-6 text-purple-600" />
                </div>
                <h3 class="text-xl font-semibold text-gray-900 group-hover:text-primary-600">Project Management</h3>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO
useHead({
  title: 'Best Email Marketing Software Reviews & Comparisons 2025 | BestSoftGuide',
  meta: [
    { 
      name: 'description', 
      content: 'Compare the best email marketing software of 2025. In-depth reviews of ConvertKit, Mailchimp, ActiveCampaign, and more to help you choose the right platform for your needs.'
    },
    { 
      property: 'og:title', 
      content: 'Best Email Marketing Software Reviews & Comparisons 2025 | BestSoftGuide'
    },
    { 
      property: 'og:description', 
      content: 'Compare the best email marketing software of 2025. In-depth reviews of ConvertKit, Mailchimp, ActiveCampaign, and more to help you choose the right platform for your needs.'
    },
    { 
      property: 'og:type', 
      content: 'website'
    },
    {
      property: 'og:image',
      content: '/images/og/email-marketing-software.jpg'
    },
    {
      name: 'keywords',
      content: 'email marketing software, ConvertKit review, Mailchimp alternatives, best email platforms, creator email tools, newsletter software'
    }
  ]
})
</script>
