import type { NextPage } from "next";

export type RootType = {
  className?: string;
};

const Root: NextPage<RootType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1512px] max-w-full flex flex-row items-start justify-start leading-[normal] tracking-[normal] text-left text-base text-white font-montserrat ${className}`}
    >
      <div className="flex-1 bg-steelblue flex flex-col items-start justify-start pt-12 pb-[26px] pl-1 pr-0 box-border gap-[22.5px] max-w-full mq675:pt-[31px] mq675:pb-5 mq675:box-border">
        <div className="self-stretch h-[742px] relative bg-steelblue hidden" />
        <div className="w-[1481px] flex flex-row items-start justify-center pt-0 px-5 pb-[18.5px] box-border max-w-full text-lg">
          <div className="w-[1113px] flex flex-row items-start justify-between gap-5 max-w-full mq450:flex-wrap">
            <div className="w-[145px] flex flex-row items-end justify-start gap-[8.4px]">
              <img
                className="h-[57.7px] w-[57.7px] relative z-[1]"
                alt=""
                src="/group-133.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[17.6px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[4.1px]">
                  <img
                    className="self-stretch h-[9px] relative max-w-full overflow-hidden shrink-0 z-[1]"
                    alt=""
                    src="/g121.svg"
                  />
                  <img
                    className="w-16 h-[9.1px] relative z-[1]"
                    alt=""
                    src="/g122.svg"
                  />
                </div>
              </div>
            </div>
            <div className="w-[232px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[9px]">
                <b className="relative inline-block min-w-[119px] z-[1]">
                  Follow us on
                </b>
                <div className="self-stretch flex flex-row items-start justify-between gap-5">
                  <img
                    className="h-6 w-6 relative z-[1]"
                    alt=""
                    src="/facebook02.svg"
                  />
                  <img
                    className="h-6 w-6 relative z-[1]"
                    alt=""
                    src="/instagram.svg"
                  />
                  <img
                    className="h-6 w-6 relative z-[1]"
                    alt=""
                    src="/newtwitterrectangle.svg"
                  />
                  <img
                    className="h-6 w-6 relative z-[1]"
                    alt=""
                    src="/linkedin02.svg"
                  />
                  <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <img
                      className="w-6 h-6 relative z-[1]"
                      alt=""
                      src="/youtube.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[6.1px] pl-5 pr-[22px] box-border max-w-full">
          <div className="h-[495.4px] w-[1130px] flex flex-col items-start justify-start pt-0 px-0 pb-[127.4px] box-border gap-[48.5px] max-w-full mq675:gap-6 mq675:pb-[83px] mq675:box-border mq800:h-auto">
            <div className="self-stretch h-[0.5px] relative border-white border-t-[0.5px] border-solid box-border shrink-0 z-[1]" />
            <div className="self-stretch flex flex-row items-start justify-between pt-0 px-0 pb-[17.5px] gap-5 mq800:flex-wrap">
              <div className="flex flex-col items-start justify-start gap-[31px]">
                <b className="relative inline-block min-w-[105px] z-[1]">
                  Patient Care
                </b>
                <div className="flex flex-col items-start justify-start gap-[7.9px] text-xs">
                  <div className="relative font-semibold inline-block min-w-[84px] z-[1]">{`Find a Doctor `}</div>
                  <div className="relative font-semibold whitespace-pre-wrap z-[1]">{`Book an Appointment  `}</div>
                  <div className="relative font-semibold inline-block min-w-[119px] z-[1]">
                    Video Consultation
                  </div>
                  <div className="relative font-semibold inline-block min-w-[72px] z-[1]">
                    Treatments
                  </div>
                  <div className="relative font-semibold inline-block min-w-[104px] z-[1]">
                    Emergency 24x7
                  </div>
                  <div className="relative font-semibold inline-block min-w-[95px] z-[1]">
                    Prathmesh Lab
                  </div>
                  <div className="relative font-semibold z-[1]">
                    Health Checkup Plans
                  </div>
                  <div className="relative font-semibold inline-block min-w-[82px] z-[1]">
                    Technologies
                  </div>
                  <div className="relative font-semibold inline-block min-w-[88px] z-[1]">
                    Doctor Videos
                  </div>
                  <div className="relative font-semibold inline-block min-w-[127px] z-[1]">
                    Patient Testimonials
                  </div>
                  <div className="relative font-semibold inline-block min-w-[114px] z-[1]">
                    Health Calculators
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[7px] gap-[31px]">
                <b className="relative z-[1]">Center of Excellence</b>
                <div className="flex flex-col items-start justify-start gap-2 text-xs">
                  <div className="relative font-semibold z-[1]">
                    Cancer Care / Oncology
                  </div>
                  <div className="relative font-semibold inline-block min-w-[99px] z-[1]">
                    Cardiac Science
                  </div>
                  <div className="relative font-semibold inline-block min-w-[96px] z-[1]">
                    Neuro Sciences
                  </div>
                  <div className="relative font-semibold z-[1]">
                    Liver Transplant And Biliary Sciences
                  </div>
                  <div className="relative font-semibold inline-block min-w-[77px] z-[1]">
                    Orthopedics
                  </div>
                  <div className="relative font-semibold inline-block min-w-[73px] z-[1]">
                    Nephrology
                  </div>
                  <div className="relative font-semibold inline-block min-w-[112px] z-[1]">
                    Kidney Transplant
                  </div>
                  <div className="relative font-semibold z-[1]">
                    Bone Marrow Transplant
                  </div>
                  <div className="relative font-semibold z-[1]">
                    Bariatric / Weight Loss Surgery
                  </div>
                  <div className="relative font-semibold z-[1]">
                    Minimal Access / Laparoscopic Surgery
                  </div>
                  <div className="relative font-semibold z-[1]">
                    Eye Care / Ophthalmology
                  </div>
                  <div className="relative font-semibold inline-block min-w-[100px] z-[1]">
                    Robotic Surgery
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pl-0 pr-1.5 gap-[31px]">
                <b className="relative z-[1]">Top Procedures</b>
                <div className="flex flex-row items-start justify-start py-0 pl-0.5 pr-0 text-xs">
                  <div className="flex flex-col items-start justify-start gap-[7.8px]">
                    <div className="relative font-semibold z-[1]">{`Cosmetic & Plastic Surgery`}</div>
                    <div className="relative font-semibold z-[1]">
                      Bone Marrow Transplant
                    </div>
                    <div className="relative font-semibold z-[1]">{`Oral & Maxillofacial Surgery`}</div>
                    <div className="relative font-semibold inline-block min-w-[120px] z-[1]">
                      Hand MicroSurgery
                    </div>
                    <div className="relative font-semibold inline-block min-w-[101px] z-[1]">
                      Hip Arthroscopy
                    </div>
                    <div className="relative font-semibold z-[1]">
                      Knee Replacement Surgery
                    </div>
                    <div className="relative font-semibold z-[1]">
                      Cochlear Implant Surgery
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[31px]">
                <b className="relative inline-block min-w-[84px] z-[1]">
                  Corporate
                </b>
                <div className="flex flex-col items-start justify-start gap-2 text-xs">
                  <div className="relative font-semibold inline-block min-w-[58px] z-[1]">
                    About Us
                  </div>
                  <div className="relative font-semibold inline-block min-w-[69px] z-[1]">
                    Leadership
                  </div>
                  <div className="relative font-semibold inline-block min-w-[57px] z-[1]">
                    Investors
                  </div>
                  <div className="relative font-semibold inline-block min-w-[48px] z-[1]">
                    Careers
                  </div>
                  <div className="relative font-semibold inline-block min-w-[61px] z-[1]">
                    Feedback
                  </div>
                  <div className="relative font-semibold inline-block min-w-[91px] z-[1]">{`News & Events`}</div>
                  <div className="relative font-semibold inline-block min-w-[38px] z-[1]">
                    Media
                  </div>
                  <div className="relative font-semibold z-[1]">{`Awards & Certificates`}</div>
                  <div className="relative font-semibold inline-block min-w-[104px] z-[1]">
                    Announcements
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[9px] text-lg">
              <b className="relative z-[1]">Download App</b>
              <div className="flex flex-row items-start justify-start gap-[9.9px]">
                <img
                  className="self-stretch w-[102.9px] relative max-h-full object-cover min-h-[30px] z-[1]"
                  alt=""
                  src="/image-2@2x.png"
                />
                <img
                  className="self-stretch w-[101.2px] relative max-h-full object-cover min-h-[30px] z-[1]"
                  alt=""
                  src="/image-3@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[0.5px] relative border-white border-t-[0.5px] border-solid box-border z-[1]" />
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[23px] box-border max-w-full">
          <div className="w-[1129px] flex flex-row items-end justify-between max-w-full gap-5 mq800:flex-wrap">
            <div className="flex flex-row items-start justify-start gap-10 max-w-full mq450:gap-5 mq450:flex-wrap">
              <div className="relative font-semibold inline-block min-w-[114px] z-[1]">
                Privacy Policy
              </div>
              <div className="relative font-semibold z-[1]">
                Terms and Conditions
              </div>
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px box-border max-w-full text-sm">
              <div className="flex flex-row items-end justify-start gap-1.5">
                <div className="relative font-semibold inline-block min-w-[72px] z-[1]">{`Copyright `}</div>
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
                  <img
                    className="w-3.5 h-3.5 relative z-[1]"
                    alt=""
                    src="/copyright.svg"
                  />
                </div>
                <div className="relative font-semibold z-[1]">
                  Prathmesh Hospital - All Rights Reserved
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;

