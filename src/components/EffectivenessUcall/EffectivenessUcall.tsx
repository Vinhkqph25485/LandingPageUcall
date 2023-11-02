


const EffectivenessUcall = () => {
  const advantages = [
    {
      number: '400%',
      title: 'Mức độ marketing hiệu quả, tìm kiếm khách hàng mới',
    },
    {
      number: '60%',
      title: 'Giảm chi phí marketing so với công cụ quảng cáo khác',
    },
    {
      number: '70%',
      title: 'Tiết kiệm chi phí vận hành, telesale hiệu quả',
    },
   
  ]
  return (
    <div className="w-full flex flex-col items-center justify-center pt-5 pb-10">
    <h1 className="my-4 text-center text-4xl font-semibold text-[#1e2967]">
      Hiệu quả sử dụng AI Callbot Auto Call
    </h1>
    <div className="w-[1200px] mt-4">
      <div className="flex flex-row flex-wrap justify-between mt-4">
        {advantages?.map((a) => (
          <div className="w-full md:w-1/3 text-center mb-4">
            <div className="px-2 w-full">
              <h4 className="text-4xl font-semibold text-[#1e2967] mb-4">{a.number}</h4>
              <h5 className="text-2xl font-semibold text-[#1e2967] ">{a.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default EffectivenessUcall;
