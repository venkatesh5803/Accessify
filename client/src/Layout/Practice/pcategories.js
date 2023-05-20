import Sidebar from "../includes/sidebar";
import Header from "../includes/header";
import Footer from "../includes/footer";
import { Link } from "react-router-dom";
export default function Pcategories() {
    return(
        <>
              
      <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
          <Sidebar />
          <div class="layout-page">
            <Header />
            <div class="content-wrapper">
              <div
                class="modal fade"
                id="modalCenter"
                tabindex="-1"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h6 class="row g-2" id="modalCenterTitle">
                        Categories:
                      </h6>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="row g-2">
                        <div class="form-group">
                        <label> Name <sup className="text-danger"> * </sup>
                        </label>
                          <input
                            type="text"
                            id="name"
                            class="form-control"
                            placeholder="Enter Name"
                          />
                    <div className="form-group">
                        <label> Description <sup className="text-danger"> * </sup>
                        </label>
                        <textarea  rows={4} type="text" required placeholder name="description" className="form-control w-100 pl-2 ng-pristine ng-invalid ng-touched" style={{ height: 109 }}/>
                        </div>
                    <div class="form-group">
                        <div class="col mb-0">
                        <label> Tags <sup className="text-danger"> * </sup>
                        </label>
                        <select name="tags" id="" formcontrolname="access_type" 
                         class="form-control ng-pristine ng-invalid ng-touched">
                            <option value="Aplitude" selected="">Aplitude</option>
                            <option value="Reasoning">Reasoning</option>
                            </select>
                          </div>
                          <div className="form-group">
                        <label> Access Type <sup className="text-danger"> * </sup>
                        </label>
                        <select name="access_plan" id="" formcontrolname="access_type" 
                         class="form-control ng-pristine ng-invalid ng-touched">
                            <option value="all" selected="">All</option>
                            <option value="restricted">Restricted</option>
                            </select></div>
                            <div className="form-group">
                        <label> Access Plan <sup className="text-danger"> * </sup>
                        </label>
                        <select name="access_plan" id="" formcontrolname="access_type" 
                         class="form-control ng-pristine ng-invalid ng-touched">
                            <option value="free" selected="">Free</option>
                            <option value="retail">Retail</option>
                            </select></div>
                          </div></div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-outline-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary" id="Submit"
                       >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container-xxl flex-grow-1 container-p-y">
              <h4 class="fw-bold py-3 mb-4 d-flex justify-content-between align-items-center">
              <span>Categories</span> 
              <button type="button" class="btn btn-primary" 
              data-bs-toggle="modal" 
              data-bs-target="#modalCenter">
              + Add Category</button>
            </h4>
                <div class="card mb-4">
                  <div class="card-body">
                    <div class="row">
                      
                    <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper no-footer">
                                         <div className="dataTables_length" id="DataTables_Table_0_length">
                                            <label>Show <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" className>
                                                     <option value={10}>10</option>
                                                     <option value={25}>25</option>
                                                     <option value={50}>50</option>
                                                     <option value={100}>100</option>
                                                 </select> entries</label></div>
                                         <div id="DataTables_Table_0_filter" className="dataTables_filter">
                                         <br></br><label>Search:<input type="search" className placeholder aria-controls="DataTables_Table_0" /></label>
                                         
                                         </div>
                                         <br></br>
                                         <table  datatable className="table table-bordered row-border dataTable no-footer" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info">
                                             <thead  className="text-center thead-instacks">
                                                 <tr >
                                                     <th  scope="col" className="sorting sorting_asc" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="S.No: activate to sort column descending" style={{width: '32.4583px'}}>S.No</th>
                                                     <th  scope="col" className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Category Name: activate to sort column ascending" style={{width: '305.083px'}}>Category Name</th>
                                                     <th  scope="col" className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Tags: activate to sort column ascending" style={{width: '140.208px'}}>Tags</th>
                                                     <th  scope="col" className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Access Plan: activate to sort column ascending" style={{width: '84.5208px'}}>Access Plan</th>
                                                     <th  scope="col" className="sorting" tabIndex={0} aria-controls="DataTables_Table_0" rowSpan={1} colSpan={1} aria-label="Actions: activate to sort column ascending" style={{width: '185.729px'}}>Actions</th>
                                                 </tr>
                                             </thead>
                                             <tbody  className="text-center"><tr  className="odd">
                                                     <td  className="sorting_1">1</td>
                                                     <td >accessify_DAILY PRACTICE_TECHNICAL_VIEW</td>
                                                     <td ><span  className="badge badge-primary mx-1">Programming</span></td>
                                                     <td >Free</td>
                                                     <td ><a  target="_blank" className="btn btn-secondary text-white mb-1 mb-md-0 btn-sm mx-1" href="vendor/practice-category/l8kli3ip/access">Access</a>
                                                     <a
                                                      target="_blank"
                                                      className="btn btn-dark text-white mb-1 mb-md-0 btn-xs mx-1"
                                                      href="/vendor/assessment/l8a72vu5/edit">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="26" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                      </svg>
                                                    </a>
                                                    <a data-toggle="modal" data-target="#deleteAdmin" className="btn btn-danger text-white mb-1 mb-md-0 btn-xs mx-1"> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="26" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                                    </svg> </a>
                                                    </td>                                                 </tr>
                                                 <tr  className="even">
                                                     <td  className="sorting_1">2</td>
                                                     <td >accessify_DAILY PRACTICE_TECHNICAL_AU</td>
                                                     <td ><span  className="badge badge-primary mx-1">Programming</span></td>
                                                     <td >Free</td>
                                                     <td ><a  target="_blank" className="btn btn-secondary text-white mb-1 mb-md-0 btn-sm mx-1" href="vendor/practice-category/l8kli3ip/access">Access</a>
                                                     <a
                                                      target="_blank"
                                                      className="btn btn-dark text-white mb-1 mb-md-0 btn-xs mx-1"
                                                      href="/vendor/assessment/l8a72vu5/edit">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="26" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                      </svg>
                                                    </a>
                                                    <a data-toggle="modal" data-target="#deleteAdmin" className="btn btn-danger text-white mb-1 mb-md-0 btn-xs mx-1"> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="26" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                                    </svg> </a>
                                                    </td></tr>
                                                 <tr  className="odd">
                                                     <td  className="sorting_1">3</td>
                                                     <td >accessify_DAILY PRACTICE_APTITUDE_AITS</td>
                                                     <td ><span  className="badge badge-primary mx-1">Aptitude</span></td>
                                                     <td >Free</td>
                                                     <td ><a  target="_blank" className="btn btn-secondary text-white mb-1 mb-md-0 btn-sm mx-1" href="vendor/practice-category/l8kli3ip/access">Access</a>
                                                     <a
                                                      target="_blank"
                                                      className="btn btn-dark text-white mb-1 mb-md-0 btn-xs mx-1"
                                                      href="/vendor/assessment/l8a72vu5/edit">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="26" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                      </svg>
                                                    </a>
                                                    <a data-toggle="modal" data-target="#deleteAdmin" className="btn btn-danger text-white mb-1 mb-md-0 btn-xs mx-1"> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="26" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                                    </svg> </a>
                                                      
                                                      </td>
                                                 </tr>
                                                 <tr  className="even">
                                                     <td  className="sorting_1">4</td>
                                                     <td >accessify_DAILY PRACTICE_VERBAL_AITS</td>
                                                     <td ><span  className="badge badge-primary mx-1">Verbal and Communication</span></td>
                                                     <td >Free</td>
                                                     <td ><a  target="_blank" className="btn btn-secondary text-white mb-1 mb-md-0 btn-sm mx-1" href="vendor/practice-category/l8kli3ip/access">Access</a>
                                                     <a
                                                      target="_blank"
                                                      className="btn btn-dark text-white mb-1 mb-md-0 btn-xs mx-1"
                                                      href="/vendor/assessment/l8a72vu5/edit">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="26" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                      </svg>
                                                    </a>
                                                    <a data-toggle="modal" data-target="#deleteAdmin" className="btn btn-danger text-white mb-1 mb-md-0 btn-xs mx-1"> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="26" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                                    </svg> </a>
                                                    </td>                                                 </tr>
                                                 <tr  className="odd">
                                                     <td  className="sorting_1">5</td>
                                                     <td >accessify_DAILY PRACTICE_TECHNICAL_AITST</td>
                                                     <td ><span  className="badge badge-primary mx-1">Programming</span></td>
                                                     <td >Free</td>
                                                     <td ><a  target="_blank" className="btn btn-secondary text-white mb-1 mb-md-0 btn-sm mx-1" href="vendor/practice-category/l8kli3ip/access">Access</a>
                                                     <a
                                                      target="_blank"
                                                      className="btn btn-dark text-white mb-1 mb-md-0 btn-xs mx-1"
                                                      href="/vendor/assessment/l8a72vu5/edit">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="26" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                      </svg>
                                                    </a>
                                                    <a data-toggle="modal" data-target="#deleteAdmin" className="btn btn-danger text-white mb-1 mb-md-0 btn-xs mx-1"> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="26" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                                    </svg> </a>
                                                    </td>                                                 </tr>
                                                 <tr  className="even">
                                                     <td  className="sorting_1">6</td>
                                                     <td >Testing for Verbal_Trainer</td>
                                                     <td ><span  className="badge badge-primary mx-1">Verbal and Communication</span></td>
                                                     <td >Free</td>
                                                     <td ><a  target="_blank" className="btn btn-secondary text-white mb-1 mb-md-0 btn-sm mx-1" href="vendor/practice-category/l8kli3ip/access">Access</a>
                                                     <a
                                                      target="_blank"
                                                      className="btn btn-dark text-white mb-1 mb-md-0 btn-xs mx-1"
                                                      href="/vendor/assessment/l8a72vu5/edit">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="26" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                      </svg>
                                                    </a>
                                                    <a data-toggle="modal" data-target="#deleteAdmin" className="btn btn-danger text-white mb-1 mb-md-0 btn-xs mx-1"> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="26" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                                    </svg> </a>
                                                    </td>                                                 </tr>
                                                 <tr  className="odd">
                                                     <td  className="sorting_1">7</td>
                                                     <td >Testing for Tech MCQ's_Trainers</td>
                                                     <td ><span  className="badge badge-primary mx-1">Programming</span></td>
                                                     <td >Free</td>
                                                     <td ><a  target="_blank" className="btn btn-secondary text-white mb-1 mb-md-0 btn-sm mx-1" href="vendor/practice-category/l8kli3ip/access">Access</a>
                                                     <a
                                                      target="_blank"
                                                      className="btn btn-dark text-white mb-1 mb-md-0 btn-xs mx-1"
                                                      href="/vendor/assessment/l8a72vu5/edit">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="26" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                      </svg>
                                                    </a>
                                                    <a data-toggle="modal" data-target="#deleteAdmin" className="btn btn-danger text-white mb-1 mb-md-0 btn-xs mx-1"> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="26" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                                    </svg> </a>
                                                    </td>                                                 </tr>
                                                 <tr  className="even">
                                                     <td  className="sorting_1">8</td>
                                                     <td >accessify_Daily Practice_Aptitude_KITS</td>
                                                     <td ><span  className="badge badge-primary mx-1">Aptitude</span></td>
                                                     <td >Free</td>
                                                     <td ><a  target="_blank" className="btn btn-secondary text-white mb-1 mb-md-0 btn-sm mx-1" href="vendor/practice-category/l8kli3ip/access">Access</a>
                                                     <a
                                                      target="_blank"
                                                      className="btn btn-dark text-white mb-1 mb-md-0 btn-xs mx-1"
                                                      href="/vendor/assessment/l8a72vu5/edit">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="26" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                      </svg>
                                                    </a>
                                                    <a data-toggle="modal" data-target="#deleteAdmin" className="btn btn-danger text-white mb-1 mb-md-0 btn-xs mx-1"> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="26" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                                    </svg> </a>
                                                    </td>                                                 </tr>
                                                 <tr  className="odd">
                                                     <td  className="sorting_1">9</td>
                                                     <td >accessify_Daily Practice_Verbal_KITS</td>
                                                     <td ><span  className="badge badge-primary mx-1">Verbal and Communication</span></td>
                                                     <td >Free</td>
                                                     <td ><a  target="_blank" className="btn btn-secondary text-white mb-1 mb-md-0 btn-sm mx-1" href="vendor/practice-category/l8kli3ip/access">Access</a>
                                                     <a
                                                      target="_blank"
                                                      className="btn btn-dark text-white mb-1 mb-md-0 btn-xs mx-1"
                                                      href="/vendor/assessment/l8a72vu5/edit">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="26" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                      </svg>
                                                    </a>
                                                    <a data-toggle="modal" data-target="#deleteAdmin" className="btn btn-danger text-white mb-1 mb-md-0 btn-xs mx-1"> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="26" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                                    </svg> </a>
                                                    </td>                                                 </tr>
                                                 <tr  className="even">
                                                     <td  className="sorting_1">10</td>
                                                     <td >accessify_Daily Practice_Technical_KITS</td>
                                                     <td ><span  className="badge badge-primary mx-1">Programming</span></td>
                                                     <td >Free</td>
                                                     <td ><a  target="_blank" className="btn btn-secondary text-white mb-1 mb-md-0 btn-sm mx-1" href="vendor/practice-category/l8kli3ip/access">Access</a>
                                                     <a
                                                      target="_blank"
                                                      className="btn btn-dark text-white mb-1 mb-md-0 btn-xs mx-1"
                                                      href="/vendor/assessment/l8a72vu5/edit">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="26" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                                      </svg>
                                                    </a>
                                                    <a data-toggle="modal" data-target="#deleteAdmin" className="btn btn-danger text-white mb-1 mb-md-0 btn-xs mx-1"> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="26" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                                    </svg> </a>
                                                    </td>                                                 </tr>
                                             </tbody>
                                         </table>
                                         </div>
                    </div>
                  </div>
                  </div>
                  </div>  
            </div>
        </div>
        </div>
        </div>
        </>
    );
}