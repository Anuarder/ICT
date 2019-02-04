<template>
    <div class="menu">
        <div>
            <h2>Information and communications technology</h2>
            <h4>Menu</h4>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/lecture1">Lecture 1</router-link></li>
                <li><router-link to="/lecture2">Lecture 2</router-link></li>
                <li><router-link to="/lecture3">Lecture 3</router-link></li>
                <li><router-link to="/lecture4">Lecture 4</router-link></li>
                <li><router-link to="/lecture5">Lecture 5</router-link></li>
                <li><router-link to="/lecture6">Lecture 6</router-link></li>
                <li><router-link to="/lecture7">Lecture 7</router-link></li>
            </ul>
        </div>
    </div>
</template>
<style>
.menu{
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    text-align: left;
    color: #252525;
    margin: 5%;
}
.menu li{
    padding: 3px;
}
.menu a{
    text-decoration: none;
    color: #252525;
}
.menu a:hover{
    color: #0e1f81;
    text-decoration: underline;
}
.menu h4{
    text-align: left;
}
</style>
