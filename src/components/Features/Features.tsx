import image1 from "./xay-dung-kich-ban.png";
import image2 from "./cai-dat-chien-dich.png";
import image3 from "./bao-cao-tong-quan.png";
import image4 from "./giao-dien-nhap-khach-hang.png";
import { useState } from "react";
import { ContactFormModal } from "../ContactForm";
const Features = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div className="bg-[#1e2967]">
      <div className="w-[1200px] mx-auto py-10">
        <h1 className="text-4xl text-white font-semibold text-center">
          Tính năng Callbot
        </h1>
        <div className="py-10">
          <h2 className="text-2xl text-white font-semibold text-center pb-10">
            1. Xây dựng kịch bản
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 text-white items-center">
            <div>
              <div className="pb-5">
                <h3 className="font-semibold">
                  1. Xây dựng kịch bản telesale thực chiến thiết kế kịch bản
                  telesale
                </h3>
                <p className="text-[14px]">
                  Phần mềm auto call AI Callbot có giao diện thiết kế kịch bản
                  telesale bán hàng, chăm sóc khách hàng kéo thả thông minh với
                  các block tính năng cho phép người dùng cá nhân hóa xây dựng
                  kịch bản telesale cho chiến dịch bán hàng.
                </p>
              </div>
              <div className="pb-5">
                <h3 className="font-semibold">Kịch bản mẫu</h3>
                <p className="text-[14px]">
                  200+ kịch bản telesale mẫu thực chiến được nghiên cứu và thiết
                  kế tối ưu cho các ngành nghề như: Bất động sản, tài chính, bảo
                  hiểm, giáo dục, spa, thời trang, bán lẻ, vv.
                </p>
              </div>
              <div className="pb-5">
                <h3 className="font-semibold ">Chuyển máy tới nhân viên</h3>
                <p className="text-[14px]">
                  Dịch vụ auto call kết hợp linh hoạt giữa cuộc gọi tự động và
                  chuyển máy tới nhân viên telesale giúp gia tăng trải nghiệm
                  khách hàng, tăng gấp 2 lần cơ hội chốt sale.
                </p>
              </div>
              <button className="px-5 py-2 bg-white rounded text-[#1e2967] font-semibold" onClick={openModal}>
                Trải nghiệm ngay
              </button>
              <ContactFormModal open={isModalOpen} isOpen={isModalOpen} close={closeModal} />
            </div>
            <div className="bg-red-200 rounded-xl">
              <img src={image1} alt="" className="rounded-xl" />
            </div>
          </div>
        </div>

        <div className="py-10">
          <h2 className="text-2xl text-white font-semibold text-center pb-10">
            2. Cài đặt chiến dịch thông minh
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 text-white items-center">
            <div className="bg-red-200 rounded-xl">
              <img src={image2} alt="" className="rounded-xl" />
            </div>

            <div>
              <div className="pb-5">
                <h3 className="font-semibold">Giọng nói</h3>
                <p className="text-[14px]">
                  Lựa chọn giọng nói cho trợ lý ảo giống 99% người thật với đẩy
                  đủ giọng nam nữ 3 vùng miền. Ngoài ra, hỗ trợ ghi âm giọng nói
                  chuyên nghiệp giúp khách hàng trải nghiệm cuộc gọi thực tế
                  nhất.
                </p>
              </div>
              <div className="pb-5">
                <h3 className="font-semibold">Khung thời gian gọi</h3>
                <p className="text-[14px]">
                  Trợ lý ảo auto call gọi vào những khung giờ vàng đã được cài
                  đặt giúp bạn yên tâm chạy chiến dịch đúng thời điểm mà không
                  cần huy động nguồn lực.
                </p>
              </div>
              <div className="pb-5">
                <h3 className="font-semibold ">Cài đặt gọi lại</h3>
                <p className="text-[14px]">
                  Hệ thống tự động gọi lại cho khách hàng máy bận, không nghe
                  máy theo số lần được cài đặt, giúp tiết kiệm thời gian quay số
                  gọi lại.
                </p>
              </div>
              <button className="px-5 py-2 bg-white rounded text-[#1e2967] font-semibold" onClick={openModal}>
                Trải nghiệm ngay
              </button>
            </div>
          </div>
        </div>

        <div className="py-10">
          <h2 className="text-2xl text-white font-semibold text-center pb-10">
            3. Báo cáo và đánh giá chi tiết
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 text-white items-center">
            <div>
              <div className="pb-5">
                <h3 className="font-semibold">Báo cáo tổng quan</h3>
                <p className="text-[14px]">
                  Báo cáo tổng quan của dịch vụ auto call AI Callbot giúp đánh
                  giá tiến độ chiến dịch, chi phí cuộc gọi, trạng thái cuộc gọi
                  trong từng khung giờ, thời lượng cuộc gọi. Từ đó giúp bạn đánh
                  giá tổng quan hiệu quả chiến dịch, để chỉnh sửa kịch bản
                  telesale, và quản lý telesale hiệu quả.
                </p>
              </div>
              <div className="pb-5">
                <h3 className="font-semibold">Báo cáo chi tiết</h3>
                <p className="text-[14px]">
                  Báo cáo chi tiết của phần mềm auto call AI Callbot cho phép
                  xuất báo cáo Excel, nghe lại file ghi âm, chuyển cuộc gọi sang
                  dạng văn bản (speech to text) và phân loại khách hàng tiềm
                  năng theo thông tin cuộc gọi dễ dàng
                </p>
              </div>
              <div className="pb-5">
                <h3 className="font-semibold ">Đánh giá chất lượng cuộc gọi</h3>
                <p className="text-[14px]">
                  Giải pháp auto call AI Callbot sẽ tự động đánh giá chất lượng
                  cuộc gọi bằng AI, giúp quản lý telesale hiệu quả và nội dung
                  cuộc gọi nhanh chóng.
                </p>
              </div>
              <button className="px-5 py-2 bg-white rounded text-[#1e2967] font-semibold "  onClick={openModal}>
                Trải nghiệm ngay
              </button>
            </div>
            <div className="bg-red-200 rounded-xl">
              <img src={image3} alt="" className="rounded-xl" />
            </div>
          </div>
        </div>

        <div className="py-10">
          <h2 className="text-2xl text-white font-semibold text-center pb-10">
            4. Tích hợp dễ dàng, đa kênh
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 text-white items-center ">
            <div className="rounded-xl">
              <img src={image4} alt="" className="rounded-xl" />
            </div>
            <div>
              <div className="pb-5">
                <h3 className="font-semibold">
                  Tích hợp tìm kiếm data khách hàng tiềm năng ULEAD
                </h3>
                <p className="text-[14px]">
                  Công cụ tìm kiếm data khách hàng ULEAD giúp doanh nghiệp lấy
                  số điện thoại từ uid facebook, tìm ra nguồn khách hàng tiềm
                  năng B2B, B2C từ dữ liệu lớn nhanh chóng và dễ dàng.
                </p>
              </div>
              <div className="pb-5">
                <h3 className="font-semibold">
                  Tích hợp tổng đài ảo telesale Call Center
                </h3>
                <p className="text-[14px]">
                  Data khách hàng được tích hợp vào Tổng đài ảo Call Center Quay
                  số tự động, giúp quản lý thông tin khách hàng dễ dàng hơn,
                  nhân viên telesale tập trung bán hàng.
                </p>
              </div>
              <div className="pb-5">
                <h3 className="font-semibold ">
                  Tích hợp SMS, brandname, CRM, API
                </h3>
                <p className="text-[14px]">
                  Data khách hàng được tích hợp vào SMS tin nhắn, SMS brandname,
                  hệ thống CRM và API giúp tăng 30% tỷ lệ chuyển đổi bán hàng.
                </p>
              </div>
              <button className="px-5 py-2 bg-white rounded text-[#1e2967] font-semibold"  onClick={openModal}>
                Trải nghiệm ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
