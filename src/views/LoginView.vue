<template>
    <div class="login">
        <div class="login-header">
            <h3>Authorizations</h3>
            <p class="warning" v-bind:style="{ display: warning_display }">Invalid credentials</p>
        </div>
        <div class="login-form">
            <div class="input-item">
                <p>Login</p>
                <input type="text" name="login" id="login" v-model="usernameInput">
            </div>
            <div class="input-item">
                <p>Password</p>
                <input type="password" name="password" id="password" v-model="passwordInput">
            </div>
            <button class="submit" type="submit" @click="loginCheck(usernameInput, passwordInput)">Submit</button>
            <!-- <button class="submit" @click="checkToken">Check</button>
            <button class="submit" @click="getData">Info</button> -->
        </div>
    </div>
</template>
  
<script>

export default {
    data() {
        return {
            usernameInput: 'kminchelle',
            passwordInput: '0lelplR',
            warning_display: 'none',
            data: []
        };
    },
    methods: {
        loginCheck(username, password) {
            fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
            })
                .then(res => res.json())
                .then(item => {
                    if (item.username == username) {
                        console.log('Token id updated')
                        this.warning_display = 'none';
                        localStorage.setItem('token', JSON.stringify(item.token));
                        this.checkToken()
                    }
                    else {
                        this.warning_display = 'block';
                    }
                })
        },

        checkToken() {
            fetch('https://dummyjson.com/auth/me', {
                method: 'GET',
                headers: {
                    'Authorization': JSON.parse(localStorage.getItem('token'))
                },
            })
                .then(res => res.json())
                .then(this.checkUser());

        },

        checkUser() {
            fetch('https://dummyjson.com/auth/me', {
                method: 'GET',
                headers: {
                    'Authorization': JSON.parse(localStorage.getItem('token'))
                },
            })
                .then(res => res.json())
                .then(item => localStorage.setItem('user', JSON.stringify({ username: item.username, name: item.firstName, lastname: item.lastName, gender: item.gender, email: item.email, image: item.image })))
                .then(console.log(JSON.parse(localStorage.getItem('user'))))
        },

        getData() {
            console.log(this.data)
        }
    }
}
</script>

<style>
.login {
    width: 335px;
    padding: 16px;
    box-shadow: 0px 2.75px 9px 0px #00000030;
    border-radius: 20px;
    margin: 0 auto;
}

.login-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.warning {
    color: #FF0000;
    font-size: 16px;
    font-weight: 500;
}

.login-form {
    display: grid;
    justify-content: center;
    row-gap: 13px;
}

input {
    border-radius: 20px;
    box-shadow: 0px 2.75px 9px 0px #00000030;
    border: none;
    padding: 8px 16px;
}

.submit {
    background-color: transparent;
    color: #00000099;
    font-weight: 400;
    font-size: 14px;
    border: none;
    margin-top: 10px;
    cursor: pointer;
}
</style>
  