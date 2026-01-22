import React, { memo } from "react";
import bgImage from "../assets/images/About-hero.png";

const About = () => (
  <section className="bg-background text-neutral-default font-generalsans pt-16 sm:pt-24 md:pt-36">
    <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 flex flex-col lg:flex-row items-center justify-between">
      
      {/* Left Section */}
      <div className="lg:w-1/2 text-justify lg:text-left max-w-[544px]">
        <h2 className="font-satoshi text-h2 sm:text-h2 lg:text-h2 leading-tight mb-6">
        MEET WASIU{" "}
          <span className="text-brand-primary">AYOOLA</span>
        </h2>

        {/* 👇 Image appears here only on mobile */}
        <div className="flex justify-center my-6 lg:hidden">
          <img
            src={bgImage}
            alt="Professional IT consultants delivering secure technology solutions"
            loading="lazy"
            className="w-full max-w-[400px] h-auto"
          />
        </div>

        <p className="text-body mb-8 max-w-[544px] mx-auto lg:mx-0">
        Wasiu has spent his career transforming how organizations manage people and processes 
        through his strategic thinking, people-first mindset, and hands-on expertise. With a 
        background in Customer Experience, Marketing and general business operations, he has 
        shaped his understanding of key and realistic business needs, especially in startup 
        environments. he is passionate about helping business executives/founders create workplace 
        systems that inspire trust, boost productivity, and keep teams engaged.
         </p>

         <h2 className="font-satoshi text-h2 text-left leading-tight mb-6">
         From Admin Assistant to {" "}
          <span className="text-brand-primary">Trusted Executive Partner.</span>
        </h2>
        <p className="text-body mb-8 max-w-[544px] mx-auto lg:mx-0">
        Wasiu’s journey began as an Admin Assistant/Administrator, where he quickly became known 
        for his ability to balance company goals with employee needs. Over time, his role expanded 
        into executive assistance and business operations, where he supported senior leadership with 
        everything from scheduling and coordination to policy development and team culture.
        His career has spanned across sectors, in different key roles giving him insights into both 
        the challenges and opportunities businesses face today. By combining structure with empathy, 
        Wasiu ensures that organizations not only run smoothly but also foster environments where 
        people can thrive.
        </p>


      </div>

      

      {/* Right Section (only visible on desktop) */}
      <div className="hidden lg:flex justify-end lg:w-1/2">
        <img
          src={bgImage}
          alt="Professional IT consultants delivering secure technology solutions"
          loading="lazy"
          className="w-full max-w-[480px] h-auto"
        />
      </div>
    </div>
  </section>
);

export default memo(About);
