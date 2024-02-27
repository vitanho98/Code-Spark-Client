<script setup lang="ts">
import ModuleBar from '@/components/Navigation/ModuleBar.vue';
import MetricCourseCard from '@/components/UI/MetricCourseCard.vue';
</script>

<template>
    <div class="flex justify-between">
        <section>
            <ModuleBar></ModuleBar>
        </section>


        <section class="py-32 px-28">
            <h1 class="text-green-500 text-2xl font-righteous">Dashboard</h1>
            <MetricCourseCard metric-title="Média faixa etária" icon="pi pi-user" metric-name="30 anos"
                metric-description="Média de idade">
            </MetricCourseCard>
        </section>
    </div>
</template>