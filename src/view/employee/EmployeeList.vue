<template>
    <div>
         <div class="s-header-content">
                        <div class="s-tittle">NHÂN VIÊN</div>
                        <button id="btnAddEmployee" class="s-button " >Thêm nhân viên</button>
                    </div>
                    
                    <div class="s-grid-box">
                        <div class="s-content-filter-bar">
                        <div class="s-filter-left">
                
                           <input class="s-input s-input-icon" type="text" placeholder="Tìm kiếm theo mã nhân viên." style="width: 220px" />
                            <!-- <div class="s-combobox">
                                <input type="text">
                                <button id="btncombobox"><i class="fas fa-angle-down"></i></button>
                                <div class="s-combobox-data">
                                    <div class="s-combobox-item">Trạng thái 1</div>
                                    <div class="s-combobox-item">Trạng thái 2</div>
                                    <div class="s-combobox-item s-combobox-item-selected">Trạng thái 3</div>
                                </div>
                            </div> -->
                            <!-- <div class="s-combobox">
                                <input type="text">
                                <button id="btncombobox"><i class="fas fa-angle-down"></i></button>
                                <div class="s-combobox-data">
                                    <div class="s-combobox-item">Trạng thái 1</div>
                                    <div class="s-combobox-item">Trạng thái 2</div>
                                    <div class="s-combobox-item s-combobox-item-selected">Trạng thái 3</div>
                                </div>
                            </div> -->
                        </div>
                        <div class="s-filter-rigth">
                            <button id="s-btnrefresh" class="s-me s-me-icon24 s-refresh"> </button>
                        </div>
                    </div>
                        <div class="s-grid">
                           <!-- <table id="s-tbCustomer" cellspacing="0" class="s-table" >
                            <thead>
                                  <tr>
                                        <th class="s-table-th" spropertyName="CustomerCode">MÃ NHÂN VIÊN</th>
                                        <th class="s-table-th" propertyName="FullName">TÊN NHÂN VIÊN </th>
                                        <th class="s-table-th" propertyName="Gender" formatType="gender">GIỚI TÍNH</th>
                                        <th class="text-align-center s-table-th" propertyName="DateOfBirth" formatType="date">NGÀY SINH</th>
                                        <th class="s-table-th" propertyName="PhoneNumber">SỐ CMND</th>
                                        <th class="s-table-th" propertyName="PhoneNumber">CHỨC DANH</th>
                                        <th class="s-table-th" propertyName="PhoneNumber">TÊN ĐƠN VI</th>
                                        <th class="s-table-th" propertyName="PhoneNumber">SỐ TÀI KHOẢN</th>
                                        <th class="s-table-th" propertyName="PhoneNumber">TÊN NGÂN HÀNG</th>
                                        <th class="s-table-th" propertyName="PhoneNumber">CHI NHÁNH TK NGÂN HÀNG</th>
                                        <th class="s-table-th" propertyName="Email">CHỨC NĂNG</th>
                                  </tr>
                            </thead>
                            <tbody class="s-table-tbody">
                                   
                                   <tr class="s-table-tr" v-for="employee in employees" :key="employee.EmployeeID">
                                        <td class="s-table-td" >{{employee.EmployeeCode}}</td>
                                        <td class="s-table-td">{{employee.EmployeeName}}</td>
                                        <td class="s-table-td">{{employee.GenderName}}</td>
                                        <td class="s-table-td">{{formatDate(employee.DateOfBirth) }}</td>
                                        <td class="s-table-td">{{employee.EmployeeCode}}</td>
                                        <td class="s-table-td">{{employee.PositionName}}</td>  
                                        <td class="s-table-td">{{employee.DepartmentName}}</td>
                                        <td class="s-table-td">{{employee.BankAccountNumber}}</td>
                                         <td class="s-table-td">{{employee.BankName}}</td>
                                        <td class="s-table-td">{{employee.BankBranchName}}</td>
                                        <td class="s-table-td">{{employee.GenderName}}</td>
                                    
                                    </tr> 
                                   
                            </tbody>
                            </table> -->

                        </div>
                  
                    <div class="s-paging">
                        <div class="s-paging-left ">Tổng số 15 bản ghi</div>
                        
                        <div class="s-paging-right">10 nhân viên/trang </div>
                        <div class="s-paging-center ">
                            <button class=" s-paging-button">Trước</button>
                            <div class="s-page-number-group">
                                <button class="s-page-number">1</button>
                                <button class="s-page-number">2</button>
                                <button class="s-page-number">3</button>
                                <button class="s-page-number">4</button>
                            </div>
                            <button class=" s-paging-button">Sau</button>
                        </div>


                    </div>
                      </div>
    </div>
</template>
<style scoped>
 @import url('../../style/base/button.css'); 
 @import url('../../style/base/paging.css'); 
 @import url('../../style/base/table.css'); 
 @import url('../../style/base/input.css'); 

 .s-content .s-header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 16px 10px;
   
}

.s-content .s-content-filter-bar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 16px 16px ;

}

.s-content .s-content-filter-bar .s-filter-left {
    display: flex;
}

.s-table-th{
    font-size: 12px;
}

.s-content .s-grid-box {
    background-color: #fff;
    margin-right: 16px;
    margin-left: 16px;
}

.s-content .s-grid {
    width: 100%;
    /* height: 528px;
    overflow: auto; */
}
.s-refresh  {
     margin-left: 16px ;
     background-position-x: -423px;
     background-position-y: -199px; 
     border-radius: unset;
     border: unset
     
}

</style>
