<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Software Comparisons
          </h1>
          <p class="text-xl text-purple-100 max-w-3xl mx-auto">
            Side-by-side comparisons to help you choose between similar software options.
          </p>
        </div>
      </div>
    </section>

    <!-- Comparisons Grid -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            v-for="comparison in comparisons" 
            :key="comparison.title"
            class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6"
          >
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ comparison.title }}</h3>
            <p class="text-gray-600 mb-4">{{ comparison.description }}</p>
            
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center space-x-4">
                <span class="text-sm font-medium text-gray-700">{{ comparison.software1 }}</span>
                <span class="text-gray-400">vs</span>
                <span class="text-sm font-medium text-gray-700">{{ comparison.software2 }}</span>
              </div>
            </div>
            
            <div class="text-sm text-gray-500 mb-4">{{ comparison.category }}</div>
            
            <button class="w-full px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors duration-200">
              View Comparison
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Software Comparisons - BestSoftGuide',
  meta: [
    { name: 'description', content: 'Compare software side-by-side. Find the best tool for your needs with our detailed comparisons.' }
  ]
})

const comparisons = ref([
  {
    title: 'Notion vs Obsidian',
    description: 'Compare two popular note-taking and knowledge management tools.',
    software1: 'Notion',
    software2: 'Obsidian',
    category: 'Productivity'
  },
  {
    title: 'Figma vs Sketch',
    description: 'Design tool comparison for UI/UX designers.',
    software1: 'Figma',
    software2: 'Sketch',
    category: 'Design'
  },
  {
    title: 'Slack vs Microsoft Teams',
    description: 'Team communication platform comparison.',
    software1: 'Slack',
    software2: 'Microsoft Teams',
    category: 'Communication'
  },
  {
    title: 'Todoist vs Asana',
    description: 'Task management and project planning tools.',
    software1: 'Todoist',
    software2: 'Asana',
    category: 'Productivity'
  }
])
</script>
