<script setup lang="ts">
import ModuleBar from '@/components/Navigation/ModuleBar.vue';
import ModulesWrapper from '@/components/UI/ModuleWrapper.vue';
import ModuleText from '@/components/UI/ModuleText.vue';
import ButtonModule from '@/components/UI/ButtonModule.vue';
import { type IModule } from '@/interfaces/IModule';

const modules: IModule[] = [
    {
        id: 1,
        title: 'O que vamos aprender?',
        text: 'Lorem ipsum dolor sit amet, ipsum dolor sit amet consectetur adipiscing. Vitae semper quis lectus nulla at volutpat diam ut venenatis.'
    },
    {
        id: 2,
        title: 'O que vamos aprender?',
        text: 'Lorem ipsum dolor sit amet, ipsum dolor sit amet consectetur adipiscing. Vitae semper quis lectus nulla at volutpat diam ut venenatis.'
    },
    {
        id: 3,
        title: 'O que vamos aprender?',
        text: 'Lorem ipsum dolor sit amet, ipsum dolor sit amet consectetur adipiscing. Vitae semper quis lectus nulla at volutpat diam ut venenatis.'
    },
    {
        id: 4,
        title: 'O que vamos aprender?',
        text: 'Lorem ipsum dolor sit amet, ipsum dolor sit amet consectetur adipiscing. Vitae semper quis lectus nulla at volutpat diam ut venenatis.'
    },
    {
        id: 5,
        title: 'O que vamos aprender?',
        text: 'Lorem ipsum dolor sit amet, ipsum dolor sit amet consectetur adipiscing. Vitae semper quis lectus nulla at volutpat diam ut venenatis.'
    }
    
]

</script>

<template>
    <div class="flex justify-between">
        <section class="">
            <ModuleBar>
            </ModuleBar>
        </section>

        <section class="pr-60 py-32">
            <ModuleText text="5 módulos cadastrados">
                <ul class="py-7">
                    <li v-for="module in modules" :key="module.id">
                        <ModulesWrapper :module = "module">
                        </ModulesWrapper>
                    </li>
                </ul>
            </ModuleText>
        </section>
        <section class="fixed">
            <ButtonModule text="Adicionar módulo">
            </ButtonModule>
            </section>
    </div>
</template>
