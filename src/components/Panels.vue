<template>
  <div>
    <h1 class="display-2 font-weight-thin ml-2">
      Description
    </h1>

    <v-container fluid class="my-2">
      <v-row>
        <v-col cols="12" sm="6" md="3" lg="3">
          <li class="influencing mb-7 ml-2">influencing</li>
            <v-expansion-panels popout="" focusable="" v-for="(panel, index) in panels1" :key="`first-${index}`">
            <v-expansion-panel  max-width="380">
              <v-expansion-panel-header :class="panel.abbreviation">
                {{ panel.header }}
              </v-expansion-panel-header>
              <v-expansion-panel-content class="subtitle-2 grey--text">
                {{ panel.content }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>

        <v-col cols="12" sm="6" md="3" lg="3">
          <li class="executing mb-7 ml-2">executing</li>
          <v-expansion-panels popout="" focusable="" v-for="(panel, index) in panels2" :key="`second-${index}`">
          <v-expansion-panel  max-width="380">
            <v-expansion-panel-header :class="panel.abbreviation">
              {{ panel.header }}
            </v-expansion-panel-header>
            <v-expansion-panel-content class="subtitle-2 grey--text">
              {{ panel.content }}
            </v-expansion-panel-content>
          </v-expansion-panel>
          </v-expansion-panels>
        </v-col>

        <v-col cols="12" sm="6" md="3" lg="3">
          <li class="strategic-thinking mb-7 ml-2">strategic-thinking</li>
          <v-expansion-panels popout="" focusable="" v-for="(panel, index) in panels3" :key="`third-${index}`">
          <v-expansion-panel  max-width="380">
            <v-expansion-panel-header :class="panel.abbreviation">
              {{ panel.header }}
            </v-expansion-panel-header>
            <v-expansion-panel-content class="subtitle-2 grey--text">
              {{ panel.content }}
            </v-expansion-panel-content>
          </v-expansion-panel>
          </v-expansion-panels>
        </v-col>

        <v-col cols="12" sm="6" md="3" lg="3">
          <li class="relationship-building mb-7 ml-2">relationship-building</li>
          <v-expansion-panels popout="" focusable="" v-for="(panel, index) in panels4" :key="`forth-${index}`">
          <v-expansion-panel  max-width="380">
            <v-expansion-panel-header :class="panel.abbreviation">
              {{ panel.header }}
            </v-expansion-panel-header>
            <v-expansion-panel-content class="subtitle-2 grey--text">
              {{ panel.content }}
            </v-expansion-panel-content>
          </v-expansion-panel>
          </v-expansion-panels>
        </v-col>

      </v-row>
    </v-container>

  </div>
</template>

<script>
export default {
  data() {
    return {
      panels1: [
        { abbreviation: 'act', header: 'Activator', content: 'People exceptionally talented in the Activator theme can make things happen by turning thoughts into action. They want to do things now, rather than simply talk about them.' },
        { header: 'Command', content: 'People exceptionally talented in the Command theme have presence. They can take control of a situation and make decisions.' },
        { header: 'Communication', content: 'People exceptionally talented in the Communication theme generally find it easy to put their thoughts into words. They are good conversationalists and presenters.' },
        { header: 'Competition', content: 'People exceptionally talented in the Competition theme measure their progress against the performance of others. They strive to win first place and revel in contests.' },
        { header: 'Maximizer', content: 'People exceptionally talented in the Maximizer theme focus on strengths as a way to stimulate personal and group excellence. They seek to transform something strong into something superb.' },
        { header: 'Self-Assurance', content: 'People exceptionally talented in the Self-Assurance theme feel confident in their ability to take risks and manage their own lives. They have an inner compass that gives them certainty in their decisions.' },
        { header: 'Significance', content: 'People exceptionally talented in the Significance theme want to make a big impact. They are independent and prioritize projects based on how much influence they will have on their organization or people around them.' },
        { header: 'Woo', content: 'People exceptionally talented in the Woo theme love the challenge of meeting new people and winning them over. They derive satisfaction from breaking the ice and making a connection with someone.' }
      ],
      panels2: [
        { abbreviation: 'ach', header: 'Achiever', content: 'People exceptionally talented in the Achiever theme work hard and possess a great deal of stamina. They take immense satisfaction in being busy and productive.' },
        { header: 'Arranger', content: 'People exceptionally talented in the Arranger theme can organize, but they also have a flexibility that complements this ability. They like to determine how all of the pieces and resources can be arranged for maximum productivity.' },
        { header: 'Belief', content: 'People exceptionally talented in the Belief theme have certain core values that are unchanging. Out of these values emerges a defined purpose for their lives.' },
        { header: 'Consistency', content: 'People exceptionally talented in the Consistency theme are keenly aware of the need to treat people the same. They crave stable routines and clear rules and procedures that everyone can follow.' },
        { header: 'Deliberative', content: 'People exceptionally talented in the Deliberative theme are best described by the serious care they take in making decisions or choices. They anticipate obstacles.' },
        { header: 'Discipline', content: 'People exceptionally talented in the Discipline theme enjoy routine and structure. Their world is best described by the order they create.' },
        { header: 'Focus', content: 'People exceptionally talented in the Focus theme can take a direction, follow through and make the corrections necessary to stay on track. They prioritize, then act.' },
        { header: 'Responsibility', content: 'People exceptionally talented in the Responsibility theme take psychological ownership of what they say they will do. They are committed to stable values such as honesty and loyalty.' },
        { header: 'Restorative', content: 'People exceptionally talented in the Restorative theme are adept at dealing with problems. They are good at figuring out what is wrong and resolving it.' }
      ],
      panels3: [
        { abbreviation: 'ana', header: 'Analytical', content: 'People exceptionally talented in the Analytical theme search for reasons and causes. They have the ability to think about all of the factors that might affect a situation.' },
        { header: 'Context', content: 'People exceptionally talented in the Context theme enjoy thinking about the past. They understand the present by researching its history.' },
        { header: 'Futuristic', content: 'People exceptionally talented in the Futuristic theme are inspired by the future and what could be. They energize others with their visions of the future.' },
        { header: 'Ideation', content: 'People exceptionally talented in the Ideation theme are fascinated by ideas. They are able to find connections between seemingly disparate phenomena.' },
        { header: 'Input', content: 'People exceptionally talented in the Input theme have a need to collect and archive. They may accumulate information, ideas, artifacts or even relationships.' },
        { header: 'Intellection', content: 'People exceptionally talented in the Intellection theme are characterized by their intellectual activity. They are introspective and appreciate intellectual discussions.' },
        { header: 'Learner', content: 'People exceptionally talented in the Learner theme have a great desire to learn and want to continuously improve. The process of learning, rather than the outcome, excites them.' },
        { header: 'Strategic', content: 'People exceptionally talented in the Strategic theme create alternative ways to proceed. Faced with any given scenario, they can quickly spot the relevant patterns and issues.' }
      ],
      panels4: [
        { abbreviation: 'ada', header: 'Adaptability', content: 'People exceptionally talented in the Adaptability theme prefer to go with the flow. They tend to be "now" people who take things as they come and discover the future one day at a time.' },
        { header: 'Connectedness', content: 'People exceptionally talented in the Connectedness theme have faith in the links among all things. They believe there are few coincidences and that almost every event has meaning.' },
        { header: 'Developer', content: 'People exceptionally talented in the Developer theme recognize and cultivate the potential in others. They spot the signs of each small improvement and derive satisfaction from evidence of progress.' },
        { header: 'Empathy', content: 'People exceptionally talented in the Empathy theme can sense other people feelings by imagining themselves in others lives or situations.' },
        { header: 'Harmony', content: 'People exceptionally talented in the Harmony theme look for consensus. They don not enjoy conflict; rather, they seek areas of agreement.' },
        { header: 'Includer', content: 'People exceptionally talented in the Includer theme accept others. They show awareness of those who feel left out and make an effort to include them.' },
        { header: 'Individualization', content: 'People exceptionally talented in the Individualization theme are intrigued with the unique qualities of each person. They have a gift for figuring out how different people can work together productively.' },
        { header: 'Positivity', content: 'People exceptionally talented in the Positivity theme have contagious enthusiasm. They are upbeat and can get others excited about what they are going to do.' },
        { header: 'Relator', content: 'People exceptionally talented in the Relator theme enjoy close relationships with others. They find deep satisfaction in working hard with friends to achieve a goal.' }
      ]
    }
  }
}
</script>

<style>
.act {
  background-color: rgba(255, 204, 0, 0.7);
}

.ach {
  background-color: rgba(68, 0, 0, 0.7);
}

.ana {
  background-color: rgba(153, 51, 102, 0.7);
}

.ada {
  background-color: rgba(0, 51, 51, 0.7);
}

.influencing {
  border-bottom: solid 2px rgba(255, 204, 0, 1);
  width: 110px;
}

.executing {
  border-bottom: solid 2px rgba(68, 0, 0, 1);
  width: 100px;
}

.strategic-thinking {
  border-bottom: solid 2px rgba(153, 51, 102, 1);
  width: 155px;
}

.relationship-building {
  border-bottom: solid 2px rgba(0, 51, 51, 1);
  width: 175px;
}
</style>
