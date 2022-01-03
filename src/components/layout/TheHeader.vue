<template>
    <div class="s-header">
                    <div class="s-header-left">
                        <div class="s-content-details">CÔNG TY TNHH SẢN XUẤT-THƯƠNG MẠI-DỊCH VỤ QUI PHÚC</div>
                        <div class="s-icon-down"></div>
                    </div>
                    <div class="s-header-right">
                        <div class="s-header-avatar"></div>
                        <div class="s-content-details">SongDev</div>
                        <div class="s-icon-option"></div>
                    </div>
                </div>
</template>
<style scoped>
.s-header {
    height: 40px;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
}

.s-header .s-header-left {
    display: flex;
    align-items: center;
}

.s-header .s-header-right {
    display: flex;
    align-items: center;
}

.s-header .s-header-right .s-header-avatar {
    margin-right: 16px;
}

.s-header .s-header-right .s-content-details {
    margin-right: 16px;
}
.s-header-avatar {
    background-image: url('../../assets/icon/avatar-default.png');
    background-size: contain;
    width: 24px;
    height: 24px;
}

.s-icon-option {
    width: 16px;
    height: 16px;
    background-image: url('../../assets/icon/option.png');
    background-position: center;
    background-repeat: no-repeat;
}
</style>