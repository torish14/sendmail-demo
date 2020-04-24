<template>
  <div>
    <h1 class="display-2 font-weight-thin ml-2">
      My themes
    </h1>
    <v-img src="../assets/Clifton DNA.png" class="my-4 mx-2" max-width="1200"></v-img>

    <v-container class="my-2 mx-2">
      <v-row>
          <v-col cols="6" sm="6" md="3" lg="3">
          <section class="strengthen">
            <p><strong class>Strengthen</strong></p>
            <div v-for="(theme, index) in themes1" :key="`first-${index}`">
              <p class="subtitle-2"><strong :class="theme.name">{{ index + 1 }}. {{ theme.name }}</strong></p>
            </div>
          </section>
          </v-col>

          <v-col cols="6" sm="6" md="3" lg="3">
            <div class="10th">
            <p><strong>Confirm</strong></p>
            <div v-for="(theme, index) in themes2" :key="`second-${index}`">
              <p :class="theme.name" class="subtitle-2">{{ index + 11 }}. {{ theme.name }}</p>
            </div>
          </div>
          </v-col>

          <v-col cols="6" sm="6" md="3" lg="3">
          <div class="20th mt-10">
            <div v-for="(theme, index) in themes3" :key="`third-${index}`">
              <p :class="theme.name" class="subtitle-2">{{ index + 21 }}. {{ theme.name }}</p>
            </div>
          </div>
          </v-col>

          <v-col cols="6" sm="6" md="3" lg="3">
            <div class="30th mt-10">
            <div v-for="(theme, index) in themes4" :key="`forth-${index}`">
              <p :class="theme.name" class="subtitle-2">{{ index + 31 }}. {{ theme.name }}</p>
            </div>
          </div>
          </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      themes1: [
        { name: 'Self-Assurance' },
        { name: 'Command' },
        { name: 'Competition' },
        { name: 'Ideation' },
        { name: 'Strategic' },
        { name: 'Belief' },
        { name: 'Futuristic' },
        { name: 'Activator' },
        { name: 'Maximizer' },
        { name: ' Achiever' }
      ],
      themes2: [
        { name: 'Woo' },
        { name: 'Focus' },
        { name: 'Connectedness' },
        { name: ' Relator' },
        { name: ' Learner' },
        { name: 'Intellection' },
        { name: 'Individualization' },
        { name: 'Responsibility' },
        { name: ' Input' },
        { name: 'Significance' }
      ],
      themes3: [
        { name: 'Positivity' },
        { name: 'Includer' },
        { name: 'Communication' },
        { name: ' Analytical' },
        { name: ' Developer' },
        { name: 'Empathy' },
        { name: 'Arranger' },
        { name: 'Adaptability' },
        { name: 'Discipline' },
        { name: 'Context' }
      ],
      themes4: [
        { name: 'Restorative' },
        { name: 'Deliberative' },
        { name: ' Consistency' },
        { name: 'Harmony' }
      ]
    }
  }
}
</script>

<style>
.Self-Assurance, .Command, .Competition, .Activator, .Maximizer, .Woo, .Significance, .Communication  {
  border-left: solid 4px rgba(255, 204, 0, 1);
  padding-left: 8px;
}

.Ideation, .Strategic, .Futuristic, .Learner, .Intellection, .Input, .Analytical, .Context {
  border-left: solid 4px rgba(153, 51, 102, 1);
  padding-left: 8px;
}

.Belief, .Achiever, .Focus, .Responsibility, .Arranger, .Discipline, .Restorative, .Deliberative, .Consistency {
  border-left: solid 4px rgba(68, 0, 0, 1);
  padding-left: 8px;
}

.Connectedness, .Relator, .Individualization, .Positivity, .Includer, .Developer, .Empathy, .Adaptability, .Harmony {
  border-left: solid 4px rgba(0, 51, 51, 1);
  padding-left: 8px;
}
</style>
