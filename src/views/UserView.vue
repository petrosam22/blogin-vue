<template>
  <div>
    <div v-if="user">
       {{ user.name }}
    </div>
    <div v-else>
      User not logged in.
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserView',
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>