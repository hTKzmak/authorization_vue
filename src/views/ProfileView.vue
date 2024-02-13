<template>
    <div class="profile">
        <h1>My profile</h1>
        <div class="profile-info">
            <div class="profile-info-list">
                <div class="profile-info-item">Username: hbingley1</div>
                <div class="profile-info-item">Name: Terry</div>
                <div class="profile-info-item">Lastname: Medhurst</div>
                <div class="profile-info-item">Gender: male</div>
                <div class="profile-info-item">Email: hbingley1@plala.or.jp</div>
            </div>
            <img src="../assets/images/ellipse.png" alt="">
        </div>
    </div>
</template>
  
<style>

.profile{
    display: grid;
    justify-content: center;
}

.profile-info{
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

</style>