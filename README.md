# Vuetifyグリッドシステム

[vuetifyの書き方メモ1【gridやdisplayや空白ユーティリティやアスペクト比】](https://qiita.com/Issyo_Vo/items/a1771195bf65514d2814)

[Vuetify2.x でよく使うUIComponents まとめ](https://qiita.com/is_ryo/items/6bfa55599becd2f35879#grid%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%81%AB%E3%81%97%E3%81%9F%E3%81%84)

## v-app

- v-app は Vuetify を使う為に必須の要素で、Vuetify のコンポーネントには必ずv-app 要素で包括する。

## v-content

- レイアウトシステムを使うように、サイドメニューの表示・非表示にメインコンテンツを連動させる場合に　v-content で要素を包括する。

## v-container

- v-container はコンテナで、fluid属性を付与することで左右一杯にコンテナを広げたり、fill-height属性を付与することでv-container の内部要素を上下中央寄せにしたりできる。

## v-row

- v-row は v-col のラッパーコンポーネントで、基本的にはセットで用いる。これは、1.xの v-layout が2.xで置き換わったもの。

## v-col

- v-col は v-row の直接の子要素出なければならない。
これは、1.xの v-flex が 2.xで置き換わったもの。

<!-- ## v-layout

- グリッドシステムには必須の要素で、display: flex; と同じ意味である。v-layout　の内側で　v-flex を設置するとグリッドシステムが可能になる。
また、row を入れれば横並びになり wrap を入れれば改行される。 -->

<!-- ## v-flex

- v-layout の内側に設置することでグリッドシステムを実現できる。Vuetify は12分割のグリッドシステムを採用している。v-flex に xs12, sm6, md4 のような属性を付与することでブラウザの幅で可変するようになる。xs12 はブラウザ幅が xs（600px未満）のとき12個分のグリッドを使用する。 -->

|属性|幅指定|
|--|:---:|
|xs|600px未満|
|sm|600px以上960px未満|
|md|960px以上1264px未満|
|lg|1264px以上1904px未満|

v-row の使い方 ↓

```
<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row
          :align="alignment"
          :justify="justify"
          class="grey lighten-5"
          style="height: 300px;"
        >
          <v-card
            v-for="n in 3"
            :key="n"
            class="ma-3 pa-6"
            outlined
            tile
          >
            Column
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
```

<!-- v-flex の使い方 ↓
```
  <template>
    <v-app>
      <v-content>
        <v-container>
        <v-layout wrap>
          <v-flex xs12 sm6 md4>コンテンツ</v-flex>
          <v-flex xs12 sm6 md4>コンテンツ</v-flex>
          <v-flex xs12 sm6 md4>コンテンツ</v-flex>
        </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </template>
``` -->

## app prop



## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
