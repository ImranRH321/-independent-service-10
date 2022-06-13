import React from "react";

const About = () => {
  const myself =
    "https://i.ibb.co/frhDHz6/IMG-164308271536-F-removebg-preview-1-modified.png";

  return (
    <div className="my-4">
      <h3 className="bg-dark text-white ms-3 p-2 w-50 LTitle my-4">
        About us for me <mark className="text-success LTitle ">Imran Rx</mark>
      </h3>
      <div className="row container">
        <div className="col-md-6 col-sm-12">
          <div>
            <img className="" src={myself} alt="" />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <h3 className="mt-4">Goal টার্গেট সেট </h3>
          <p>
            ১. আগামী ৬মাস মানে এই বছর পোড়া টা , পথম টার্গেট কোর্স টা যতদিন
            পর্যন্ত শেষ না হয় , মানে আর এক ১মাস বা তার কম বেশি হতে পারে , কোর্স
            টা শেষ করে , কোনো একটা কোম্পানি এর মদ্দে ইন্টার্ন জন্য এপ্লাই করবো ,
            আর ইংলিশ টা দুর্বল , কোর্স শেষ হওয়ার পর ইন্টার্ন খোঁজার এর পাশা পাশি
            , ইংলিশ টা ও প্রাকটিস করবো \ আর ৪ থেকে ৫ ঘন্টা কোড্ডিং আর যে জিনিস
            গুলা কম বুজছি এগুলো আর একটু দেখবো , আর বাকি টা সময় ইংলিশ টা ৪ থেকে ৫
            ঘন্টা সময় দিমু , এর ইন্টার্ন বা জব খোঁজার জন্য ৩ থেকে ৪ ঘন্টা সময়
            দিমু , এই হলো কোর্স শেষ হওয়ার পরের টার্গেট \ আর যদি ২০২৩ সাল পর্যন্ত
            কোনো ইন্টার্ন বা চাকরি না পাই , তখন কোডডিং কে সাইড এ রাখে অন্য
            রাস্তা দেখমু , ১. দেশে কিছু কর্ম , বা না ও করতে পারি , বিদেশ যামু ,
            এর বিদেশ যাওয়ার পর বান্দর এর মতো পইড়া থাকমো , না ভাল লাগলেও কইরা কাজ
            কইরামু , আর একটা জিনিস অপসোস কর্ম কোডডিং ডা কপালে নাই ,{" "}
          </p>
          <p>
            <small>
              Ei bisoy tar opar kico feedbreak diyen vai..
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
