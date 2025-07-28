<template>
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <!-- Chart Bar Icon -->
    <path v-if="name === 'ChartBarIcon'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
    
    <!-- Paint Brush Icon -->
    <path v-else-if="name === 'PaintBrushIcon'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5a2 2 0 00-2-2H7z"/>
    
    <!-- Code Bracket Icon -->
    <path v-else-if="name === 'CodeBracketIcon'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
    
    <!-- Megaphone Icon -->
    <path v-else-if="name === 'MegaphoneIcon'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M10 2L3 14h5l-1 8 7-12h-5l1-8z"/>
    
    <!-- Shield Check Icon -->
    <path v-else-if="name === 'ShieldCheckIcon'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
    
    <!-- Chat Bubble Icon -->
    <path v-else-if="name === 'ChatBubbleLeftRightIcon'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
  </svg>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>
