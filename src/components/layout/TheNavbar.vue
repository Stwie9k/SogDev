<template>
     <div class="s-navbar">
                <div class="s-logo-box">
                    <div class="s-me s-me-icon24 s-icon-logo "></div>
                    <div class="s-logo"></div>
                </div>
                <div class="s-navbar-content">
                    <div class="s-nav-item">
                        <div class="s-me s-me-icon24 s-me-nav1 "></div>
                        <div class="s-content-details">Tổng quan</div>
                    </div>
                    <div class="s-nav-item">
                        <div class="s-me s-me-icon24 s-me-nav2"></div>
                        <div class="s-content-details">Tiền Mặt</div>
                    </div>
                    <div class="s-nav-item">
                        <div class="s-me s-me-icon24 s-me-nav3"></div>
                        <div class="s-content-details">Tiền Gửi</div>
                    </div>
                    <div class="s-nav-item">
                        <div class="s-me s-me-icon24 s-me-nav4"></div>
                        <div class="s-content-details">Mua Hàng</div>
                    </div>
                    <div class="s-nav-item">
                        <div class="s-me s-me-icon24 s-me-nav5"></div>
                        <div class="s-content-details">Bán hàng</div>
                    </div>
                     <div class="s-nav-item">
                        <div class="s-me s-me-icon24 s-me-nav6"></div>
                        <div class="s-content-details">Quản Lý Hóa Đơn</div>
                    </div>
                     <div class="s-nav-item">
                        <div class="s-me s-me-icon24 s-me-nav7"></div>
                        <div class="s-content-details">Kho</div>
                    </div>
                     <div class="s-nav-item">
                        <div class="s-me s-me-icon24 s-me-nav8"></div>
                        <div class="s-content-details">Công cụ dụng cụ</div>
                    </div>
                     <div class="s-nav-item">
                        <div class="s-me s-me-icon24 s-me-nav9"></div>
                        <div class="s-content-details">Tài sản cố định </div>
                    </div>
                     <div class="s-nav-item">
                        <div class="s-me s-me-icon24 s-me-nav10"></div>
                        <div class="s-content-details">Thuế</div>
                    </div>
                     <div class="s-nav-item">
                        <div class="s-me s-me-icon24 s-me-nav11"></div>
                        <div class="s-content-details">Giá thành</div>
                    </div>
                     <div class="s-nav-item">
                        <div class="s-me s-me-icon24 s-me-nav12"></div>
                        <div class="s-content-details">Tổng hợp</div>
                    </div>
                     <div class="s-nav-item">
                        <div class="s-me s-me-icon24 s-me-nav13"></div>
                        <div class="s-content-details">Ngân sách</div>
                    </div>
                     <div class="s-nav-item">
                        <div class="s-me s-me-icon24 s-me-nav14"></div>
                        <div class="s-content-details">Báo cáo</div>
                    </div>
                     <div class="s-nav-item">
                        <div class="s-me s-me-icon24 s-me-nav15"></div>
                        <a class="s-content-details" >Phân tích tài chính</a>
                    </div>
                </div>
            </div>
</template>
<style scoped>
@import url('../../style/base/icon.css');
.s-navbar {
    width: 175px;
    background-color: #393a3d;
    border-right: 1px solid #e5e5e5;
    flex-shrink: 0;
    color: #fff;
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
    height: 42px;
    cursor: pointer;
    line-height: 42px;
    
   
}

.s-navbar .s-navbar-content .s-nav-item:hover {
    background-color: #fff;
    color: #000000;
}

.s-navbar .s-navbar-content .s-nav-item-icon {
    width: 20px;
    height: 20px;
    align-self: center;
    margin-right: 10px;
    background-size: contain;
}

.s-me-nav1 {
    background-position-x: -30px;
    background-position-y: -1628px; 
}
.s-me-nav2 {
    background-position-x: -73px;
    background-position-y: -1628px; 
}
.s-me-nav3 {
    background-position-x: -117px;
    background-position-y: -1628px; 
}
.s-me-nav4 {
    background-position-x: -161px;
    background-position-y: -1628px; 
}
.s-me-nav5 {
    background-position-x: -204px;
    background-position-y: -1628px; 
}
.s-me-nav6 {
    background-position-x: -249px;
    background-position-y: -1628px; 
}
.s-me-nav7 {
    background-position-x: -291px;
    background-position-y: -1628px; 
}
.s-me-nav8 {
    background-position-x: -336px;
    background-position-y: -1628px; 
}
.s-me-nav9 {
    background-position-x: -378px;
    background-position-y: -1628px; 
}
.s-me-nav10 {
    background-position-x: -423px;
    background-position-y: -1628px; 
}
.s-me-nav11 {
    background-position-x: -467px;
    background-position-y: -1628px; 
}
.s-me-nav12 {
    background-position-x: -510px;
    background-position-y: -1628px; 
}
.s-me-nav13 {
    background-position-x: -378px;
    background-position-y: -1659px; 
}
.s-me-nav14 {
    background-position-x: -547px;
    background-position-y: -1628px; 
}
.s-me-nav15 {
    background-position-x: -204px;
    background-position-y: -1664px; 
}

.s-icon-logo {
     background-position-x:-424px ;      
     background-position-y:-86px ;    
     cursor: pointer;  
   
}

.s-logo {
    width: 100px;
    height: 32px;
    background:url(https://actappg2.misacdn.net/img/Logo_Module_TiengViet_White.66947422.svg);
    background-size: contain;
    background-repeat: no-repeat;
    align-self: center;

}

</style>