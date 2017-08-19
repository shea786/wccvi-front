<template>
  <v-app id="example-2" toolbar>
    <v-navigation-drawer permanent class="hidden-sm-and-down">
      <v-toolbar flat>
        <v-list>
          <v-list-tile tag="div"></v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list dense class="pt-0">
        <v-list-tile v-for="item in navBarLinks" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="primary" dark>
      <v-toolbar-title><strong>Warwickshire CCVI</strong></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-item>
        <v-btn flat>
          <v-icon left light>lock_open</v-icon>
          Log in
        </v-btn>
        <v-btn flat>
          <v-icon left light>face</v-icon>
          Register
        </v-btn>
      </v-toolbar-item>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        navBarLinks: [
          { icon: 'home', title: 'Home', link: '/' },
          { icon: 'home', title: 'Squad', link: '/squad' },
          { icon: 'play_arrow', title: 'League Table', link: 'league-table' },
          { icon: 'home', title: 'Results', link: 'results' },
          { icon: 'home', title: 'Fixtures', link: 'fixtures' },
          { icon: 'home', title: 'Contact Us', link: 'contact-us' },
          { icon: 'home', title: 'Sponsor', link: 'sponsor' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
