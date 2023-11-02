
import Asset_1 from "./bds.svg";
import Asset_2 from "./taichinh.svg";
import Asset_3 from "./giaoduc.svg";
import Asset_4 from "./baohiem.svg";
import Asset_5 from "./spa.svg";
import Asset_6 from "./banle.svg";
import Asset_7 from "./chotdon.svg";
import Asset_8 from "./nhaclich.svg";
import Asset_9 from "./remarketing.svg";
import Asset_10 from "./khaosat.svg";
import { useState } from "react";
import { ContactFormModal } from "../ContactForm";
export const AppliedSolution = () => {
  const data = [
    {
      title: "Bất động sản",
      description:
        "Các doanh nghiệp bất động sản có thể tiếp cận khách hàng mới nhờ AI Callbot Auto Call để gọi giới thiệu dự án chung cư, đầu tư đất nền mới.",
      image: Asset_1,
    },
    {
      title: "Tài chính",
      description:
        "Công ty tài chính dùng dịch vụ auto call AI Callbot để gọi tiếp cận khách hàng có nhu cầu vay vốn. Sau đó, nhân viên gọi lại để tư vấn các gói vay.",
      image: Asset_2,
    },
    {
      title: "Giáo dục",
      description:
        "Các lớp học, trung tâm giáo dục có thể sử dụng AI Callbot Auto Call để tìm kiếm khách hàng, chăm sóc học viên tự động, giới thiệu khóa học, nhắc lịch hẹn.",
      image: Asset_3,
    },
    {
      title: "Bảo Hiểm",
      description:
        "Công ty bảo hiểm có thể dùng dịch vụ auto call Callbot AI để gọi tìm kiếm khách hàng có nhu cầu mua bảo hiểm. Sau đó, nhân viên gọi lại để sales và tư vấn các gói bảo hiểm.",
      image: Asset_4,
    },
    {
      title: "Spa Thẩm mỹ",
      description:
        "Chủ spa, thẩm mỹ có thể dùng phần mềm auto call Callbot AI nhắc lịch hẹn, tư vấn gói spa làm đẹp, nâng cao trải nghiệm khách hàng và chất lượng dịch vụ.",
      image: Asset_5,
    },
    {
      title: "Bán lẻ",
      description:
        "Chủ kinh doanh bán lẻ dùng giải pháp auto call AI Callbot để dễ dàng tìm kiếm khách hàng tiềm năng, gọi chốt đơn tự động, nhắc lịch hẹn, từ đó tăng doanh số bán hàng.",
      image: Asset_6,
    },
  ];
  const data1 = [
    {
      title: "Chốt đơn tự động",
      description:
        " Doanh nghiệp và cá nhân kinh doanh dùng dịch vụ Auto Call AI Callbot để gọi xác nhận đơn hàng, chốt đơn tự động thay vì nhập thông tin đơn hàng thủ công.",
      image: Asset_7,
    },
    {
      title: "Nhắc lịch tự động",
      description:
        "Doanh nghiệp và cá nhân kinh doanh dùng dịch vụ AI Callbot Auto Call để gọi nhắc lịch hẹn, gia hạn thanh toán tự động, nâng cao quy trình chăm sóc khách hàng thay vì gọi thủ công tốn kém.",
      image: Asset_8,
    },
    {
      title: "Remarketing khách hàng cũ",
      description:
        "Doanh nghiệp và cá nhân kinh doanh dùng dịch vụ auto call AI Callbot để upsale khách hàng, tăng nhận diện thương hiệu và giữ chân khách hàng.",
      image: Asset_9,
    },
    {
      title: "Khảo sát thị trường",
      description:
        "Doanh nghiệp và cá nhân kinh doanh dùng giải pháp auto call AI Callbot gọi khảo sát khách hàng, để tung sản phẩm phù hợp với nhu cầu thay vì đi in phiếu khảo sát, phỏng vấn, gọi điện thủ công tốn kém.",
      image: Asset_10,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="my-4 text-center text-white text-4xl font-semibold">Ứng dụng của giải pháp</h1>

      <div className="w-[1200px]">
        <div className="flex flex-row flex-wrap mt-4 text-center text-white">
          {data?.map(({ title, description, image }) => {
            return (
              <div className="w-full md:w-1/3 py-5 px-5 gap-8">
              <div className="text-center p-5 bg-white border rounded-xl">
                <div className="flex items-center justify-center pb-3">
                  <img src={image} alt="" className="w-[250px]" />
                </div>
                <h1 className="text-[#1e2967] py-2 text-2xl font-semibold">{title}</h1>
                <p className="text-[#1e2967] py-2">{description}</p>
                <button className="py-2 w-full text-white bg-[#1e2967] rounded-lg mt-5"  onClick={openModal}>Tìm hiểu thêm</button>
              </div>
            </div>
            );
          })}
        </div>
      </div>

      <div className="w-[1200px]">
        <div className="flex flex-row flex-wrap mt-4 text-center text-white">
          {data1?.map(({ title, description, image }) => {
            return (
              <div className="w-full md:w-1/2 py-5 px-5 gap-8">
              <div className="text-center p-5 bg-white border rounded-xl">
                <div className="flex items-center justify-center pb-3">
                  <img src={image} alt="" className="w-[350px]" />
                </div>
                <h1 className="text-[#1e2967] py-2 text-2xl font-semibold">{title}</h1>
                <p className="text-[#1e2967] py-2">{description}</p>
                <button className="py-2 w-full text-white bg-[#1e2967] rounded-lg mt-5"  onClick={openModal}>Tìm hiểu thêm</button>
              </div>
            </div>
            );
          })}
        </div>
      </div>
      <ContactFormModal open={isModalOpen} isOpen={isModalOpen} close={closeModal} />
    </div>
  );
};
