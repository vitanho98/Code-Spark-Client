<script setup lang="ts">
import ClassesMain from '@/components/UI/ClassesMain.vue'
import DefaultButton from '@/components/UI/DefaultButton.vue';
import Evaluation from '@/components/UI/Evaluation.vue';
</script>

<template>
  <section class="flex flex-col justify-center w-screen overflow-hidden pt-28 px-16 gap-10">
    <div class="flex gap-10 flex-wrap">
      <div>
        <img
          class="w-250 h-120 rounded"
          src="../assets/img/backgroundImgSingIn.jpg"
          alt="Imagem ilustrativa"
        />
      </div>

      <div class="bg-gray-800 w-96 flex flex-col items-center gap-3 rounded py-5">
        <ClassesMain text="Aula de Introdução" />
        <ClassesMain text="Aula de Introdução" />
        <ClassesMain text="Aula de Introdução" />
        <ClassesMain text="Aula de Introdução" />
      </div>
    </div>

    <div class="bg-gray-800 flex gap-52 w-250 h-72 rounded py-5 px-5">
      <div class="flex flex-col gap-3">
        <a href="/" class="text-sm text-gray-300">HTML5 + CSS3</a>
        <h1 class="font-semibold text-xl">01 Aula de Introdução</h1>
        <p class="w-96 font-medium">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi neque fugiat id vitae
          eum facilis minus dolor eaque amet. Suscipit, voluptas et quisquam ad totam officiis illum
          blanditiis eveniet impedit optio explicabo rerum quasi beatae dolor est eligendi iste
          quam!
        </p>
      </div>

      <div class="flex flex-col items-center gap-5 py-6">
        <h1 class="font-semibold text-lg">Avaliar a Aula</h1>
        <Evaluation :length="5" :disabled="false" :read-only="false" :active="3"/>
      <DefaultButton text="Marcar como concluida" />  
      </div>
    </div>

  </section>
</template>
