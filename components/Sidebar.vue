<template>
<div class="sidebar">
 <a class="active">Войти&nbsp;&nbsp;&nbsp;&#8594;</a>
 <div class="bar">
   <a>Авиабилеты</a>
   <hr>
   <a>Ж/Д Авиабилеты</a>
   <hr>
   <a>Гостиницы</a>
   <hr>
   <a>Страхование</a>
   <hr>
   <a>Трансфер</a>
   <hr>
   <a>Туризм</a>
 </div>
</div>
</template>

<script>
</script>

<style>
.sidebar{
    position: sticky;
    left:1692px;
    width: 110px;
    height: 1272px;
    font-family: SegoeUI;
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 5.22;
    letter-spacing: normal;
    text-align: left;
    color: $pinkish-grey;
    border-left:1px solid $pinkish-grey;
    margin-top: -108px;
    padding-left: 46px;
    padding-top: 68px;
        @media screen and (max-width: 1280px) {
          position: sticky;
          left:1096px;
          width: 110px;
          height: 1272px;
          font-family: SegoeUI;
          font-size: 11px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: 5.22;
          letter-spacing: normal;
          text-align: left;
          color: $pinkish-grey;
          border-left:1px solid $pinkish-grey;
          margin-top: -104px;
          padding-left: 39px;
          padding-top: 68px;
        }
.bar{
  margin-top: 134px;
  text-align: left;
      @media screen and (max-width: 1280px) {
        margin-top: 134px;
        text-align: left;
        margin-left: -8px;
      }
}hr{
  margin-left: -0px;
  margin-top: 4px;
  margin-bottom: 4px;
  width: 10px;
  @media screen and (max-width: 1280px) {
    margin-left: -0px;
    margin-top: -3px;
    margin-bottom: -3px;
    width: 10px;
  }
}a{
  padding: -10px;
  @media screen and (max-width: 1280px) {
      padding: -10px;
  }
}.active{
  color: #00aeef;
  padding-bottom: 14px;
  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: 1280px) {
    color: #00aeef;
    padding-bottom: 14px;
    text-decoration: none;
    cursor: pointer;
      }
}
}
</style>
