<template>
    <div class="s-header">
                    <div class="s-header-left">
                        <div class="s-me s-me-icon24 s-stripes"></div>
                        <div class="s-content-details">CÔNG TY TNHH SẢN XUẤT-THƯƠNG MẠI-DỊCH VỤ QUI PHÚC</div>
                        <div class="s-me s-me-icon14 s-icon-down1 "></div>
                    </div>
                    <div class="s-header-right">
                        <div class="s-header-avatar"></div>
                        <div class="s-content-details">SongDev</div>
                        <div class="s-me s-me-icon14 s-icon-down"></div>
                    </div>
                </div>
</template>
<style scoped>
.s-header {
    height: 48px;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    background-color: #fff;
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
    margin-right: 4px;
}
.s-header-avatar {
    background-image: url('../../assets/img/default-avatar.jpg');
    background-size: contain;
    width: 24px;
    height: 24px;
    border-radius: 50%;
}
.s-stripes {
    background-position-x: -843px;
    background-position-y: -30px;
    margin-right: 16px;
}
.s-icon-down1 {
    background-position-x: -1130px;
    background-position-y: -363px;
    margin-left: 8px;
   
}
.s-icon-down {
    background-position-x: -1076px;
    background-position-y: -33px;
   
}
</style>