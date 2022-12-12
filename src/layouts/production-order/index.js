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
import axios from "axios";

// const rows = [
//   {
//     id: 1,
//     status: "Success",
//     docEntry: 1,
//     docNum: 1,
//     postDate: "2022-08-19T00:00:00",
//     warehouse: "GEN01",
//     itemCode: "S1015_300851300_M9502",
//     itemName: "ROLLER TBLE SUPPORT",
//     plannedQty: "9262.700000",
//     objectType: "202",
//   },
//   {
//     id: 2,
//     status: "Success",
//     docEntry: 2,
//     docNum: 2,
//     postDate: "2022-09-16T00:00:00",
//     warehouse: "GEN01",
//     itemCode: "CS00018",
//     itemName: "Cadmium Bolt Nut with Double Washer 12 X 50 mm",
//     plannedQty: "1.000000",
//     objectType: "202",
//   },
//   {
//     id: 3,
//     status: "Success",
//     docEntry: 3,
//     docNum: 3,
//     postDate: "2022-09-16T00:00:00",
//     warehouse: "GEN01",
//     itemCode: "CS00018",
//     itemName: "Cadmium Bolt Nut with Double Washer 12 X 50 mm",
//     plannedQty: "1.000000",
//     objectType: "202",
//   },
//   {
//     id: 4,
//     status: "Success",
//     docEntry: 4,
//     docNum: 4,
//     postDate: "2022-09-16T00:00:00",
//     warehouse: "GEN01",
//     itemCode: "CS00018",
//     itemName: "Cadmium Bolt Nut with Double Washer 12 X 50 mm",
//     plannedQty: "1.000000",
//     objectType: "202",
//   },
// ];

// const getFilter1 = () => {
//   var date = moment(new Date()).format('DD/MM/YYYY');
//   setList(initialList);

//   axios
//     .post('https://us-central1-docker-347218.cloudfunctions.net/Data-API', {
//       date: date,
//       email: 'dereckjos12@gmail.com',
//       password: 'Vigilance@001',
//     })
//     .then(function (response) {
//       const data = response.data;
//       const newList = list.map(item => {
//         if (data[item.index]) {
//           const updatedItem = {
//             ...item,
//             steps: data[item.index],
//           };
//           return updatedItem;
//         }
//         return item;
//       });
//       setList(newList);
//       setLoading(false);
//     })
//     .catch(function (error) {
//       //console.log(error);
//     });
// };

// useLayoutEffect(() => {
//   getFilter1();
// }, []);

function ProductionOrderList() {
  const text = {
    color: "#0B2F8A",
    fontSize: "15px",
    fontWeight: "500",
    marginRight: "10px",
  };

  const columns = [
    { field: "id", headerName: "User ID", width: 90 },

    { field: "docNum", headerName: "ORDER NO", width: 100 },
    {
      //id: "ID",
      field: "itemName",
      headerName: "PRODUCTION ITEM NAME",
      width: 300,
    },
    { field: "postDate", headerName: "ORDER DATE", width: 120 },
    { field: "warehouse", headerName: "WAREHOUSE", width: 120 },

    {
      //id: "ID",
      field: "itemCode",
      headerName: "PRODUCTION ITEM CODE",
      width: 200,
    },
    {
      //id: "ID",
      field: "plannedQty",
      headerName: "PLANNED QUANTITY",

      width: 200,
    },
    {
      //id: "ID",
      field: "docEntry",
      headerName: "DOCUMENT ENTRY",

      width: 160,
    },
    {
      //id: "ID",
      field: "objectType",
      headerName: "OBJECT TYPE",

      width: 150,
    },
  ];
  const rows = [
    {
      id: 1,
      status: "Success",
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
      status: "",
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
      status: "",
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
      status: "",
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

  // const applyProdFilter = () => {
  //   setList(initialList);

  //   axios
  //     .get("http://localhost:8003/ProductionOrderAPI")
  //     .then(function (response) {
  //       const data = response.data;
  //       const newList = list.map(item => {
  //         if (data[item.index]) {
  //           const updatedItem = {
  //             ...item,
  //             steps: data[item.index],
  //           };
  //           return updatedItem;
  //         }
  //         return item;
  //       });
  //       setList(newList);
  //       setLoading(false);
  //     })
  //     .catch(function (error) {
  //       //console.log(error);
  // setLoading(false);
  // setList(initialList);
  //     });
  // };

  // useLayoutEffect(() => {
  //   applyProdFilter();
  // }, []);

  // useEffect(() => {
  //   axios.get("http://localhost:8003/ProductionOrderAPI").then((res) => setMyData(res.data));
  // }, []);

  const [list, setList] = useState([]);
  const [myData, setMyData] = useState(0);

  const applyProdFilter = () => {
    //setList(rows);

    // fetch("http://localhost:8003/ProductionOrderAPI")
    //   .then((response) => response.json())
    //   .then((json) => setList(json));
    axios
      .get("http://localhost:8003/ProductionOrderAPI")
      .then(function (response) {
        const data = response.data;
        //const newList = data;
        const newList = list.map((row) => {
          if (data[id] === 0) {
            console.log(data[id]);
            setList(rows);
            return row;
          } else {
            const data = response.data;
            const newList = list.map((row) => {
              if (data[id] === 0) {
                console.log(data[id]);
                const updatedId = {
                  ...data,
                  row: data[id],
                };
                return updatedId;
              }

              return id;
            });
            setList(newList);
            //console.log(newList);
            //console.log(initialList);
          }
        });
      })
      .catch(function (error) {
        setList(initialList);
        console.log(error);
        console.log(initialList);
      });
  };

  useLayoutEffect(() => {
    applyProdFilter();
  }, []);

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
                  <option value="1">Planned</option>
                  <option value="2">Receipt</option>
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
            {...list}
            loading={!list.length}
            checkboxSelection
            rows={list}
            //rows={{ ...list }} //output- norows
            getRowId={(row) => row.id} //mandatory
            columns={columns}
            //rowReordering
            pageSize={5}
            rowsPerPageOptions={[5]}
            sx={{ color: "darkblue" }}
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
