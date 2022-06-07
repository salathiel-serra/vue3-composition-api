<template>
  <nav>
    <router-link :to="{name: 'home'}"> Início </router-link> |
    <router-link :to="{name: 'todos.index'}"> Lista </router-link>
  </nav>
  <router-view/>
</template>