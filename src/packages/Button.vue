<template>
    <button class="f-button" :class="btnClass" @click="$emit('click', $event)">
        <fang-icon :icon="icon" class="icon" v-if="icon && !loading"></fang-icon>
        <fang-icon icon="loading" class="icon" v-if="loading"></fang-icon>
        <span v-if="this.$slots.default"><slot></slot></span>
    </button>
</template>

<script>
export default {
    name: 'fang-button',
    props: {
        type: {
            type: String,
            default: "",
            validator(type){
                if(type && !["primary", "info", "success", "warning", "danger"].includes(type))
                    console.error("按钮类型必须为：" + ["primary", "info", "success", "warning", "danger"].join("、"))           
                return true;
            }
        },
        icon: {
            type: String
        },
        iconPosition: {
            type: String,
            default: 'right',
            validator(type){
                if(type && !["left", "right"].includes(type))
                    console.error("按钮 icon-position 属性只能为：left、right")
                return true;
            }
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        btnClass(){
            let classes = [];
            if(this.type)
                classes.push(`f-button-${this.type}`);
            if(this.iconPosition)
                classes.push(`f-button-${this.iconPosition}`);
                

            return classes;
        }
    }
}
</script>

<style  lang="scss">
@import "../styles/common.scss";
$height:42px;
$font-size:16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.f-button {
    border-radius: $border-radius;
    border: 1px solid $border-color;
    color: $color;
    background: #fff;
    height: 42px;
    cursor: pointer;
    font-size: $font-size;
    line-height: 1;
    padding: 12px 20px;
    display: inline-flex;       //  弹性盒模型 可使用 order 属性排列内部元素顺序
    justify-content: center;
    vertical-align: middle;

    // & 表示父选择器 .f-button
    &:hover{
        border-color:$border-color;
        background:$background;
    }
    &:focus,
    &:active{
        color:$active-color;
        border:1px solid $active-color;
        background-color:$background;
        outline:none
    }
    @each $type,$color in(
        primary:$primary,
        success:$success,
        info:$info,
        warning:$warning,
        danger:$danger
    ){
        &-#{$type}{
            background:#{$color};
            border:1px solid #{$color};
            color:#fff;
            fill:#fff
        }
    }
    @each $type,$color in(
        primary:$primary-hover,
        success:$success-hover,
        info:$info-hover,
        warning:$warning-hover,
        danger:$danger-hover
    ){
        &-#{$type}:hover{
            background:#{$color};
            border:1px solid #{$color};
            color:#fff;
            fill:#fff
        }
    }
    @each $type,$color in(
        primary:$primary-active,
        success:$success-active,
        info:$info-active,
        warning:$warning-active,
        danger:$danger-active
    ){
        &-#{$type}:active,
        &-#{$type}:focus{
            background:#{$color};
            border:1px solid #{$color};
            color:#fff;
            fill:#fff
        }
    }
    .icon{
        width: 16px;
        height:16px;
        vertical-align: middle;
    }
    .icon + span{
        margin-right:4px
    }
    &-left{
        svg{
            order:1
        }
        span{
            order:2
        }
    }
    &-right{
        svg{
            order:2
        }
        span{
            order:1
        }
    }
}
</style>