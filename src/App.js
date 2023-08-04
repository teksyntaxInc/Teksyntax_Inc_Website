import React from 'react';
//import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Component/Homepage/HomePageRender/Homepage';
import JobApplicationForm from '../src/Component/JobApplication/JobApplicationForm';
import FindCourses from '../src/Component/FindCourses/courses';
import JavaCourse from './Component/ALLCoueses/java/JavaCourse';
import ReactCourse from './Component/ALLCoueses/react/ReactCourse';
import BusinessAnalystCourse from './Component/ALLCoueses/BA/BusinessAnalystCourse';
import DataAnalystCourse from './Component/ALLCoueses/DataAnalyst/DataAnalystCourse';
import DataETLCourse from './Component/ALLCoueses/ETL/DataETLCourse';
import DevOPSCourse from './Component/ALLCoueses/Devops/DevOpsCourse';
import ProjectManagementCourse from './Component/ALLCoueses/PM/ProjectManagerCourse';
import QualityAssuranceAutomationCourse from './Component/ALLCoueses/QA/QualityAssuranceAutomationCourse';
import UIUXCourse from './Component/ALLCoueses/UIUX/UIUXCourse';
import AboutUs from './Component/About/AboutUs';
import EmployeeLogin from './Component/LoginPage/employeeLogin';
import StudentLogin from './Component/LoginPage/StudentLogin';
import StudentRegistration from './Component/LoginPage/StudentRegistration';
import Team from './Component/About/Team';
import FAQ from './Component/About/Questions';
import Enrollment from './Component/EnrollmentForm/EnrolmentCard';
import Dashboard from './Component/EmployeeDashboard/Dashboard';


// const ws = new window.WebSocket('ws://teksyntax-env.eba-avpbvgps.us-east-1.elasticbeanstalk.com:80/ws');

 function App() {
//   useEffect(() => {
//     ws.onopen = () => {
//       console.log('WebSocket connection established.');
//     };

//     ws.onmessage = (event) => {
//       console.log('Message received:', event.data);
//     };

//     ws.onerror = (error) => {
//       console.error('WebSocket error:', error);
//     };

//     ws.onclose = (event) => {
//       console.log('WebSocket connection closed:', event.code, event.reason);
//     };
//   }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/job-application-form" element={<JobApplicationForm />} />
          <Route path="/find-courses" element={<FindCourses />} />
          <Route path="/course/java/:id" element={<JavaCourse />} />
          <Route path="/course/react/:id" element={<ReactCourse />} />
          <Route path="/course/BusinessAnalyst/:id" element={<BusinessAnalystCourse/>} />
          <Route path="/course/DataAnalyst/:id" element={<DataAnalystCourse />} />
          <Route path="/course/DataETL/:id" element={<DataETLCourse />} />
          <Route path="/course/DevOPS/:id" element={<DevOPSCourse />} />
          <Route path="/course/ProjectManagement/:id" element={<ProjectManagementCourse/>} />
          <Route path="/course/QA/:id" element={<QualityAssuranceAutomationCourse />} />
          <Route path="/course/UIUX/:id" element={<UIUXCourse/>} />
          <Route path='/About/AboutUs' element={<AboutUs/>}/>
          <Route path='/login/EmployeeLogin' element={<EmployeeLogin/>}/>
          <Route path='/login/StudentLogin' element={<StudentLogin/>}/>
          <Route path='/login/StudentLogin/StudentRegister' element={<StudentRegistration/>}/>
          <Route path='/About/Team' element={<Team/>}/>
          <Route path='/FAQ' element={<FAQ/>}/>
          <Route path='/Enroll/Application' element={<Enrollment/>}/>
          <Route path='/login/EmployeeLogin/dashboard' element={<Dashboard/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
