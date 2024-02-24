<script setup lang="ts">
import DefaultButton from '@/components/UI/DefaultButton.vue';
import DefaultInput from '@/components/UI/DefaultInput.vue';
</script>

<template>
    <section class="flex h-screen overflow-hidden">
        <div class="w-1/2 h-full flex items-center justify-center gap-2 relative">
            <img class="w-full h-full absolute top-0 left-0" src="../assets/img/backgroundImg.png" alt="Imagem ilustrativa">

            <div class="flex flex-col items-center justify-center z-50">
                <h1 class="text-green-500 underline text-2xl font-bold">CodeSpark</h1>
                <span class="text-lg">Cadastre-se e explore!</span>
            </div>
        </div>

        <div class="w-1/2 flex flex-col items-center justify-center gap-4">
            <form class="w-full max-w-xl flex flex-col gap-4">
                <DefaultInput type="string" placeholder="Digite seu nome" />
                <DefaultInput type="string" placeholder="Digite seu email" />
                <DefaultInput type="string" placeholder="Digite sua senha" />
                <DefaultInput type="number" placeholder="Digite seu CPF" />
                <DefaultButton class="w-full" text="Cadastre-se" />
            </form>

            <span class="text-lg">Já tem uma conta? <a href="/singin" class="text-green-200">Entrar!</a></span>
        </div>
    </section>
</template>