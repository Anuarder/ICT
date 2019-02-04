<template>
    <div class="main">
        <div class="centered-content">
            Information and communications technology
            <div>
                <router-link to="/menu" class="navigation">Start</router-link>
            </div>
        </div>
    </div>
</template>
<style>
.main{
    background-image: url('../assets/ICT.jpg');
    background-size: cover;
    height: 100vh;
    width: 100vw;
}
.centered-content{
    color: #012349;
    text-align: center;
    font-size: 4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.navigation{
    text-decoration-line: none;
    font-size: 2.5rem;
    color: #340d7e;
}
.navigation:hover{
    text-decoration-line: underline;
    color: #7d42eb;
}
</style>
