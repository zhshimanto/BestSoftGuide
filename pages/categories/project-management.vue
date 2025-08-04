<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Project Management Software
          </h1>
          <p class="text-xl text-primary-100 max-w-3xl mx-auto">
            Keep your projects on track with these powerful project management solutions
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
              Project management tools help teams plan, organize, and track work from start to finish. They provide visibility into project status, deadlines, and resource allocation, making it easier to deliver projects on time and within budget.
            </p>
            
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h2>
            <ul class="list-disc pl-5 mb-8 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Task tracking and assignment</li>
              <li>Timeline views and Gantt charts</li>
              <li>Team collaboration tools</li>
              <li>Resource management</li>
              <li>Reporting and analytics</li>
            </ul>
            
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Featured Tools</h2>
            <div class="flex flex-wrap gap-2 mb-8">
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">Asana</span>
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">Trello</span>
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">Monday.com</span>
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">ClickUp</span>
              <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">Jira</span>
            </div>
          </div>
          
          <div class="md:w-1/3">
            <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Why Project Management Tools Matter</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-4">
                Effective project management software can help your team:
              </p>
              <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Improve task visibility and accountability</li>
                <li>Meet deadlines consistently</li>
                <li>Allocate resources efficiently</li>
                <li>Reduce miscommunication</li>
                <li>Track project progress in real-time</li>
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
          Project Management Software Reviews
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Asana Review Card -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <NuxtLink to="/reviews/project-management/asana-review" class="block">
              <div class="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <img src="/images/logos/asana.svg" alt="Asana" class="h-16 w-16" />
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
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Asana Review 2025: The Complete Project Management Solution</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">A comprehensive review of Asana, covering its features, pricing, templates, and how it stacks up against competitors for managing projects of all sizes.</p>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-500 dark:text-gray-400">Mar 5, 2025</span>
                  <span class="text-primary-600 font-medium">Read Review →</span>
                </div>
              </div>
            </NuxtLink>
          </div>
          
          <!-- Trello Review Card -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <NuxtLink to="/reviews/project-management/trello-review" class="block">
              <div class="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <img src="/images/logos/trello.svg" alt="Trello" class="h-16 w-16" />
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
                  <span class="ml-2 text-gray-600 dark:text-gray-300">4.0/5</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Trello Review 2025: Simple Yet Powerful Kanban Boards</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">An in-depth review of Trello's kanban-style project management system, examining its strengths, limitations, and best use cases.</p>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-500 dark:text-gray-400">Mar 12, 2025</span>
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
          
          <NuxtLink to="/categories/communication" class="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
            <div class="flex items-center mb-3">
              <Icon name="i-heroicons-chat-bubble-left-right" class="w-6 h-6 text-primary-600 mr-2" />
              <h3 class="text-lg font-bold text-gray-900 dark:text-white">Communication</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-400">Tools for better team and customer communication</p>
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
  title: 'Project Management Software Reviews & Comparisons | BestSoftGuide',
  meta: [
    {
      name: 'description',
      content: 'Comprehensive reviews and comparisons of the best project management software to help teams organize tasks, track progress, and deliver projects on time.'
    },
    {
      name: 'keywords',
      content: 'project management software, task tracking, Asana, Trello, Monday.com, Jira, team collaboration, software reviews'
    },
    {
      property: 'og:title',
      content: 'Project Management Software Reviews & Comparisons | BestSoftGuide'
    },
    {
      property: 'og:description',
      content: 'Comprehensive reviews and comparisons of the best project management software to help teams organize tasks, track progress, and deliver projects on time.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://bestsoftguide.com/categories/project-management'
    },
    {
      property: 'og:image',
      content: 'https://bestsoftguide.com/images/categories/project-management.jpg'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Project Management Software Reviews & Comparisons | BestSoftGuide'
    },
    {
      name: 'twitter:description',
      content: 'Comprehensive reviews and comparisons of the best project management software to help teams organize tasks, track progress, and deliver projects on time.'
    },
    {
      name: 'twitter:image',
      content: 'https://bestsoftguide.com/images/categories/project-management.jpg'
    }
  ]
})
</script>
