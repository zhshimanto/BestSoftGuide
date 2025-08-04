<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Communication Software
          </h1>
          <p class="text-xl text-primary-100 max-w-3xl mx-auto">
            Connect and collaborate better with top-rated communication platforms
          </p>
        </div>
      </div>
    </section>

    <!-- Category Info -->
    <section class="py-12 bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row gap-8">
          <div class="md:w-2/3">
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Communication software enables teams to collaborate through chat, video calls, and file sharing, whether working remotely or in-office. These tools have become essential for modern teams to stay connected and productive.
            </p>
            
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h2>
            <ul class="list-disc pl-5 mb-8 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Instant messaging and chat channels</li>
              <li>Video conferencing and screen sharing</li>
              <li>File sharing and collaboration</li>
              <li>Integration with other productivity tools</li>
              <li>Mobile apps for on-the-go communication</li>
            </ul>
            
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Featured Tools</h2>
            <div class="flex flex-wrap gap-2 mb-8">
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">Slack</span>
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">Discord</span>
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">Microsoft Teams</span>
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">Zoom</span>
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">Google Meet</span>
            </div>
          </div>
          
          <div class="md:w-1/3">
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Why Communication Tools Matter</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4">
                Effective communication tools can help your team:
              </p>
              <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Stay connected across time zones</li>
                <li>Reduce email overload</li>
                <li>Improve collaboration on projects</li>
                <li>Create a more inclusive workplace</li>
                <li>Document important conversations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews List -->
    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Communication Software Reviews
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Slack Review Card -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <NuxtLink to="/reviews/communication/slack-review" class="block">
              <div class="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <img src="/images/logos/slack.svg" alt="Slack" class="h-16 w-16" />
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
                  <span class="ml-2 text-gray-600 dark:text-gray-300">4.7/5</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Slack Review 2025: The Leading Team Communication Platform</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">In-depth review of Slack, examining its features, pricing, integrations, and how it compares to alternatives for team communication.</p>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-500 dark:text-gray-400">Feb 15, 2025</span>
                  <span class="text-primary-600 font-medium">Read Review →</span>
                </div>
              </div>
            </NuxtLink>
          </div>
          
          <!-- Discord Review Card -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <NuxtLink to="/reviews/communication/discord-review" class="block">
              <div class="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <img src="/images/logos/discord.svg" alt="Discord" class="h-16 w-16" />
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
                  <span class="ml-2 text-gray-600 dark:text-gray-300">4.5/5</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Discord Review 2025: Beyond Gaming Communication</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">A detailed look at Discord as a communication platform for communities, businesses, and more beyond its gaming roots.</p>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-500 dark:text-gray-400">Feb 20, 2025</span>
                  <span class="text-primary-600 font-medium">Read Review →</span>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Related Categories -->
    <section class="py-16 bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Related Categories
        </h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink to="/categories/productivity" class="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
            <div class="flex items-center mb-3">
              <Icon name="i-heroicons-clock" class="w-6 h-6 text-primary-600 mr-2" />
              <h3 class="text-lg font-bold text-gray-900 dark:text-white">Productivity</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400">Tools to help you get more done in less time</p>
          </NuxtLink>
          
          <NuxtLink to="/categories/project-management" class="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
            <div class="flex items-center mb-3">
              <Icon name="i-heroicons-clipboard-document-check" class="w-6 h-6 text-primary-600 mr-2" />
              <h3 class="text-lg font-bold text-gray-900 dark:text-white">Project Management</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400">Software to keep your projects on track</p>
          </NuxtLink>
          
          <NuxtLink to="/categories/design" class="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
            <div class="flex items-center mb-3">
              <Icon name="i-heroicons-paint-brush" class="w-6 h-6 text-primary-600 mr-2" />
              <h3 class="text-lg font-bold text-gray-900 dark:text-white">Design</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400">Tools for creating beautiful designs and prototypes</p>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO
useHead({
  title: 'Communication Software Reviews & Comparisons | BestSoftGuide',
  meta: [
    {
      name: 'description',
      content: 'Comprehensive reviews and comparisons of the best communication software tools to connect teams and improve collaboration.'
    },
    {
      name: 'keywords',
      content: 'communication software, team chat, video conferencing, Slack, Discord, Microsoft Teams, Zoom, collaboration tools, software reviews'
    },
    {
      property: 'og:title',
      content: 'Communication Software Reviews & Comparisons | BestSoftGuide'
    },
    {
      property: 'og:description',
      content: 'Comprehensive reviews and comparisons of the best communication software tools to connect teams and improve collaboration.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://bestsoftguide.com/categories/communication'
    },
    {
      property: 'og:image',
      content: 'https://bestsoftguide.com/images/categories/communication.jpg'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Communication Software Reviews & Comparisons | BestSoftGuide'
    },
    {
      name: 'twitter:description',
      content: 'Comprehensive reviews and comparisons of the best communication software tools to connect teams and improve collaboration.'
    },
    {
      name: 'twitter:image',
      content: 'https://bestsoftguide.com/images/categories/communication.jpg'
    }
  ]
})
</script>
