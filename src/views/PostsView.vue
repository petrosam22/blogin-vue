<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Description</th>
   
        <th scope="col">Update</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.title }}</td>
        <td>{{ post.description }}</td>
        
              <td>
          <router-link :to="'/edit/' + post.id" class="btn btn-primary btn-lg">
            Update
          </router-link>
        </td>

        <td>
          <button  type="button" class="btn btn-danger btn-lg" @click="deletePost(post.id)"> Delete </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>




<script>
import axios from 'axios';

export default {
  name: 'PostsView',
  data() {
    return {
      posts: [],
    };
  },
mounted() {
      const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMmM3MTQ0MGM2M2ZjYjQzMDA0ZDcwZTQ5OWY4MjA3M2Q1ODcwMTViYzI4ODMwZmQwNzM3NzA1YTYxNzE5MjAzNzliYjEzMGM4NDljYTk5NGQiLCJpYXQiOjE3MDU1MTY2NjEuMzAxNzk2LCJuYmYiOjE3MDU1MTY2NjEuMzAxODA0LCJleHAiOjE3MzcxMzkwNjEuMjkzNjksInN1YiI6IjQiLCJzY29wZXMiOltdfQ.q_dAciemP9kEy9LYr2o4kiX1lyYDPblwQPd3ch_luPwWYjVpTlLMz4IMAqvnOc8gly9_CdL1b_QG1AfL5d3tAg1kSUA7P6_ajPklJLxNf2yxYifyYLRO6BYrdjLOpf2ld9S_55dYc_k4KPPmR6go4UE6d5jBT6_WkQsfwAFAbJSdBnqHILvwVYTuSluDqiyBHcZ5vSH_ZkMnAlEnCBHVfZKMtBFp0rDOlGuhvAP__HNKjp83tTl8t1fbOoWzm72eJ9JCuNsTisv3o7dRCN-FC5mSGcGDNuXOr9lIAY9UyomWMdNqRktIq6aTGG27Y59goBDCAjHV1-gy1DjitTDHotgtM6NV3azT_kLF0UABzB5d353hMEFNOXfEDg0PxZj5zayB_dZ04eMtQnePTBdngPToJ2VN048zpploTptdVlXl_im0-LI0pKAK29sxwD1XweU9q-uo_zE6zsPvy9JlVwPkFDOw9VsP1qjx0pjKMozb_rq4GugMLwAgxAyMr94gtcpoJ4qJOw2MbRlaR8X3rWlzQePEMqCvXBu-7IWUqXK8zOR1oFAkRBZIFoJlKJDDfiyZkFSqEp3hIiSZlF2NV0nDgj-aBYO9iPuzpB0MLblMcqpil6vZdFyg5tHZjC3YxP0lDlTiiq_Z4sp0_ZLBEsKS2dAIRNuq_C6dQC18B1M";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  axios.get('http://127.0.0.1:8000/api/post/all', config)
    .then(response => {
      this.posts = response.data.data;
 //     console.log(response.data.data[0]);
    })
    .catch(error => {
      console.error(error);
    });
},    methods: {
    deletePost(postId) {
      const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMmM3MTQ0MGM2M2ZjYjQzMDA0ZDcwZTQ5OWY4MjA3M2Q1ODcwMTViYzI4ODMwZmQwNzM3NzA1YTYxNzE5MjAzNzliYjEzMGM4NDljYTk5NGQiLCJpYXQiOjE3MDU1MTY2NjEuMzAxNzk2LCJuYmYiOjE3MDU1MTY2NjEuMzAxODA0LCJleHAiOjE3MzcxMzkwNjEuMjkzNjksInN1YiI6IjQiLCJzY29wZXMiOltdfQ.q_dAciemP9kEy9LYr2o4kiX1lyYDPblwQPd3ch_luPwWYjVpTlLMz4IMAqvnOc8gly9_CdL1b_QG1AfL5d3tAg1kSUA7P6_ajPklJLxNf2yxYifyYLRO6BYrdjLOpf2ld9S_55dYc_k4KPPmR6go4UE6d5jBT6_WkQsfwAFAbJSdBnqHILvwVYTuSluDqiyBHcZ5vSH_ZkMnAlEnCBHVfZKMtBFp0rDOlGuhvAP__HNKjp83tTl8t1fbOoWzm72eJ9JCuNsTisv3o7dRCN-FC5mSGcGDNuXOr9lIAY9UyomWMdNqRktIq6aTGG27Y59goBDCAjHV1-gy1DjitTDHotgtM6NV3azT_kLF0UABzB5d353hMEFNOXfEDg0PxZj5zayB_dZ04eMtQnePTBdngPToJ2VN048zpploTptdVlXl_im0-LI0pKAK29sxwD1XweU9q-uo_zE6zsPvy9JlVwPkFDOw9VsP1qjx0pjKMozb_rq4GugMLwAgxAyMr94gtcpoJ4qJOw2MbRlaR8X3rWlzQePEMqCvXBu-7IWUqXK8zOR1oFAkRBZIFoJlKJDDfiyZkFSqEp3hIiSZlF2NV0nDgj-aBYO9iPuzpB0MLblMcqpil6vZdFyg5tHZjC3YxP0lDlTiiq_Z4sp0_ZLBEsKS2dAIRNuq_C6dQC18B1M";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
     
  axios
    .delete(`http://127.0.0.1:8000/api/post/destroy/${postId}`, config)
    .then(response => {
      // Handle successful deletion
      console.log(response + " Post deleted successfully");
      // Optionally, you can update the posts array after deletion
      this.posts = this.posts.filter(post => post.id !== postId);
    })
    .catch(error => {
      // Handle error
      console.log("Error deleting post:", error);
    });
}

  },
};
</script>