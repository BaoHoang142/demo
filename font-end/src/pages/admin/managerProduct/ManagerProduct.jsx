import React, { useEffect } from "react";
import { useState } from "react";
// import axios from "axios";
import { Pagination, notification } from "antd";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import Table from "react-bootstrap/Table";
import "./ManagerProduct.scss";
// import { storage } from "../../../config/firebase";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import HeaderAdmin from "../../../components/layout/headerAdmin/HeaderAdmin";
import { Link, useNavigate } from "react-router-dom";
import publicAxios from "../../../config/publicAxios";
import privateAxios from "../../../config/privateAxios";
export default function ManagerProduct() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categories, setCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([])
  const [product, setProduct] = useState({
    nameProduct: "",
    price: 0,
    description: "",
    stock: 0,
    image: "",
    categoryId: 0,
  });
  const changeValue = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handleGetCates = async () => {
    try {
      const response = await publicAxios.get("/api/v1/categories");
      setCategories(response.data);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  const handleGetProducts = async () => {
    try {
      const response = await publicAxios.get("/api/v1/products");
      console.log(response);
      setAllProducts(response.data);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  useEffect(() => {
    handleGetCates();
    handleGetProducts()
  }, []);
  const handleAdd = async () => {
    try {
      const response = await privateAxios.post("/api/v1/product", {
        ...product,
        stock: +product.stock,
        price: +product.price,
        categoryId: +product.categoryId
      });
      setAllProducts(response.data.products)
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <>
      <HeaderAdmin></HeaderAdmin>
      <div id="managerProduct">
        <div id="managerProduct__navbar">
          <div
            className="managerProduct__managerAdminAccount"
            style={{ textAlign: "center" }}
          >
            <strong style={{ fontSize: "25px" }}>
              {/* {admin?.Admin ? `${admin?.Admin}` : "Tài khoản của tôi"} */}
              Tài khoản của tôi
            </strong>
          </div>
          <div className="managerProduct__inforManagerAdminAccount">
            <ul className="managerProduct__inforManagerAdminAccount__listInfor">
              <li className="managerProduct__inforManagerAdminAccount__listInfor--current">
                <Link
                  to={"/adminUser"}
                  className="managerProduct__inforManagerAdminAccount--current__text"
                >
                  QUẢN LÝ NGƯỜI DÙNG
                </Link>
              </li>
              <li className="managerProduct__inforManagerAdminAccount__listInfor--buy">
                <a className="managerProduct__inforManagerAdminAccount--buy__text">
                  quản lý sản phẩm
                </a>
              </li>
              <li className="managerProduct__inforManagerAdminAccount__listInfor--delivery">
                <Link
                  to={"/adminCategory"}
                  className="managerProduct__inforManagerAdminAccount--delivery__text"
                >
                  quản lý chủng loại
                </Link>
              </li>
              <li className="managerProduct__inforManagerAdminAccount__listInfor--sale">
                <Link
                  to={"adminOrder"}
                  className="managerProduct__inforManagerAdminAccount--sale__text"
                >
                  Danh sách order
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div id="managerProduct__addProduct">
          <div
            className="managerProduct__addProduct--form"
            style={{ display: "flex", gap: "20px", alignItems: "center" }}
          >
            <Button
              style={{
                backgroundColor: "#e31837",
                border: "none",
                fontWeight: "700",
              }}
              onClick={handleShow}
            >
              Thêm sản phẩm
            </Button>
            <div>
              <InputGroup
                className="mb-3"
                style={{ width: "900px", marginTop: "20px" }}
              >
                <Form.Control
                  placeholder="Tìm kiếm..."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  //   onChange={handleSearch}
                />
              </InputGroup>
            </div>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Thêm sản phẩm</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    onChange={changeValue}
                    name="categoryId"
                  >
                    <option value="">Chọn category</option>
                    {categories.map((item, index) => {
                      return (
                        <option
                          onChange={() => setSelect(item.target.id)}
                          value={item.categoryId}
                          key={index}
                        >
                          {item.nameCategory}
                        </option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Tên sản phẩm</Form.Label>
                  <Form.Control
                    type="name"
                    name="nameProduct"
                    onChange={changeValue}
                    value={product.nameProduct}
                    placeholder=""
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Số lượng</Form.Label>
                  <Form.Control
                    type="text"
                    name="stock"
                    onChange={changeValue}
                    value={product.stock}
                    placeholder=""
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Thêm ảnh</Form.Label>
                  <Form.Control
                    name="img"
                    // onChange={changeImage}
                    type="file"
                    // value={product.name}
                    autoFocus
                  />
                  <br />
                  <label htmlFor="hh">Ảnh sản phẩm</label>
                  {/* <img id="hh" src={urlImage} alt="" /> */}
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Giá</Form.Label>
                  <Form.Control
                    name="price"
                    onChange={changeValue}
                    value={product.price}
                    placeholder="VNĐ"
                    autoFocus
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Mô tả sản phẩm</Form.Label>
                  <Form.Control
                    name="description"
                    onChange={changeValue}
                    value={product.description}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                style={{ backgroundColor: "rgb(227,24,55)", border: "none" }}
                onClick={handleClose}
              >
                Đóng
              </Button>
              <Button
                variant="success"
                style={{ backgroundColor: "blue", border: "none" }}
                onClick={() => handleAdd()}
              >
                {/* {check ? "Sửa" : "Thêm"} */}
                Thêm
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div id="managerProduct__renderProduct" style={{ height: "800px" }}>
          <Table striped="columns">
            <thead style={{ textAlign: "center" }}>
              <tr>
                <th style={{ width: "30px" }}>STT</th>
                <th style={{ width: "120px" }}>Tên sản phẩm</th>
                <th style={{ width: "120px" }}>Số lượng</th>
                <th style={{ width: "130px" }}>Ảnh</th>
                <th style={{ width: "100px" }}>Giá</th>
                <th style={{ width: "180px" }}>Mô tả</th>
                <th style={{ width: "100px" }}></th>
              </tr>
            </thead>
            <tbody>
              {allProducts
                // .filter((item) =>
                //   item.name_product.toLowerCase().includes(searchProduct)
                // )
                .map((item, index) => {
                  return (
                    <tr key={index}>
                      <td style={{ textAlign: "center", fontWeight: "700" }}>
                        <div style={{ marginTop: "30px" }}>
                          <span>{index + 1}</span>
                        </div>
                      </td>
                      <td
                        style={{
                          textAlign: "center",
                          fontWeight: "700",
                          textTransform: "uppercase",
                        }}
                      >
                        <div style={{ marginTop: "30px" }}>
                          <span>{item.nameProduct}</span>
                        </div>
                      </td>
                      <td style={{ textAlign: "center", fontWeight: "700" }}>
                        <div style={{ marginTop: "30px" }}>
                          <span>{item.stock}</span>
                        </div>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <div style={{ width: "100px", height: "70px" }}>
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              marginLeft: "24px",
                            }}
                            src={item.image}
                            alt=""
                          />
                        </div>
                      </td>

                      <td style={{ textAlign: "center", fontWeight: "700" }}>
                        <div style={{ marginTop: "30px" }}>
                          <span>{item.price}</span>
                        </div>
                      </td>
                      <td>
                        <div
                          style={{
                            marginTop: "30px",
                            textTransform: "uppercase",
                          }}
                        >
                          <span>{item.description}</span>
                        </div>
                      </td>
                      {/* <td style={{ textAlign: "center", fontWeight: "700" }}>
                        <div style={{ marginTop: "30px" }}>
                          <Button variant="success" onClick={() => A(item)}>
                            Sửa
                          </Button>{" "}
                          <Button
                            variant="danger"
                            onClick={(id) => handleDelete(item.id)}
                          >
                            Xóa
                          </Button>{" "}
                        </div>
                      </td> */}
                    </tr>
                  );
                })}
            </tbody>
          </Table>
          {/* bắt buộc có */}
          <Pagination
            // current={currentPage}
            // onChange={onPageChange}
            // pageSize={itemsPerPage}
            // total={renderArray.length}
            style={{ marginLeft: "450px" }}
          />
        </div>
      </div>
    </>
  );
}
