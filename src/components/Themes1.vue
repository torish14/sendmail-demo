<template>
  <div>
    <h1 class="display-2 font-weight-thin">
      My themes
    </h1>

    <v-container fluid>
      <v-row>
        <v-col>
          <v-img src="../assets/Clifton DNA.png"></v-img>
          <p><strong>Strengthen</strong></p>
          <div v-for="(theme, index) in themes1" :key="index">
            <p><strong>{{ index + 1 }}. {{ theme.name }}</strong></p>
          </div>
          <p>Confirm</p>
          <div v-for="(theme, index) in themes2" :key="index">
            <p>{{ index + 11 }} {{ theme.name }}</p>
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
        { num: '1', name: 'Self-Assurance' },
        { num: '2', name: 'Command' },
        { num: '3', name: 'Competition' },
        { num: '4', name: 'Ideation' },
        { num: '5', name: 'Strategic' },
        { num: '6', name: 'Belief' },
        { num: '7', name: 'Futuristic' },
        { num: '8', name: 'Activator' },
        { num: '9', name: 'Maximizer' },
        { num: '10', name: ' Achiever' }
      ],
      themes2: [
        { num: '11', name: 'Woo' },
        { num: '12', name: 'Focus' },
        { num: '13', name: 'Connectedness' },
        { num: '14', name: ' Relator' },
        { num: '15', name: ' Learner' },
        { num: '16', name: 'Intellection' },
        { num: '17', name: 'Individualization' },
        { num: '18', name: 'Responsibility' },
        { num: '19', name: ' Input' },
        { num: '20', name: 'Significance' },
        { num: '21', name: 'Positivity' },
        { num: '22', name: 'Includer' },
        { num: '23', name: 'Communication' },
        { num: '24', name: ' Analytical' },
        { num: '25', name: ' Developer' },
        { num: '26', name: 'Empathy' },
        { num: '27', name: 'Arranger' },
        { num: '28', name: 'Adaptability' },
        { num: '29', name: 'Discipline' },
        { num: '30', name: 'Context' },
        { num: '31', name: 'Restorative' },
        { num: '32', name: 'Deliberative' },
        { num: '33', name: ' Consistency' },
        { num: '34', name: 'Harmony' }
      ]
    }
  }
}
</script>

<style>

</style>
