<template>
  <div id="app">
    <h1>
      > Prabal Banerjee > {{($route.path).charAt(1).toUpperCase()+($route.path).slice(2)}}<span id="homeBlink" class="blinking-cursor">_</span>
      <!-- <b id="pubsBlink"> > Publications <span class="blinking-cursor">_</span>  </b>
      <b id="internBlink"> > Projects <span class="blinking-cursor">_</span>  </b>
      <b id="eduBlink"> > Education <span class="blinking-cursor">_</span>  </b> -->
    </h1>

    <router-view></router-view>

    <table class="myTable">
      <tr>
        <td> <router-link to="/" exact> Home </router-link> </td>
        <td> <router-link to="/publications"> Publications </router-link> </td>
        <td> <router-link to="/internships"> Internships/Projects </router-link> </td>
        <td> <router-link to="/education"> Education </router-link> </td>
      </tr>
    </table>

    <span  class="contact">
      mail (dot) &lt;my first name&gt; (at) gmail (dot) com<br/>
      <!-- <a target="_blank" style="display:inline-block;" :href="publicPath+'prabal_pub_key.gpg'">My GPG Public Key</a><br/> -->
      <a target="_blank" style="display:inline-block;" href="https://in.linkedin.com/pub/prabal-banerjee/120/774/b06">www.linkedin.com/in/prabal-banerjee</a>
    </span>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');

* {
  text-rendering: optimizeLegibility;
  -webkit-text-size-adjust: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
   color:inherit;
   text-decoration: none;
}

.mainText {
  font-size: 30px;
  position: fixed;
  bottom: 100px;
  left: 20px;
  max-width: 600px;
  line-height: 0.9;
}

.pubText {
  font-size: 25px;
  position: fixed;
  bottom: 50px;
  left: 40px;
  line-height: 0.75;
}

.internText {
  font-size: 30px;
  position: fixed;
  bottom: 50px;
  left: 40px;
  line-height: 0.8;
}

.eduText {
  font-size: 30px;
  position: fixed;
  bottom: 50px;
  left: 40px;
  line-height: 0.9;
}

.pubText > p {
  padding-top: 5px;
}

body {
  background-color: black;
  color: white;
  font-family: 'Quicksand';
  min-height: 600px;
}

.myTable {
  position: fixed;
  bottom: 2%;
  right: 20px;
  font-size: 20px;
}

td {
  padding-right: 50px;
}

.contact {
  position: fixed;
  text-align: right;
  right: 10px;
  top: 10px;
}
  
.blinking-cursor {
  font-weight: 100;
  font-size: 30px;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}

@keyframes "blink" {
  from, to {
    color: transparent;
  }
  50% {
    color: white;
  }
}

@-moz-keyframes blink {
  from, to {
    color: transparent;
  }
  50% {
    color: white;
  }
}

@-webkit-keyframes "blink" {
  from, to {
    color: transparent;
  }
  50% {
    color: white;
  }
}

@-ms-keyframes "blink" {
  from, to {
    color: transparent;
  }
  50% {
    color: white;
  }
}

@-o-keyframes "blink" {
  from, to {
    color: transparent;
  }
  50% {
    color: white;
  }
}

</style>
