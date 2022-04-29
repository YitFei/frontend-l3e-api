import * as React from "react";
import Box from "@mui/material/Box";
import PromotionSettingBoard from "./components/PromotionSettingBoard";
import PromotionHistoryBoard from "./components/PromotionHistoryBoard";
import Grid from "@mui/material/Grid";

const allCourses = [
  { id: 0, name: "数学" },
  { id: 1, name: "英文" },
  { id: 2, name: "物理" },
  { id: 3, name: "国文" },
  { id: 4, name: "音乐" },
  { id: 5, name: "C++" },
];

function createData(promoCode, expiredDate, discountAmt, status, action) {
  return { promoCode, expiredDate, discountAmt, status, action };
}

const rows = [
  createData("g0", "Mar 1738~ Mar 2077", "50", "優惠中", "立即停止"),
  createData("A380", "侏羅紀 ~ Mar 1666", "50", "過期", "過期"),
];

export default function PromotionSetting() {
  return (
    <Box>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "15px",
          border: "13px solid #5465f7",
          color: "158, 110, 255",
          borderRadius: 10,
        }}
      >
        {" "}
        優惠設置{" "}
      </h1>
      <Grid container columns={{ xs: 12 }}>
        <Grid
          item
          xs={12}
          sx={{
            marginLeft: "10%",
            marginRight: "10%",
            marginBottom: "2%",
            border: 1,
            boxShadow: 7,
          }}
        >
          <PromotionSettingBoard allCourses={allCourses} />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            marginLeft: "10%",
            marginRight: "10%",
            border: 1,
            boxShadow: 7,
          }}
        >
          <PromotionHistoryBoard rows={rows} />
        </Grid>
      </Grid>
    </Box>
  );
}
