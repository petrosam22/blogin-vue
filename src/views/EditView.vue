<template>
  <div class="home">
    <section class="141vh!important" style="background-color: #eee;">
      <div class="container h-100 p-5">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black" style="border-radius: 25px;">
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Create Post</p>
                    <form class="mx-1 mx-md-4" @submit.prevent="updatePost">
                       
                       
                      <div class="d-flex flex-row align-items-center mb-4" >
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0 text-start">
                          <label class="form-label" for="form3Example4c">title</label>
                          <input type="text" id="form3Example4c" class="form-control" v-model="post.title" required />
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0 text-start">
                          <label class="form-label" for="form3Example4c">description</label>
                          <input type="text" id="form3Example4c" class="form-control" v-model="post.description" required />
                        </div>
                      </div>
                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button  type="submit" class="btn btn-primary btn-lg"  >Update</button>        
<router-link :to="'/posts/' + post.id">Cancel</router-link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div> </template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      post: {
        id: null,
        title: '',
        description: '',
      },
    };
  },
  created() {
    const postId = this.$route.params.id;
      const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMmM3MTQ0MGM2M2ZjYjQzMDA0ZDcwZTQ5OWY4MjA3M2Q1ODcwMTViYzI4ODMwZmQwNzM3NzA1YTYxNzE5MjAzNzliYjEzMGM4NDljYTk5NGQiLCJpYXQiOjE3MDU1MTY2NjEuMzAxNzk2LCJuYmYiOjE3MDU1MTY2NjEuMzAxODA0LCJleHAiOjE3MzcxMzkwNjEuMjkzNjksInN1YiI6IjQiLCJzY29wZXMiOltdfQ.q_dAciemP9kEy9LYr2o4kiX1lyYDPblwQPd3ch_luPwWYjVpTlLMz4IMAqvnOc8gly9_CdL1b_QG1AfL5d3tAg1kSUA7P6_ajPklJLxNf2yxYifyYLRO6BYrdjLOpf2ld9S_55dYc_k4KPPmR6go4UE6d5jBT6_WkQsfwAFAbJSdBnqHILvwVYTuSluDqiyBHcZ5vSH_ZkMnAlEnCBHVfZKMtBFp0rDOlGuhvAP__HNKjp83tTl8t1fbOoWzm72eJ9JCuNsTisv3o7dRCN-FC5mSGcGDNuXOr9lIAY9UyomWMdNqRktIq6aTGG27Y59goBDCAjHV1-gy1DjitTDHotgtM6NV3azT_kLF0UABzB5d353hMEFNOXfEDg0PxZj5zayB_dZ04eMtQnePTBdngPToJ2VN048zpploTptdVlXl_im0-LI0pKAK29sxwD1XweU9q-uo_zE6zsPvy9JlVwPkFDOw9VsP1qjx0pjKMozb_rq4GugMLwAgxAyMr94gtcpoJ4qJOw2MbRlaR8X3rWlzQePEMqCvXBu-7IWUqXK8zOR1oFAkRBZIFoJlKJDDfiyZkFSqEp3hIiSZlF2NV0nDgj-aBYO9iPuzpB0MLblMcqpil6vZdFyg5tHZjC3YxP0lDlTiiq_Z4sp0_ZLBEsKS2dAIRNuq_C6dQC18B1M";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`http://127.0.0.1:8000/api/post/show/${postId}`, config)
      .then(response => {
        this.post = response.data.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
  methods: {
    updatePost() {
      const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMmM3MTQ0MGM2M2ZjYjQzMDA0ZDcwZTQ5OWY4MjA3M2Q1ODcwMTViYzI4ODMwZmQwNzM3NzA1YTYxNzE5MjAzNzliYjEzMGM4NDljYTk5NGQiLCJpYXQiOjE3MDU1MTY2NjEuMzAxNzk2LCJuYmYiOjE3MDU1MTY2NjEuMzAxODA0LCJleHAiOjE3MzcxMzkwNjEuMjkzNjksInN1YiI6IjQiLCJzY29wZXMiOltdfQ.q_dAciemP9kEy9LYr2o4kiX1lyYDPblwQPd3ch_luPwWYjVpTlLMz4IMAqvnOc8gly9_CdL1b_QG1AfL5d3tAg1kSUA7P6_ajPklJLxNf2yxYifyYLRO6BYrdjLOpf2ld9S_55dYc_k4KPPmR6go4UE6d5jBT6_WkQsfwAFAbJSdBnqHILvwVYTuSluDqiyBHcZ5vSH_ZkMnAlEnCBHVfZKMtBFp0rDOlGuhvAP__HNKjp83tTl8t1fbOoWzm72eJ9JCuNsTisv3o7dRCN-FC5mSGcGDNuXOr9lIAY9UyomWMdNqRktIq6aTGG27Y59goBDCAjHV1-gy1DjitTDHotgtM6NV3azT_kLF0UABzB5d353hMEFNOXfEDg0PxZj5zayB_dZ04eMtQnePTBdngPToJ2VN048zpploTptdVlXl_im0-LI0pKAK29sxwD1XweU9q-uo_zE6zsPvy9JlVwPkFDOw9VsP1qjx0pjKMozb_rq4GugMLwAgxAyMr94gtcpoJ4qJOw2MbRlaR8X3rWlzQePEMqCvXBu-7IWUqXK8zOR1oFAkRBZIFoJlKJDDfiyZkFSqEp3hIiSZlF2NV0nDgj-aBYO9iPuzpB0MLblMcqpil6vZdFyg5tHZjC3YxP0lDlTiiq_Z4sp0_ZLBEsKS2dAIRNuq_C6dQC18B1M";
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios
        .post(`http://127.0.0.1:8000/api/post/edit/${this.post.id}`, this.post, config)
        .then(response => {
          console.log(response + ' Post updated successfully');
          this.$router.push(`/posts/${this.post.id}`);
        })
        .catch(error => {
          console.error('Error updating post:', error);
        });
    },
  },
};
</script>