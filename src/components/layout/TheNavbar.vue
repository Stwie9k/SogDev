<template>
     <div class="s-navbar">
                <div class="s-logo-box">
                    <div class="s-icon-logo"></div>
                    <div class="s-logo"></div>
                </div>
                <div class="s-navbar-content">
                    <div class="s-nav-item">
                        <div class="s-nav-item-icon s-nav-content-item-1"></div>
                        <div class="s-content-details">Tổng quan</div>
                    </div>
                    <div class="s-nav-item">
                        <div class="s-nav-item-icon s-nav-content-item-2"></div>
                        <div class="s-content-details">Tiền Mặt</div>
                    </div>
                    <div class="s-nav-item">
                        <div class="s-nav-item-icon s-nav-content-item-1"></div>
                        <div class="s-content-details">Tiền Gửi</div>
                    </div>
                    <div class="s-nav-item">
                        <div class="s-nav-item-icon s-nav-content-item-3"></div>
                        <div class="s-content-details">Mua Hàng</div>
                    </div>
                    <div class="s-nav-item">
                        <div class="s-nav-item-icon s-nav-content-item-4"></div>
                        <div class="s-content-details">Bán hàng</div>
                    </div>
                     <div class="s-nav-item">
                        <div class="s-nav-item-icon s-nav-content-item-4"></div>
                        <div class="s-content-details">Quản Lý Hóa Đơn</div>
                    </div>
                     <div class="s-nav-item">
                        <div class="s-nav-item-icon s-nav-content-item-4"></div>
                        <div class="s-content-details">Kho</div>
                    </div>
                     <div class="s-nav-item">
                        <div class="s-nav-item-icon s-nav-content-item-4"></div>
                        <div class="s-content-details">Công cụ dụng cụ</div>
                    </div>
                     <div class="s-nav-item">
                        <div class="s-nav-item-icon s-nav-content-item-4"></div>
                        <div class="s-content-details">Tài sản cố định </div>
                    </div>
                     <div class="s-nav-item">
                        <div class="s-nav-item-icon s-nav-content-item-4"></div>
                        <div class="s-content-details">Thuế</div>
                    </div>
                     <div class="s-nav-item">
                        <div class="s-nav-item-icon s-nav-content-item-4"></div>
                        <div class="s-content-details">Giá thành</div>
                    </div>
                     <div class="s-nav-item">
                        <div class="s-nav-item-icon s-nav-content-item-4"></div>
                        <div class="s-content-details">Tổng hợp</div>
                    </div>
                     <div class="s-nav-item">
                        <div class="s-nav-item-icon s-nav-content-item-4"></div>
                        <div class="s-content-details">Ngân sách</div>
                    </div>
                     <div class="s-nav-item">
                        <div class="s-nav-item-icon s-nav-content-item-4"></div>
                        <div class="s-content-details">Báo cáo</div>
                    </div>
                     <div class="s-nav-item">
                        <div class="s-nav-item-icon s-nav-content-item-4"></div>
                        <a class="s-content-details" >Phân tích tài chính</a>
                    </div>
                </div>
            </div>
</template>
<style scoped>
.s-navbar {
    width: 220px;
    height: 100vh;
    background-color: #ffffff;
    border-right: 1px solid #e5e5e5;
    flex-shrink: 0;
}

.s-navbar .s-logo-box {
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 12px 16px;
}

.s-navbar .s-logo-box .s-icon-logo {
    flex-shrink: 0;
    margin-right: 10px;
}

.s-navbar .s-navbar-content {
    width: 100%;
}

.s-navbar .s-navbar-content .s-nav-item {
    display: flex;
    padding: 0 16px;
    height: 44px;
    cursor: pointer;
    line-height: 44px;
}

.s-navbar .s-navbar-content .s-nav-item:hover {
    background-color: #e5e5e5;
    color: #000000;
}

.s-navbar .s-navbar-content .s-nav-item-icon {
    width: 20px;
    height: 20px;
    align-self: center;
    margin-right: 10px;
    background-size: contain;
}

.s-nav-content-item-1 {
    background-image: url('../../assets/icon/dashboard.png');
}

.s-nav-content-item-2 {
    background-image: url('../../assets/icon/report.png');
}

.s-nav-content-item-3 {
    background-image: url('../../assets/icon/dic-employee.png');
}

.s-nav-content-item-4 {
    background-image: url('../../assets/icon/setting.png');
}
.s-icon-logo {
    width: 24px;
    height: 24px;
    background-image: url('../../assets/img/toggle.png');
    background-size: contain;
    background-repeat: no-repeat;
}

.s-logo {
    width: 100%;
    height: 24px;
    background-image: url('../../assets/cukcuk-logo.png');
    background-size: contain;
    background-repeat: no-repeat;
}

</style>