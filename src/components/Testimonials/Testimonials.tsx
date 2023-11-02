import { Avatar, Card } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Image_1 from "./96C10EC62B150820.jpg";
import Image_2 from "./96C10EC62B15082E.jpg";
import Image_3 from "./96C10EC62B150821.jpg";
import Image_4 from "./96C10EC62B150822.jpg";
import Image_5 from "./96C10EC62B150823.jpg";
import Image_6 from "./96C10EC62B150826.jpg";
const data = [
  {
    name: "Anh Hùng Lâm",
    avatar: Image_1,
    title: "CEO Công ty bất động sản Hùng Lâm Land",
    description:
      "Giải pháp marketing auto call AI Callbot Gọi tự động của UCALL giúp công ty tôi tiết kiệm rất nhiều thời gian và công sức gọi bán hàng qua điện thoại, gọi hết 1000 data khách hàng chỉ mất 100-200 nghìn. Chất lượng dịch vụ và chăm sóc khách hàng tốt, bạn nhân viên hỗ trợ rất nhiệt tình.",
  },
  {
    name: "Anh Nguyễn Như Tuấn Mạnh ",
    avatar: Image_6,
    title: "Founder/CEO Edumet và Strive Edu",
    description:
      "Edumet sử dụng dịch vụ auto call AI Callbot này của UCALL từ những ngày đầu tiên, đến bây giờ việc tìm kiếm và chăm sóc học viên đều được hỗ trợ tự động hết. Nhân viên telesale luôn đạt và vượt doanh số, bớt khâu quay số thủ công. Các bạn học viên luôn được thông báo, nhắc lịch học, đóng học phí kịp thời.",
  },
  {
    name: "Anh Mai Khánh Trung ",
    avatar: Image_2,
    title: "CEO Công ty cổ phần CEN HCM",
    description:
      "1 giải pháp marketing đắc lực cho doanh nghiệp bất động sản. [...] Tôi dùng giải pháp auto call AI Callbot của UCALL để giới thiệu dự án chung cư đất nền thấy tiết kiệm chi phí thuê telesales đáng kể và hiệu quả quản lý tốt hơn rất nhiều. Tôi có thể bóc tách nhu cầu khách hàng và nghe lại ghi âm, chọn khung giờ vàng telesales và gọi cả trăm cuộc gọi cùng một lúc. ",
  },
  {
    name: "Anh Lê Sơn Đỉnh ",
    avatar: Image_5,
    title: "Trưởng phòng kinh doanh Công ty công nghệ Modoro",
    description:
      "Với dịch vụ auto call Callbot, thay vì tôi phải thuê 1 bạn nhân sự làm 8 tiếng và chỉ gọi telesale được cho 2000 người/tháng, giờ đây tôi tiếp cận đúng số lượng khách hàng đó chỉ trong 45 phút đến 1 tiếng chỉ với 300-400 nghìn. Thực sự là 1 công cụ marketing giúp công việc bán hàng và marketing trở nên gọn gàng và đơn giản hơn nhiều!",
  },
  {
    name: "Anh Nguyễn Minh Chiến ",
    avatar: Image_4,
    title: "Kinh doanh bất động sản",
    description:
      "Phần mềm auto call Callbot Gọi tự động này sẽ phân loại nhu cầu cả ngàn data khách hàng mà không tốn công tốn sức thuê hay đào tạo telesales. Vì là máy chạy nên không thể hoàn hảo 100% nhưng nó sẽ giúp ích cho các bạn rất nhiều khi đi tìm khách hàng có nhu cầu mua sản phẩm.",
  },
  {
    name: "Anh Vũ Văn Tùng ",
    avatar: Image_3,
    title: "Kinh doanh Đồng hồ thông minh",
    description:
      "[...] Sự chuẩn xác về độ nhận diện từ ngữ của giải pháp AI Telesale cũng phải đến 90%. Các bạn nhân viên thay vì ngồi bấm số thủ công khá mất thời gian, các bạn ấy nay có thể liên hệ với đúng những vị khác hàng tiềm năng và tạo ra doanh số nhanh chóng. Trong tương lai mình vẫn sẽ tiếp tục mở rộng tệp data khách hàng để chạy chiến dịch với công cụ marketing này.",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-[1200px]">
        <h1 className="my-8 text-center text-4xl text-[#1e2967] font-semibold pb-5">
          Nhận xét và đánh giá của khách hàng
        </h1>
        <div className="flex flex-row flex-wrap w-full">
          {data.map(({ name, title, description, avatar }) => {
            return (
              <div className="w-full md:w-1/2 px-3">
                <Card
                  className=""
                  bordered={false}
                  hoverable={false}
                  headStyle={{ border: "none" }}
                  bodyStyle={{ paddingTop: 0, marginTop: "-30px" }}
                  title={
                    <Avatar
                      size={80}
                      style={{ float: "right" }}
                      icon={<UserOutlined />}
                      src={avatar}
                    />
                  }
                >
                  <h4 className="text-2xl font-semibold text-[#1e2967]">{name}</h4>
                  <h5 className="text-xl font-semibold text-[#1e2967] pt-1 pb-2">{title}</h5>
                  <p style={{ fontSize: "16px" }}>{description}</p>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
