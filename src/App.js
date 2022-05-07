// UserNavbar
import Classroom from "./pages/Classroom/Body";
import Settings from "./pages/Settings/Body";
import Subscriptions from "./pages/Subscriptions/Body";
import Home from "./pages/Home/Body";
//MainNavbar
import Mainpage from "./pages/Mainpage/pages/Mainpage/Body";
import AboutUs from "./pages/Mainpage/pages/About_Us/Body";
import ContactUs from "./pages/Mainpage/pages/Contact_Us/Body";
import Login from "./pages/Mainpage/pages/Login/Body";
import OurCourses from "./pages/Mainpage/pages/Our_Courses/Body";

import CourseInfo from "./pages/CourseInfo/Body";
//AdminNavBar
import UserInfo from "./pages/Admin/UserInformation/Body";
import CreateClassroom from "./pages/Admin/CreateClassroom/Body";
import EditClassroom from "./pages/Admin/EditClassroom/Body";
import AnnouncementSetting from "./pages/Admin/AnnouncementSetting/Body";
import PromotionSetting from "./pages/Admin/PromotionSetting/Body";
import Report from "./pages/Admin/Report/Body";
//default
import logo from "./assets/logo.png";
import "./styles.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import HideAppBar from "./components/AppBar/HideAppBar";
import Navbar from "./components/Mainpage_Appbar/Navbar";
import { Routes, Route } from "react-router-dom";
import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { ConsoleLogger } from "@aws-amplify/core";
import  { Auth } from 'aws-amplify';
import {PostAPI, GetAPI} from './globalFunctions/APIHelper';
import UserContext from "./context/user";


const userGroup =
  {
    super_admin:"super_admin",
    teacher:"teacher",
    student:"student"
   
  }  

  


const adminPages = [
  {
    name: "用戶資料/激活狀態",
    link: "UserInfo"
  },
  {
    name: "教室",
    link: "CreateClassroom"
  }
  ,
  {
    name: "設置通知管理",
    link: "AnnouncementSetting"
  }
  ,
  {
    name: "優惠設置",
    link: "PromotionSetting"
  }
  ,
  {
    name: "報告",
    link: "Report"
  }
];

const studentPages = [
  {
    name: "首頁",
    link: "Home"
  },

  {
    name: "教室",
    link: "Classroom"
  },
  {
    name: "设定",
    link: "Settings"
  },
  {
    name: "购买课程",
    link: "Subscriptions"
  }
];

const teacherPages = [
  {
    name: "首頁",
    link: "Home"
  },

  {
    name: "教室",
    link: "Classroom"
  },
  {
    name: "设定",
    link: "Settings"
  }
];
const mainpages = [
  {
    name: "首頁",
    link: "index.php"
  },

  {
    name: "关于我们",
    link: "About_Us"
  },
  {
    name: "课程",
    link: "Our_Courses"
  },
  {
    name: "联系我们",
    link: "Contact_Us"
  },
  {
    name: "登入",
    link: "Login"
  }
];


export default function App(props) {
   const [login, setLogin] = useState(false);  
   const [pages,setPages]= useState([]);
   const [userDetail, setUserDetail] = useState();
   


   let URL_PostStudentInfo = "https://api.l3education.com.my/student/create";
   let URL_PostTeacherInfo = "https://api.l3education.com.my/teacher/create";
   let URL_GetStudentDetail = "https://api.l3education.com.my/student/get";
 let URL_GetTeacherDetail ="https://api.l3education.com.my/teacher/get/";
  React.useEffect(()=>
  {
  
    Auth.currentSession().then(res=>{

 
      let accessToken = res.getAccessToken()
      let jwt = accessToken.getJwtToken()
      let this_userGroup = res.getAccessToken().payload['cognito:groups']
      let userId = res.getAccessToken().payload['username']
      sessionStorage.setItem('token', jwt);
      sessionStorage.setItem('userGroup', this_userGroup[0]);
      sessionStorage.setItem('userID',userId );
    
      //You can print them to see the full objects
      // console.log(res.getAccessToken().payload['cognito:groups'])
      // console.log(`myAccessToken: ${JSON.stringify(accessToken)}`)
      // console.log(`myJwt: ${jwt}`)
      
      if(this_userGroup[0] === userGroup.student)
      {
        Auth.currentAuthenticatedUser().then((AUser)=>{
          var data = {
            "active": "Y",
            "classInSchool": "",
            "cognitoId": "string",
            "dob": "1999-01-01",
            "email":AUser.attributes.email,
            "hpNo": AUser.attributes.phone_number,
            "id": "string",
            "name": AUser.attributes.given_name +" "+ AUser.attributes.family_name,
            "parentHpNo": "",
            "parentName": "",
            "school": "FYHS"
          };   
          PostAPI(URL_PostStudentInfo, data, false)
    
      })
    }
    else if (this_userGroup[0] === userGroup.teacher)
    //super admin can post teacher only
    {
      Auth.currentAuthenticatedUser().then((AUser)=>{

        var data = {
          "active": "Y",
          "age": 90,
          "cognitoId": AUser.attributes.sub,
          "description": "Test Teacher 122",
          "dob": "1999-12-12",
          "email": AUser.attributes.email,
          "name": AUser.attributes.given_name +" "+ AUser.attributes.family_name
        };
        PostAPI(URL_PostTeacherInfo, data, false)
      })
  
    }
     
 

      switch(this_userGroup[0]) {
        case userGroup.super_admin:
          setPages(adminPages)
          break;
          case userGroup.teacher:       
            setPages(teacherPages)
            break;
          case userGroup.student:
            setPages(studentPages)
            break;
        default:
          setPages([])
          break;
      }

      GetAPI(this_userGroup[0] === userGroup.student ? URL_GetStudentDetail : URL_GetTeacherDetail+userId, false).then((detail) => {       
        setUserDetail(detail.data)
      });

    })
  },[login])

  return (
    <>
      <CssBaseline />
   
  

      <nav>
      <HideAppBar somProp={pages} logo={logo} logoTitle="L3Education" />
        <Navbar pages={mainpages} /> 
      </nav>
      <Routes>
     

        <Route path="Home" element={<Home userDetail={userDetail} setUserDetail={setUserDetail}/>} />
        <Route path="Classroom" element={<Classroom userDetail={userDetail} />} />
        <Route path="Settings" element={<Settings userDetail={userDetail} setUserDetail={setUserDetail}/>} />
        <Route path="Subscriptions" element={<Subscriptions />} />
        {/* {console.log('token: ',login)} */}
        <Route path="*" index element={<Mainpage />} />
        <Route path="About_Us" element={<AboutUs />} />
        <Route path="Contact_Us" element={<ContactUs />} />
        <Route path="Our_Courses" element={<OurCourses />} />
        <Route path="Login" element={<Login setLogin={setLogin} />} />
        <Route path="UserInfo" element={<UserInfo />} />
        <Route path="CreateClassroom" element={<CreateClassroom  />} />
        <Route path="EditClassroom" element={<EditClassroom />} />
        <Route path="AnnouncementSetting" element={<AnnouncementSetting />} />
        <Route path="PromotionSetting" element={<PromotionSetting />} />
        <Route path="Report" element={<Report />} />
        <Route path="CourseInfo" element={<CourseInfo />} />
    
      </Routes>
  
    
    </>
  );
}
// https://lifelongeducation3.wixsite.com/mysite
