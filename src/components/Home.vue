<template>
  <div >
      <div id="links">
      <div id="link" v-for="link in links" :key="link.id">
        <div @mouseover="mouseOver(link.id)"
             @mouseleave="mouseLeave(link.id)"
             @click="goto(link.id)">{{link.name}}</div>
          <transition name="component-fade">
            <!--If the current link is hovered or that's the page we're on-->
            <div v-if="pageIndicatorActive(links[link.id].active, links[link.id].name)">
               <hr>
            </div>
          </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#link {
  color: whitesmoke;
  float: left;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  height: 36px;
  cursor: pointer;
}
#links {
  display: table;
  margin: 0 auto;
}
</style>
