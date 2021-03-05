<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label for="uName">
            <input
              type="text"
              name="uName"
              id="uName"
              v-model="uName"
              class="form-control"
            />
          </label>
        </div>
        <div class="form-group">
          <label for="mail">Mail</label>
          <input
            type="text"
            class="form-control"
            name="mail"
            v-model="email"
            id="mail"
          />
        </div>
        <button @click.prevent="submit" class="btn btn-primary">Submit</button>
        <button @click="getData()" class="btn btn-primary">Get data</button>
      </div>
    </div>
    <ul class="list-group">
      <li class="list-group-item" v-for="u in users" :key="u[id]">
        {{ u.userName }} - {{ u.email }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uName: "",
      email: "",
      users: [],
      resource: {},
      node: "data",
    };
  },
  methods: {
    submit() {
      this.resource.save(
        {},
        {
          userName: this.uName,
          email: this.email,
        }
      );
      //   this.$http
      //     .post("data.json", {
      //       uName: this.uName,
      //       email: this.email,
      //     })
      //     .then(
      //       (response) => {
      //         console.log(response);
      //       },
      //       (error) => {
      //         console.log(error);
      //       }
      //     );
    },
    getData() {
      //   this.$http
      //     .get("data.json")
      //     .then((response) => {
      //       return response.json();
      //     })
      //     .then((data) => {
      //       const resultData = [];
      //       for (let key in data) {
      //         resultData.push({
      //           userName: data[key].email,
      //           email: data[key].uName,
      //         });
      //       }
      //       this.users = resultData;
      //     });
      // },
      this.resource
        .getData({
          node: this.node,
        })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const resultData = [];
          for (let key in data) {
            resultData.push({
              userName: data[key].email,
              email: data[key].uName,
            });
          }
          this.users = resultData;
        });
    },
  },
  created() {
    const customActions = {
      saveAlt: { method: "POST", url: "alternative.json" },
      getData: { method: "GET" },
    };
    this.resource = this.$resource("{node}.json", {}, customActions);
  },
};
</script>

<style></style>
