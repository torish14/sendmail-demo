<template>
  <v-app>
    <Navbar />
    <Heading />
    <Bubble1 class="bubble1" />
    <Cards />
    <Bubble2 class="bubble2 ml-12" />
    <Panels />
    <Bubble3 class="bubble3 ml-20" />
    <Themes />
    <Bubble4 class="bubble4 ma-10" />
    <ContactForm class="my-12" />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Heading from './components/Heading'
import Bubble1 from './components/Bubble1'
import Bubble2 from './components/Bubble2'
import Bubble3 from './components/Bubble3'
import Bubble4 from './components/Bubble4'
import Cards from './components/Cards'
import Panels from './components/Panels'
import Themes from './components/Themes'
import ContactForm from './components/ContactForm'

export default {
  components: {
    Navbar,
    Heading,
    Bubble1,
    Bubble2,
    Bubble3,
    Bubble4,
    Cards,
    Panels,
    Themes,
    ContactForm
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
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

.bubble1, .bubble2, .bubble3, .bubble4 {
  pointer-events: none;
}

</style>
