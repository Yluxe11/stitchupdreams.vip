<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>StitchUp Dreams (SUD) - Where Dreams Meet Design</title>
    
    <!-- Tailwind CSS -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    
    <style>
      body {
        font-family: 'Poppins', sans-serif;
        background-color: #f4f6f9;
      }
      .gradient-bg {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      }
      .hero-section {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'%3E%3Cdefs%3E%3Cpattern id='pattern' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M0 0L50 50ZM50 0L0 50Z' stroke-width='1' stroke='%23e5e7eb' fill='none'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23pattern)'/%3E%3C/svg%3E");
      }
    </style>
  </head>
  <body class="antialiased">
    <!-- Navigation -->
    <nav class="gradient-bg text-white shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <a href="#" class="flex-shrink-0 text-2xl font-bold">
              StitchUp Dreams
            </a>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a href="#" class="text-white hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" class="text-white hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="#" class="text-white hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Portfolio</a>
              <a href="#" class="text-white hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <header class="hero-section py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
          Transform Your Dreams into Design
        </h1>
        <p class="text-xl text-purple-100 mb-10 max-w-3xl mx-auto">
          We blend creativity and technology to bring your vision to life with stunning digital experiences.
        </p>
        <div class="space-x-4">
          <a href="#" class="bg-white text-purple-600 hover:bg-purple-100 px-6 py-3 rounded-full font-semibold transition duration-300">
            Get Started
          </a>
          <a href="#" class="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 py-3 rounded-full font-semibold transition duration-300">
            Learn More
          </a>
        </div>
      </div>
    </header>

    <!-- Root for React -->
    <div id="root" class="min-h-screen"></div>

    <!-- Main Script -->
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
