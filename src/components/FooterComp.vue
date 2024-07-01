<template>
    <div>
        <footer>
            <div id="feet" class="row">
                <div class="col-4" justify-content-space-between><div class="hub">
                    <a href="https://github.com/kingkrazee" target="_blank"><img :src="hub"></a>
                </div>
            </div>
                <div class="col-4" justify-content-space-between>&copy; {{ new Date().getFullYear() }} Kayden Hendricks</div>
                <div class="col-4" justify-content-space-between><div class="linky">
                    <a href="https://www.linkedin.com/in/kayden-hendricks-2b5871316/" target="_blank"><img :src="linky"></a>
                </div>
            </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default{
    data(){
        return{
            hub:'https://kingkrazee.github.io/eccomerce/images/github.png',
            linky:'https://kingkrazee.github.io/eccomerce/images/linkedin.png'
    }
}
}
</script>
<style>
    footer {
  background-color: transparent;
  padding: 10px;
  text-align: center;
  color: #000000;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem; 
}
/* #feet{
  width: 100%;
}
.hub{
  width: 75px;
  height: 45px;
  margin-left: 200px;
  margin-top: 60px;
}
.linky{
  width: 60px;
  height: 20px;
  margin-top: 60px;
  margin-left: 250px;
} */
</style>