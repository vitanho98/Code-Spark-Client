<script setup lang="ts">
import DefaultButton from '@/components/UI/DefaultButton.vue';
import DefaultInput from '@/components/UI/DefaultInput.vue';
</script>

<template>
    <section class="flex h-screen overflow-hidden">
        <div class="w-1/2 h-full flex items-center justify-center relative">
            <img class="w-full h-full absolute top-0 left-0" src="../assets/img/backgroundImgSingIn.jpg"
                alt="Imagem ilustrativa">

            <div class="flex flex-col items-center justify-center z-50">
                <h1 class="text-green-500 underline text-2xl font-bold">CodeSpark</h1>
                <span class="text-lg">Entre com sua conta e explore!</span>
            </div>
        </div>

        <div class="w-1/2 flex flex-col items-center justify-center gap-4">
            <form class="w-full max-w-xl flex flex-col gap-4">
                <DefaultInput type="string" placeholder="Digite seu nome" />
                <DefaultInput type="string" placeholder="Digite sua senha" />
                <DefaultButton class="w-full" text="Entrar" />
            </form>

            <span class="text-lg">Não tem uma conta? <a href="/singup" class="text-green-200">Registre-se!</a></span>
        </div>
    </section>
</template>