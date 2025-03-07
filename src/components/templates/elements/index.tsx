import React from "react";
import bradcam from "../../../img/banner/bradcam.png";
import SimpleElementButtons from "@/components/molecules/simpleElementButtons";
import ElementBlog from "@/components/molecules/elementBlog";
const ElementsTemplate = () => {
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
                <h3>elements</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="sample-text-area">
        <div className="container box_1170">
          <h3 className="text-heading">Text Sample</h3>
          <p className="sample-text">
            Every avid independent filmmaker has <b>Bold</b> about making that{" "}
            <i>Italic</i> interest documentary, or short film to show off their
            creative prowess. Many have great ideas and want to “wow” the
            <sup>Superscript</sup> scene, or video renters with their big
            project. But once you have the<sub>Subscript</sub> “in the can” (no
            easy feat), how do you move from a <del>Strike</del> through of
            master DVDs with the <u>“Underline”</u> marked hand-written title
            inside a secondhand CD case, to a pile of cardboard boxes full of
            shiny new, retail-ready DVDs, with UPC barcodes and polywrap sitting
            on your doorstep? You need to create eye-popping artwork and have
            your project replicated. Using a reputable full service DVD
            Replication company like PacificDisc, Inc. to partner with is
            certainly a helpful option to ensure a professional end result, but
            to help with your DVD replication project, here are 4 easy steps to
            follow for good DVD replication results:
          </p>
        </div>
      </section>
      <SimpleElementButtons />
      <ElementBlog />
    </div>
  );
};

export default ElementsTemplate;
