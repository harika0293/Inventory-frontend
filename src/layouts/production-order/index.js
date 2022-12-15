import Grid from "@mui/material/Grid";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { Link } from "react-router-dom";
import SoftButton from "components/SoftButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import SoftInput from "components/SoftInput";
import "../modal.css";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { DataGrid, GridRowsProp } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";

function ProductionOrderList() {
  const text = {
    color: "#0B2F8A",
    fontSize: "15px",
    fontWeight: "500",
    marginRight: "10px",
  };

  const [list, setList] = useState([]);

  const [fromDateOne, setFromDateOne] = useState("");
  const [toDateTwo, setToDateTwo] = useState("");
  const [status, setStatus] = useState("");

  const [warehouse, setWarehouse] = useState("");
  const [series, setSeries] = useState("");
  const [docNum, setDocNum] = useState("");

  const columns = [
    { field: "id", headerName: "UID", width: 100 },
    { field: "docNum", headerName: "PRD ORDER NO", width: 130 },
    { field: "postDate", headerName: "ORDER DATE", width: 120 },
    { field: "warehouse", headerName: "WAREHOUSE", width: 120 },
    {
      field: "itemCode",
      headerName: "PRODUCTION ITEM CODE",
      width: 210,
    },
    {
      field: "itemName",
      headerName: "PRODUCTION ITEM NAME",
      width: 300,
    },
    {
      field: "plannedQty",
      headerName: "PLANNED QUANTITY",
      width: 200,
    },
    {
      field: "objectType",
      headerName: "OBJECT TYPE",
      hideable: false,
      width: 150,
    },
  ];
  const initialList = [
    {
      id: 1,

      docEntry: 0,
      docNum: 0,
      postDate: "",
      warehouse: "",
      itemCode: "",
      itemName: "Please Enter Document Date",
      plannedQty: "",
      objectType: "",
    },
    {
      id: 2,

      docEntry: 0,
      docNum: 0,
      postDate: "",
      warehouse: "",
      itemCode: "",
      itemName: "",
      plannedQty: "",
      objectType: "",
    },
    {
      id: 3,

      docEntry: 0,
      docNum: 0,
      postDate: "",
      warehouse: "",
      itemCode: "",
      itemName: "",
      plannedQty: "",
      objectType: "",
    },
    {
      id: 4,

      docEntry: 0,
      docNum: 0,
      postDate: "",
      warehouse: "",
      itemCode: "",
      itemName: "",
      plannedQty: "",
      objectType: "",
    },
  ];

  const applyProdFilter = (e) => {
    console.log("from date", fromDateOne);
    console.log("to date", toDateTwo);
    console.log("status", status);
    console.log("warehouse", warehouse);
    console.log("series", series);
    console.log("docNum", docNum);

    e.preventDefault();

    const postData = {
      fromDateOne,
      toDateTwo,
      status,
      warehouse,
      series,
      docNum,
    };

    axios
      .post("http://localhost:9003/ProductionOrderAPI", postData)
      .then(function (response) {
        const newData = response.data.body;

        console.log("response.data : ", response.data);
        console.log("Initial List : ", initialList);
        console.log("response.data.body : ", response.data.body);

        console.log("response.data.body[0] : ", response.data.body[0]);

        const newList = newData;
        setList(newList);
        console.log("setlist", newList);

        //console.log("first API list destructure array", data.body[0]); //showing the data
        // console.log("docEntry", data[0].warehouse); //showing the data
        // console.log("docEntry", data[1].docEntry); //showing the data
        // console.log("docEntry", data[2].docEntry); //showing the data
        // console.log("docEntry", data[3].docEntry); //showing the data

        //const arrayItem = [newdata[0]];

        // console.log("Square Bracket", [arrayItem]);

        // console.log("Curly Bracket", { arrayItem });
        // console.log("Curly, Square Brackets", [{ arrayItem }]);
        // console.log("initialList", initialList);
        // console.log("dataAPIList", data);

        //setList(newList);
      })
      .catch(function (error) {
        console.log("Inside Catch Block", error);
      });
  };
  // useLayoutEffect(() => {
  //   applyProdFilter();
  // }, []);

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3} mb={15} textAlign="center">
        <SoftTypography
          mb={6}
          style={{ color: "#0B2F8A", fontWeight: "700", fontSize: "30px", lineHeight: "30px" }}
        >
          Production Order List
        </SoftTypography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} xl={4}>
            <SoftBox display="flex">
              <SoftTypography style={text} mt={1}>
                From Document Date
              </SoftTypography>
              <SoftInput
                type="date"
                value={fromDateOne}
                onChange={(e) => setFromDateOne(e.target.value)}
                placeholder="Enter From Order Date..."
                icon={{
                  component: "search",
                  direction: "left",
                }}
              />
            </SoftBox>
          </Grid>
          <Grid item xs={12} sm={6} xl={4}>
            <SoftBox display="flex">
              <SoftTypography style={text} mt={1}>
                To Document Date
              </SoftTypography>
              <SoftBox ml={2}>
                <SoftInput
                  type="date"
                  value={toDateTwo}
                  onChange={(e) => setToDateTwo(e.target.value)}
                  placeholder="Enter To Order Date..."
                  icon={{
                    component: "search",
                    direction: "left",
                  }}
                />
              </SoftBox>
            </SoftBox>
          </Grid>
          <Grid item xs={12} sm={6} xl={4}>
            <SoftBox display="flex">
              <SoftTypography style={text} mt={1}>
                Document Number
              </SoftTypography>
              <SoftBox ml={2}>
                <SoftInput
                  type="number"
                  placeholder="Document Number..."
                  value={docNum}
                  onChange={(e) => setDocNum(e.target.value)}
                  icon={{
                    component: "search",
                    direction: "left",
                  }}
                />
              </SoftBox>
            </SoftBox>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12} sm={6} xl={4}>
            <SoftBox display="flex">
              <SoftTypography style={text} mt={1}>
                Order Status
              </SoftTypography>
              <SoftBox ml={7}>
                <select
                  id="dropdown"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  style={{
                    width: "190px",
                    height: "37px",
                    borderRadius: "8px",
                    padding: "0.25em 0.5em",
                  }}
                >
                  <option value="" disabled selected hidden>
                    Enter Order Status...
                  </option>
                  <option value="string">Planned</option>
                  <option value="string">Receipt</option>
                </select>
              </SoftBox>
            </SoftBox>
          </Grid>
          <Grid item xs={12} sm={6} xl={4}>
            <SoftBox display="flex">
              <SoftTypography style={text} mt={1}>
                Warehouse
              </SoftTypography>
              <SoftBox ml={8}>
                <SoftInput
                  placeholder="Enter Warehouse..."
                  value={warehouse}
                  onChange={(e) => setWarehouse(e.target.value)}
                  icon={{
                    component: "search",
                    direction: "left",
                  }}
                />
              </SoftBox>
            </SoftBox>
          </Grid>
          <Grid item xs={12} sm={6} xl={4}>
            <SoftBox display="flex">
              <SoftTypography style={text} mt={1}>
                Series
              </SoftTypography>
              <SoftBox ml={13}>
                <SoftInput
                  placeholder="Enter Series..."
                  value={series}
                  onChange={(e) => setSeries(e.target.value)}
                  icon={{
                    component: "search",
                    direction: "left",
                  }}
                />
              </SoftBox>
            </SoftBox>
          </Grid>
        </Grid>
        <SoftBox mt={6}>
          <SoftButton
            onClick={applyProdFilter}
            variant="contained"
            color="info"
            style={{
              backgroundColor: "#0B2F8A",
              boxShadow: " 0px 8px 24px -2px rgba(11, 47, 138, 0.6)",
            }}
          >
            Apply Filter
          </SoftButton>
        </SoftBox>
        <SoftBox mt={6}>
          <SoftTypography
            style={{ color: "#0B2F8A", fontWeight: "700", fontSize: "20px", lineHeight: "30px" }}
          >
            Your Production Order List
          </SoftTypography>
        </SoftBox>
        <SoftBox ml={5} mt={5} style={{ marginRight: "50px", height: "400px" }}>
          <DataGrid
            //{...list}
            columns={columns}
            //loading={!list.length}
            checkboxSelection
            rows={list} // shows Correct Output
            //rows={initialList}// shows initial List
            //rows={{ ...list }} // it is loading
            //rows={{ ...list }} //output- norows
            getRowId={(row) => row.id} //mandatory
            //rowReordering
            pageSize={5}
            rowsPerPageOptions={[5]}
            sx={{ color: "darkblue" }}
            // components={{
            //   LoadingOverlay: applyProdFilter,
            // }}
            // getRowId={applyProdFilter()}
          />
        </SoftBox>
        <SoftBox style={{ display: "flex" }} mt={4}>
          <SoftBox>
            <SoftButton
              // onClick={toggleModal}
              variant="contained"
              color="info"
              style={{
                backgroundColor: "#0B2F8A",
                boxShadow: " 0px 8px 24px -2px rgba(11, 47, 138, 0.6)",
                marginLeft: "100px",
              }}
            >
              Add ITR
            </SoftButton>
            <SoftButton
              component={Link}
              to="/dashboard"
              variant="contained"
              color="info"
              style={{
                backgroundColor: "#0B2F8A",
                boxShadow: " 0px 8px 24px -2px rgba(11, 47, 138, 0.6)",
                marginLeft: "30px",
              }}
            >
              Cancel ITR
            </SoftButton>
          </SoftBox>
        </SoftBox>

        <SoftBox style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
          {modal && (
            <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>
              <div className="modal-content">
                <h4 style={{ color: "#0B2F8A", marginTop: "20px" }}>
                  Please Fill all the Required Fields
                </h4>
                <button
                  className="close-modal"
                  onClick={toggleModal}
                  style={{
                    backgroundColor: "#0B2F8A",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    marginTop: "50px",
                    marginBottom: "20px",
                    boxShadow: " 0px 8px 24px -2px rgba(11, 47, 138, 0.6)",
                  }}
                >
                  OK
                </button>
              </div>
            </div>
          )}
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default ProductionOrderList;
