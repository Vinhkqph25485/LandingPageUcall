import { CheckCircleFilled } from "@ant-design/icons";
import { List, Typography } from "antd";

const CaseSolution = () => {
  const data = [
    {
      title: "Tìm kiếm data khách hàng có nhu cầu về dịch vụ và sản phẩm",
    },
    {
      title: "Hỗ trợ xây dựng kịch bản telesales phù hợp với đối tượng khách hàng tiềm năng",
    },
    {
      title: "Thực hiện 2000 cuộc gọi đến khách hàng chỉ trong vòng 1 giờ",
    },
    {
      title: "Tích hợp đa kênh, báo cáo thông minh và quản lý thông tin khách hàng dễ dàng",
    },
  ];
  return (
    <div className="w-[1200px] mx-auto">
        <h4 className="text-center text-[#1e2967] text-4xl font-semibold mb-10">Giải pháp của UCALL</h4>
      <div className="flex items-center justify-center mb-3">
        <iframe
          width="100%"
          height="480"
          src="https://www.youtube.com/embed/UCigfFZImig?si=onI8E2TePyQlCD8K"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ maxWidth: "960px" }}
        ></iframe>
      </div>

      <List
        itemLayout="horizontal"
        dataSource={data}
        style={{ maxWidth: "960px", margin: "auto" }}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <CheckCircleFilled
                  style={{
                    fontSize: "28px",
                    color: "#1e2967",
                  }}
                />
              }
              title={
                <Typography.Title level={4}>{item.title}</Typography.Title>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default CaseSolution;
