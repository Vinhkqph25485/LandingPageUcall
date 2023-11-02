import { Card } from "antd";
import Asset_6 from './Asset_6.svg'
import Asset_5 from './Asset_5.svg'
import Asset_7 from './Asset_7.svg'
const ProductIntro = () => {
  const features= [
    {
      image: Asset_6,
      title: "Gọi hàng ngàn cuộc gọi tự động chỉ với 1 click chuột",
      description: "Dịch vụ auto call gọi hơn 2000 khách hàng chỉ trong 1 giờ chỉ bằng một click chuột, với chi phí siêu tiết kiệm và cạnh tranh.",
    },
    {
      image: Asset_5,
      title: "Nhận diện giọng nói chính xác, tương tác tự nhiên",
      description: "Giải pháp auto call tích hợp công nghệ AI nhận diện giọng nói, trả lời tự nhiên giống 99% người thật, ngôn ngữ đa vùng miền giúp phân loại khách hàng tiềm năng nhanh chóng.",
    },
    {
      image: Asset_7,
      title: "Xây dựng kịch bản bán hàng và báo cáo thông minh",
      description: "Dịch vụ auto call hỗ trợ xây dựng kịch bản bán hàng thực chiến đa ngành nghề và gửi báo cáo tự động để dễ dàng quản lý thông tin khách hàng và chăm sóc khách hàng.",
    }
  ]
  return <div className="w-[1200px] mx-auto pt-10">
    <h1 className="text-4xl text-white font-semibold pb-5 text-center">Giải Pháp Callbot AI Auto Call - Trợ Lý Ảo Gọi Tự Động</h1>
    <div style={{ height: '120px' }} />
    <div className="flex flex-row flex-wrap items-center justify-between mt-4 mb-4">
          {features.map((feature) => {
            return (
              <div
                className="w-full md:w-1/3 text-left px-4"
                style={{ marginBottom: '100px', margin: '0 auto 140px auto' }}
              >
                <Card
                  style={{
                    height: "400px", width: "100%", maxWidth: "100%",
                    // background: 'rgb(82,150,247)',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(82,150,247,1) 0%, rgba(47,65,181,1) 100%)',
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={feature.image}
                      height={200}
                      style={{ marginTop: '-100px', alignSelf: 'center', height: "200px", width: "100%", maxWidth: "100%" }}
                    />
                    <div style={{ marginTop: '30px',height: "auto", width: "100%", maxWidth: "100%" }}>
                      <h4 className="text-white font-medium" style={{width: "100%", maxWidth: "100%", height: "90px",fontSize: '24px' }}>{feature.title}</h4>
                      <p className="text-white" style={{ fontSize: '16px' }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

  </div>;
};

export default ProductIntro;
