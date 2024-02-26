<script setup lang="ts">
import ModuleBar from '@/components/Navigation/ModuleBar.vue';
import ModuleText from '@/components/UI/ModuleText.vue'
import ButtonModule from '@/components/UI/ButtonModule.vue';
import TableClass from '@/components/UI/TableClass.vue';
import type { ITable } from '@/interfaces/ITable';

const tables: ITable[] = [
    {
        id: 1,
        name: 'Primeira Aula',
        module: 'O que vamos aprender?'
    },
    {
        id: 2,
        name: 'Primeira Aula',
        module: 'O que vamos aprender?'
    },
    {
        id: 3,
        name: 'Primeira Aula',
        module: 'O que vamos aprender?'
    },
    {
        id: 4,
        name: 'Primeira Aula',
        module: 'O que vamos aprender?'
    },
    {
        id: 5,
        name: 'Primeira Aula',
        module: 'O que vamos aprender?'
    },
    {
        id: 6,
        name: 'Primeira Aula',
        module: 'O que vamos aprender?'
    },
    {
        id: 7,
        name: 'Primeira Aula',
        module: 'O que vamos aprender?'
    },
    {
        id: 8,
        name: 'Primeira Aula',
        module: 'O que vamos aprender?'
    },
    {
        id: 9,
        name: 'Primeira Aula',
        module: 'O que vamos aprender?'
    },
    {
        id: 10,
        name: 'Primeira Aula',
        module: 'O que vamos aprender?'
    },
    {
        id: 11,
        name: 'Primeira Aula',
        module: 'O que vamos aprender?'
    },
    {
        id: 12,
        name: 'Primeira Aula',
        module: 'O que vamos aprender?'
    },
    {
        id: 13,
        name: 'Primeira Aula',
        module: 'O que vamos aprender?'
    },
    {
        id: 14,
        name: 'Primeira Aula',
        module: 'O que vamos aprender?'
    },
    {
        id: 15,
        name: 'Primeira Aula',
        module: 'O que vamos aprender?'
    },
    {
        id: 16,
        name: 'Primeira Aula',
        module: 'O que vamos aprender?'
    },
    {
        id: 17,
        name: 'Primeira Aula',
        module: 'O que vamos aprender?'
    },
    {
        id: 18,
        name: 'Primeira Aula',
        module: 'O que vamos aprender?'
    },
    {
        id: 19,
        name: 'Primeira Aula',
        module: 'O que vamos aprender?'
    },
    {
        id: 20,
        name: 'Primeira Aula',
        module: 'O que vamos aprender?'
    }

]
</script>

<template>
<div class="flex justify-between">
    <section>
        <ModuleBar>
        </ModuleBar>
    </section>
    
    <section class="pr-60 py-32">
        
        <ModuleText title="Aulas" text="20 aulas registradas" subtitle="Aulas cadastradas no curso">
    
        </ModuleText>

            <TableClass class="py-7">
            <tr v-for="table in tables " :key="table.id">
                <td class="border">{{ table.name }}</td>
                <td class="border">{{ table.module }}</td>
            </tr>
        </TableClass>
    
    </section>
</div>
</template>