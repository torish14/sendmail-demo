<template>
  <div>
    <h1 class="display-2 font-weight-thin">
      History
    </h1>

    <v-container fluid class="my-5">

      <v-row>
        <v-col xs12 sm6 md4 lg3 v-for="card in cards" :key="card.name">
          <v-card text class="ma-2" :elevation="20" max-width="400">
            <v-img class="white--text align-end" height="250px" width="400px" :src="card.src" style="opacity: 0.8;">
              <v-card-title :class="card.title">
                {{ card.title }}
              </v-card-title>
            </v-img>
            <v-card-subtitle class="title font-regular">
              {{ card.subtitle }}
            </v-card-subtitle>
            <v-card-text class="subtitle-1">
              <div>
                {{ card.text }}
              </div>
            </v-card-text>
          </v-card>
          <!-- <v-card
            :elevation="20"
            max-width="380"
            class="ma-2"
          >
            <v-img
              class="white--text align-end"
              height="250px"
              width="500px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYqjSvZihh0pM6D-5T-ePmu3ByhHsqPjZ2fbpoVic92zGXr8Zs&s"
              style="opacity: 0.8;"
            >
              <v-card-title>
                Interview 2 million successful people about success factors
              </v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0" style="font-size: 18px;">
              Step1
            </v-card-subtitle>

            <v-card-text class="text--primary" style="font-size: 15px;">
              <p><br>The development of the Strengths Finder started<br> an interview with 2 million people who unconsciously explored what "talents" were being used when one was performing.</p>
            </v-card-text>
          </v-card>

          <v-card
            :elevation="20"
            max-width="380"
            class="ma-2"
          >
            <v-img
              class="white--text align-end"
              height="250px"
              src="https://goomoolabo.com/blog/wp-content/uploads/2019/06/balloon-heart-love-romance.jpg"
              style="opacity: 0.8;"
            >
              <v-card-title>Discover 5000 "talents"</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0" style="font-size: 18px;">
              Step2
            </v-card-subtitle>

            <v-card-text class="text--primary" style="font-size: 15px;">
              <p>
                <br>In the interview, about 5,000 different "talents" were found.
                Talent is a pattern of thoughts, emotions and behaviors that appear unconsciously.
              </p>
            </v-card-text>
          </v-card>

          <v-card
            :elevation="20"
            max-width="380"
            class="ma-2"
          >
            <v-img
              class="white--text align-end"
              height="250px"
              src="https://i.pinimg.com/originals/44/7d/db/447ddb1822a74d28c07b95c548a91178.jpg"
              style="opacity: 0.8;"
            >
              <v-card-title style="color: black; font-family: 300; text-shadow: 1px 1px 2px #808080;">
                <strong style="background: white;">Classify 5000 "talents" into 34 "themes"</strong>
              </v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0" style="font-size: 18px;">
              Step3
            </v-card-subtitle>

            <v-card-text class="text--primary" style="font-size: 15px;">
              <p><br>The 34 "themes" classified similar "talents" and summarized them clearly.</p>
              <br>
              <br>
            </v-card-text>
          </v-card> -->

        </v-col>
      </v-row>

  </v-container>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        cards: [
          { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYqjSvZihh0pM6D-5T-ePmu3ByhHsqPjZ2fbpoVic92zGXr8Zs&s', title: 'Interview 2 million successful people about successful factors', subtitle: 'Step1', text: 'The development of the Strengths Finder started an interview with 2 million people who unconsciously explored what "talents" were being used when one was performing.' },
          { src: 'https://goomoolabo.com/blog/wp-content/uploads/2019/06/balloon-heart-love-romance.jpg', title: 'Discover 5000 "talents"', subtitle: 'Step2', text: 'In the interview, about 5,000 different "talents" were found. Talent is a pattern of thoughts, emotions and behaviors that appear unconsciously.' },
          { src: 'https://i.pinimg.com/originals/44/7d/db/447ddb1822a74d28c07b95c548a91178.jpg', title: 'Classify 5000 "talents" into 34 "themes"', subtitle: 'Step3', text: 'The 34 "themes" classified similar "talents" and summarized them clearly. Now, you should take the Strengths Finder today and wake up to your "talents".' }
        ]
      }
    }
  }
</script>

<style>
.v-responsive__content {
}

.Discover {
  /* margin-bottom: 30px; */
}

.into {
  /* color: white; */
  color: black;
  text-shadow: 1px 1px 2px #808080;
  background-color: white;
  margin-bottom: 10px;
  padding-top: 0px;
  padding-bottom:0px;
  padding-right: 0px;
  padding-left: 0px;
  height: 70px;
}
</style>
