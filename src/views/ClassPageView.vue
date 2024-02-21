<script setup lang="ts">
import ClassesMain from '@/components/UI/ClassesMain.vue'
</script>

<template>
  <section class="flex flex-wrap justify-center overflow-hidden pt-28 px-16 gap-10">
    <header>
      <img
        class="w-250 h-96 rounded"
        src="../assets/img/backgroundImgSingIn.jpg"
        alt="Imagem ilustrativa"
      />
    </header>

    <main class="">
        <div class="bg-gray-800 w-96 flex flex-col items-center gap-3 rounded py-5">
            <ClassesMain text="Aula de Introdução" />
            <ClassesMain text="Aula de Introdução" />
            <ClassesMain text="Aula de Introdução" />
            <ClassesMain text="Aula de Introdução" />
          </div>
    </main>
  </section>
</template>
