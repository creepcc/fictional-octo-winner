<template>

    <nav>
    <v-navigation-drawer v-model="drawer" dark="" app class="navbar"
    expand-on-hover="1" width="10%" >
    <v-layout column align-center > 
    <v-flow class=" mb-8" >
    <v-avatar >
    <v-icon style="align: left">fas fa-store</v-icon>
    </v-avatar>
    </v-flow>
    </v-layout>
    <v-list >
    <v-list-item v-for="link in links" :key="link.text" router :to="link.route" active-class="selected" elevation="12">
    <v-list-item-action>
    <v-icon style="color: #FAFAF7;">{{link.icon}}</v-icon>
    </v-list-item-action>
    <v-list-item-content>
    <v-list-item-title style="font-family: 'Lato', sans-serif;">{{link.text}}</v-list-item-title>
    </v-list-item-content>    
    </v-list-item>
    </v-list>
    </v-navigation-drawer>
    </nav>
    
</template>
<script>
export default {
 data: () =>({
     drawer: true,
     links: [
         {icon: 'fa-home', text:'HOME', route: '/'},
            {icon: 'fa-user', text:'LOGIN', route: '/HelloWorld'},
     ],
     slides: [
         'Home page',
         'Login page'
     ]
 })
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap');
.border{
    border-left: 4px solid #2c3e50;
}
.selected{
    background-color: #FF1053;

}
</style>