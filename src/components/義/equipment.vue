<script>
    export default {
    data() {
        return {
        }
    },
    props:{
        title:{
            default:''
        },
        text:{
            default:''
        }
    }
    }    
</script>

<template>
    <div class="equipmentBigArea">
        <div class="box">
            <h1>{{title}}</h1>
        </div>
        <div class="text">
            <p>{{text}}</p>
        </div>
    </div>
</template>

<style>
    .equipmentBigArea{
        width: 60dvw;
        height: 60dvh;
        position: relative;
        .box{
            width: 60dvw;
            height: 100px;
            background: linear-gradient(to right, #d8d8d8,#8a8a8a, #5c5c5c,#3E3E3E);
            position: relative;
            h1{
                color: #2e2e2e;
                position: absolute;
                top:20px;
                left:30px;
                font-size: 45px;
                letter-spacing: 5px;
            }
        }
        .text{
            
            width: 55dvw;
            position: absolute;
            padding: 40px;
            padding-left: 40px;
            padding-right: 30px;
            bottom: 50px;
            left:30px;
            background: #494949;
            /* background: black; */
            border-radius: 0px 50px 0px 50px;
            p{
                color: #d8d8d8;
                font-size: 25px;
            }
        }
    }

</style>
