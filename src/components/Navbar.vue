<template>
  <nav class="navbar">
    <h2 class="logo">MyWebsite</h2>

    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/test">Test</RouterLink>
      </li>
      <li>
        <RouterLink to="/BelajarComponent">BelajarComponent</RouterLink>
      </li>
      <li>
        <RouterLink to="/Product">Product</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: #222;
  color: white;
}

.logo {
  margin: 0;
}

ul {
  display: flex;
  gap: 20px;
  list-style: none;
}

a {
  color: white;
  text-decoration: none;
}

a.router-link-active {
  color: #42b883;
  font-weight: bold;
}
</style>