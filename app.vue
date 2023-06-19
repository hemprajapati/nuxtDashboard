<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@import 'primeicons/primeicons.css';

body {
  font-family: var(--font-family);

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.p-button {
  min-width: 0;
}

.main {
  display: flex;
  flex-direction: column;
  height: 100vh !important;
  overflow: hidden;
}

.flex {
  display: flex;
}

.flex-grow {
  flex-grow: 1;
}

.jb {
  justify-content: space-between;
}

.ic {
  align-items: start;
}
</style>