<!-- 底頁元件 -->
<script>
export default {
    data() {
        return {
            
        };
    },

};
</script>


<template>
    <div class="text">
        <dl>
          <dt>Informatio</dt>
          <dd><a href="#">Privacy Policy</a></dd>
          <dd><a href="#">Cookie Policy</a></dd>
          <dd><a href="#">Terms of use of the Website</a></dd>
        </dl>
        <dl>
          <dt>Customer care</dt>
          <dd><a href="#">ya-ya5888@gmail.com</a></dd>
          <dd><a href="#">(06)233-7366</a></dd>
          <dd><a href="#">FAQ</a></dd>
        </dl>
        <dl>
          <dt>Follow us on</dt>
          <dd><a href="https://www.facebook.com/proprofurniture">Facebook</a></dd>
          <dd><a href="https://www.instagram.com/proprofurniture/">Instagram</a></dd>
          <dd><a href="#">Line</a></dd>
        </dl>
    </div>
</template>

<style scoped lang="scss">
    .text{
        display: flex;
        justify-content: space-evenly;
        
        dl{
            dt{
                font-family: "Dosis", sans-serif;
                font-size: 18px;
                font-weight: 700;
                color: #E1FF2D;
            }
            dd{
              font-family: "Dosis", sans-serif;
                font-size: 14px;
                line-height: 14px;
                margin-top: 1.5dvh;
                
                a{
                  color: #878787;  
                    &:hover{
                        color: #E1FF2D;
                    }
                }
            }
            
        }

    }
</style>