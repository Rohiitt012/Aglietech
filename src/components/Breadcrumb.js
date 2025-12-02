import Link from "next/link";
import React from "react";

const Breadcrumb = ({ title, backgroundImage }) => {
  const defaultBg = './assets/img/bg/breadcrumb-bg.avif';
  const bgImage = backgroundImage || defaultBg;
  
  return (
    <>
      {/* ================ Breadcrumb Start ================*/}
      <div
        className='breadcrumb-area bg-cover'
        style={{ backgroundImage: `url("${bgImage}")`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%', height: 'auto', minHeight: '500px', marginBottom: '0', paddingBottom: '0', marginTop: '0', paddingTop: '0' }}
      >
      </div>
      {/* ================ Breadcrumb End ================*/}
    </>
  );
};

export default Breadcrumb;
