<template>
  <header class="fixed w-full flex items-center justify-between bg-gray-800 px-12 py-5 shadow-lg z-[999] max-sm:hidden">
    <router-link to="/">
      <h1 class="text-2xl font-righteous text-white">CodeSpark</h1>
    </router-link>

    <nav class="flex gap-4">
      <ul class="flex gap-3">
        <li class="hover:opacity-80 transition-opacity">
          <router-link active-class="active-link" to="/">Home</router-link>
        </li>

        <li class="hover:opacity-80 transition-opacity">
          <router-link active-class="active-link" to="/catalog">Catálogo</router-link>
        </li>

        <li class="hover:opacity-80 transition-opacity">
          <router-link active-class="active-link" to="/profile">Perfil</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>