<template>
<div id="block">
    <div id="description">
        <div id="textbit">
        I'm a Jack-of-all-trades software developer from Asheville, North Carolina. I'm currently at Georgia Tech in Atlanta studying CS with a minor in Japanese, and I'm studying artificial intelligence and system architecture as my concentrations.
        <br>
        <br>
        I've done considerable work as a teacher for a summer programming bootcamp, and developed and taught curriculum covering Swift and basic game design. I code games in my free time, and particularly enjoy creating engines for them. I've completed engine projects in Java, C++, and C# so far, and plan on extending the C++ one as far as I can take it.
        <br>
        <br>
        I also enjoy making music, cooking, and harrassing artists to make game art for me. 
        </div>
    </div>
    <img src="@/assets/profile.png">
</div>
</template>

<style scoped>
#textbit {
    position: static;
    overflow-y: scroll;
    max-height: 400px;
}
#block {
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 2;
}
img {
    position: fixed;
    width: 10%;
    border-radius: 50%;
    left: 20%;
    right: 70%;
    top: 40%;
    bottom: 50%;
    z-index: 3;
}
#description {
    position: fixed;
    top: 25%;
    left: 40%;
    right: 20%;
    bottom: 20%;
    font-size: 18px;
    text-align: left;
}
hr {
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: 42%;
  margin-right: 42%;
  border-style: inset;
  border-width: 1px;
}
</style>