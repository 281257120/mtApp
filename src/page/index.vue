<template>
    <div class="page-index">
        <el-row>
            <el-col :span="5">
                <m-menu />
            </el-col>
            <el-col :span="19">
                <m-life />
            </el-col>

        </el-row>
    
        <el-row>
            <el-col :span="24">
                <container :nav="iStyle" :nav_="movie"/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import MMenu from '@/components/index/menu.vue'
import MLife from '@/components/index/life.vue'
import Container from '@/components/index/container.vue'
// import Movie from '@/components/index/movie.vue'

export default {
    data() {
        return {
            iStyle: {
                class: 'istyle',
                title: '推荐民宿',
                list:  [{
                text: '南京',
                tab: 'nj'
            },{
                text: '杭州',
                tab: 'hz'
            },{
                text: '苏州',
                tab: 'sz'
            },{
                text: '合肥',
                tab: 'hf'
            },{
                text: '宁波',
                tab: 'nb'
            },{
                text: '无锡',
                tab: 'wx'
            }]
            },
            movie: {
                title: '猫眼电影',
                text: '即将上映',
                tab: 'jj'

            }
        }
    },
    components: {
        MMenu,
        MLife,
        Container,
        // Movie
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/index/index.scss';
    @import '@/assets/css/index/life.scss';
</style>