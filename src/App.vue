<template>
  <nav>
    <router-link to="/">Home</router-link> |
     <router-link to="/register">Register</router-link>|
     <router-link to="/login">Login</router-link>|
     <router-link to="/user">user</router-link>|
     <router-link to="/Create/Post">Create/Post</router-link>|
     <router-link to="/Posts">Posts</router-link>|
   <div v-if="$store.state.user">
      <p>Welcome, {{ $store.state.user.login }}</p>
    </div>



  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
 