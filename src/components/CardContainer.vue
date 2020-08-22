<template>
  <div>
    <div v-for="contract in Contracts" :key="contract">
      <v-card
        class="mx-auto"
        justify="center"
        elevation="12"
        max-width="fit-content"
        outlined
        style="width: fit-content"
      >
        <v-toolbar flat max-height="min-content" single-line="true">
          <v-card-actions>
            <v-btn :href="'https://uniswap.info/token/' + contract.address" text color="#00BBF9">Uniswap Info</v-btn>
            <v-divider vertical></v-divider>
            <v-btn :href="'https://etherscan.io/token/' + contract.address" text color="#00BBF9">Etherscan Info</v-btn>
            <v-divider vertical></v-divider>

            <v-btn text color="#00BBF9" :href="'https://duckduckgo.com/?q=' + contract.address">Search</v-btn>
          </v-card-actions>
          <v-spacer></v-spacer>
          <v-icon small="true" padding-left="2%" color="#C2C2C2">fa-stopwatch</v-icon>
          <span style="font-weight: bold; color: #C2C2C2"><time-ago :datetime="contract.created_on"></time-ago></span>
        </v-toolbar>

        <v-list-item five-line>
          <v-list-item-avatar
            style="align-self: flex-start; border-radius: 50%"
            size="80"
            color="#232C33"
          ></v-list-item-avatar>
          <v-list-item-content>
            <v-row style="margin:0">
              <v-href link class="overline" style="padding-right:1%">name</v-href>
              <v-spacer></v-spacer>
            </v-row>
            <v-list-item-title class="headline mb-1">{{ contract.name }}</v-list-item-title>

             <v-list-item-subtitle>
              Price at listing is
              <span style="color: #00BBF9; font-weight: bold;">{{ contract.listingPrice }}</span>
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              At pool inception, there were
              <span style="color: #00BBF9; font-weight: bold;">{{ contract.holders }} holder/s</span>
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              Currently minted supply is
              <span style="color: #00BBF9; font-weight: bold;">{{ contract.mintedSupply }}</span>
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              Market cap at listing is
              <span style="color: #00BBF9; font-weight: bold;">{{ contract.marketCap }}</span>
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              Fully liquidated market cap is
              <span style="color: #00BBF9; font-weight: bold;">{{ contract.liquidatedMarketcap }}</span>
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              Uniswap pool opened at
              <span style="color: #00BBF9; font-weight: bold;">{{ contract.initialPool }}</span>
            </v-list-item-subtitle>

            <v-divider style="margin-top:2%" inset></v-divider>
            <strong class="mb-1">Token contract source heading:</strong>
            <v-card-text>
              <div
                style="white-space:pre-wrap; font-family: 'PT Mono', monospace; color: #232C33"
              >{{ contract.contractSource }}</div>
            </v-card-text>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TimeAgo from "vue2-timeago";
export default {
  components: {
    TimeAgo
  },
  data: () => ({
    apiURL: "http://localhost:5000/contracts",
    Contracts: [],
  }),
  methods: {
    getContracts: function (skip, limit) {
      let params = {
        limit: limit || 5,
        skip: skip || 0
      };

      axios.get(`${this.apiURL}`, { params })
        .then((res) => {
          this.Contracts.push(...res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    scroll () {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

        if (bottomOfWindow) {          
          this.getContracts(this.Contracts.length);

          console.log(this.Contracts.map(c => c.created_on));
        }
      };
    },
  },
  mounted() {
    this.scroll();
  },
  created() {
    this.getContracts();
  },
};
</script>

<style>
</style>