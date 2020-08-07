<template>
    <div v-bind:class="tableCls">
        <div class="wp-table-tools">
            <slot></slot>
        </div>
        <table>
            <thead>
            <tr>
                <template v-for="item in mHeader">
                    <th v-bind:style="item.style">{{item.text}}</th>
                </template>
            </tr>
            </thead>
            <tbody ref="bodyRef" v-bind:style="bodyStyle">
            <tr v-for="(row,i) in mData" v-on:tap="rowSelect(i)" v-bind:style="mRowStyle(i)">
                <template v-for="(column,j) in row">
                    <td v-if="column.type == 1" class="td-center" v-bind:style="column.style">
                        <button v-bind:disabled="mDisabled || mReadonly" type="button" class="fox-btn" v-on:tap="cellClick($event,i,j)">{{column.text}}</button>
                    </td>
                    <td v-else-if="column.type == 2" class="td-center" v-bind:style="column.style" v-on:tap="cellClick($event,i,j)" v-html="column.text">
                    </td>
                    <td v-else-if="column.type == 3" class="td-center" v-bind:style="column.style" v-on:tap="cellClick($event,i,j)" v-text="cellFormat(column)">
                    </td>
                    <td v-else-if="column.type == 4" class="td-center" v-bind:style="column.style" v-on:tap="selectSinglecheck(i)" v-text="cellFormat(column)">
                    <div v-bind:class="check_cls(i)" > <a v-bind:class="checkboxCls(i)" v-bind:disabled="mDisabled || mReadonly"></a></div>
                    </td>
                    <td v-else class="td-center" v-bind:style="column.style">{{column.text}}</td>
                </template>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'fox-table',
    data(){
        return {

        }
    }
}
</script>

<style scoped>

</style>