<template>
  <div class="users-list">
    <div v-for="elem in data">
      <div class="user-item" @click="getInfo">
        <h3>{{ elem.firstName + ' ' + elem.lastName + ' ' + elem.maidenName }}</h3>
        <p>{{ elem.email }}</p>
      </div>
    </div>
  </div>
</template>


<!-- fetch -->

<script>

export default {
  data() {
    return {
      data: []
    }
  },
  methods: {
    getInfo() {
      console.log(this.data)
    }
  },
  async mounted(){
    const response = await fetch("https://dummyjson.com/users");
    const info = await response.json();
    this.data = [...this.data, ...info.users]
  }
}
</script>

<style>
.users-list {
  display: grid;
  justify-content: center;
  row-gap: 18px;
}

.user-item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fff;
  box-shadow: 0px 2.75px 9px 0px #00000030;

  width: 402px;
  padding: 16px;
  border-radius: 10px;
  gap: 10px;
}

.user-item>p {
  color: #00000099;
}
</style>
