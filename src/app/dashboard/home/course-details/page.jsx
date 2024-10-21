'use client';

import React, { Suspense } from "react";
import CourseDetailPage from "./components/CourseDetailPage";
import Loading from "../../(dashboardcomponents)/loading";

const CourseDetailPageWrapper = () => {
  return (
    <Suspense fallback={<Loading />}>
      <CourseDetailPage />
    </Suspense>
  );
};

export default CourseDetailPageWrapper;

