import React from "react";
import bradcam from "../../../img/banner/bradcam.png";
import single_blog_1 from "../../../img/blog/single_blog_1.png"
import author from "../../../img/blog/author.png"
import preview from "../../../img/post/preview.png"
import next from "../../../img/post/next.png"
import comment_1 from "../../../img/comment/comment_1.png"
import comment_2 from "../../../img/comment/comment_2.png"
import comment_3 from "../../../img/comment/comment_3.png"
import post_1 from "../../../img/post/post_1.png"
import post_2 from "../../../img/post/post_2.png"
import post_3 from "../../../img/post/post_3.png"
import post_4 from "../../../img/post/post_4.png"
import post_5 from "../../../img/post/post_5.png"
import post_6 from "../../../img/post/post_6.png"
import post_7 from "../../../img/post/post_7.png"
import post_8 from "../../../img/post/post_8.png"
import post_9 from "../../../img/post/post_9.png"
import post_10 from "../../../img/post/post_10.png"
import Image from "next/image";

const SingleBlogTemplate = () => {
  return (
    <div>
      <div className="bradcam_area breadcam_bg overlay d-flex align-items-center justify-content-center"
      style={{ backgroundImage: `url(${bradcam.src})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="bradcam_text text-center">
                <h3>Single Blog</h3>
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="blog_area single-post-area section-padding">
      <div className="container">
         <div className="row">
            <div className="col-lg-8 posts-list">
               <div className="single-post">
                  <div className="feature-img">
                     {/* <img className="img-fluid" src="img/blog/single_blog_1.png" alt=""/> */}
                     <Image className="img-fluid" src={single_blog_1} alt=""/>
                  </div>
                  <div className="blog_details">
                     <h2>Second divided from form fish beast made every of seas
                        all gathered us saying he our
                     </h2>
                     <ul className="blog-info-link mt-3 mb-4">
                        <li><a href="#"><i className="fa fa-user"></i> Travel, Lifestyle</a></li>
                        <li><a href="#"><i className="fa fa-comments"></i> 03 Comments</a></li>
                     </ul>
                     <p className="excert">
                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                        should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                        fraction of the camp price. However, who has the willpower
                     </p>
                     <p>
                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                        should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                        fraction of the camp price. However, who has the willpower to actually sit through a
                        self-imposed MCSE training. who has the willpower to actually
                     </p>
                     <div className="quote-wrapper">
                        <div className="quotes">
                           MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                           should have to spend money on boot camp when you can get the MCSE study materials yourself at
                           a fraction of the camp price. However, who has the willpower to actually sit through a
                           self-imposed MCSE training.
                        </div>
                     </div>
                     <p>
                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                        should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                        fraction of the camp price. However, who has the willpower
                     </p>
                     <p>
                        MCSE boot camps have its supporters and its detractors. Some people do not understand why you
                        should have to spend money on boot camp when you can get the MCSE study materials yourself at a
                        fraction of the camp price. However, who has the willpower to actually sit through a
                        self-imposed MCSE training. who has the willpower to actually
                     </p>
                  </div>
               </div>
               <div className="navigation-top">
                  <div className="d-sm-flex justify-content-between text-center">
                     <p className="like-info"><span className="align-middle"><i className="fa fa-heart"></i></span> Lily and 4
                        people like this</p>
                     <div className="col-sm-4 text-center my-2 my-sm-0">
                     </div>
                     <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                        <li><a href="#"><i className="fa fa-behance"></i></a></li>
                     </ul>
                  </div>
                  <div className="navigation-area">
                     <div className="row">
                        <div
                           className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                           <div className="thumb">
                              <a href="#">
                                 {/* <img className="img-fluid" src="img/post/preview.png" alt=""/> */}
                                 <Image className="img-fluid" src={preview} alt=""/>
                              </a>
                           </div>
                           <div className="arrow">
                              <a href="#">
                                 <span className="lnr text-white ti-arrow-left"></span>
                              </a>
                           </div>
                           <div className="detials">
                              <p>Prev Post</p>
                              <a href="#">
                                 <h4>Space The Final Frontier</h4>
                              </a>
                           </div>
                        </div>
                        <div
                           className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                           <div className="detials">
                              <p>Next Post</p>
                              <a href="#">
                                 <h4>Telescopes 101</h4>
                              </a>
                           </div>
                           <div className="arrow">
                              <a href="#">
                                 <span className="lnr text-white ti-arrow-right"></span>
                              </a>
                           </div>
                           <div className="thumb">
                              <a href="#">
                                 {/* <img className="img-fluid" src="img/post/next.png" alt=""/> */}
                                 <Image className="img-fluid" src={next} alt=""/>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="blog-author">
                  <div className="media align-items-center">
                     {/* <img src="img/blog/author.png" alt=""/> */}
                     <Image className="img-fluid" src={author} alt=""/>
                     <div className="media-body">
                        <a href="#">
                           <h4>Harvard milan</h4>
                        </a>
                        <p>Second divided from form fish beast made. Every of seas all gathered use saying you&apos;re, he
                           our dominion twon Second divided from</p>
                     </div>
                  </div>
               </div>
               <div className="comments-area">
                  <h4>05 Comments</h4>
                  <div className="comment-list">
                     <div className="single-comment justify-content-between d-flex">
                        <div className="user justify-content-between d-flex">
                           <div className="thumb">
                              {/* <img src="img/comment/comment_1.png" alt=""/> */}
                              <Image className="img-fluid" src={comment_1} alt=""/>
                           </div>
                           <div className="desc">
                              <p className="comment">
                                 Multiply sea night grass fourth day sea lesser rule open subdue female fill which them
                                 Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                              </p>
                              <div className="d-flex justify-content-between">
                                 <div className="d-flex align-items-center">
                                    <h5>
                                       <a href="#">Emilly Blunt</a>
                                    </h5>
                                    <p className="date">December 4, 2017 at 3:12 pm </p>
                                 </div>
                                 <div className="reply-btn">
                                    <a href="#" className="btn-reply text-uppercase">reply</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="comment-list">
                     <div className="single-comment justify-content-between d-flex">
                        <div className="user justify-content-between d-flex">
                           <div className="thumb">
                           <Image className="img-fluid" src={comment_2} alt=""/>
                           </div>
                           <div className="desc">
                              <p className="comment">
                                 Multiply sea night grass fourth day sea lesser rule open subdue female fill which them
                                 Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                              </p>
                              <div className="d-flex justify-content-between">
                                 <div className="d-flex align-items-center">
                                    <h5>
                                       <a href="#">Emilly Blunt</a>
                                    </h5>
                                    <p className="date">December 4, 2017 at 3:12 pm </p>
                                 </div>
                                 <div className="reply-btn">
                                    <a href="#" className="btn-reply text-uppercase">reply</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="comment-list">
                     <div className="single-comment justify-content-between d-flex">
                        <div className="user justify-content-between d-flex">
                           <div className="thumb">
                           <Image className="img-fluid" src={comment_3} alt=""/>
                           </div>
                           <div className="desc">
                              <p className="comment">
                                 Multiply sea night grass fourth day sea lesser rule open subdue female fill which them
                                 Blessed, give fill lesser bearing multiply sea night grass fourth day sea lesser
                              </p>
                              <div className="d-flex justify-content-between">
                                 <div className="d-flex align-items-center">
                                    <h5>
                                       <a href="#">Emilly Blunt</a>
                                    </h5>
                                    <p className="date">December 4, 2017 at 3:12 pm </p>
                                 </div>
                                 <div className="reply-btn">
                                    <a href="#" className="btn-reply text-uppercase">reply</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="comment-form">
                  <h4>Leave a Reply</h4>
                  <form className="form-contact comment_form" action="#" id="commentForm">
                     <div className="row">
                        <div className="col-12">
                           <div className="form-group">
                              <textarea className="form-control w-100" name="comment" id="comment" cols={30} rows={9}
                                 placeholder="Write Comment"></textarea>
                           </div>
                        </div>
                        <div className="col-sm-6">
                           <div className="form-group">
                              <input className="form-control" name="name" id="name" type="text" placeholder="Name"/>
                           </div>
                        </div>
                        <div className="col-sm-6">
                           <div className="form-group">
                              <input className="form-control" name="email" id="email" type="email" placeholder="Email"/>
                           </div>
                        </div>
                        <div className="col-12">
                           <div className="form-group">
                              <input className="form-control" name="website" id="website" type="text" placeholder="Website"/>
                           </div>
                        </div>
                     </div>
                     <div className="form-group">
                        <button type="submit" className="button button-contactForm btn_1 boxed-btn">Send Message</button>
                     </div>
                  </form>
               </div>
            </div>
            <div className="col-lg-4">
               <div className="blog_right_sidebar">
                  <aside className="single_sidebar_widget search_widget">
                     <form action="#">
                        <div className="form-group">
                           <div className="input-group mb-3">
                              <input type="text" className="form-control" placeholder='Search Keyword'/>
                              <div className="input-group-append">
                                 <button className="btn" type="button"><i className="ti-search"></i></button>
                              </div>
                           </div>
                        </div>
                        <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                           type="submit">Search</button>
                     </form>
                  </aside>
                  <aside className="single_sidebar_widget post_category_widget">
                     <h4 className="widget_title">Category</h4>
                     <ul className="list cat-list">
                        <li>
                           <a href="#" className="d-flex">
                              <p>Resaurant food</p>
                              <p>(37)</p>
                           </a>
                        </li>
                        <li>
                           <a href="#" className="d-flex">
                              <p>Travel news</p>
                              <p>(10)</p>
                           </a>
                        </li>
                        <li>
                           <a href="#" className="d-flex">
                              <p>Modern technology</p>
                              <p>(03)</p>
                           </a>
                        </li>
                        <li>
                           <a href="#" className="d-flex">
                              <p>Product</p>
                              <p>(11)</p>
                           </a>
                        </li>
                        <li>
                           <a href="#" className="d-flex">
                              <p>Inspiration</p>
                              <p>(21)</p>
                           </a>
                        </li>
                        <li>
                           <a href="#" className="d-flex">
                              <p>Health Care</p>
                              <p>(21)</p>
                           </a>
                        </li>
                     </ul>
                  </aside>
                  <aside className="single_sidebar_widget popular_post_widget">
                     <h3 className="widget_title">Recent Post</h3>
                     <div className="media post_item">
                        {/* <img src="img/post/post_1.png" alt="post"/> */}
                        <Image className="img-fluid" src={post_1} alt=""/>
                        <div className="media-body">
                           <a href="single-blog.html">
                              <h3>From life was you fish...</h3>
                           </a>
                           <p>January 12, 2019</p>
                        </div>
                     </div>
                     <div className="media post_item">
                        {/* <img src="img/post/post_2.png" alt="post"/> */}
                        <Image className="img-fluid" src={post_2} alt=""/>
                        <div className="media-body">
                           <a href="single-blog.html">
                              <h3>The Amazing Hubble</h3>
                           </a>
                           <p>02 Hours ago</p>
                        </div>
                     </div>
                     <div className="media post_item">
                        {/* <img src="img/post/post_3.png" alt="post"/> */}
                        <Image className="img-fluid" src={post_3} alt=""/>
                        <div className="media-body">
                           <a href="single-blog.html">
                              <h3>Astronomy Or Astrology</h3>
                           </a>
                           <p>03 Hours ago</p>
                        </div>
                     </div>
                     <div className="media post_item">
                        {/* <img src="img/post/post_4.png" alt="post"/> */}
                        <Image className="img-fluid" src={post_4} alt=""/>
                        <div className="media-body">
                           <a href="single-blog.html">
                              <h3>Asteroids telescope</h3>
                           </a>
                           <p>01 Hours ago</p>
                        </div>
                     </div>
                  </aside>
                  <aside className="single_sidebar_widget tag_cloud_widget">
                     <h4 className="widget_title">Tag Clouds</h4>
                     <ul className="list">
                        <li>
                           <a href="#">project</a>
                        </li>
                        <li>
                           <a href="#">love</a>
                        </li>
                        <li>
                           <a href="#">technology</a>
                        </li>
                        <li>
                           <a href="#">travel</a>
                        </li>
                        <li>
                           <a href="#">restaurant</a>
                        </li>
                        <li>
                           <a href="#">life style</a>
                        </li>
                        <li>
                           <a href="#">design</a>
                        </li>
                        <li>
                           <a href="#">illustration</a>
                        </li>
                     </ul>
                  </aside>
                  <aside className="single_sidebar_widget instagram_feeds">
                     <h4 className="widget_title">Instagram Feeds</h4>
                     <ul className="instagram_row flex-wrap">
                        <li>
                           <a href="#">
                              {/* <img className="img-fluid" src="img/post/post_5.png" alt=""/> */}
                              <Image className="img-fluid" src={post_5} alt=""/>
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              {/* <img className="img-fluid" src="img/post/post_6.png" alt=""/> */}
                              <Image className="img-fluid" src={post_6} alt=""/>
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              {/* <img className="img-fluid" src="img/post/post_7.png" alt=""/> */}
                              <Image className="img-fluid" src={post_7} alt=""/>
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              {/* <img className="img-fluid" src="img/post/post_8.png" alt=""/> */}
                              <Image className="img-fluid" src={post_8} alt=""/>
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              {/* <img className="img-fluid" src="img/post/post_9.png" alt=""/> */}
                              <Image className="img-fluid" src={post_9} alt=""/>
                           </a>
                        </li>
                        <li>
                           <a href="#">
                              {/* <img className="img-fluid" src="img/post/post_10.png" alt=""/> */}
                              <Image className="img-fluid" src={post_10} alt=""/>
                           </a>
                        </li>
                     </ul>
                  </aside>
                  <aside className="single_sidebar_widget newsletter_widget">
                     <h4 className="widget_title">Newsletter</h4>
                     <form action="#">
                        <div className="form-group">
                           <input type="email" className="form-control" placeholder='Enter email' required/>
                        </div>
                        <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                           type="submit">Subscribe</button>
                     </form>
                  </aside>
               </div>
            </div>
         </div>
      </div>
   </section>
    </div>
  );
};

export default SingleBlogTemplate;
