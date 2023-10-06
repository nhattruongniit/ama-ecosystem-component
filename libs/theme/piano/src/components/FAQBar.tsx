import React from 'react';

// types
import { IOptionFQA } from '../type';

type IProps = {
  faqItems?: IOptionFQA[];
};

export function FAQBar({ faqItems = [] }: IProps) {
  return (
    <div className="absolute w-full bottom-5 px-2 bg-white">
      <div
        className="relative flex min-w-0 flex-col items-center break-words rounded-2xl border-0 border-solid border-blue-900 bg-white bg-clip-border shadow-none after:absolute after:top-0 after:bottom-0 after:left-0 after:z-10 after:block after:h-full after:w-full after:rounded-2xl after:content-['']"
        sidenav-card=""
        style={{
          background:
            'linear-gradient(180deg, rgba(233,235,248,1) 0%, rgba(217,217,217,1) 100%)',
        }}
      >
        <div className="relative z-20 flex-auto w-full p-4 text-left ">
          <div className="transition-all duration-200 ease-nav-brand">
            <div className="mb-0 text-[20px]">Need help?</div>
            <p className="mb-4 text-[14px] mt-2">Please check our docs</p>
            <div className="faqBar">
              {faqItems.map((item, index) => (
                <React.Fragment key={index}>{item?.label}</React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
