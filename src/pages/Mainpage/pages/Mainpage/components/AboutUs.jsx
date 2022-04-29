import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
// image slider here
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import s1 from "../assets/001.jpg";
import s2 from "../assets/002.jpg";
import s3 from "../assets/003.jpg";
import s4 from "../assets/004.jpg";
import s5 from "../assets/005.jpg";
import s6 from "../assets/006.jpg";

import b1 from "../assets/b001.webp";
import b2 from "../assets/b002.webp";
import b3 from "../assets/b003.webp";
import b4 from "../assets/b004.webp";

import c1 from "../assets/c001.webp";
import c2 from "../assets/c002.webp";
import c3 from "../assets/c003.webp";
import c4 from "../assets/c004.webp";
import c5 from "../assets/c005.webp";
import c6 from "../assets/c006.webp";
import c7 from "../assets/c007.webp";
import c8 from "../assets/c008.webp";
import c9 from "../assets/c009.webp";

const list = [
  {
    image: b1,
    title: "教学经验丰富和优质师资",
    description:
      "我们拥有来自全马各大名校的学霸，并拥有优等成绩&丰富教学经验。保证专业的辅导到水平"
  },
  {
    image: b2,
    title: "为独中生备战统考",
    description:
      "为初一至高三的独中生们备战统考提前做好准备。我们也给予全科评估认知能力测试。",
    linkName: "马上报名"
  },
  {
    image: b3,
    title: "紧密配合学校考试范围",
    description:
      "我们的授课内容是完全按照董总最新的教学课纲。为独中生学习得到保障。",
    linkName: "了解更多"
  },
  {
    image: b4,
    title: "一对一 / 小组课补习",
    description: "超过十多科科目供选择，并提供最新的笔记&历年考题训练"
  }
];
const ImageSlide = [
  { image: s1 },
  { image: s2 },
  { image: s3 },
  { image: s4 },
  { image: s5 },
  { image: s6 }
];
const ImageSlidebtm = [
  { image: c1 },
  { image: c2 },
  { image: c3 },
  { image: c4 },
  { image: c5 },
  { image: c6 },
  { image: c7 },
  { image: c8 },
  { image: c9 }
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

export default function AboutUs() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={1}>
        <Item elevation={0}>
          <h1>了解我们</h1>
        </Item>
        <Item elevation={0}>
          <span>
            L3 Education (LifeLong Learning) 是专为独中生量身打造的教育平台。
            宗旨为提供优良的线上教育课程让独中生们能学习全方位的知识，并提升独中们的学习能力。
          </span>
        </Item>
        <Item elevation={0}>
          <h1>平台特点</h1>
        </Item>
        <Item elevation={0}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            divider={<Divider orientation="vertical" flexItem />}
          >
            {list.map((item, index) => (
              <Item>
                <div
                  key={index}
                  style={{
                    backgroundImage: `url('${item.image}') no-repeat center center `,
                    backgroundSize: "cover",
                    opacity: "1"
                  }}
                >
                  <div
                    style={{
                      background: `url('${item.image}') no-repeat center center `,
                      backgroundSize: "cover",
                      opacity: "0.85",
                      height: "10em"
                    }}
                  ></div>
                  <div>
                    <h3>{item.title}</h3>
                    <br />
                    <span>{item.description}</span>
                    <br />
                    {item.linkName && <Button>{item.linkName}</Button>}
                  </div>
                </div>
              </Item>
            ))}
          </Stack>
        </Item>
        <Item elevation={0}>
          <h1>线上课程</h1>
        </Item>
        <Item elevation={0}>
          <Slider autoplay={1500}>
            {ImageSlide.map((item, index) => (
              <div
                key={index}
                style={{
                  background: `url('${item.image}') no-repeat center center`
                }}
              >
                <div className="center">
                  {/* <button>{item.button}</button> */}
                </div>
              </div>
            ))}
          </Slider>
        </Item>
        <Item>
          <h1>来自家长&学生们的好评</h1>
          <br />
          <Slider>
            {ImageSlidebtm.map((item, index) => (
              <div
                key={index}
                style={{
                  background: `url('${item.image}') no-repeat center center`
                }}
              >
                {/* <div className="center">
                  <button>{item.button}</button>
                </div> */}
              </div>
            ))}
          </Slider>
        </Item>
      </Stack>
    </Box>
  );
}
