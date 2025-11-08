import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
import ToggleSwitch from "./ToggleSwitch";
const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center w-full">
      <h1 className="font-bold xxxl:text-yellow-400 xxxl:text-[78.9px] xxl:text-[71px] xl:text-[62px] lg:text-[62.3px] lx:text-[60px] md:text-[47px] sm:text-[30px] xs:text-[25px] text-[19.27px] uppercase text-[#FF0000] text-center">
        Поставка IT-оборудования
      </h1>
      <nav className="flex justify-center mt-8">
        <ul className="flex xxxl:flex-row max-sm:flex-col sm:flex-row justify-center w-full gap-4">
          <li className="w-[265px] h-[383px] xs:w-[412px] xs:h-[595px] sm:w-[412px] sm:h-[596px] md:w-[232px] md:h-[335px] lx:h-[432px] lx:w-[300px] lg:h-[446px] lg:w-[308px] xl:h-[446px] xl:w-[308px] xxl:h-[510px] xxl:w-[353px] xxxl:w-[392px]! xxxl:h-[566px] rounded-[13.33px] border-[1.11px] border-[#1E1E1E] py-8 pl-4 pr-1 flex flex-col justify-center">
            <h2 className="font-bold xxxl:text-[26.67px] xxl:text-[24px] xl:text-[21px] lg:text-[21px] lx:text-[20.34px] md:text-[15.75px] sm:text-[28px] xs:text-[23.36px] text-[18px] uppercase text-[#FF0000]">
              Серверное оборудование
            </h2>
            <h6 className="xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] font-normal italic text-[#1E1E1E] mt-4">
              Серверы мировых производителей:
            </h6>
            <ul>
              <li className="flex gap-2 xxxl:py-2 xxl:py-2 xl:py-1 lg:py-1 lx:py-1 md:py-0.5 sm:py-1 xs:py-2 py-1 items-center">
                <ToggleSwitch
                  width="w-4"
                  height="h-0.5"
                  barColor="bg-black"
                  dotSize="6px"
                  dotColor="#1E1E1E"
                />
                <span className="font-light xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] text-[#1E1E1E]">
                  XFusion
                </span>{" "}
                <img src="/pas.svg" alt="pastavka svg" />
              </li>
              <li className="flex gap-2 xxxl:py-2 xxl:py-2 xl:py-1 lg:py-1 lx:py-1 md:py-0.5 sm:py-1 xs:py-2 py-1 items-center">
                <ToggleSwitch
                  width="w-4"
                  height="h-0.5"
                  barColor="bg-black"
                  dotSize="6px"
                  dotColor="#1E1E1E"
                />
                <span className="font-light xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] text-[#1E1E1E]">
                  Dell
                </span>{" "}
                <img src="/pas.svg" alt="pastavka svg" />
              </li>
              <li className="flex gap-2 xxxl:py-2 xxl:py-2 xl:py-1 lg:py-1 lx:py-1 md:py-0.5 sm:py-1 xs:py-2 py-1 items-center">
                <ToggleSwitch
                  width="w-4"
                  height="h-0.5"
                  barColor="bg-black"
                  dotSize="6px"
                  dotColor="#1E1E1E"
                />
                <span className="font-light xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] text-[#1E1E1E]">
                  HP
                </span>{" "}
                <img src="/pas.svg" alt="pastavka svg" />
              </li>
              <li className="flex gap-2 xxxl:py-2 xxl:py-2 xl:py-1 lg:py-1 lx:py-1 md:py-0.5 sm:py-1 xs:py-2 py-1 items-center">
                <ToggleSwitch
                  width="w-4"
                  height="h-0.5"
                  barColor="bg-black"
                  dotSize="6px"
                  dotColor="#1E1E1E"
                />
                <span className="font-light xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] text-[#1E1E1E]">
                  Lenovo
                </span>{" "}
                <img src="/pas.svg" alt="pastavka svg" />
              </li>
              <li className="flex gap-2 xxxl:py-2 xxl:py-2 xl:py-1 lg:py-1 lx:py-1 md:py-0.5 sm:py-1 xs:py-2 py-1 items-center">
                <ToggleSwitch
                  width="w-4"
                  height="h-0.5"
                  barColor="bg-black"
                  dotSize="6px"
                  dotColor="#1E1E1E"
                />
                <span className="font-light xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] text-[#1E1E1E]">
                  Supermicro
                </span>{" "}
                <img src="/pas.svg" alt="pastavka svg" />
              </li>
              <li className="flex gap-2 xxxl:py-2 xxl:py-2 xl:py-1 lg:py-1 lx:py-1 md:py-0.5 sm:py-1 xs:py-2 py-1 items-center">
                <ToggleSwitch
                  width="w-4"
                  height="h-0.5"
                  barColor="bg-black"
                  dotSize="6px"
                  dotColor="#1E1E1E"
                />
                <span className="font-light xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] text-[#1E1E1E]">
                  GPU-серверы PCI-E и HGX SXM
                </span>{" "}
                <img src="/pas.svg" alt="pastavka svg" />
              </li>
            </ul>
            <h6 className="xxxl:text-[17.78px]  xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] font-normal italic text-[#1E1E1E] mt-4">
              Импортозамещение:
            </h6>
            <ul>
              <li className="flex gap-2 xxxl:py-2 xxl:py-2 xl:py-1 lg:py-1 lx:py-1 md:py-0.5 sm:py-1 xs:py-2 py-1 items-center">
                <ToggleSwitch
                  width="w-4"
                  height="h-0.5"
                  barColor="bg-black"
                  dotSize="6px"
                  dotColor="#1E1E1E"
                />
                <span className="font-light xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] text-[#1E1E1E]">
                  Depo
                </span>{" "}
                <img src="/pas.svg" alt="pastavka svg" />
              </li>
              <li className="flex gap-2 xxxl:py-2 xxl:py-2 xl:py-1 lg:py-1 lx:py-1 md:py-0.5 sm:py-1 xs:py-2 py-1 items-center">
                <ToggleSwitch
                  width="w-4"
                  height="h-0.5"
                  barColor="bg-black"
                  dotSize="6px"
                  dotColor="#1E1E1E"
                />
                <span className="font-light xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] text-[#1E1E1E]">
                  Qtech
                </span>{" "}
                <img src="/pas.svg" alt="pastavka svg" />
              </li>
              <li className="flex gap-2 xxxl:py-2 xxl:py-2 xl:py-1 lg:py-1 lx:py-1 md:py-0.5 sm:py-1 xs:py-2 py-1 items-center">
                <ToggleSwitch
                  width="w-4"
                  height="h-0.5"
                  barColor="bg-black"
                  dotSize="6px"
                  dotColor="#1E1E1E"
                />
                <span className="font-light xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] text-[#1E1E1E]">
                  NEBO Systems
                </span>{" "}
                <img src="/pas.svg" alt="pastavka svg" />
              </li>
            </ul>
          </li>
          <li className="w-[265px] h-[383px] xs:w-[412px] xs:h-[595px] sm:w-[412px] sm:h-[596px] md:w-[232px] md:h-[335px] lx:h-[432px] lx:w-[300px] lg:h-[446px] lg:w-[308px] xl:h-[446px] xl:w-[308px] xxl:h-[510px] xxl:w-[353px] xxxl:w-[392px]! xxxl:h-[566px] rounded-[13.33px] border-[1.11px] border-[#1E1E1E] py-8 pl-4 pr-1 flex flex-col justify-center">
            <h2 className="font-bold xxxl:text-[26.67px] xxl:text-[24px] xl:text-[21px] lg:text-[21px] lx:text-[20.34px] md:text-[15.75px] sm:text-[28px] xs:text-[23.36px] text-[18px] uppercase text-[#FF0000]">
              Серверное оборудование
            </h2>
            <h6 className="xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] font-normal italic text-[#1E1E1E] mt-4">
              Серверы мировых производителей:
            </h6>
            <ul>
              <li className="flex gap-2 xxxl:py-2 xxl:py-2 xl:py-1 lg:py-1 lx:py-1 md:py-0.5 sm:py-1 xs:py-2 py-1 items-center">
                <ToggleSwitch
                  width="w-4"
                  height="h-0.5"
                  barColor="bg-black"
                  dotSize="6px"
                  dotColor="#1E1E1E"
                />
                <span className="font-light xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] text-[#1E1E1E]">
                  XFusion
                </span>{" "}
                <img src="/pas.svg" alt="pastavka svg" />
              </li>
              <li className="flex gap-2 xxxl:py-2 xxl:py-2 xl:py-1 lg:py-1 lx:py-1 md:py-0.5 sm:py-1 xs:py-2 py-1 items-center">
                <ToggleSwitch
                  width="w-4"
                  height="h-0.5"
                  barColor="bg-black"
                  dotSize="6px"
                  dotColor="#1E1E1E"
                />
                <span className="font-light xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] text-[#1E1E1E]">
                  Dell
                </span>{" "}
                <img src="/pas.svg" alt="pastavka svg" />
              </li>
              <li className="flex gap-2 xxxl:py-2 xxl:py-2 xl:py-1 lg:py-1 lx:py-1 md:py-0.5 sm:py-1 xs:py-2 py-1 items-center">
                <ToggleSwitch
                  width="w-4"
                  height="h-0.5"
                  barColor="bg-black"
                  dotSize="6px"
                  dotColor="#1E1E1E"
                />
                <span className="font-light xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] text-[#1E1E1E]">
                  HP
                </span>{" "}
                <img src="/pas.svg" alt="pastavka svg" />
              </li>
              <li className="flex gap-2 xxxl:py-2 xxl:py-2 xl:py-1 lg:py-1 lx:py-1 md:py-0.5 sm:py-1 xs:py-2 py-1 items-center">
                <ToggleSwitch
                  width="w-4"
                  height="h-0.5"
                  barColor="bg-black"
                  dotSize="6px"
                  dotColor="#1E1E1E"
                />
                <span className="font-light xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] text-[#1E1E1E]">
                  Lenovo
                </span>{" "}
                <img src="/pas.svg" alt="pastavka svg" />
              </li>
              <li className="flex gap-2 xxxl:py-2 xxl:py-2 xl:py-1 lg:py-1 lx:py-1 md:py-0.5 sm:py-1 xs:py-2 py-1 items-center">
                <ToggleSwitch
                  width="w-4"
                  height="h-0.5"
                  barColor="bg-black"
                  dotSize="6px"
                  dotColor="#1E1E1E"
                />
                <span className="font-light xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] text-[#1E1E1E]">
                  Supermicro
                </span>{" "}
                <img src="/pas.svg" alt="pastavka svg" />
              </li>
              <li className="flex gap-2 xxxl:py-2 xxl:py-2 xl:py-1 lg:py-1 lx:py-1 md:py-0.5 sm:py-1 xs:py-2 py-1 items-center">
                <ToggleSwitch
                  width="w-4"
                  height="h-0.5"
                  barColor="bg-black"
                  dotSize="6px"
                  dotColor="#1E1E1E"
                />
                <span className="font-light xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] text-[#1E1E1E]">
                  GPU-серверы PCI-E и HGX SXM
                </span>{" "}
                <img src="/pas.svg" alt="pastavka svg" />
              </li>
            </ul>
            <h6 className="xxxl:text-[17.78px]  xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] font-normal italic text-[#1E1E1E] mt-4">
              Импортозамещение:
            </h6>
            <ul>
              <li className="flex gap-2 xxxl:py-2 xxl:py-2 xl:py-1 lg:py-1 lx:py-1 md:py-0.5 sm:py-1 xs:py-2 py-1 items-center">
                <ToggleSwitch
                  width="w-4"
                  height="h-0.5"
                  barColor="bg-black"
                  dotSize="6px"
                  dotColor="#1E1E1E"
                />
                <span className="font-light xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] text-[#1E1E1E]">
                  Depo
                </span>{" "}
                <img src="/pas.svg" alt="pastavka svg" />
              </li>
              <li className="flex gap-2 xxxl:py-2 xxl:py-2 xl:py-1 lg:py-1 lx:py-1 md:py-0.5 sm:py-1 xs:py-2 py-1 items-center">
                <ToggleSwitch
                  width="w-4"
                  height="h-0.5"
                  barColor="bg-black"
                  dotSize="6px"
                  dotColor="#1E1E1E"
                />
                <span className="font-light xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] text-[#1E1E1E]">
                  Qtech
                </span>{" "}
                <img src="/pas.svg" alt="pastavka svg" />
              </li>
              <li className="flex gap-2 xxxl:py-2 xxl:py-2 xl:py-1 lg:py-1 lx:py-1 md:py-0.5 sm:py-1 xs:py-2 py-1 items-center">
                <ToggleSwitch
                  width="w-4"
                  height="h-0.5"
                  barColor="bg-black"
                  dotSize="6px"
                  dotColor="#1E1E1E"
                />
                <span className="font-light xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] text-[#1E1E1E]">
                  NEBO Systems
                </span>{" "}
                <img src="/pas.svg" alt="pastavka svg" />
              </li>
            </ul>
          </li>
          <li className="w-[265px] h-[383px] xs:w-[412px] xs:h-[595px] sm:w-[412px] sm:h-[596px] md:w-[232px] md:h-[335px] lx:h-[432px] lx:w-[300px] lg:h-[446px] lg:w-[308px] xl:h-[446px] xl:w-[308px] xxl:h-[510px] xxl:w-[353px] xxxl:w-[392px]! xxxl:h-[566px] rounded-[13.33px] border-[1.11px] border-[#1E1E1E] py-8 pl-4 pr-1 flex flex-col justify-center">
            <h2 className="font-bold xxxl:text-[26.67px] xxl:text-[24px] xl:text-[21px] lg:text-[21px] lx:text-[20.34px] md:text-[15.75px] sm:text-[28px] xs:text-[23.36px] text-[18px] uppercase text-[#FF0000]">
              Серверное оборудование
            </h2>
            <h6 className="xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] font-normal italic text-[#1E1E1E] mt-4">
              Серверы мировых производителей:
            </h6>
            <ul>
              <li className="flex gap-2 xxxl:py-2 xxl:py-2 xl:py-1 lg:py-1 lx:py-1 md:py-0.5 sm:py-1 xs:py-2 py-1 items-center">
                <ToggleSwitch
                  width="w-4"
                  height="h-0.5"
                  barColor="bg-black"
                  dotSize="6px"
                  dotColor="#1E1E1E"
                />
                <span className="font-light xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] text-[#1E1E1E]">
                  XFusion
                </span>{" "}
                <img src="/pas.svg" alt="pastavka svg" />
              </li>
              <li className="flex gap-2 xxxl:py-2 xxl:py-2 xl:py-1 lg:py-1 lx:py-1 md:py-0.5 sm:py-1 xs:py-2 py-1 items-center">
                <ToggleSwitch
                  width="w-4"
                  height="h-0.5"
                  barColor="bg-black"
                  dotSize="6px"
                  dotColor="#1E1E1E"
                />
                <span className="font-light xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] text-[#1E1E1E]">
                  Dell
                </span>{" "}
                <img src="/pas.svg" alt="pastavka svg" />
              </li>
              <li className="flex gap-2 xxxl:py-2 xxl:py-2 xl:py-1 lg:py-1 lx:py-1 md:py-0.5 sm:py-1 xs:py-2 py-1 items-center">
                <ToggleSwitch
                  width="w-4"
                  height="h-0.5"
                  barColor="bg-black"
                  dotSize="6px"
                  dotColor="#1E1E1E"
                />
                <span className="font-light xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] text-[#1E1E1E]">
                  HP
                </span>{" "}
                <img src="/pas.svg" alt="pastavka svg" />
              </li>
              <li className="flex gap-2 xxxl:py-2 xxl:py-2 xl:py-1 lg:py-1 lx:py-1 md:py-0.5 sm:py-1 xs:py-2 py-1 items-center">
                <ToggleSwitch
                  width="w-4"
                  height="h-0.5"
                  barColor="bg-black"
                  dotSize="6px"
                  dotColor="#1E1E1E"
                />
                <span className="font-light xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] text-[#1E1E1E]">
                  Lenovo
                </span>{" "}
                <img src="/pas.svg" alt="pastavka svg" />
              </li>
              <li className="flex gap-2 xxxl:py-2 xxl:py-2 xl:py-1 lg:py-1 lx:py-1 md:py-0.5 sm:py-1 xs:py-2 py-1 items-center">
                <ToggleSwitch
                  width="w-4"
                  height="h-0.5"
                  barColor="bg-black"
                  dotSize="6px"
                  dotColor="#1E1E1E"
                />
                <span className="font-light xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] text-[#1E1E1E]">
                  Supermicro
                </span>{" "}
                <img src="/pas.svg" alt="pastavka svg" />
              </li>
              <li className="flex gap-2 xxxl:py-2 xxl:py-2 xl:py-1 lg:py-1 lx:py-1 md:py-0.5 sm:py-1 xs:py-2 py-1 items-center">
                <ToggleSwitch
                  width="w-4"
                  height="h-0.5"
                  barColor="bg-black"
                  dotSize="6px"
                  dotColor="#1E1E1E"
                />
                <span className="font-light xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] text-[#1E1E1E]">
                  GPU-серверы PCI-E и HGX SXM
                </span>{" "}
                <img src="/pas.svg" alt="pastavka svg" />
              </li>
            </ul>
            <h6 className="xxxl:text-[17.78px]  xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] font-normal italic text-[#1E1E1E] mt-4">
              Импортозамещение:
            </h6>
            <ul>
              <li className="flex gap-2 xxxl:py-2 xxl:py-2 xl:py-1 lg:py-1 lx:py-1 md:py-0.5 sm:py-1 xs:py-2 py-1 items-center">
                <ToggleSwitch
                  width="w-4"
                  height="h-0.5"
                  barColor="bg-black"
                  dotSize="6px"
                  dotColor="#1E1E1E"
                />
                <span className="font-light xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] text-[#1E1E1E]">
                  Depo
                </span>{" "}
                <img src="/pas.svg" alt="pastavka svg" />
              </li>
              <li className="flex gap-2 xxxl:py-2 xxl:py-2 xl:py-1 lg:py-1 lx:py-1 md:py-0.5 sm:py-1 xs:py-2 py-1 items-center">
                <ToggleSwitch
                  width="w-4"
                  height="h-0.5"
                  barColor="bg-black"
                  dotSize="6px"
                  dotColor="#1E1E1E"
                />
                <span className="font-light xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] text-[#1E1E1E]">
                  Qtech
                </span>{" "}
                <img src="/pas.svg" alt="pastavka svg" />
              </li>
              <li className="flex gap-2 xxxl:py-2 xxl:py-2 xl:py-1 lg:py-1 lx:py-1 md:py-0.5 sm:py-1 xs:py-2 py-1 items-center">
                <ToggleSwitch
                  width="w-4"
                  height="h-0.5"
                  barColor="bg-black"
                  dotSize="6px"
                  dotColor="#1E1E1E"
                />
                <span className="font-light xxxl:text-[17.78px] xxl:text-[16px] xl:text-[14px] lg:text-[14px] lx:text-[13.56px] md:text-[10.5px] sm:text-[18.7px] xs:text-[18.7px] text-[12px] text-[#1E1E1E]">
                  NEBO Systems
                </span>{" "}
                <img src="/pas.svg" alt="pastavka svg" />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
