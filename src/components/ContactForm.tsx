// @ts-nocheck
import { options, options1 } from "@/utils/data";
import { Modal, Select, Typography, message } from "antd";
import { Button, Form, Input } from "antd";
import { useMediaQuery } from "react-responsive";
import Lottie from "lottie-react";
import ContactIllustration from "./81732-contact-us.json";
import axios from "axios";
import DoneIllustration from "./85594-done.json";
import useDisclosure from "@/hooks/useDisclosure";

const ContactForm = () => {
  const { open, isOpen, close } = useDisclosure();
  const onFinish = (values: any) => {
    axios
      .post("https://admin.ucall.vn/api/lead", { data: values })
      .then((response) => {
        console.log("thành công", response);
        open();
        setTimeout(() => {
          close();
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="bg-white px-4 py-2 rounded-xl">
      <h4 className="text-3xl font-semibold border-b-2 py-4">Liên hệ tư vấn</h4>
      <Form
        name="basic"
        labelCol={{ span: 80 }}
        wrapperCol={{ span: 160 }}
        style={{ maxWidth: 1600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        className="pt-5"
      >
        <Form.Item
          label="Họ và tên"
          name="name"
          rules={[{ required: true, message: "Vui lòng nhập tên" }]}
          className="mb-4"
        >
          <Input className="w-full" />
        </Form.Item>

        <Form.Item
          label="Địa chỉ email"
          name="email"
          rules={[
            { required: true, message: "Vui lòng nhập địa chỉ email!" },
            {
              type: "email",
              message: "Địa chỉ email không hợp lệ!",
            },
          ]}
          className="mb-4"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Số điện thoại"
          name="phone_number"
          rules={[
            { required: true, message: "Vui lòng nhập số điện thoại!" },
            {
              pattern: /^\d{10,11}$/,
              message: "Số điện thoại không hợp lệ!",
            },
          ]}
          className="mb-4"
        >
          <Input />
        </Form.Item>

        <Form.Item name="industry" label="Ngành nghề" className="mb-4">
          <Select>
            {options.map((option) => (
              <Select.Option key={option.value} value={option.value}>
                {option.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="demands" label="Số cuộc gọi/tháng" className="mb-4">
          <Select>
            {options1.map((option) => (
              <Select.Option key={option.value} value={option.value}>
                {option.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Ghi chú" name="notes" className="mb-4">
          <Input />
        </Form.Item>

        <Form.Item className="w-full">
          <Button
            type="primary"
            className="bg-[#1e2967] text-white w-full"
            htmlType="submit"
          >
            Gửi
          </Button>
        </Form.Item>
      </Form>
      <Modal
        visible={isOpen}
        cancelButtonProps={{ hidden: "true" }}
        okButtonProps={{ hidden: "true" }}
      >
        <Lottie animationData={DoneIllustration} loop autoplay />
        <div className="p-3 text-center">
          <Typography.Title level={3}>
            Chúng tôi sẽ sớm liên hệ với bạn
          </Typography.Title>
        </div>
      </Modal>
    </div>
  );
};

export default ContactForm;

export const ContactFormModal = ({ open, isOpen, close }: any) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isLoading = false;
  const onFinish = (values: any) => {
    axios
      .post("https://admin.ucall.vn/api/lead", { data: values })
      .then((response) => {
        message.success("Chúng tôi sẽ sớm liên hệ với bạn");
      })
      .catch((error) => {
        console.error(error);
      });
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Modal
      title="Liên hệ tư vấn"
      visible={isOpen}
      onOk={() => {}}
      confirmLoading={isLoading}
      onCancel={close}
      okText="Lưu"
      cancelText="Đóng"
      width={!isMobile ? "1000px" : "unset"}
      maskStyle={{ backgroundColor: "rgba(0, 0, 0, 0.11)" }}
      cancelButtonProps={{ hidden: "true" }}
      okButtonProps={{ hidden: "true" }}
      style={{ marginTop: "-50px" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="pt-5">
          <div className="pb-5">
            <h3 className="text-[16px] font-semibold">Thông tin liên hệ</h3>
            <p>Phòng Kinh Doanh: 0249 9999 468</p>
            <p>Email: contact@ucall.asia</p>
          </div>
          <div className="pb-5">
            <h3 className="text-[16px] font-semibold">Địa chỉ</h3>
            <p>Số 221 Trần Quang Khải, Phường Tân Định, Quận 1</p>
            <p>Thành phố Hồ Chí Minh, Việt Nam</p>
          </div>
          {!isMobile && (
            <div>
              <Lottie
                alt="liên hệ"
                animationData={ContactIllustration}
                loop
                autoplay
                style={{ height: "200px", float: "left" }}
              />
            </div>
          )}
        </div>
        <div className="pt-5">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 1600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="pt-5"
          >
            <Form.Item
              label="Họ và tên"
              name="name"
              rules={[{ required: true, message: "Vui lòng nhập tên" }]}
              className="mb-4"
              labelAlign="left"
            >
              <Input className="w-full" />
            </Form.Item>

            <Form.Item
              label="Địa chỉ email"
              name="email"
              rules={[
                { required: true, message: "Vui lòng nhập địa chỉ email!" },
                {
                  type: "email",
                  message: "Địa chỉ email không hợp lệ!",
                },
              ]}
              className="mb-4"
              labelAlign="left"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Số điện thoại"
              name="phone_number"
              rules={[
                { required: true, message: "Vui lòng nhập số điện thoại!" },
                {
                  pattern: /^\d{10,11}$/,
                  message: "Số điện thoại không hợp lệ!",
                },
              ]}
              className="mb-4"
              labelAlign="left"
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="industry"
              label="Ngành nghề"
              labelAlign="left"
              className="mb-4"
            >
              <Select>
                {options.map((option) => (
                  <Select.Option key={option.value} value={option.value}>
                    {option.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="demands"
              label="Số cuộc gọi/tháng"
              labelAlign="left"
              className="mb-4"
            >
              <Select>
                {options1.map((option) => (
                  <Select.Option key={option.value} value={option.value}>
                    {option.label}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              label="Ghi chú"
              name="notes"
              labelAlign="left"
              className="mb-4"
            >
              <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type="primary"
                className="bg-[#1e2967] text-white w-full h-full"
                htmlType="submit"
              >
                Gửi
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export const ContactFormPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const { open, isOpen, close } = useDisclosure();
  const onFinish = (values: any) => {
    axios
      .post("https://admin.ucall.vn/api/lead", { data: values })
      .then((response) => {
        console.log("thành công", response);
        open();
        setTimeout(() => {
          close();
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="w-[1200px] mx-auto bg-white p-5 rounded-lg">
        <div>
          <h1 className="border-b-2 text-2xl pb-5 font-semibold">
            Liên hệ tư vấn
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="pt-5">
            <div className="pb-5">
              <h3 className="text-[16px] font-semibold">Thông tin liên hệ</h3>
              <p>Phòng Kinh Doanh: 0249 9999 468</p>
              <p>Email: contact@ucall.asia</p>
            </div>
            <div className="pb-5">
              <h3 className="text-[16px] font-semibold">Địa chỉ</h3>
              <p>Số 221 Trần Quang Khải, Phường Tân Định, Quận 1</p>
              <p>Thành phố Hồ Chí Minh, Việt Nam</p>
            </div>
            {!isMobile && (
              <div>
                <Lottie
                  alt="liên hệ"
                  animationData={ContactIllustration}
                  loop
                  autoplay
                  style={{ height: "200px", float: "left" }}
                />
              </div>
            )}
          </div>
          <div className="pt-5">
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 1600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              className="pt-5"
            >
              <Form.Item
                label="Họ và tên"
                name="name"
                rules={[{ required: true, message: "Vui lòng nhập tên" }]}
                className="mb-4"
                labelAlign="left"
              >
                <Input className="w-full" />
              </Form.Item>

              <Form.Item
                label="Địa chỉ email"
                name="email"
                rules={[
                  { required: true, message: "Vui lòng nhập địa chỉ email!" },
                  {
                    type: "email",
                    message: "Địa chỉ email không hợp lệ!",
                  },
                ]}
                className="mb-4"
                labelAlign="left"
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Số điện thoại"
                name="phone_number"
                rules={[
                  { required: true, message: "Vui lòng nhập số điện thoại!" },
                  {
                    pattern: /^\d{10,11}$/,
                    message: "Số điện thoại không hợp lệ!",
                  },
                ]}
                className="mb-4"
                labelAlign="left"
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="industry"
                label="Ngành nghề"
                labelAlign="left"
                className="mb-4"
              >
                <Select>
                  {options.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      {option.label}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                name="demands"
                label="Số cuộc gọi/tháng"
                labelAlign="left"
                className="mb-4"
              >
                <Select>
                  {options1.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      {option.label}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                label="Ghi chú"
                name="notes"
                labelAlign="left"
                className="mb-4"
              >
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button
                  type="primary"
                  className="bg-[#1e2967] text-white w-full h-full"
                  htmlType="submit"
                >
                  Gửi
                </Button>
              </Form.Item>
            </Form>
            <Modal
              visible={isOpen}
              cancelButtonProps={{ hidden: "true" }}
              okButtonProps={{ hidden: "true" }}
            >
              <Lottie animationData={DoneIllustration} loop autoplay />
              <div className="p-3 text-center">
                <Typography.Title level={3}>
                  Chúng tôi sẽ sớm liên hệ với bạn
                </Typography.Title>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};
