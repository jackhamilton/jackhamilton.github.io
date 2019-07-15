<template>
<div>
    <div id="content">
     <div id="sub">
        (828)-989-4271
        </div>
        <hr>
    <div id="sub">
        <a href="mailto:jhamilton65@gmail.com">jhamilton65@gatech.edu</a>
        </div>
      </div>
    <div id="bottom">
        <!--Github!-->
        </div>
        </div>
</template>

<style scoped>
#bottom{
  position: fixed;
  top: 90%;
  bottom: 5%;
  left: 0px;
  right: 0px;
  z-index: 2;
  font-size: 24px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
}
#content {
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 2;
  font-size: 48px;
  transform: translateY(42%);
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
}
#sub {
  font-size: 18px;
  user-select: all;
  -moz-user-select: all;
  -webkit-user-select: all;
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