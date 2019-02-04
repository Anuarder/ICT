<template>
    <div class="content">
        <router-link to="/menu" class="menu-link">Menu</router-link>
        <router-view></router-view>
    </div>
</template>
<style>
.content{
  margin: 0 auto;
  max-width: 800px;
  padding: 25px;
}
.menu-link{
    position: fixed;
    left: 20px;
    top: 10px;
    text-decoration: none;
    color: #577eff;
    font-size: 1.2rem;
}
.menu-link:hover{
    color: #00249c;
    text-decoration: underline;
}
</style>
