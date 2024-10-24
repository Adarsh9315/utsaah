import React from "react";
import bradcam from "../../../img/banner/bradcam.png";
import BlogSection from "@/components/organisms/blog";

const BlogTemple = () => {
  return (
    <div>
      <div
        className="bradcam_area breadcam_bg overlay d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${bradcam.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="bradcam_text text-center">
                <h3>Blog</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlogSection />
    </div>
  );
};

export default BlogTemple;
