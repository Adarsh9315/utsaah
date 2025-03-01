import cause1 from "../../../img/causes/1.png";
import cause2 from "../../../img/causes/2.png";
import cause3 from "../../../img/causes/3.png";

import news1 from "../../../img/news/1.png";
import news2 from "../../../img/news/2.png";
import Image from "next/image";


export const popularCauses = [
  <div className="single_cause" key={1}>
    <div className="thumb">
      <Image src={cause1} alt="Finance Cause" />
    </div>
    <div className="causes_content">
      <div className="custom_progress_bar">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "45%" }}
            aria-valuenow={45}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <span className="progres_count">45%</span>
          </div>
        </div>
      </div>
      <div className="balance d-flex justify-content-between align-items-center">
        <span>Raised: ₹3,00,000</span>
        <span>Goal: ₹6,50,000</span>
      </div>
      <a href="cause_details.html">
        <h4>Support Cancer Patients Financially</h4>
      </a>
      <p>
        Your donation can help ease the financial burden for cancer patients. Many families struggle to cover treatment costs, medications, and hospital stays.
      </p>
      <a className="read_more" href="cause_details.html">Read More</a>
    </div>
  </div>,
  <div className="single_cause" key={2}>
    <div className="thumb">
      <Image src={cause2} alt="Ration Cause" />
    </div>
    <div className="causes_content">
      <div className="custom_progress_bar">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "65%" }}
            aria-valuenow={65}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <span className="progres_count">65%</span>
          </div>
        </div>
      </div>
      <div className="balance d-flex justify-content-between align-items-center">
        <span>Raised: ₹4,00,000</span>
        <span>Goal: ₹6,00,000</span>
      </div>
      <a href="cause_details.html">
        <h4>Provide Essential Food Supplies</h4>
      </a>
      <p>
        Hunger should never be a barrier to recovery. Your contribution helps provide essential food and nutrition to patients and their families.
      </p>
      <a className="read_more" href="cause_details.html">Read More</a>
    </div>
  </div>,
  <div className="single_cause" key={3}>
    <div className="thumb">
      <Image src={cause3} alt="Blood & Platelets Cause" />
    </div>
    <div className="causes_content">
      <div className="custom_progress_bar">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "80%" }}
            aria-valuenow={80}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <span className="progres_count">80%</span>
          </div>
        </div>
      </div>
      <div className="balance d-flex justify-content-between align-items-center">
        <span>Raised: ₹5,50,000</span>
        <span>Goal: ₹7,00,000</span>
      </div>
      <a href="cause_details.html">
        <h4>Donate Blood & Platelets, Save Lives</h4>
      </a>
      <p>
        Cancer treatments often require life-saving blood and platelets. Your generous support will ensure a steady supply for those undergoing critical therapies.
      </p>
      <a className="read_more" href="cause_details.html">Read More</a>
    </div>
  </div>,
  <div className="single_cause" key={4}>
    <div className="thumb">
      {/* <img src="img/causes/1.png" alt="" /> */}
      <Image src={cause1} alt="cause1" objectFit="contain" />
    </div>
    <div className="causes_content">
      <div className="custom_progress_bar">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            // style="width: 30%;"
            style={{ width: "30%" }}
            aria-valuenow={30}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <span className="progres_count">30%</span>
          </div>
        </div>
      </div>
      <div className="balance d-flex justify-content-between align-items-center">
        <span>Raised: $5000.00 </span>
        <span>Goal: $9000.00 </span>
      </div>
      <h4>Help us to Send Food</h4>
      <p>
        The passage is attributed to an unknown typesetter in the century who is
        thought
      </p>
      <a className="read_more" href="cause_details.html">
        Read More
      </a>
    </div>
  </div>,
];

export const newsAndUpdate = [
  <div className="single__blog d-flex align-items-center" key={1}>
    <div>
      <Image src={news1} alt="news1" objectFit="contain" className="w-[1000px]" />
    </div>
    <div className="newsinfo">
      <span>July 18, 2019</span>
      <a href="single-blog.html">
        <h3>Pure Water Is More Essential</h3>
      </a>
      <p>
        The passage experienced a surge in popularity during the 1960s when used
        it on their sheets, and again.
      </p>
      <a className="read_more" href="single-blog.html">
        Read More
      </a>
    </div>
  </div>,
  <div className="single__blog d-flex align-items-center" key={2}>
    <div className="thumb">
      {/* <img src="img/news/2.png" alt="" /> */}
      <Image src={news2} alt="news2" objectFit="contain" className="w-[1000px]" />
    </div>
    <div className="newsinfo">
      <span>July 18, 2019</span>
      <a href="single-blog.html">
        <h3>Pure Water Is More Essential</h3>
      </a>
      <p>
        The passage experienced a surge in popularity during the 1960s when used
        it on their sheets, and again.
      </p>
      <a className="read_more" href="single-blog.html">
        Read More
      </a>
    </div>
  </div>,
  <div className="single__blog d-flex align-items-center" key={3}>
  <div className="thumb">
    {/* <img src="img/news/2.png" alt="" /> */}
    <Image src={news2} alt="news2" objectFit="contain" className="w-[1000px]" />
  </div>
  <div className="newsinfo">
    <span>July 18, 2019</span>
    <a href="single-blog.html">
      <h3>Pure Water Is More Essential</h3>
    </a>
    <p>
      The passage experienced a surge in popularity during the 1960s when used
      it on their sheets, and again.
    </p>
    <a className="read_more" href="single-blog.html">
      Read More
    </a>
  </div>
</div>,
<div className="single__blog d-flex align-items-center" key={4}>
    <div className="thumb">
      {/* <img src="img/news/2.png" alt="" /> */}
      <Image src={news2} alt="news2" objectFit="contain" className="w-[1000px]" />
    </div>
    <div className="newsinfo">
      <span>July 18, 2019</span>
      <a href="single-blog.html">
        <h3>Pure Water Is More Essential</h3>
      </a>
      <p>
        The passage experienced a surge in popularity during the 1960s when used
        it on their sheets, and again.
      </p>
      <a className="read_more" href="single-blog.html">
        Read More
      </a>
    </div>
  </div>,
  <div className="single__blog d-flex align-items-center" key={5}>
  <div className="thumb">
    {/* <img src="img/news/2.png" alt="" /> */}
    <Image src={news2} alt="news2" objectFit="contain" className="w-[1000px]" />
  </div>
  <div className="newsinfo">
    <span>July 18, 2019</span>
    <a href="single-blog.html">
      <h3>Pure Water Is More Essential</h3>
    </a>
    <p>
      The passage experienced a surge in popularity during the 1960s when used
      it on their sheets, and again.
    </p>
    <a className="read_more" href="single-blog.html">
      Read More
    </a>
  </div>
</div>,
];
