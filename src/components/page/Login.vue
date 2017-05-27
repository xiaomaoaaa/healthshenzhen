<template>
    <div class="login-wrap">
        <div>
            <ul>
                <li v-for="(item, index) in list" key="item.id"><a href="">{{item.title}}</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
import {
    requestOrgList
}
from '../../api/api';
export default {
    data: function() {
        return {
            'list': []
        }
    },
    mounted() {
        this.getOrgList();
    },
    methods: {
        getOrgList() {
            var self = this;
            var params = {params:{pid:3}};//参数的形式提交才可以成功
             requestOrgList(params).then(res => {
                self.list = res.data.data;
            });
        }
    }
}
</script>
<style scoped>
</style>
