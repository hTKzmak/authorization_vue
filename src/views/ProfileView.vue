<template>
    <!-- <div class="profile"> -->
    <div :class="[token !== null ? 'profile' : 'profileDisplayNone']">
        <h1>My profile</h1>
        <div class="profile-info">
            <div class="profile-info-list">
                <div class="profile-info-item">Username: {{ this.data.username }}</div>
                <div class="profile-info-item">Name: {{ this.data.name }}</div>
                <div class="profile-info-item">Lastname: {{ this.data.lastname }}</div>
                <div class="profile-info-item">Gender: {{ this.data.gender }}</div>
                <div class="profile-info-item">Email: {{ this.data.email }}</div>
            </div>
            <img class="profile-picture" :src=this.data.image alt="profile picture" @click="getInfo">
        </div>
    </div>
    <div :class="[token !== null ? 'messageDisplayNone' : 'message']">
        <h1>Authentication Problem</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: JSON.parse(localStorage.getItem('user')),
            token: JSON.parse(localStorage.getItem('token')),
        }
    },
    methods: {
        getInfo() {
            console.log(this.data.email)
        }
    }
}
</script>
  
<style>
.profile {
    display: grid;
    justify-content: center;
}

.message{
    text-align: center;
}

.profileDisplayNone {
    display: none;
}

.messageDisplayNone {
    display: none;
}

.profile-info {
    margin-top: 50px;
    display: flex;
    gap: 110px;
}

.profile-info-list {
    display: grid;
    row-gap: 10px;
}

.profile-info-item {
    box-shadow: 0px 2.75px 9px 0px #00000030;
    font-size: 16px;
    font-weight: 500;
    color: #000;
    padding: 8px 16px;
    max-width: fit-content;
    border-radius: 10px;
}

.profile-picture {
    border-radius: 100px;
    width: 300px;
    height: 300px;
}
</style>