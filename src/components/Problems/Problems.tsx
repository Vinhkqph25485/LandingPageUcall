import { Card } from "antd";
import Asset_6 from './Asset_6.svg'
import Asset_5 from './Asset_5.svg'
import Asset_4 from './Asset_4.svg'
export const Problems = () => {
  const problems = [
    {
      image: Asset_6,
      number: "90%",
      title: "Chi phí vận hành",
      title1: "tổng đài tốn kém",
      description:
        "Doanh nghiệp hàng tháng tốn chi phí trả cước viễn thông, thuê telesales, thiết bị tổng đài nhưng hoạt động kém hiệu quả.",
    },
    {
      image: Asset_5,
      number: "70%",
      title: "Thuê Telesales và đào ",
      title1: "tạo không hiệu quả",
      description:
        "Tốc độ triển khai chiến dịch telesale chậm, chất lượng nhân viên telesale không đồng đều, tỉ lệ nghỉ việc cao, dễ đánh mất khách hành.",
    },
    {
      image: Asset_4,
      number: "30%",
      title: "Tỷ lệ nhân viên nhập liệu",
      title1: "sai thông tin khách hàng",
      description:
        "Nhân viên telesales nhập sai thông tin khách hàng, quy trình nhập liệu không chuyên nghiệp, khó quản lý và đánh giá kết quả kinh doanh.",
    },
  ];
  return (
    <div className="w-[1200px] mx-auto">
      <h1 className="text-4xl text-center my-8 font-semibold text-[#1e2967]">
        Vấn đề doanh nghiệp
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {problems.map((item: any) => {
          return (
            <>
              <Card
                style={{
                  height: "auto",
                  width: "100%",
                  maxWidth: "100%",
                  borderRadius: "18px",
                  backgroundColor: "#1e2967",
                }}
              >
                <div style={{ height: "280px" }}>
                  <h4
                    style={{
                      fontSize: "64px",
                      color: "white",
                      marginBottom: "8px",
                    }}
                    className="text-center"
                  >
                    {item.number}
                  </h4>
                  <div className="text-center mb-3">
                    <h5 className="text-2xl font-semibold" style={{ color: "white" }}>{item.title}</h5>
                    <h5 className="text-2xl font-semibold" style={{ color: "white" }}>{item.title1}</h5>
                  </div>
                  <p className="text-white text-center mb-4 ms-2">
                    {item.description}
                  </p>
                </div>
                <div className="text-center mt-3">
                  <img
                    src={item.image}
                    style={{ width: "100%", maxWidth: "100%", height: "250px" }}
                  />
                </div>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};
