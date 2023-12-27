import React, { useEffect } from "react";
import { notification } from "antd";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Table from "react-bootstrap/Table";
import "./ManagerUser.scss";
import HeaderAdmin from "../../../components/layout/headerAdmin/HeaderAdmin";

import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function ManagerUser() {
  return (
    <>
      <HeaderAdmin></HeaderAdmin>
      <div id="managerUser">
        <div id="managerUser__navbar">
          <div
            className="managerUser__managerAdminAccount"
            style={{ textAlign: "center" }}
          >
            <strong style={{ fontSize: "25px" }}>
              {/* {admin.email=="Kingsman@gmail.com" ? `Admin ${admin.userName}` : "Tài khoản của tôi"} */}
              Tài khoản của tôi
            </strong>
          </div>
          <div className="managerUser__inforManagerAdminAccount">
            <ul className="managerUser__inforManagerAdminAccount__listInfor">
              <li className="managerUser__inforManagerAdminAccount__listInfor--current">
                <strong className="managerUser__inforManagerAdminAccount--current__text">
                  QUẢN LÝ NGƯỜI DÙNG
                </strong>
              </li>
              <li className="managerUser__inforManagerAdminAccount__listInfor--buy">
                <Link
                  to={"/adminProduct"}
                  className="managerUser__inforManagerAdminAccount--buy__text"
                >
                  quản lý sản phẩm
                </Link>
              </li>
              <li className="managerUser__inforManagerAdminAccount__listInfor--delivery">
                <Link
                  to={"/adminCategory"}
                  className="managerUser__inforManagerAdminAccount--delivery__text"
                >
                  quản lý chủng loại
                </Link>
              </li>
              <li className="managerUser__inforManagerAdminAccount__listInfor--sale">
                <Link
                  to={"/adminOrder"}
                  className="managerUser__inforManagerAdminAccount--sale__text"
                >
                  Danh sách order
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div id="managerUser__addProduct">
          <div
            className="managerUser__addProduct--form"
            style={{ display: "flex", gap: "20px", alignItems: "center" }}
          >
            <div>
              <InputGroup
                className="mb-3"
                style={{ width: "1000px", marginTop: "20px" }}
              >
                <Form.Control
                  placeholder="Nhập..."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text
                  id="basic-addon2"
                  style={{
                    backgroundColor: "#e31837",
                    color: "#fff",
                    fontWeight: "700",
                    border: "none",
                  }}
                >
                  Tìm kiếm
                </InputGroup.Text>
              </InputGroup>
            </div>
          </div>
        </div>
        <div id="managerUser__renderProduct">
          <Table striped="columns">
            <thead style={{ textAlign: "center" }}>
              <tr>
                <th style={{ width: "30px" }}>STT</th>
                <th style={{ width: "180px" }}>Tên người dùng</th>
                <th style={{ width: "130px" }}>Email</th>
                <th style={{ width: "100px" }}>Address</th>
                <th style={{ width: "180px" }}>Trạng thái người dùng</th>
              </tr>
            </thead>
            <tbody>
              {/* {renderUser.map((item, index) => {
                return (
                  <tr key={index}>
                    <td style={{ textAlign: "center" }}>{index + 1}</td>
                    <td style={{ textAlign: "center" }}>{item.userName}</td>
                    <td style={{ textAlign: "center" }}>{item.email}</td>
                    <td style={{ textAlign: "center" }}>{item.address}</td>
                    <td style={{ textAlign: "center" }}>
                      <Button
                        variant="success"
                        className={item.status ? "activeUser" : "banUser"}
                        onClick={() => handleStatus(item)}
                      >
                        {item.status ? "Active" : "Ban"}
                      </Button>{" "}
                    </td>
                  </tr>
                );
              })} */}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
