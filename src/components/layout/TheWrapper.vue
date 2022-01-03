<template>
    <div class="s-wrapper">
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
                        <div class="s-content-details">Báo cáo</div>
                    </div>
                    <div class="s-nav-item">
                        <div class="s-nav-item-icon s-nav-content-item-1"></div>
                        <div class="s-content-details">Mua hàng</div>
                    </div>
                    <div class="s-nav-item">
                        <div class="s-nav-item-icon s-nav-content-item-3"></div>
                        <div class="s-content-details">Danh mục nhân viên</div>
                    </div>
                    <div class="s-nav-item">
                        <div class="s-nav-item-icon s-nav-content-item-4"></div>
                        <div class="s-content-details">Thiết lập hệ thống</div>
                    </div>
                </div>
            </div>
            <div class="s-container">
                <div class="s-header">
                    <div class="s-header-left">
                        <div class="s-tittle2">Nhà hàng Biển Đông</div>
                        <div class="s-icon-down"></div>
                    </div>
                    <div class="s-header-right">
                        <div class="s-header-avatar"></div>
                        <div class="s-content-details">SongDev</div>
                        <div class="s-icon-option"></div>
                    </div>
                </div>

                <div class="s-content">
                    <div class="s-header-content">
                        <div class="s-tittle">Danh sách nhân viên</div>
                        <button id="btnAddEmployee" class="s-button s-button-icon">Thêm nhân viên</button>
                    </div>
                    <div class="s-content-filter-bar">
                        <div class="s-filter-left">
                            <input class="s-input s-input-icon" type="text" placeholder="Tìm kiếm theo Mã, Tên hoặc Số điện thoại." style="width: 300px" />
                            <div class="s-combobox">
                                <input type="text">
                                <button id="btncombobox"><i class="fas fa-angle-down"></i></button>
                                <div class="s-combobox-data">
                                    <div class="s-combobox-item">Trạng thái 1</div>
                                    <div class="s-combobox-item">Trạng thái 2</div>
                                    <div class="s-combobox-item s-combobox-item-selected">Trạng thái 3</div>
                                </div>
                            </div>
                            <div class="s-combobox">
                                <input type="text">
                                <button id="btncombobox"><i class="fas fa-angle-down"></i></button>
                                <div class="s-combobox-data">
                                    <div class="s-combobox-item">Trạng thái 1</div>
                                    <div class="s-combobox-item">Trạng thái 2</div>
                                    <div class="s-combobox-item s-combobox-item-selected">Trạng thái 3</div>
                                </div>
                            </div>
                        </div>
                        <div class="s-filter-rigth">
                            <button id="s-btnrefresh" class="s-button-seconds s-button-seconds-refresh"> </button>
                        </div>
                    </div>
                    <div class="s-grid-box">
                        <div class="s-grid">
                            <table id="s-tbCustomer" cellspacing="0" class="s-table">
                                <thead>
                                    <tr>
                                        <th propertyName="CustomerCode">Mã nhân viên</th>
                                        <th propertyName="FullName">Họ và tên</th>
                                        <th propertyName="Gender" formatType="gender">Giới tính</th>
                                        <th class="text-align-center" propertyName="DateOfBirth" formatType="date">Ngày sinh</th>
                                        <th propertyName="PhoneNumber">Điện thoại</th>
                                        <th propertyName="Email">Email</th>
                                        <th class="text-align-right" propertyName="DebitAmount" formatType="money">Mức lương cơ bản</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr  v-for="employee in employees" :key="employee.EmployeeID">
                                        <td>{{employee.EmployeeCode}}</td>
                                        <td>{{employee.EmployeeName}}</td>
                                        <td>{{employee.GenderName}}</td>
                                        <td>{{formatDate(employee.DateOfBirth) }}</td>
                                        <td>{{employee.PhoneNumber}}</td>
                                        <td>{{employee.Email}}</td>
                                        <td>{{employee.Salary}}</td>
                                    </tr>
                                   


                             </tbody>
                            </table>

                        </div>
                    </div>
                    <div class="s-paging">
                        <div class="s-paging-left ">Hiển thị 01-20/123 lao động</div>
                        <div class="s-paging-center ">
                            <button class="s-first-page s-paging-button"></button>
                            <button class="s-prev-page s-paging-button"></button>
                            <div class="s-page-number-group">
                                <button class="s-page-number">1</button>
                                <button class="s-page-number">2</button>
                                <button class="s-page-number">3</button>
                                <button class="s-page-number">4</button>
                            </div>
                            <button class="s-next-page s-paging-button"></button>
                            <button class="s-last-page s-paging-button"></button>
                        </div>
                        <div class="s-paging-right">10 nhân viên/trang </div>


                    </div>
                </div>

            </div>

        </div>
</template>
<script>
import axios from 'axios'
export default {
 created() {
     // goi API la du lieu
     this.getData();
 },
 methods: {
     /*
     *lay du lieu
     *Author NPS

      */
     getData(){
         var me = this;
     axios
      .get("http://amis.manhnv.net/api/v1/Employees")
      .then(function (res) {
        me.employees = res.data;
        console.log(res);  
    })
    .catch(function (res) {
        console.log(res);
        
    });

     },
     formatDate(value){
         if (value) {
                                        value = new Date(value);

                                        let date = value.getDate();
                                        date = date < 10 ? `0${date}` : date;

                                        let month = value.getMonth() + 1;
                                        month = month < 10 ? `0${month}` : month;

                                        let year = value.getFullYear();

                                        value = `${date}/${month}/${year}`;
                                        return value;

                                    } else {
                                        value = "";
                                    }

     }
//     filters: {
//      formatDate: function(value) {
//          if (value) {
//                                         value = new Date(value);

//                                         let date = value.getDate();
//                                         date = date < 10 ? `0${date}` : date;

//                                         let month = value.getMonth() + 1;
//                                         month = month < 10 ? `0${month}` : month;

//                                         let year = value.getFullYear();

//                                         value = `${date}/${month}/${year}`;
                                        
//                                         return value;

//                                     } else {
//                                         value = "";
//                                     }
         
//      }
//  }

 },
 


 data() {
     return {
         employees : null,
     };
 },
};
</script>
