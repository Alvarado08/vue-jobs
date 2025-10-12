<script setup>
import NavBar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobListings from "@/components/JobListings.vue";
</script>

<template>
  <NavBar />
  <Hero title="Test" subtitle="This is a test subtitle" />
  <HomeCards />
  <JobListings limit="3" />
</template>
