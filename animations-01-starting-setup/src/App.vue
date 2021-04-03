<template>
  <div class="container">
    <user-list></user-list>
  </div>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock()">Animate</button>
  </div>
  <div class="container">
    <transition
      :css="false"
      name="para"
      @before-enter="beforeEnter"
      @before-leave="beforeLeave"
      @enter="enter"
      @after-enter="afterEnter"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
    >
      <p v-if="paraIsVisible">This is paragraph.</p>
    </transition>
    <button @click="togglePara()">Toggle Paragraph</button>
  </div>
  <div class="container">
    <transition name="fade-btn" mode="out-in">
      <button v-if="!btnVisibility" @click="show()">Show</button>
      <button v-else @click="hide()">Hide</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>

<script>
import UserList from './components/UserList.vue';
export default {
  components: { UserList },
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible: false,
      btnVisibility: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    togglePara() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    show() {
      this.btnVisibility = true;
    },
    hide() {
      this.btnVisibility = false;
    },
    beforeEnter(el) {
      console.log('before enter');
      console.log(el);
      el.style.opacity = 0;
    },
    beforeLeave(el) {
      console.log('before leave');
      console.log(el);
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log('enter');
      console.log(el);
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log('after enter');
      console.log(el);
    },
    leave(el, done) {
      console.log('leave');
      console.log(el);
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log('after leave');
      console.log(el);
    },
    enterCancelled(el) {
      clearInterval(this.enterInterval);
      console.log(el);
    },
    leaveCancelled(el) {
      clearInterval(this.leaveInterval);
      console.log(el);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.4s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translateX(-150px); */
  animation: slide-fade 0.4s ease-out forwards;
}

.para-enter-from {
  /* opacity: 0;
  transform: translateY(-30px) scale(0.8); */
}
.para-enter-active {
  animation: slide-scale 0.5s ease-out;
}
.para-enter-to {
  /* opacity: 1;
  transform: translateY(0) scale(1); */
}
.para-leave-from {
  /* opacity: 1;
  transform: translateY(0) scale(1); */
}
.para-leave-active {
  animation: slide-scale 0.5s ease-in;
}
.para-leave-to {
  /* opacity: 0;
  transform: translateY(-30px) scale(0.8); */
}
.fade-btn-enter-from {
  opacity: 0;
}
.fade-btn-enter-active {
  transition: opacity 0.4s ease-out;
}
.fade-btn-enter-to {
  opacity: 1;
}
.fade-btn-leave-from {
  opacity: 1;
}
.fade-btn-leave-active {
  transition: opacity 0.4s ease-in;
}
.fade-btn-leave-to {
  opacity: 0;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-150px) scale(1.1);
  }
  100% {
    transform: translateX(0) scale(1);
  }
}
</style>
