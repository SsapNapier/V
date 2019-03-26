<template>
<div class="header-bar" id="menu">
  <nuxt-link class="header-bar link active" to="/">Главная</nuxt-link>
  <nuxt-link class="header-bar link" to="/okompanii">О компании</nuxt-link>
  <nuxt-link class="header-bar link" to="/statsubagentom">Стать субагентом</nuxt-link>
  <nuxt-link class="header-bar link" to="/uslygi">Услуги</nuxt-link>
  <nuxt-link class="header-bar link" to="/kontakty">Контакты</nuxt-link>
</div>
</template>

<script>
</script>

<style>
#menu {
  margin-top: 89px; }
  @media screen and (max-width: 1280px) {
    #menu {
      margin-top: 84px; } }
  #menu nuxt-link {
    width: 573px;
    height: 19px;
    font-family: SegoeUI;
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.36;
    letter-spacing: normal;
    text-align: left;
    color: #c5c5c5;
    margin: 37px;
    margin-right: 14px;
    cursor: pointer; }
    @media screen and (max-width: 1280px) {
      #menu nuxt-link {
        font-family: SegoeUI;
        font-size: 10px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: normal;
        color: #c5c5c5;
        text-decoration: none;
        width: 612px;
        margin: 20px;
        margin-top: -10px;
        cursor: pointer; } }
  #menu :hover {
    color: #00aeef;
    border-bottom: 1px solid #00aeef;
    padding-bottom: 14px;
    text-decoration: none; }
  #menu .active {
    color: #00aeef;
    border-bottom: 1px solid #00aeef;
    padding-bottom: 14px;
    text-decoration: none; }

#menu:before {
  content: '';
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  width: 100%;
  height: 1px;
  background: #c5c5c5;
  position: relative;
  left: -20px;
  margin-left: -1181px; }
  @media screen and (max-width: 1280px) {
    #menu:before {
      content: '';
      display: inline-block;
      vertical-align: middle;
      box-sizing: border-box;
      width: 100%;
      height: 1px;
      background: #c5c5c5;
      position: relative;
      left: -34px;
      margin-left: -756px; } }

      body {
        background: #1a1a1a; }
</style>
