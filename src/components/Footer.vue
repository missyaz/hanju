<template>
    <!--页脚-->
    <div class="footer">
        <div class="footer-center">
            <p>本站不提供任何视听上传储存服务，所有内容均来至网络自动采集，且已注明相关资源来源</p>
            <p>若本站收录的节目无意侵犯了贵司权利，请给下方版权受理客服邮箱来信，我们会及时处理和删除，谢谢！Copyright © 2021 c</p>
        </div>
        <div class="footer-bottom">
            <p class="conn">网络浩瀚无边 青春藐小有限 珍惜时间 文明上网 从自我做起 从现在做起 树立网络文明新风</p>
            <p>杜绝低俗内容 欢迎社会监督</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped lang="less">
    .footer{
        font-size: 12px;
        text-align: center;
        .footer-center{
            width: 100%;
            line-height: 35px;
            p{
                margin-bottom: -20px;
            }
        }
        .footer-bottom{
            p{
                margin-bottom: -20px;
                line-height: 35px;
            }
        }
    }

</style>