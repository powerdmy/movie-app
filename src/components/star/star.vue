<template>
    <div class="star" :class="starType">
        <span v-for="(itemClass, index) in itemClasses" :class="itemClass" class="star-item" :key="index"></span>
    </div>
</template>
<script>
const LENGTH = 5
const CLS_ON = 'on'
const CLS_HALF = 'half'
const CLS_OFF = 'off'
export default {
    name: 'star',
    props: {
        size: {
            type: String
        },
        score: {
            type: Number
        }
    },
    computed: {
        starType() {
            return `star-${this.size}`
        },
        // 计算class名字
        itemClasses() {
            let result = []
            let halfScore = this.score / 2
            let score = Math.floor(halfScore * 2) / 2
            let hasDecimal = score % 1 !== 0
            let integer = Math.floor(halfScore)
            for (var i = 0; i < integer; i++) {
                result.push(CLS_ON)
            }
            if (hasDecimal) {
                result.push(CLS_HALF)
            }
            while (result.length < LENGTH) {
                result.push(CLS_OFF)
            }
            return result
        }
    }
}
</script>
<style lang="less">
// 运用媒体查询 dpr 为3时，采用3x,其他默认2x
.bg-image(@url){
    background-image: url("@{url}@2x.png");
    @media only screen and (-webkit-min-device-pixel-ratio: 3) {
        background-image: url("@{url}@3x.png");
    }
}

.star{
    display: inline-block;
    &-item{
        display: inline-block;
    }
    &-48{
        .star-item{
            width: 20px;
            height: 20px;
            margin-right: 22px;
            background-size: contain;
            &:last-child{
                margin-right: 0;
            }
            &.on{
                .bg-image('../../components/star/star48_on')
            }
            &.off{
                .bg-image('../../components/star/star48_off')
            }
            &.half{
                .bg-image('../../components/star/star48_half')
            }
        }
    }
    &-36{
        .star-item{
            width: 15px;
            height: 15px;
            margin-right: 6px;
            background-size: contain;
            &:last-child{
                margin-right: 0;
            }
            &.on{
                .bg-image('../../components/star/star36_on')
            }
            &.off{
                .bg-image('../../components/star/star36_off')
            }
            &.half{
                .bg-image('../../components/star/star36_half')
            }
        }
    }
    &-24{
        .star-item{
            width: 10px;
            height: 10px;
            margin-right: 3px;
            background-size: contain;
            &:last-child{
                margin-right: 0;
            }
            &.on{
                .bg-image('../../components/star/star24_on')
            }
            &.off{
                .bg-image('../../components/star/star24_off')
            }
            &.half{
                .bg-image('../../components/star/star24_half')
            }
        }
    }
}
</style>
