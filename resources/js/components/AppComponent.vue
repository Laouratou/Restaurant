<template>
    <div class="container border">
        <div class="row">
            <div class="col-lg-3">
                <router-link to="/h">Help</router-link><br>
                <router-link to="/c">Contact</router-link><br>
                <router-link to="/e">Enseignant</router-link>
            </div>
            <div class="col-lg-9">
                <router-view></router-view>
            </div>
        </div>    
    </div>
    
</template>
<script setup>

</script>