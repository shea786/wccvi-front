<template>
  <v-app id="example-2" toolbar>
    <v-navigation-drawer
      temporary
      v-model="drawer"
      :mini-variant.sync="mini"
      light
      overflow
      absolute
    >
      <v-list class="pa-1">
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon dark @click.native.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
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
    <v-toolbar fixed class="primary" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title><strong>Warwickshire CCVI</strong></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat v-for="item in navBarLinks" :key="item.title" :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>
          <v-icon left>lock_open</v-icon>
          Sign In
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
      <v-btn flat>
        <v-icon left>face</v-icon>
        Sign Up
      </v-btn>
      </v-toolbar-items>
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
        drawer: null,
        navBarLinks: [
          { icon: 'home', title: 'Home', link: '/' },
          { icon: 'home', title: 'Squad', link: '/squad' },
          { icon: 'play_arrow', title: 'League Table', link: 'league-table' },
          { icon: 'home', title: 'Results', link: 'results' },
          { icon: 'home', title: 'Fixtures', link: 'fixtures' },
          { icon: 'home', title: 'Contact Us', link: 'contact-us' },
          { icon: 'home', title: 'Sponsor', link: 'sponsor' }
        ],
        title: 'WCCVI',
        mini: false,
        right: null
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
