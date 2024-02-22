<script setup lang="ts">
import DefaultButton from '@/components/UI/DefaultButton.vue'
import Evaluation from '@/components/UI/Evaluation.vue'
</script>

<template>
  <section class="flex justify-center w-full pt-28 px-16">
    <main class="flex gap-5">
      <div class="flex flex-col gap-10">
        <img
          class="w-250 h-120 rounded"
          src="../assets/img/backgroundImgSingIn.jpg"
          alt="Imagem ilustrativa"
        />

        <div class="bg-gray-800 flex gap-52 w-250 rounded p-5">
          <div class="flex flex-col gap-3">
            <a href="/" class="text-sm text-gray-300">HTML5 + CSS3</a>
            <h1 class="font-semibold text-xl">01 Aula de Introdução</h1>
            <p class="w-96 font-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi neque fugiat id
              vitae eum facilis minus dolor eaque amet. Suscipit, voluptas et quisquam ad totam
              officiis illum blanditiis eveniet impedit optio explicabo rerum quasi beatae dolor est
              eligendi iste quam!
            </p>
          </div>

          <div class="flex flex-col items-center gap-5 py-6">
            <h1 class="font-semibold text-lg">Avaliar a Aula</h1>
            <Evaluation :length="5" :disabled="false" :read-only="false" :active="3" />
            <DefaultButton text="Marcar como concluida" />
          </div>
        </div>
      </div>

      <aside class="bg-gray-800 w-96 h-full rounded p-3">
        <ul class="flex flex-col items-center gap-3">
          <li class="bg-gray-500 w-full h-10 flex flex-col justify-center items-center rounded">
            Primeira Aula
          </li>
          <li class="bg-gray-500 w-full h-10 flex flex-col justify-center items-center rounded">
            Primeira Aula
          </li>
          <li class="bg-gray-500 w-full h-10 flex flex-col justify-center items-center rounded">
            Primeira Aula
          </li>
          <li class="bg-gray-500 w-full h-10 flex flex-col justify-center items-center rounded">
            Primeira Aula
          </li>
          <li class="bg-gray-500 w-full h-10 flex flex-col justify-center items-center rounded">
            Primeira Aula
          </li>
        </ul>
      </aside>
    </main>
  </section>
</template>
