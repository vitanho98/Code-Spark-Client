<script setup lang="ts">
import ModuleBar from '@/components/Navigation/ModuleBar.vue';
import MetricCourseCard from '@/components/UI/MetricCourseCard.vue';
import KnobMetricCard from '@/components/UI/KnobMetricCard.vue';
</script>

<template>
    <div class="flex justify-between">
        <section>
            <ModuleBar></ModuleBar>
        </section>


        <section class="py-32 pr-120">
            <h1 class="text-green-500 text-2xl font-righteous">Dashboard</h1>

            <div class="grid grid-cols-2 grid-rows-2 gap-14">
            <div>
            <MetricCourseCard metric-title="Média faixa etária" icon="pi pi-user" metric-name="30 anos"
                metric-description="Média de idade">
            </MetricCourseCard>
        </div>
            <div>
            <MetricCourseCard metric-title="Total de alunos" icon="pi pi-user" metric-name="48" 
                metric-description="Quantidade de alunos cadastrados">
            </MetricCourseCard>
        </div>
            
            <div>
            <MetricCourseCard metric-title="Crescimento por ano" icon="pi pi-calendar" metric-name="44,5%" metric-description="Crescimento de alunos por ano"></MetricCourseCard>
        </div>

            <div>
            <KnobMetricCard :value="60" metric-title="Total de conclusão" metric-description="Total de alunos: 26 "></KnobMetricCard>
        </div>
    </div>
        </section>
    </div>
</template>