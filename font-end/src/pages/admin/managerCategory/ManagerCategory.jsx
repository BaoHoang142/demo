import React, { useEffect } from "react";
import "./ManagerCategory.scss";
import HeaderAdmin from "../../../components/layout/headerAdmin/HeaderAdmin";
import { useState } from "react";
import axios from "axios";
import { notification } from "antd";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import privateAxios from "../../../config/privateAxios";

export default function ManagerCategory() {
  const [categories, setCategories] = useState([]);
  const [check, setCheck] = useState(false)
  const [nameCategory, setNameCategory] = useState("");
  const handleGetCates = async () => {
    try {
      const response = await privateAxios("/api/v1/categories");
      setCategories(response.data);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  useEffect(() => {
    handleGetCates();
  }, []);
  const handleAddCategory = async() => {
    try {
      const response = await privateAxios.post("/api/v1/category", {nameCategory})
      setCategories(response.data.cates)
      alert(response.data.message)
    } catch (error) {
        alert(error.response.data.message)
    }
  }
  const handleEditCategory= () => {

  }
  return (
    <>
      <HeaderAdmin></HeaderAdmin>
      <div id="managerCategory">
        <div id="managerCategory__navbar">
          <div
            className="managerCategory__managerAdminAccount"
            style={{ textAlign: "center" }}
          >
            <strong style={{ fontSize: "25px" }}>
              {/* {admin.Admin ? `${admin.Admin}` : "Tài khoản của tôi"} */}
              Tài khoản của tôi
            </strong>
          </div>
          <div className="managerCategory__inforManagerAdminAccount">
            <ul className="managerCategory__inforManagerAdminAccount__listInfor">
              <li className="managerCategory__inforManagerAdminAccount__listInfor--current">
                <Link
                  to={"/adminUser"}
                  className="managerCategory__inforManagerAdminAccount--current__text"
                >
                  QUẢN LÝ NGƯỜI DÙNG
                </Link>
              </li>
              <li className="managerCategory__inforManagerAdminAccount__listInfor--buy">
                <Link
                  to={"/adminProduct"}
                  className="managerCategory__inforManagerAdminAccount--buy__text"
                >
                  quản lý sản phẩm
                </Link>
              </li>
              <li className="managerCategory__inforManagerAdminAccount__listInfor--delivery">
                <a className="managerCategory__inforManagerAdminAccount--delivery__text">
                  quản lý chủng loại
                </a>
              </li>
              <li className="managerCategory__inforManagerAdminAccount__listInfor--sale">
                <Link
                  to={"/adminOrder"}
                  className="managerCategory__inforManagerAdminAccount--sale__text"
                >
                  Danh sách order
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div id="managerCategory__Category">
          <InputGroup className="mb-3" style={{ marginTop: "20px" }}>
            <Form.Control
              placeholder="Thêm"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={nameCategory}
              name="category"
              onChange={(e) => setNameCategory(e.target.value)}
            />
            <InputGroup.Text
              id="basic-addon2"
                onClick={check ? handleEditCategory : handleAddCategory}
              style={{
                backgroundColor: "#e31837",
                color: "#fff",
                fontWeight: "700",
                border: "none",
                cursor: "pointer",
              }}
            >
              {/* {check ? "Edit category" : "Add Category"} */}
              Add Category
            </InputGroup.Text>
          </InputGroup>
          <div id="managerProduct__Category--renderCategory">
            <Table striped="columns">
              <thead style={{ textAlign: "center" }}>
                <tr>
                  <th style={{ width: "30px" }}>STT</th>
                  <th style={{ width: "180px" }}>Category</th>
                  <th style={{ width: "100px" }}>Sửa, xóa</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td style={{ textAlign: "center" }}>{index + 1}</td>
                      <td style={{ textAlign: "center" }}>
                        {item.nameCategory}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <Button
                          variant="success"
                          onClick={() => handleEdit(item)}
                        >
                          Sửa
                        </Button>{" "}
                        <Button
                          variant="danger"
                          onClick={(id) => handleDeleteCategory(item.id)}
                        >
                          Xóa
                        </Button>{" "}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}
