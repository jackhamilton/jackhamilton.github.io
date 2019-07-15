<template>
  <div>
    <div id="title">
      ferret
    </div>
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
  name: 'Navbar',
  data() {
    return {
      prevID: -1,
      /* TODO: Add activeForUser property which hides them if the user doesn't want that type of media." */
      links: [{name: "Library", id: 0, active: false}, 
              {name: "Hot", id: 1, active: false},
              {name: "Movies", id: 2, active: false},
              {name: "Anime", id: 3, active: false}, 
              {name: "Manga", id: 4, active: false}]
    }
  },
  methods: {
    mouseOver: function(id) {
      this.links[id].active = true;
      this.prevID = id;
    },
    mouseLeave: function(id) {
      this.links[id].active = false;
    },
    goto: function(id) {
      if (this.prevID != -1) {
        this.links[this.prevID].active = false;
      }
      this.$router.push(this.links[id].name);
    },
    pageIndicatorActive: function (isActive, name) {
      return isActive || this.$router.currentRoute.name.includes(name);
    }
  }
}
</script>

<style>
#title {
  float: left;
  padding: 10px;
  color: whitesmoke;
  cursor: pointer;
}
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
hr {
  text-align: center;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
  margin-left: 20%;
  margin-right: 20%;
  transform: translateY(-22px);
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
