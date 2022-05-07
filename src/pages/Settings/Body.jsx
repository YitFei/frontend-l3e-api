import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Profileboard from "./components/Profileboard/Profileboard";
import ExtendedInfo from "./components/ExtendedInfo/ExtendedInfo";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { PostAPI } from "../../globalFunctions/APIHelper";

const Image = "https://i.pravatar.cc/300";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  borderRadius: 12,
  color: theme.palette.text.secondary,
}));

export default function Body(props) {
  const { userDetail } = props;
  const [showAlert, setShowAlert] = React.useState(false);

  const [successAlert, setSuccessAlert] = React.useState(false);
  const userGroup = sessionStorage.getItem("userGroup");
  // console.log(group);
  let URL_PostUserInfo =
    userGroup === "student"
      ? "https://api.l3education.com.my/student/create"
      : "https://api.l3education.com.my/teacher/create";
  // console.log(userDetail);
  React.useEffect(() => {
    setTimeout(() => {
      if (showAlert) {
        setShowAlert(false);
      }
    }, 1500);
  }, [showAlert]);

  const handleUpdate = () => {
    var data =
      userGroup === "student"
        ? {
            active: "Y",
            classInSchool: userDetail["classInSchool"],
            cognitoId: "string",
            dob: userDetail["dob"],
            email: userDetail["email"],
            hpNo: userDetail["hpNo"],
            id: "string",
            name: userDetail["name"],
            parentHpNo: userDetail["parentHpNo"],
            parentName: userDetail["parentName"],
            school: userDetail["school"],
          }
        : {
            active: "Y",
            age: userDetail["age"],
            cognitoId: userDetail["cognitoId"],
            description: userDetail["description"],
            dob: userDetail["dob"],
            email: userDetail["email"],
            name: userDetail["name"],
          };

    PostAPI(URL_PostUserInfo, data, true).then((res) => {
      setSuccessAlert(res.status === 200);

      setShowAlert(true);
    });
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      {showAlert && (
        <Alert
          onClose={() => {
            setShowAlert(false);
          }}
          severity={successAlert ? "success" : "error"}
        >
          {successAlert}
          <AlertTitle>{successAlert ? "Success" : "Error"}</AlertTitle>
          <strong>{`资料上传${successAlert ? "成功" : "失败"}`}</strong>
        </Alert>
      )}

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <Item>
            <Profileboard
              image={null}
              userDetail={userDetail}
              setUserDetail={props.setUserDetail}
            />
          </Item>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Item>
            <ExtendedInfo
              userDetail={userDetail}
              setUserDetail={props.setUserDetail}
            />
          </Item>
        </Grid>
        <Grid item xs={10} sx={{ border: 0 }}></Grid>
        <Grid
          item
          xs={2}
          sx={{ border: 0, marginBottom: "1.5%" }}
          justifyContent="flex-end"
        >
          <Box textAlign="center">
            <Button variant="outlined" onClick={handleUpdate}>
              Update
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
