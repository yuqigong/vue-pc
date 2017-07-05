<template>
    <div class="sidebar">
        <el-menu theme="dark" :unique-opened="true" :default-active="$route.path" router>
            <template v-for="item in routers" v-if="!item.hidden">
                <el-submenu :index="item.name" v-if="!item.multiple">
                    <template slot="title">
                        <i class="fa" :class="item.icon"></i>
                        {{item.name}}
                    </template>
                    <el-menu-item v-for="child in item.children" :key="child.path" v-if="!child.hidden"
                                  :index="item.path+'/'+child.path">
                        {{child.name}}
                    </el-menu-item>
                </el-submenu>
                <el-menu-item v-if="item.multiple && item.children.length > 0"
                              :index="item.path+'/'+item.children[0].path">
                    <i class="fa" :class="item.icon"></i>
                    {{item.name}}
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>
<script lang="babel">
    import {mapGetters} from 'vuex'

    export default{
        name: 'c-sidebar',
        computed: {
            ...mapGetters([
                'routers'
            ])
        }
    }
</script>
<style lang="scss" scoped>
</style>
