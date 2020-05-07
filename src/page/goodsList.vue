<template>
    <div class="page-product">
        <el-row class="m-crumbs">
            <curmbs />
        </el-row>
        <el-row>
            <el-col :span="19">
                <el-row>
                    <Category />    
                </el-row>
                <el-row>
                    <list />
                </el-row>
            </el-col>
            <el-col :span="5"></el-col>
            
        </el-row>
    </div>
</template>
<script>
import curmbs from '@/components/products/curmbs.vue'
import Category from '@/components/products/category.vue'
import List from '@/components/products/list.vue'

export default {
    components: {
        curmbs,
        Category,
        List
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/products/index.scss';
    @import '@/assets/css/products/list.scss';

</style>