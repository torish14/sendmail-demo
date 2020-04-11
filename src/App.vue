<template>
  <v-app light>
    <v-content>

    <!-- <section class="container"> -->

      <Navbar />

      <section class="titie" style="font-size: 72px; font-family: Cambay; margin-top: 32px;">
        <h4 class="front" style="font-weight: 400; text-shadow: 1px 1px 3px #808080">
          Strengths
        </h4>
        <h4 class="back" style="font-weight: 300; text-shadow: 1px 1px 2px #808080">
          Finder
        </h4>
      </section>

      <Bubble1 style="position: relative; top:-80px; right: 24px; pointer-events: none;" />

      <!-- <h4 class="heading1" style="font-size: 40px; font-weight: 100; position: relative; bottom: 32px;">
        History
      </h4> -->

        <!-- <Card1 />
        <Card2 />
        <Card3 /> -->
      <Card4 />

      <Bubble2 style="padding-left: 50px; pointer-events: none;" />

      <!-- <div class="panel" style="display: flex;">
        <div class="influencing" style="position: relative; top: 70px;">
          <li style="font-size: 18px; border-bottom: solid 2px rgba(255, 204, 0, 1); max-width: 120px;">
            influencing
          </li>
          <br>
          <Panel1 />
        </div>

        <div class="executing" style="position: relative; top: 70px; left: 20px;">
          <li style="font-size: 18px; border-bottom: solid 2px rgba(68, 0, 0, 1); max-width: 110px;">
            executing
          </li>
          <br>
          <Panel2 />
        </div>

        <div class="strategic-thinking" style="position: relative; top: 70px; left: 40px;">
          <li style="font-size: 18px; border-bottom: solid 2px rgba(153, 51, 102, 1); max-width: 170px;">
            strategic-thinking
          </li>
          <br>
          <Panel3 />
        </div>

        <div class="relationship-building" style="position: relative; top: 70px; left: 60px;">
          <li style="font-size: 18px; border-bottom: solid 2px rgba(0, 51, 51, 1); max-width: 195px;">
            relationship-building
          </li>
          <br>
          <Panel4 />
        </div>
      </div> -->
      <Panel5 />

      <Bubble3 style="padding-left: 80px; position: relative; bottom: 250px; pointer-events: none;" />

      <!-- <h4 class="heading3" style="font-size: 40px; font-weight: 100; position: relative; bottom:110px;">
        My themes
      </h4> -->

      <Themes />

      <Bubble4 style="position: relative; bottom: 150px; pointer-events: none;" />

      <ContactForm style="position: relative; bottom: 60px;" />

    <!-- </section> -->
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Bubble1 from './components/Bubble1'
import Bubble2 from './components/Bubble2'
import Bubble3 from './components/Bubble3'
import Bubble4 from './components/Bubble4'
// import Card1 from './components/Card1'
// import Card2 from './components/Card2'
// import Card3 from './components/Card3'
import Card4 from './components/Card4'
// import Panel1 from './components/Panel1'
// import Panel2 from './components/Panel2'
// import Panel3 from './components/Panel3'
// import Panel4 from './components/Panel4'
import Panel5 from './components/Panel5'
import Themes from './components/Themes'
import ContactForm from './components/ContactForm'

export default {
  name: 'App',
  components: {
    Navbar,
    Bubble1,
    Bubble2,
    Bubble3,
    Bubble4,
    // Card1,
    // Card2,
    // Card3,
    Card4,
    // Panel1,
    // Panel2,
    // Panel3,
    // Panel4,
    Panel5,
    Themes,
    ContactForm
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          // icon: 'mdi-human',
          // title: 'Welcome',
          // to: '/'
        }
        // {
        //   icon: 'mdi-alien-outline',
        //   title: 'About me',
        //   to: '/about'
        // }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Strengths Finder'
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

/* .container {
  position: relative;
  left: 50px;
} */
</style>
