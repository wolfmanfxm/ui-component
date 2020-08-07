<template>
    <div class="fox-stm-table">
        <div class="fox-table-header" v-bind:style="{width:TabWidth}">
            <div class="fox-table-header-title" style="width:4rem" v-show="snum">序号</div>
            <div class="fox-table-header-title" style="width:6rem" v-show="check" >
                <input type="checkbox" @click="checkedAll" v-model="allCheck">全选
            </div>
            <template v-for="(item,index) in titarr">
                <div class="fox-table-header-title" v-bind:style="{width:item.width}">{{item.name}}</div>
            </template>
        </div>
        <div class="fox-table-body" v-bind:style="{width:TabWidth}">
            <template v-for="(items,indexs) in datarr">
                <div class="fox-table-body-row">
                    <div class="fox-table-header-title" style="width:4rem" v-show="snum">{{indexs+1}}</div>
                    <div class="fox-table-header-title" style="width:6rem" v-show="check" >
                        <input type="checkbox" @click="checked(items)" v-model="checkedNames" :value="items">
                    </div>
                    <template v-for="(item,index) in titarr">
                        <div class="fox-table-header-title" v-bind:style="{width:item.width}">{{items[item.Ename]}}</div>
                    </template>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: 'stm-table',
    data(){
        return {
            printData: [],
            checkedNames: [],
            allCheck: false
        }
    },
    props: {
        TabWidth: {
            type: String,
            default: '400px'
        },
        snum: {
            type: Boolean,
        },
        check: {
            type: Boolean
        },
        titarr: {
            type: Array,
            required: true
        },
        datarr: {
            type: Array,
            required: true
        }
    },
    methods: {
        checkedAll(){
            if (!this.allCheck) {
                this.allCheck = true;
                this.checkedNames = JSON.parse(JSON.stringify(this.datarr))
            } else {
                this.allCheck = false;
                this.checkedNames = []
            }
        },
        checked(item){
            let index = -1;
            // this.checkedNames.forEach((it, index) => {
            //     if(it === item)
            //         i = index;
            // })
            for(let i = 0; i < this.checkedNames.length; i ++) {
                if(this.checkedNames[i].A === item.A) {
                    index = i;
                }
            }

            if (index === -1)
                this.checkedNames.push(item);
            else
                this.checkedNames.splice(index, 1);            
        }
    }
}
</script>

<style lang="scss">
.fox-stm-table{
    text-align: center;
    height: 3rem;
    line-height: 3rem;
    font-size: 1.3rem;
}
.fox-stm-table .fox-table-header{
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    color: #FFFFFF;
    background: #61B0E3;
}
.fox-table-header .fox-table-header-title{
    border-right: 2px solid #FFFFFF;
}
.fox-stm-table .fox-table-body{
    max-height: 30rem;
    overflow-y: auto;
    background: #FFFFFF;
}
.fox-table-body .fox-table-body-row{
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
}
.fox-table-body .fox-table-body-row:nth-child(2n){
    background-color: #E4E4E4;
}
</style>