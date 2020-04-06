# Vuetifyグリッドシステム

[vuetifyの書き方メモ1【gridやdisplayや空白ユーティリティやアスペクト比】](https://qiita.com/Issyo_Vo/items/a1771195bf65514d2814)

## v-app

v-app は Vuetify を使う為に必須の要素で、Vuetify のコンポーネントには必ずv-app 要素で包括する。

## v-content

レイアウトシステムを使うように、サイドメニューの表示・非表示にメインコンテンツを連動させる場合に　v-content で要素を包括する。

## v-container

v-container はコンテナで、fluid属性を付与することで左右一杯にコンテナを広げたり、fill-height属性を付与することでv-container の内部要素を上下中央寄せにしたりできる。

## v-layout

グリッドシステムには必須の要素で、display: flex; と同じ意味である。v-layout　の内側で　v-flex を設置するとグリッドシステムが可能になる。

## v-flex

v-layout の内側に設置することでグリッドシステムを実現できる。Vuetify は12分割のグリッドシステムを採用している。v-flex に xs12, sm6, md4 のような属性を付与することでブラウザの幅で可変するようになる。xs12 はブラウザ幅が xs（600px未満）のとき12個分のグリッドを使用する。

|属性|幅指定|
|--|:---:|
|xs|600px未満|
|sm|600px以上960px未満|
|md|960px以上1264px未満|
|lg|1264px以上1904px未満|

v-flex の使い方 ↓
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
```

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
