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
                    <form class="mx-1 mx-md-4">
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0 text-start">
                          <label class="form-label" for="form3Example1c">user_id</label>
                          <input type="text" id="form3Example1c" class="form-control" v-model="user_id" />
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0 text-start">
                          <label class="form-label" for="form3Example3c">photo</label>
                          <input type="file" id="form3Example4c" class="form-control" @change="handlePhotoChange" />
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0 text-start">
                          <label class="form-label" for="form3Example4c">title</label>
                          <input type="text" id="form3Example4c" class="form-control" v-model="title" />
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0 text-start">
                          <label class="form-label" for="form3Example4c">description</label>
                          <input type="text" id="form3Example4c" class="form-control" v-model="description" />
                        </div>
                      </div>
                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" class="btn btn-primary btn-lg" @click="submitForm">Create</button>
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
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CreatePostView',
  data() {
    return {
      user_id: '', // Initialize the user_id property
      photo: null,
      title: '',
      description: '',
    };
  },
  created() {
    // Fetch the user ID when the component is created
    this.user_id = this.$store.state.user.id; // Replace 'user.id' with the actual path to the user ID in your state
        this.token = localStorage.getItem('token'); // Or this.$store.state.authToken if stored in Vuex

  },
  methods: {
    handlePhotoChange(event) {
      this.photo = event.target.files[0];
    },

    
    async submitForm() {
  try {
    const formData = new FormData();
    formData.append('user_id', this.user_id);
    formData.append('photo', this.photo);
    formData.append('title', this.title);
    formData.append('description', this.description);

    const config = {
      headers: {
            Authorization: `Bearer ${this.token}`,
      },
    };

    const response = await axios.post('http://127.0.0.1:8000/api/post/store', formData, config);

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
},



  },
};
</script>