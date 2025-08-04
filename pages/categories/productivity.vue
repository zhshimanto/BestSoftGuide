<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Productivity Software
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Boost your efficiency with the best productivity tools and software solutions
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
              Productivity tools help individuals and teams organize information, manage time, and streamline workflows to get more done with less effort. From note-taking to task management, these tools are essential for modern work.
            </p>
            
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
            <ul class="list-disc pl-5 mb-8 text-gray-700 space-y-2">
              <li>Note-taking and knowledge management</li>
              <li>Task management and to-do lists</li>
              <li>Calendar integration and scheduling</li>
              <li>Time tracking and focus tools</li>
              <li>Document collaboration and sharing</li>
            </ul>
            
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Featured Tools</h2>
            <div class="flex flex-wrap gap-2 mb-8">
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">Notion</span>
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">Evernote</span>
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">Todoist</span>
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">Microsoft OneNote</span>
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">ClickUp</span>
            </div>
          </div>
          
          <div class="md:w-1/3">
            <div class="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Why Productivity Tools Matter</h3>
              <p class="text-gray-700 mb-4">
                In today's fast-paced work environment, productivity tools can help you:
              </p>
              <ul class="list-disc pl-5 text-gray-700 space-y-2">
                <li>Organize information efficiently</li>
                <li>Reduce time spent on repetitive tasks</li>
                <li>Improve team collaboration</li>
                <li>Track progress toward goals</li>
                <li>Maintain work-life balance</li>
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
          Productivity Software Reviews
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Notion Review Card -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <NuxtLink to="/reviews/productivity/notion-review" class="block">
              <div class="h-48 bg-gray-50 flex items-center justify-center">
                <img src="/images/logos/notion.svg" alt="Notion" class="h-16 w-16" />
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
                  <span class="ml-2 text-gray-600">4.6/5</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Notion Review 2025: The Ultimate All-in-One Workspace?</h3>
                <p class="text-gray-600 mb-4 line-clamp-3">Complete Notion review covering features, pricing, templates, and whether it's the best productivity tool for teams and individuals in 2025.</p>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-500">Jan 30, 2025</span>
                  <span class="text-primary-600 font-medium">Read Review →</span>
                </div>
              </div>
            </NuxtLink>
          </div>
          
          <!-- Evernote Review Card -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
            <NuxtLink to="/reviews/productivity/evernote-review" class="block">
              <div class="h-48 bg-gray-50 flex items-center justify-center">
                <img src="/images/logos/evernote.svg" alt="Evernote" class="h-16 w-16" />
              </div>
              <div class="p-6">
                <div class="flex items-center mb-2">
                  <div class="flex text-yellow-400">
                    <Icon name="i-heroicons-star" class="w-5 h-5" />
                    <Icon name="i-heroicons-star" class="w-5 h-5" />
                    <Icon name="i-heroicons-star" class="w-5 h-5" />
                    <Icon name="i-heroicons-star" class="w-5 h-5" />
                    <Icon name="i-heroicons-star-empty" class="w-5 h-5" />
                  </div>
                  <span class="ml-2 text-gray-600">4.2/5</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Evernote Review 2025: Still Worth It?</h3>
                <p class="text-gray-600 mb-4 line-clamp-3">A comprehensive review of Evernote in 2025, examining its features, pricing, and how it compares to newer note-taking alternatives.</p>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-500">Feb 5, 2025</span>
                  <span class="text-primary-600 font-medium">Read Review →</span>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Related Categories -->
    <section class="py-16 bg-white border-t border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
          Related Categories
        </h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <NuxtLink to="/categories/project-management" class="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300 border border-gray-100">
            <div class="flex items-center mb-3">
              <Icon name="i-heroicons-clipboard-document-check" class="w-6 h-6 text-blue-600 mr-2" />
              <h3 class="text-lg font-bold text-gray-900">Project Management</h3>
            </div>
            <p class="text-gray-600">Software to keep your projects on track</p>
          </NuxtLink>
          
          <NuxtLink to="/categories/communication" class="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300 border border-gray-100">
            <div class="flex items-center mb-3">
              <Icon name="i-heroicons-chat-bubble-left-right" class="w-6 h-6 text-blue-600 mr-2" />
              <h3 class="text-lg font-bold text-gray-900">Communication</h3>
            </div>
            <p class="text-gray-600">Tools for better team and customer communication</p>
          </NuxtLink>
          
          <NuxtLink to="/categories/design" class="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300 border border-gray-100">
            <div class="flex items-center mb-3">
              <Icon name="i-heroicons-paint-brush" class="w-6 h-6 text-primary-600 mr-2" />
              <h3 class="text-lg font-bold text-gray-900">Design</h3>
            </div>
            <p class="text-gray-600">Tools for creating beautiful designs and prototypes</p>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO
useHead({
  title: 'Productivity Software Reviews & Comparisons | BestSoftGuide',
  meta: [
    {
      name: 'description',
      content: 'Comprehensive reviews and comparisons of the best productivity software tools to boost your efficiency and streamline your workflow.'
    },
    {
      name: 'keywords',
      content: 'productivity software, note-taking apps, task management, Notion, Evernote, Todoist, productivity tools, software reviews'
    },
    {
      property: 'og:title',
      content: 'Productivity Software Reviews & Comparisons | BestSoftGuide'
    },
    {
      property: 'og:description',
      content: 'Comprehensive reviews and comparisons of the best productivity software tools to boost your efficiency and streamline your workflow.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://bestsoftguide.com/categories/productivity'
    },
    {
      property: 'og:image',
      content: 'https://bestsoftguide.com/images/categories/productivity.jpg'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Productivity Software Reviews & Comparisons | BestSoftGuide'
    },
    {
      name: 'twitter:description',
      content: 'Comprehensive reviews and comparisons of the best productivity software tools to boost your efficiency and streamline your workflow.'
    },
    {
      name: 'twitter:image',
      content: 'https://bestsoftguide.com/images/categories/productivity.jpg'
    }
  ]
})
</script>
